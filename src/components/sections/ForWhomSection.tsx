const items = [
  "Нужно подтянуть школьную программу по математике или информатике.",
  "Впереди ОГЭ, ЕГЭ, вступительные или важные контрольные.",
  "Ребенку интересны сайты, приложения и практическое программирование.",
  "Хочется понятного плана, спокойного темпа и регулярной обратной связи.",
];

export function ForWhomSection() {
  return (
    <section className="bg-[#f6fbff] px-4 py-20 text-[#101010] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold text-cyan-700">
            Для кого
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Подойдет, если нужна не зубрежка, а понятный маршрут
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#d7e6ee] bg-white p-5 text-base leading-7 text-[#2a3135]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
