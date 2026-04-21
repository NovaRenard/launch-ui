import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";

const posts = [
  {
    slug: "ai-agents-sales-automation",
    title: "Как AI-агенты автоматизируют продажи: реальные кейсы",
    date: "15 апреля 2026",
    category: "Кейсы",
    excerpt:
      "Разбираем, как компании из разных отраслей внедрили AI-агентов и увеличили конверсию на 30–60% за первые три месяца.",
  },
  {
    slug: "whatsapp-telegram-integration",
    title: "WhatsApp vs Telegram для бизнеса: что выбрать в 2026 году",
    date: "8 апреля 2026",
    category: "Руководства",
    excerpt:
      "Сравниваем возможности двух мессенджеров для B2B-коммуникаций, автоматизации и интеграции с CRM.",
  },
  {
    slug: "crm-ai-integration",
    title: "Интеграция AI с CRM: пошаговое руководство",
    date: "1 апреля 2026",
    category: "Технологии",
    excerpt:
      "Как настроить передачу данных между AI-агентом и вашей CRM-системой без потерь контекста и дублирования.",
  },
  {
    slug: "roi-ai-chatbot",
    title: "ROI от AI-чат-бота: считаем окупаемость честно",
    date: "24 марта 2026",
    category: "Аналитика",
    excerpt:
      "Формулы, метрики и реальные цифры от наших клиентов — сколько времени занимает окупаемость и что влияет на результат.",
  },
  {
    slug: "prompt-engineering-sales",
    title: "Prompt-инжиниринг для отдела продаж",
    date: "17 марта 2026",
    category: "Технологии",
    excerpt:
      "Как правильно составлять инструкции для AI-агента, чтобы он вёл диалог как лучший менеджер по продажам.",
  },
  {
    slug: "customer-support-automation",
    title: "Автоматизация поддержки: от FAQ до сложных запросов",
    date: "10 марта 2026",
    category: "Руководства",
    excerpt:
      "Пошаговый план: как обучить AI-агента отвечать на 80% входящих обращений без участия оператора.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="mb-8">
          <a href="/" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors">
            ← На главную
          </a>
        </div>
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Блог Flow AI</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Практические статьи об автоматизации продаж и внедрении AI
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="glass-1 dark:glass-3 flex flex-col gap-4 rounded-2xl p-6 h-full transition-shadow group-hover:shadow-md">
                <span className="text-brand-foreground text-xs font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="text-lg font-semibold leading-snug group-hover:opacity-80 transition-opacity">{post.title}</h2>
                <p className="text-muted-foreground flex-1 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs">{post.date}</span>
                  <span className="text-muted-foreground text-xs group-hover:text-foreground transition-colors">Читать →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
