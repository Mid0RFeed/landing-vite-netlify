const education = [
  "ВШЭ, Прикладной анализ данных, бакалавриат, 2018-2022",
  "University of London, Data Science and Business Analytics, бакалавриат, 2019-2022",
  "ГУУ, Управленческая экономика, магистратура, 2022-2025",
  "ГУУ, Менеджмент, аспирантура, 2025-н.в.",
];

const tools = ["Figma", "GitHub", "Jira", "PowerBI", "Tableau", "MySQL", "Visio"];

export function EducationSection() {
  return (
    <section className="bg-white px-4 py-20 text-[#101010] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-3 text-sm font-semibold text-cyan-700">
            Образование и опыт
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Академическая база плюс реальные IT-проекты
          </h2>
          <div className="mt-8 grid gap-3">
            {education.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#e0e8ec] bg-[#f7fbfd] p-4 text-sm leading-6 text-[#2a3135]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-lg border border-[#d7e6ee] bg-[#f6fbff] p-6">
          <h3 className="text-2xl font-semibold">Инструменты</h3>
          <p className="mt-4 text-sm leading-7 text-[#4d5b62]">
            Использую продуктовый, аналитический и разработческий опыт, чтобы
            объяснять сложные темы через практику.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-[#c8dbe4] bg-white px-3 py-2 text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
