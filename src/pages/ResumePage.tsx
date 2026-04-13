const education = [
  "2018-2022 - ВШЭ, бакалавриат, Прикладной анализ данных",
  "2019-2022 - University of London, бакалавриат, Data Science and Business Analytics",
  "2022-2025 - ГУУ, магистратура, Управленческая экономика",
  "2025-н.в. - ГУУ, аспирантура, Менеджмент",
];

const experience = [
  "2025-н.в. - ООО «Тебойл Рус», проджект менеджер",
  "2024-2025 - ПАО «Корммаш», директор по производственному планированию",
  "2022-2024 - ПАО «Сегежа Групп», продуктовый и бизнес-аналитик",
  "2021-2022 - ПАО «Сегежа Групп», стажер, отдел закупок",
  "2021 - ООО «Энвижн Групп», программист, мобильный разработчик",
  "2019-2020 - Shell, программист",
];

const projects = [
  "Shell, 2020 - KPI-трекер для Android, 3 месяца, команда 3 человека.",
  "МТС, 2021 - приложение для управления умной техникой через Wi-Fi и Bluetooth.",
  "Сегежа Групп, 2022 - сайт домостроения, SEO, аналитика продаж и бизнес-анализ.",
  "Teboil, 2025 - мобильные оплаты приложения Teboil и QR-чаевые.",
  "Собственный проект, 2023 - сбор и анализ данных с авто в реальном времени.",
  "Собственный проект, 2022 - аналитик NFT-портфеля, рост тестовых портфелей на 20-100%.",
];

const tools = ["JS", "C#", "Python", "Swift", "Figma", "GitHub", "Jira", "PowerBI", "Tableau", "MySQL", "Visio"];

function ResumeList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <p key={item} className="rounded-md bg-white/[0.04] p-4 text-sm leading-7 text-white/70">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export function ResumePage() {
  return (
    <div className="bg-[#030303] px-4 py-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold text-cyan-200">Резюме</p>
          <h1 className="text-4xl font-semibold md:text-6xl">
            Хорошенков Егор
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            IT-менеджер, продуктовый и бизнес-аналитик, разработчик и
            репетитор по математике и информатике. Соединяю разработческий,
            аналитический и управленческий опыт, чтобы делать продукты
            понятнее и обучение практичнее.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://t.me/Mango_Ice_Cream"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Написать в Telegram
            </a>
            <a
              href="mailto:egor.xoroshenkov@mail.ru"
              className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200"
            >
              Написать на email
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ResumeList title="Образование" items={education} />
          <ResumeList title="Опыт работы" items={experience} />
          <ResumeList title="Проекты" items={projects} />
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-semibold">Навыки и инструменты</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 text-sm text-cyan-100"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
