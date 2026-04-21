import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-2">Политика конфиденциальности</h1>
        <p className="text-muted-foreground mb-10 text-sm">Последнее обновление: 1 апреля 2026 г.</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Общие положения</h2>
            <p className="text-muted-foreground">
              Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и
              защиты персональных данных пользователей сервиса Flow AI (далее — «Сервис»), предоставляемого
              ООО «Флоу АИ» (далее — «Оператор»). Используя Сервис, вы соглашаетесь с условиями настоящей
              Политики.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Какие данные мы собираем</h2>
            <p className="text-muted-foreground mb-3">Оператор может собирать следующие категории данных:</p>
            <ul className="text-muted-foreground list-disc pl-5 space-y-1">
              <li>Контактные данные: имя, номер телефона, адрес электронной почты;</li>
              <li>Данные об организации: название компании, ИНН, должность;</li>
              <li>Технические данные: IP-адрес, тип браузера, данные cookie;</li>
              <li>Данные об использовании Сервиса: история диалогов с AI-агентом, запросы, настройки.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Цели обработки данных</h2>
            <ul className="text-muted-foreground list-disc pl-5 space-y-1">
              <li>Предоставление услуг Сервиса и исполнение договорных обязательств;</li>
              <li>Техническая поддержка и улучшение качества Сервиса;</li>
              <li>Направление информационных и маркетинговых сообщений (с согласия пользователя);</li>
              <li>Соблюдение требований законодательства Российской Федерации.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Правовые основания обработки</h2>
            <p className="text-muted-foreground">
              Обработка персональных данных осуществляется на основании: согласия субъекта персональных
              данных; исполнения договора, стороной которого является пользователь; выполнения
              обязанностей Оператора, предусмотренных Федеральным законом № 152-ФЗ «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Передача данных третьим лицам</h2>
            <p className="text-muted-foreground">
              Оператор не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных
              законодательством, либо с явного согласия пользователя. Для технической работы Сервиса могут
              привлекаться доверенные партнёры (облачные провайдеры, платёжные системы) на условиях
              соглашения об обработке данных.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Хранение и защита данных</h2>
            <p className="text-muted-foreground">
              Данные хранятся на серверах, расположенных на территории Российской Федерации. Оператор
              применяет технические и организационные меры для защиты данных от несанкционированного доступа,
              изменения, раскрытия или уничтожения: шифрование, разграничение прав доступа, регулярный аудит
              безопасности.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Права пользователя</h2>
            <p className="text-muted-foreground mb-3">Вы вправе:</p>
            <ul className="text-muted-foreground list-disc pl-5 space-y-1">
              <li>получить информацию об обрабатываемых персональных данных;</li>
              <li>потребовать исправления неточных данных;</li>
              <li>потребовать удаления данных при наличии законных оснований;</li>
              <li>отозвать согласие на обработку данных в любой момент.</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Для реализации прав направьте запрос на email:{" "}
              <a href="mailto:privacy@flow-ai.ru" className="underline">
                privacy@flow-ai.ru
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Cookie</h2>
            <p className="text-muted-foreground">
              Сервис использует файлы cookie для корректной работы, аналитики и персонализации. Вы можете
              отключить cookie в настройках браузера, однако это может повлиять на функциональность Сервиса.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Изменения Политики</h2>
            <p className="text-muted-foreground">
              Оператор вправе вносить изменения в Политику. Актуальная версия всегда доступна по адресу
              flow-ai.ru/privacy. Продолжение использования Сервиса после публикации изменений означает
              согласие с новой редакцией.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Контакты</h2>
            <p className="text-muted-foreground">
              ООО «Флоу АИ»<br />
              Email:{" "}
              <a href="mailto:privacy@flow-ai.ru" className="underline">
                privacy@flow-ai.ru
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
