const services = [
  {
    title: "Математика и информатика",
    text: "Индивидуальные занятия для учеников 10-18 лет: школьная программа, сложные темы, контрольные, ОГЭ, ЕГЭ и вступительные.",
    meta: "Онлайн и оффлайн по Москве",
  },
  {
    title: "Учебные IT-проекты",
    text: "Сайты и приложения для себя или малого бизнеса: от идеи и структуры до рабочего результата, который можно показать.",
    meta: "JS, Python, C#, Swift",
  },
  {
    title: "IT-проекты и аналитика",
    text: "Помогаю структурировать требования, бэклог, roadmap и коммуникацию между бизнесом, пользователями и разработкой.",
    meta: "Project management, business analysis",
  },
];

const prices = [
  { label: "Пробное онлайн-занятие", value: "1500 ₽ / час" },
  { label: "Пробное оффлайн-занятие", value: "2000 ₽ / час" },
  { label: "Регулярно онлайн", value: "2500 ₽ / час" },
  { label: "Регулярно оффлайн", value: "3000 ₽ / час" },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#030303] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-cyan-200">
            Услуги и форматы
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Занятия, проекты и понятная работа с целью
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
            Работаю дружелюбно и по делу: с учениками - через интерес,
            практику и регулярную обратную связь, с проектами - через
            структуру, требования и прозрачный план.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 min-h-28 text-sm leading-7 text-white/70">
                {service.text}
              </p>
              <div className="mt-5 rounded-md border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 text-sm text-cyan-100">
                {service.meta}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 md:grid-cols-4">
          {prices.map((price) => (
            <div key={price.label}>
              <p className="text-sm text-white/60">{price.label}</p>
              <p className="mt-1 text-xl font-semibold text-white">
                {price.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
