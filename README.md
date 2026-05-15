# Portfolio – Trần Đức Anh

Website portfolio cá nhân của Trần Đức Anh – Fullstack Developer (.NET · React Native · Next.js).

---

## Công nghệ sử dụng

| Công nghệ | Version | Vai trò |
|---|---|---|
| **Next.js** | 16.2.6 | Framework React với App Router, SSG |
| **React** | 19.2.4 | UI Library |
| **TypeScript** | 5.x | Type safety toàn bộ codebase |
| **Tailwind CSS** | 4.x | Styling – CSS-first config (không dùng tailwind.config.js) |
| **clsx** | 2.1.x | Conditional class composition |
| **tailwind-merge** | 3.6.x | Merge Tailwind classes an toàn, tránh conflict |
| **lucide-react** | 1.16.x | Icon set |
| **ESLint** | 9.x | Linting – config `eslint.config.mjs` |
| **PostCSS** | – | Pipeline xử lý CSS (dùng `@tailwindcss/postcss`) |

---

## Cấu trúc source

```
src/
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles + Tailwind 4 theme tokens
│   ├── layout.tsx              # Root layout: font, metadata, ThemeProvider
│   └── page.tsx                # Entry page – compose các sections
│
├── components/
│   ├── layout/                 # Component bao quanh toàn trang
│   │   ├── Header.tsx          # Fixed nav bar: logo, menu, ThemeToggle
│   │   └── Footer.tsx          # Footer: contact links, copyright
│   │
│   ├── sections/               # Các section theo thứ tự hiển thị
│   │   ├── Hero.tsx            # Hero: avatar, title, CTA, stats
│   │   ├── About.tsx           # About: personal info, mục tiêu nghề nghiệp
│   │   ├── Skills.tsx          # Skills: grouped by category (Frontend/Backend/DB/AI/Tools)
│   │   ├── Experience.tsx      # Experience: timeline work history
│   │   ├── Projects.tsx        # Projects: featured 3 + other 3 cards
│   │   ├── Education.tsx       # Education: trường học + chứng chỉ
│   │   └── Contact.tsx         # Contact: info card + email CTA
│   │
│   └── ui/                     # Atomic UI components (tái sử dụng)
│       ├── Badge.tsx           # Tag/chip: primary | secondary | outline
│       ├── Button.tsx          # Button: primary | secondary | ghost; size sm/md/lg
│       ├── Card.tsx            # Card container với hover variant
│       ├── SectionTitle.tsx    # Section heading: label + h2 + description
│       └── ThemeToggle.tsx     # Sun/Moon icon button dùng useTheme
│
├── constants/
│   └── portfolio.ts            # Toàn bộ data portfolio (nav, hero, about, skills,
│                               #   experience, projects, education, contact)
│
├── lib/
│   └── utils.ts                # Hàm cn() = clsx + tailwind-merge
│
├── providers/
│   └── ThemeProvider.tsx       # Context: theme state, toggleTheme(), applyTheme()
│                               # Đọc localStorage + prefers-color-scheme khi mount
│
└── types/
    └── index.ts                # TypeScript interfaces: NavItem, SkillCategory,
                                #   ExperienceItem, ProjectItem, EducationItem,
                                #   CertItem, ContactInfo, Theme
```

---

## Cách hoạt động

### Dark Mode
- Tailwind CSS 4 sử dụng `@custom-variant dark (&:where(.dark, .dark *))` trong `globals.css` để bật class-based dark mode.
- `ThemeProvider` mount phía client, đọc `localStorage` (ưu tiên) hoặc `prefers-color-scheme` của OS.
- Toggle thêm/xóa class `dark` trên `<html>` element, lưu vào `localStorage` để persist qua session.
- `suppressHydrationWarning` trên `<html>` tránh hydration mismatch khi server render không biết theme.

### Data Layer
- Toàn bộ nội dung portfolio được định nghĩa trong `src/constants/portfolio.ts` – chỉ cần sửa file này để cập nhật nội dung, không cần đụng vào component.

### Component Architecture
- **Atomic**: `ui/` chứa các building block nhỏ (Badge, Button, Card...) không biết về domain.
- **Section**: `sections/` import từ `constants/` và compose từ `ui/`, chịu trách nhiệm layout.
- **Layout**: `layout/` wrap toàn bộ trang (Header, Footer).

### CSS Rule Order (trong Tailwind classes)
Theo quy ước trong project:
1. Layout (`flex`, `grid`, `absolute`...)
2. Size (`h-`, `w-`, `max-w-`...)
3. Spacing (`p-`, `m-`, `gap-`...)
4. Typography (`text-`, `font-`, `leading-`...)
5. Color (`bg-`, `text-color`, `border-color`)
6. Border (`border`, `rounded-`)
7. Effects (`shadow-`, `opacity-`)
8. Transition (`transition-`, `duration-`, `animate-`)
9. Dark mode variants (`dark:`)
10. Responsive breakpoints (`sm:`, `md:`, `lg:`)
11. State variants (`hover:`, `focus:`, `active:`)

---

## Cài đặt & Chạy

### Yêu cầu
- Node.js >= 18.18.0
- npm >= 9.0.0 **hoặc** yarn >= 1.22.0

### 1. Clone và cài dependencies

```bash
git clone <repo-url>
cd portfolio
```

```bash
# npm
npm install

# yarn
yarn
```

### 2. Chạy development server

```bash
# npm
npm run dev

# yarn
yarn dev
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).

### 3. Build production

```bash
# npm
npm run build
npm run start

# yarn
yarn build
yarn start
```

### 4. Lint

```bash
# npm
npm run lint

# yarn
yarn lint
```

> **Lưu ý**: Không commit cả `package-lock.json` và `yarn.lock` vào cùng một branch.
> Chọn một package manager cho toàn team và dùng nhất quán.

---

## Cập nhật nội dung

Chỉ cần sửa file `src/constants/portfolio.ts`:

- `HERO_DATA` – Tên, title, description, CTA
- `ABOUT_DATA` – Mục tiêu nghề nghiệp, highlights
- `SKILLS` – Danh sách kỹ năng theo category
- `EXPERIENCES` – Kinh nghiệm làm việc
- `PROJECTS` – Dự án tiêu biểu
- `EDUCATION` / `CERTS` – Học vấn, chứng chỉ
- `CONTACT` – Thông tin liên hệ

---

## Features

- **Responsive**: Mobile-first, breakpoint `sm` / `md` / `lg`
- **Dark mode**: Toggle thủ công + theo OS preference
- **Smooth scroll**: Click nav item cuộn mượt đến section
- **Active nav highlight**: IntersectionObserver detect section đang xem
- **Sticky header**: Blur background khi scroll, ẩn border khi ở top
- **Animated dot**: Ping indicator cho job hiện tại
- **SEO**: Metadata đầy đủ (title, description, keywords, OpenGraph)
- **Static export**: Toàn bộ site prerender thành static HTML
- **Zero runtime CSS**: Tailwind CSS 4 purge unused styles tự động
