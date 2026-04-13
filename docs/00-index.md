# Landing Vite Netlify

Главная панель сайта-портфолио.

## Быстрые ссылки

- [[project-overview|Обзор проекта]]
- [[01-strategy/positioning|Позиционирование]]
- [[02-content/site-copy|Тексты сайта]]
- [[02-content/sections|Секции лендинга]]
- [[02-content/resume-page|Страница резюме]]
- [[02-content/media-assets|Медиа и изображения]]
- [[02-content/cases/index|Кейсы]]
- [[03-design/design-system|Дизайн-система]]
- [[04-development/component-map|Карта компонентов]]
- [[05-deploy/netlify-checklist|Деплой]]
- [[07-tasks/roadmap|Roadmap]]
- [[tasks|Текущие задачи]]
- [[missing-info|Недостающая информация]]
- [[decisions/0001-obsidian-vault]]

## Рабочий фокус

- Главная цель: собрать убедительный сайт-портфолио для поиска учеников, IT-проектов и демонстрации опыта.
- Приоритет продвижения: репетиторство по математике и информатике.
- Тон: дружелюбный и наставнический.
- Текущий экран в коде: `src/App.tsx` рендерит `DemoHeroGeometric`.
- Первое место для правки смыслов: [[02-content/site-copy]].
- Открытые вопросы: [[missing-info]].

## Команды

```bash
npm run dev
npm run build
npm run preview
```

## Карта проекта

- `src/` - React-компоненты и стили.
- `public/` - статические файлы.
- `index.html` - основная HTML-точка входа.
- `vite.config.ts` - конфигурация Vite.
- `Dockerfile` и `docker-compose.yml` - запуск через Docker.

## Структура Obsidian

- `01-strategy/` - позиционирование, аудитория, оффер.
- `02-content/` - тексты, секции, кейсы портфолио.
- `03-design/` - визуальные правила и референсы.
- `04-development/` - карта компонентов, команды, технические заметки.
- `05-deploy/` - чеклисты публикации.
- `06-research/` - идеи, наблюдения, материалы.
- `07-tasks/` - roadmap и рабочие списки.
- `08-templates/` - шаблоны заметок.
