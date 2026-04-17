"use client";

import { useState, useMemo } from "react";
import WelcomeModal from "./WelcomeModal";
import FloatingWhatsApp from "./FloatingWhatsApp";
import {
  courses,
  levelLabels,
  areaLabels,
  areaIcons,
  levelIcons,
  type CourseLevel,
  type CourseArea,
  type Course,
} from "@/lib/courses";

const WHATSAPP_URL = "https://links.cppem.com.br/unicv-contato";
const INSTAGRAM_URL = "https://www.instagram.com/unicive.caruaru";
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

  const featuredCourses = useMemo(
    () =>
      courses
        .filter((c) => c.isFeatured)
        .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99)),
    []
  );

  const levelCounts = useMemo(() => {
    const counts: Record<CourseLevel | "all", number> = {
      all: courses.length,
      graduacao: 0,
      tecnologo: 0,
      "pos-graduacao": 0,
    };
    for (const c of courses) counts[c.level]++;
    return counts;
  }, []);

  const areaCounts = useMemo(() => {
    const src =
      activeLevel === "all"
        ? courses
        : courses.filter((c) => c.level === activeLevel);
    const counts: Record<string, number> = { all: src.length };
    for (const c of src) counts[c.area] = (counts[c.area] || 0) + 1;
    return counts;
  }, [activeLevel]);

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

  const visibleAreas = areas.filter((a) => (areaCounts[a] || 0) > 0);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#F8F9FA" }}>
      <WelcomeModal />
      <FloatingWhatsApp />

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-30 shadow-lg" style={{ background: GREEN }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex flex-col leading-tight shrink-0">
              <span
                className="text-xl font-bold"
                style={{ color: GOLD, letterSpacing: "0.15em" }}
              >
                unicive
              </span>
              <span className="text-xs text-white/70 font-medium">
                Polo Caruaru · PE
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 opacity-25 bg-white mx-1" />
            <span className="hidden sm:block text-white/80 text-sm truncate">
              Catálogo de Cursos
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/90 border border-white/25 hover:bg-white/10 transition-all"
            >
              <InstagramIcon />
              <span className="hidden sm:inline">@unicive.caruaru</span>
            </a>
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105 hover:shadow-lg shadow-sm"
              style={{ background: GOLD, color: GREEN }}
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Falar conosco</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── CPPEM BANNER ── */}
      <div style={{ background: "#003D2B" }} className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-white/80 leading-snug">
            <span className="font-bold" style={{ color: GOLD }}>
              Estuda para concursos de carreiras policiais?
            </span>{" "}
            Fale com o Cppem e garanta condição especial em turmas, mentorias,
            cursos e materiais de estudo.
          </p>
          <a
            href="https://links.cppem.com.br/cppem-contato"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all hover:scale-105 whitespace-nowrap"
            style={{ background: GOLD, color: "#003D2B" }}
          >
            Falar com o Cppem →
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section
        className="py-10 px-4 text-center text-white"
        style={{
          background: `linear-gradient(150deg, ${GREEN} 0%, #004D3A 100%)`,
        }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Encontre seu Curso Ideal
        </h1>
        <p className="text-white/70 text-sm max-w-md mx-auto mb-4">
          {courses.length} cursos · 100% EAD · Graduação, Tecnólogo e
          Pós-graduação
        </p>

        {/* MEC + CREA Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <a
            href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhes-ies/d96957f455f6405d14c6542552b0f6eb/MzY0OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{
              background: "rgba(245,197,90,0.15)",
              border: "1px solid rgba(245,197,90,0.35)",
            }}
          >
            <span className="text-sm">⭐⭐⭐⭐⭐</span>
            <span className="text-xs font-semibold text-white/90">
              Reconhecida pelo MEC · Nota Máxima
            </span>
          </a>
          <a
            href="https://sites.google.com/unicv.edu.br/ces/p%C3%A1gina-inicial?authuser=2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{
              background: "rgba(245,197,90,0.15)",
              border: "1px solid rgba(245,197,90,0.35)",
            }}
          >
            <span className="text-sm">🏛️</span>
            <span className="text-xs font-semibold text-white/90">
              Reconhecida pelo CES · MEC
            </span>
          </a>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Buscar curso..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full text-gray-800 text-sm outline-none shadow-xl focus:ring-2 focus:ring-white/50"
          />
        </div>
      </section>

      {/* ── FEATURED TOP 5 ── */}
      <section className="pt-6 pb-2 max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🔥</span>
          <h2 className="font-bold text-gray-800 text-base sm:text-lg">
            Top 5 Tecnólogos Mais Vendidos
          </h2>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-semibold ml-1"
            style={{ background: "#FFF3CD", color: "#92600A" }}
          >
            Mais Populares
          </span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
          {featuredCourses.map((c, i) => (
            <FeaturedCard key={c.name} course={c} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="max-w-7xl mx-auto w-full px-4 py-4">
        {/* Level tabs */}
        <div className="mb-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2.5">
            Nível do Curso
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <LevelTab
              active={activeLevel === "all"}
              onClick={() => {
                setActiveLevel("all");
                setActiveArea("all");
              }}
              icon="📚"
              label="Todos"
              count={levelCounts.all}
            />
            {levels.map((l) => (
              <LevelTab
                key={l}
                active={activeLevel === l}
                onClick={() => {
                  setActiveLevel(l);
                  setActiveArea("all");
                }}
                icon={levelIcons[l]}
                label={levelLabels[l]}
                count={levelCounts[l]}
              />
            ))}
          </div>
        </div>

        {/* Area grid */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2.5">
            Área de Conhecimento
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-2">
            <AreaCard
              active={activeArea === "all"}
              onClick={() => setActiveArea("all")}
              icon="📖"
              label="Todas as Áreas"
              count={areaCounts.all || 0}
            />
            {visibleAreas.map((a) => (
              <AreaCard
                key={a}
                active={activeArea === a}
                onClick={() => setActiveArea(a)}
                icon={areaIcons[a]}
                label={areaLabels[a]}
                count={areaCounts[a] || 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── RESULTS ── */}
      <div className="max-w-7xl mx-auto px-4 pb-1 w-full">
        <p className="text-xs text-gray-500">
          {filtered.length} curso{filtered.length !== 1 ? "s" : ""} encontrado
          {filtered.length !== 1 ? "s" : ""}
          {search.trim() && (
            <span className="font-medium"> para &quot;{search}&quot;</span>
          )}
        </p>
      </div>

      {/* ── COURSE GROUPS ── */}
      <main className="max-w-7xl mx-auto px-4 pb-16 w-full flex-1">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-3">🔎</p>
            <p className="text-lg font-medium">Nenhum curso encontrado</p>
            <p className="text-sm mt-1">
              Tente ajustar os filtros ou a busca
            </p>
          </div>
        ) : (
          <div className="space-y-5 mt-3">
            {groupKeys.map((key) => {
              const [levelKey, areaKey] = key.split("__") as [
                CourseLevel,
                CourseArea,
              ];
              return (
                <GroupSection
                  key={key}
                  level={levelKey}
                  area={areaKey}
                  courses={grouped[key]}
                />
              );
            })}
          </div>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-4 text-center text-white"
        style={{ background: GREEN }}
      >
        <p className="font-bold text-xl" style={{ color: GOLD, letterSpacing: "0.12em" }}>
          unicive
        </p>
        <p className="text-white/70 text-sm mt-1">
          Polo Caruaru · PE · Cursos 100% EAD
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <a
            href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhes-ies/d96957f455f6405d14c6542552b0f6eb/MzY0OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-xs transition-colors"
          >
            ⭐⭐⭐⭐⭐ Nota Máxima MEC
          </a>
          <span className="text-white/30 text-xs">·</span>
          <a
            href="https://sites.google.com/unicv.edu.br/ces/p%C3%A1gina-inicial?authuser=2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-xs transition-colors"
          >
            🏛️ Reconhecida pelo CES · MEC
          </a>
        </div>
        <div className="flex justify-center gap-5 mt-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors"
          >
            <InstagramIcon />
            @unicive.caruaru
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Falar conosco
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ── Sub-components ── */

function FeaturedCard({ course, rank }: { course: Course; rank: number }) {
  const medals = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 w-52 rounded-2xl p-4 flex flex-col gap-2 shadow-lg border-2 transition-all hover:scale-[1.03] hover:shadow-2xl"
      style={{
        background: `linear-gradient(150deg, ${GREEN} 0%, #004D3A 100%)`,
        borderColor: GOLD,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ background: GOLD, color: GREEN }}
        >
          {medals[rank - 1]} #{rank} mais vendido
        </span>
      </div>
      <p className="text-white font-bold text-sm leading-snug mt-1">
        {course.name}
      </p>
      {course.featuredNote && (
        <p className="text-xs font-medium" style={{ color: GOLD }}>
          ✦ {course.featuredNote}
        </p>
      )}
      <div className="mt-auto pt-3 border-t border-white/20">
        <p className="text-white/60 text-xs">Tecnólogo · a partir de</p>
        <p className="font-bold text-base" style={{ color: GOLD }}>
          R$99/mês
        </p>
      </div>
      <div
        className="flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold mt-1"
        style={{ background: "#25D366", color: "white" }}
      >
        <WhatsAppIcon className="w-3.5 h-3.5" />
        Saiba mais
      </div>
    </a>
  );
}

function LevelTab({
  active,
  onClick,
  icon,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl border-2 transition-all hover:shadow-md text-left group"
      style={
        active
          ? { background: GREEN, borderColor: GREEN, color: "white" }
          : { background: "white", borderColor: "#E5E7EB", color: "#374151" }
      }
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-base shrink-0">{icon}</span>
        <span className="text-sm font-semibold truncate">{label}</span>
      </div>
      <span
        className="text-xs font-medium px-1.5 py-0.5 rounded-full shrink-0"
        style={
          active
            ? { background: "rgba(255,255,255,0.2)", color: "white" }
            : { background: "#F3F4F6", color: "#6B7280" }
        }
      >
        {count}
      </span>
    </button>
  );
}

function AreaCard({
  active,
  onClick,
  icon,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all hover:shadow-md text-center"
      style={
        active
          ? { background: GREEN, borderColor: GREEN }
          : { background: "white", borderColor: "#E5E7EB" }
      }
    >
      <span className="text-2xl">{icon}</span>
      <span
        className="text-xs font-semibold leading-tight"
        style={{ color: active ? "white" : "#374151" }}
      >
        {label}
      </span>
      <span
        className="text-xs font-medium px-1.5 py-0.5 rounded-full mt-0.5"
        style={
          active
            ? { background: "rgba(255,255,255,0.2)", color: "white" }
            : { background: "#F3F4F6", color: "#6B7280" }
        }
      >
        {count}
      </span>
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
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base">{areaIcons[area]}</span>
          <span>{areaLabels[area]}</span>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
            style={{ background: GOLD, color: GREEN }}
          >
            {levelIcons[level]} {levelLabels[level]}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-white/60 text-xs hidden sm:inline">
            {groupCourses.length} curso{groupCourses.length !== 1 ? "s" : ""}
          </span>
          <span className="text-white/70">{expanded ? "▲" : "▼"}</span>
        </div>
      </button>

      {expanded && (
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {groupCourses.map((course) => (
            <div
              key={course.name}
              className="bg-white rounded-xl px-4 py-3 flex flex-col gap-1.5 shadow-sm border transition-all hover:shadow-md"
              style={{
                borderColor: course.isFeatured ? GOLD : "#F3F4F6",
                borderWidth: course.isFeatured ? 2 : 1,
              }}
            >
              {course.isFeatured && (
                <span
                  className="text-xs font-bold w-fit px-2 py-0.5 rounded-full"
                  style={{ background: "#FFF3CD", color: "#92600A" }}
                >
                  🔥 Mais Vendido
                </span>
              )}
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                {course.name}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-1 mt-0.5">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: "#EAF4F0", color: GREEN }}
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

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
