"use client";

import { useState, useMemo } from "react";
import {
  courses,
  levelLabels,
  areaLabels,
  areaIcons,
  levelIcons,
  type CourseLevel,
  type CourseArea,
} from "@/lib/courses";

const PLAYBOOK_URL =
  "https://www.notion.so/cppem/2c6bbae8074c80d1b404ed00f2074642?v=2c6bbae8074c810cab63000ca9c7bc6b&source=copy_link";

const GREEN = "#006B52";
const GOLD = "#F5C55A";

const levels: CourseLevel[] = ["graduacao", "tecnologo", "pos-graduacao"];
const areas: CourseArea[] = [
  "tecnologia",
  "negocios",
  "humanas",
  "saude",
  "exatas",
  "educacao",
  "juridico",
  "criativo",
  "agronegocio",
  "outros",
];

export default function CourseCatalog() {
  const [activeLevel, setActiveLevel] = useState<CourseLevel | "all">("all");
  const [activeArea, setActiveArea] = useState<CourseArea | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchLevel = activeLevel === "all" || c.level === activeLevel;
      const matchArea = activeArea === "all" || c.area === activeArea;
      const matchSearch =
        search.trim() === "" ||
        c.name.toLowerCase().includes(search.toLowerCase());
      return matchLevel && matchArea && matchSearch;
    });
  }, [activeLevel, activeArea, search]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    for (const c of filtered) {
      const key = `${c.level}__${c.area}`;
      if (!map[key]) map[key] = [];
      map[key].push(c);
    }
    return map;
  }, [filtered]);

  const groupKeys = Object.keys(grouped).sort();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F8F9FA" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-30 shadow-md"
        style={{ background: GREEN }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <span
                className="text-xl font-bold tracking-widest"
                style={{ color: GOLD, letterSpacing: "0.15em" }}
              >
                unicive
              </span>
              <span className="text-xs text-white/80 font-medium">
                Polo Caruaru · PE
              </span>
            </div>
            <div
              className="hidden sm:block w-px h-8 mx-1 opacity-30"
              style={{ background: "white" }}
            />
            <span className="hidden sm:block text-white/90 text-sm font-medium">
              Catálogo de Cursos
            </span>
          </div>

          <a
            href={PLAYBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: GOLD, color: GREEN }}
          >
            <span>📖</span>
            Playbook Comercial
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-10 px-4 text-center text-white"
        style={{
          background: `linear-gradient(135deg, ${GREEN} 0%, #004D3A 100%)`,
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Nossos Cursos Disponíveis
        </h1>
        <p className="text-white/75 text-sm max-w-md mx-auto">
          {courses.length} cursos · 100% EAD · Graduação, Tecnólogo e
          Pós-graduação
        </p>

        {/* Search */}
        <div className="mt-5 max-w-md mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Buscar curso..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full text-gray-800 text-sm outline-none shadow-lg focus:ring-2"
            style={{ focusRingColor: GOLD } as React.CSSProperties}
          />
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[68px] z-20 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-2">
          {/* Level filter */}
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mr-1">
              Nível
            </span>
            <FilterBtn
              active={activeLevel === "all"}
              onClick={() => setActiveLevel("all")}
            >
              Todos
            </FilterBtn>
            {levels.map((l) => (
              <FilterBtn
                key={l}
                active={activeLevel === l}
                onClick={() => setActiveLevel(l)}
              >
                {levelIcons[l]} {levelLabels[l]}
              </FilterBtn>
            ))}
          </div>

          {/* Area filter */}
          <div className="flex gap-2 flex-wrap items-center overflow-x-auto scrollbar-hide">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mr-1 shrink-0">
              Área
            </span>
            <FilterBtn
              active={activeArea === "all"}
              onClick={() => setActiveArea("all")}
            >
              Todas
            </FilterBtn>
            {areas.map((a) => (
              <FilterBtn
                key={a}
                active={activeArea === a}
                onClick={() => setActiveArea(a)}
              >
                {areaIcons[a]} {areaLabels[a]}
              </FilterBtn>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-1 w-full">
        <p className="text-xs text-gray-500">
          {filtered.length} curso{filtered.length !== 1 ? "s" : ""} encontrado
          {filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Course groups */}
      <main className="max-w-7xl mx-auto px-4 pb-12 w-full flex-1">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-3">🔎</p>
            <p className="text-lg font-medium">Nenhum curso encontrado</p>
            <p className="text-sm mt-1">Tente ajustar os filtros ou a busca</p>
          </div>
        ) : (
          <div className="space-y-6 mt-3">
            {groupKeys.map((key) => {
              const [levelKey, areaKey] = key.split("__") as [
                CourseLevel,
                CourseArea
              ];
              const groupCourses = grouped[key];
              return (
                <GroupSection
                  key={key}
                  level={levelKey}
                  area={areaKey}
                  courses={groupCourses}
                />
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className="text-center py-6 text-sm text-white/70"
        style={{ background: GREEN }}
      >
        <p>
          <span style={{ color: GOLD }} className="font-bold">
            unicive
          </span>{" "}
          Polo Caruaru · PE · Cursos 100% EAD
        </p>
        <p className="mt-1 text-xs">
          Dúvidas?{" "}
          <a
            href={PLAYBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Acesse o Playbook Comercial
          </a>
        </p>
      </footer>
    </div>
  );
}

function FilterBtn({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap border"
      style={
        active
          ? {
              background: GREEN,
              color: "white",
              borderColor: GREEN,
            }
          : {
              background: "white",
              color: "#5F6368",
              borderColor: "#E0E0E0",
            }
      }
    >
      {children}
    </button>
  );
}

function GroupSection({
  level,
  area,
  courses: groupCourses,
}: {
  level: CourseLevel;
  area: CourseArea;
  courses: (typeof courses)[number][];
}) {
  const [expanded, setExpanded] = useState(true);
  const priceRange = getPriceRange(level);

  return (
    <section>
      <button
        onClick={() => setExpanded((p) => !p)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all"
        style={{ background: GREEN }}
      >
        <div className="flex items-center gap-2">
          <span className="text-base">{areaIcons[area]}</span>
          <span>{areaLabels[area]}</span>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium ml-1"
            style={{ background: GOLD, color: GREEN }}
          >
            {levelIcons[level]} {levelLabels[level]}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/70 text-xs hidden sm:inline">
            {groupCourses.length} curso{groupCourses.length !== 1 ? "s" : ""}
          </span>
          <span className="text-white/80 text-lg">{expanded ? "▲" : "▼"}</span>
        </div>
      </button>

      {expanded && (
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {groupCourses.map((course) => (
            <div
              key={course.name}
              className="bg-white rounded-xl px-4 py-3 flex flex-col gap-1 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all"
            >
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                {course.name}
              </p>
              <div className="flex items-center justify-between mt-1 flex-wrap gap-1">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: "#EAF4F0",
                    color: GREEN,
                  }}
                >
                  {course.type}
                  {course.duration ? ` · ${course.duration}` : ""}
                </span>
                <span
                  className="text-xs font-bold"
                  style={{ color: GREEN }}
                >
                  {priceRange}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function getPriceRange(level: CourseLevel): string {
  switch (level) {
    case "graduacao":
      return "a partir de R$119/mês";
    case "tecnologo":
      return "a partir de R$99/mês";
    case "pos-graduacao":
      return "a partir de R$59/mês";
  }
}

