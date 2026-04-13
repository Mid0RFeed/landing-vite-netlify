import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

import { RouteLink, useRouter } from "@/router";

const navItems = [
  { label: "Главная", to: "/#hero" },
  { label: "Услуги", to: "/#services" },
  { label: "Кейсы", to: "/#cases" },
  { label: "Резюме", to: "/resume" },
  { label: "Контакты", to: "/#contacts" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { path } = useRouter();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030303]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <RouteLink
            to="/#hero"
            className="flex items-center gap-3"
            onClick={closeMenu}
            ariaLabel="На главную"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/40 bg-white text-sm font-semibold text-black">
              Е
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                Хорошенков Егор
              </span>
              <span className="text-xs text-white/60">
                Математика, информатика, IT
              </span>
            </span>
          </RouteLink>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <RouteLink
                key={item.to}
                to={item.to}
                className={`text-sm transition-colors hover:text-cyan-200 ${
                  path === item.to ? "text-cyan-200" : "text-white/70"
                }`}
              >
                {item.label}
              </RouteLink>
            ))}
            <a
              href="https://t.me/Mango_Ice_Cream"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              Написать в Telegram
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-white/10 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <RouteLink
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-2 py-2 text-sm text-white/80 transition hover:bg-white/[0.08] hover:text-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </RouteLink>
              ))}
              <a
                href="https://t.me/Mango_Ice_Cream"
                target="_blank"
                rel="noreferrer"
                className="mt-1 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black"
                onClick={closeMenu}
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 px-4 py-8 text-sm text-white/60 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© Москва, Хорошенков Егор.</p>
          <p>Открыт к сотрудничеству, ученикам и новым проектам.</p>
        </div>
      </footer>
    </div>
  );
}
