import Image from "next/image";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";

const cases = [
  {
    company: "МедиаГрупп",
    industry: "Медиа и реклама",
    result: "+47% конверсий",
    period: "3 месяца",
    description:
      "Внедрили AI-агента для квалификации входящих лидов из Instagram и Telegram. Агент задаёт уточняющие вопросы, определяет бюджет и передаёт готовые заявки менеджерам.",
    metrics: [
      { label: "Обработано заявок", value: "1 200/мес" },
      { label: "Время ответа", value: "< 30 сек" },
      { label: "Рост конверсии", value: "+47%" },
    ],
    image: "/МедиаГрупп.png",
  },
  {
    company: "СтройКомплект",
    industry: "Строительные материалы",
    result: "×3 скорость обработки",
    period: "2 месяца",
    description:
      "Автоматизировали приём заявок на расчёт стоимости. AI-агент собирает параметры объекта, рассчитывает предварительную смету и записывает клиента на замер.",
    metrics: [
      { label: "Экономия времени менеджеров", value: "120 ч/мес" },
      { label: "Заявок в месяц", value: "850+" },
      { label: "Удовлетворённость клиентов", value: "94%" },
    ],
    image: "/Строительство (СтройКомплект).png",
  },
  {
    company: "ФитнесСеть",
    industry: "Фитнес и велнес",
    result: "-60% нагрузки на администраторов",
    period: "6 недель",
    description:
      "Запустили AI-агента для записи на тренировки, ответов на вопросы о расписании и напоминаний. Интеграция с CRM позволила автоматически обновлять статус клиентов.",
    metrics: [
      { label: "Записей через бота", value: "78%" },
      { label: "Отмен занятий", value: "-35%" },
      { label: "Новых клиентов", value: "+22%/мес" },
    ],
    image: "/Фитнес (ФитнесСеть).png",
  },
  {
    company: "ЮрСервис Онлайн",
    industry: "Юридические услуги",
    result: "+38% записей на консультации",
    period: "4 месяца",
    description:
      "AI-агент проводит первичную консультацию: определяет категорию вопроса, объясняет базовые права клиента и назначает встречу с профильным юристом.",
    metrics: [
      { label: "Первичных обращений", value: "600/мес" },
      { label: "Конверсия в запись", value: "62%" },
      { label: "Рост выручки", value: "+38%" },
    ],
    image: "/Входящий лид.png",
  },
  {
    company: "ЛогистикаПро",
    industry: "Логистика и доставка",
    result: "Поддержка 24/7 без операторов",
    period: "3 месяца",
    description:
      "Полностью автоматизировали отслеживание грузов и ответы на типовые вопросы. AI-агент обрабатывает 90% обращений без участия оператора.",
    metrics: [
      { label: "Обращений в сутки", value: "200+" },
      { label: "Решено без оператора", value: "90%" },
      { label: "Экономия на поддержке", value: "280 000 ₽/год" },
    ],
    image: null,
  },
  {
    company: "АкадемияКурсов",
    industry: "EdTech / Образование",
    result: "+55% регистраций на курсы",
    period: "2 месяца",
    description:
      "Запустили AI-консультанта, который помогает подобрать курс по целям и уровню подготовки, отвечает на вопросы о программе и оформляет оплату.",
    metrics: [
      { label: "Диалогов в месяц", value: "2 000+" },
      { label: "Конверсия в оплату", value: "34%" },
      { label: "Рост регистраций", value: "+55%" },
    ],
    image: null,
  },
];

export default function CasesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-8">
          <a href="/" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors">
            ← На главную
          </a>
        </div>
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Кейсы клиентов</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Реальные результаты компаний, внедривших AI-агентов Flow AI
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {cases.map((c) => (
            <div
              key={c.company}
              className="glass-1 dark:glass-3 flex flex-col gap-6 rounded-2xl overflow-hidden"
            >
              {c.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.company}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-6 p-8 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold">{c.company}</h2>
                    <p className="text-muted-foreground text-sm">{c.industry}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-brand-foreground font-bold">{c.result}</p>
                    <p className="text-muted-foreground text-xs">{c.period}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.description}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="glass-2 rounded-xl p-3 text-center">
                      <p className="text-lg font-bold">{m.value}</p>
                      <p className="text-muted-foreground text-xs leading-tight">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
