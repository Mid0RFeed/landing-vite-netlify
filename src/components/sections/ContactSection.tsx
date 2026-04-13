export function ContactSection() {
  return (
    <section id="contacts" className="bg-[#f6fbff] px-4 py-20 text-[#101010] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold text-cyan-700">
            Как связаться
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Напишите в Telegram
          </h2>
          <p className="mt-5 text-base leading-8 text-[#4d5b62]">
            Расскажите класс, цель, текущий уровень и удобный формат занятий.
            Я предложу понятный план и помогу выбрать комфортный режим.
          </p>
        </div>
        <div className="grid gap-3">
          <a
            href="https://t.me/Mango_Ice_Cream"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#d7e6ee] bg-white p-5 transition hover:border-cyan-500"
          >
            <span className="block text-sm text-[#687780]">Telegram</span>
            <span className="mt-1 block text-xl font-semibold">
              @Mango_Ice_Cream
            </span>
          </a>
          <a
            href="mailto:egor.xoroshenkov@mail.ru"
            className="rounded-lg border border-[#d7e6ee] bg-white p-5 transition hover:border-cyan-500"
          >
            <span className="block text-sm text-[#687780]">Email</span>
            <span className="mt-1 block text-xl font-semibold">
              egor.xoroshenkov@mail.ru
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
