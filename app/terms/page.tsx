import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-20">
        <div className="mb-8">
          <a href="/" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors">
            ← На главную
          </a>
        </div>
        <h1 className="text-4xl font-bold mb-2">Условия использования</h1>
        <p className="text-muted-foreground mb-10 text-sm">Последнее обновление: 1 апреля 2026 г.</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Принятие условий</h2>
            <p className="text-muted-foreground">
              Настоящие Условия использования (далее — «Условия») регулируют отношения между ООО «Флоу АИ»
              (далее — «Компания») и пользователем (далее — «Клиент»), использующим сервис Flow AI. Регистрация
              или использование Сервиса означает полное и безоговорочное принятие Условий.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Описание сервиса</h2>
            <p className="text-muted-foreground">
              Flow AI предоставляет услуги по разработке, настройке и поддержке AI-агентов для автоматизации
              коммуникаций и продаж через мессенджеры (WhatsApp, Telegram). Компания вправе изменять
              функциональность Сервиса, уведомляя Клиента не менее чем за 14 дней.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Регистрация и аккаунт</h2>
            <p className="text-muted-foreground">
              Для использования Сервиса Клиент предоставляет достоверные сведения о себе и своей организации.
              Клиент несёт ответственность за конфиденциальность учётных данных и все действия, совершённые
              через его аккаунт. О несанкционированном доступе необходимо незамедлительно уведомить Компанию.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Тарифы и оплата</h2>
            <ul className="text-muted-foreground list-disc pl-5 space-y-1">
              <li>Стоимость услуг определяется действующим прайс-листом на сайте flow-ai.ru;</li>
              <li>Настройка оплачивается единоразово до начала работ;</li>
              <li>Абонентская плата вносится ежемесячно, не позднее 5-го числа отчётного месяца;</li>
              <li>При просрочке оплаты более 10 дней Компания вправе приостановить доступ к Сервису;</li>
              <li>Возврат единоразовой оплаты за настройку не производится после начала работ.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Обязательства Компании</h2>
            <p className="text-muted-foreground mb-3">Компания обязуется:</p>
            <ul className="text-muted-foreground list-disc pl-5 space-y-1">
              <li>обеспечить доступность Сервиса не менее 99% времени в месяц (SLA);</li>
              <li>реагировать на запросы технической поддержки в течение 24 часов (рабочие дни);</li>
              <li>хранить данные Клиента конфиденциально в соответствии с Политикой конфиденциальности;</li>
              <li>уведомлять Клиента о плановых технических работах за 48 часов.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Обязательства Клиента</h2>
            <p className="text-muted-foreground mb-3">Клиент обязуется:</p>
            <ul className="text-muted-foreground list-disc pl-5 space-y-1">
              <li>использовать Сервис только в законных целях;</li>
              <li>не использовать AI-агентов для рассылки спама, мошенничества или нарушения прав третьих лиц;</li>
              <li>соблюдать правила платформ WhatsApp и Telegram;</li>
              <li>своевременно вносить оплату согласно выбранному тарифу;</li>
              <li>предоставлять необходимые доступы для настройки и интеграции.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Интеллектуальная собственность</h2>
            <p className="text-muted-foreground">
              Все права на программное обеспечение, алгоритмы и методологии Flow AI принадлежат Компании.
              Клиент получает неисключительное право использования настроенного AI-агента в рамках своего
              бизнеса на период действия договора. Клиент сохраняет права на предоставленные им данные
              и контент.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Ограничение ответственности</h2>
            <p className="text-muted-foreground">
              Компания не несёт ответственности за косвенные убытки, упущенную выгоду, потерю данных,
              возникшие вследствие использования или невозможности использования Сервиса. Максимальная
              ответственность Компании ограничена суммой оплаты за последние 3 месяца использования Сервиса.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Расторжение договора</h2>
            <p className="text-muted-foreground">
              Клиент вправе отказаться от Сервиса, направив уведомление за 30 дней. Компания вправе
              расторгнуть договор в одностороннем порядке при нарушении Клиентом настоящих Условий. После
              расторжения данные Клиента хранятся 90 дней, затем удаляются.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Применимое право</h2>
            <p className="text-muted-foreground">
              Настоящие Условия регулируются законодательством Российской Федерации. Все споры разрешаются
              путём переговоров, а при недостижении соглашения — в Арбитражном суде по месту нахождения
              Компании.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Контакты</h2>
            <p className="text-muted-foreground">
              ООО «Флоу АИ»<br />
              Email:{" "}
              <a href="mailto:legal@flow-ai.ru" className="underline">
                legal@flow-ai.ru
              </a>
              <br />
              Telegram:{" "}
              <a href="https://t.me/FlowAi_Manager" className="underline">
                @FlowAi_Manager
              </a>
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
