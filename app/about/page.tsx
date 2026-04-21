import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";

const team = [
  {
    name: "Саад Сарбас",
    role: "Разработчик",
    bio: "Проектирует и строит AI-агентов под ключ — от архитектуры до интеграции с CRM и мессенджерами.",
    gradient: "from-violet-500 to-indigo-600",
    tag: "Tech",
  },
  {
    name: "Михаил Парасотченко",
    role: "Продажи и партнёрства",
    bio: "Помогает бизнесу увидеть возможности автоматизации и выстраивает долгосрочные отношения с клиентами.",
    gradient: "from-emerald-500 to-teal-600",
    tag: "Sales",
  },
];

const values = [
  {
    number: "01",
    title: "Результат, а не процесс",
    description:
      "Мы оцениваем свою работу по росту показателей клиента, а не по количеству интеграций.",
  },
  {
    number: "02",
    title: "Прозрачность",
    description:
      "Честно говорим о возможностях и ограничениях AI. Не обещаем того, что не можем сделать.",
  },
  {
    number: "03",
    title: "Скорость",
    description:
      "Первый рабочий прототип за 5 дней. Запуск в продакшн — за 2 недели.",
  },
  {
    number: "04",
    title: "Долгосрочное партнёрство",
    description:
      "Не исчезаем после внедрения. Итерируем, улучшаем и масштабируем вместе с бизнесом клиента.",
  },
];

const stats = [
  { value: "50+", label: "клиентов" },
  { value: "1М+", label: "диалогов обработано" },
  { value: "2024", label: "год основания" },
  { value: "5 дней", label: "до первого прототипа" },
];

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />

      <section className="mx-auto max-w-4xl px-4 pt-16 pb-4">
        <a
          href="/"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          ← На главную
        </a>
      </section>

      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-8 pb-16 border-b border-border">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          Flow AI — О нас
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight mb-6">
          Команда,<br />
          <span className="text-muted-foreground/40">которая делает</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
          Мы верим: каждый бизнес заслуживает AI-команды такого же уровня,
          как у технологических гигантов.
        </p>
      </section>

      {/* Stats strip */}
      <section className="mx-auto max-w-4xl px-4 py-12 border-b border-border">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="px-6 first:pl-0 last:pr-0 py-2">
              <p className="text-4xl sm:text-5xl font-black tracking-tight">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-16 border-b border-border">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em]">
              Миссия
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-xl sm:text-2xl leading-relaxed font-light">
              Мы создаём AI-агентов, которые работают как лучшие менеджеры по
              продажам — не устают, не забывают, отвечают мгновенно. Наша цель:
              помочь малому и среднему бизнесу в России конкурировать на равных
              с крупными игроками за счёт умной автоматизации.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-4xl px-4 py-16 border-b border-border">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] mb-10">
          Ценности
        </p>
        <div className="divide-y divide-border">
          {values.map((v) => (
            <div key={v.number} className="py-8 grid sm:grid-cols-12 gap-4 items-start">
              <span className="sm:col-span-1 text-muted-foreground/30 text-sm font-mono">
                {v.number}
              </span>
              <h3 className="sm:col-span-4 text-lg font-semibold">{v.title}</h3>
              <p className="sm:col-span-7 text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-4xl px-4 py-16 pb-24">
        <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] mb-10">
          Команда
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-[0.04] group-hover:opacity-[0.08] transition-opacity`} />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-black shadow-lg`}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <span className="text-muted-foreground/60 text-xs font-mono border border-border rounded-full px-3 py-1">
                    {member.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
                  <p className="text-brand-foreground text-sm font-medium mt-0.5">{member.role}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
