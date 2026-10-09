/**
 * Course configuration — «برنامه‌سازی پیشرفته با پایتون».
 *
 * Independent self-study resource grounded in the Advanced Programming academic
 * scope (OOP, design, testing, refactoring, patterns, GUI concepts,
 * concurrency, networking, reflection), taught idiomatically in Python.
 * No university/professor/institutional branding (see docs/CONTENT-CONTRACT.md).
 */

import type { CourseConfig } from '../lib/types';

export const courseConfig: CourseConfig = {
  // --- Identity (course-specific) ---
  title: 'برنامه‌سازی پیشرفته با پایتون',
  tagline: 'از تفکر شیءگرا تا طراحی، تست، بازآرایی، هم‌روندی و شبکه — قدم‌به‌قدم با پایتون',
  description:
    'درس‌نامهٔ آزاد و قدم‌به‌قدم برنامه‌سازی پیشرفته با پایتون: از تفکر شیءگرا و طراحی کلاس تا تست، بازآرایی، الگوهای طراحی، هم‌روندی و شبکه. هر مفهوم با مثال اجرایی پایتون، هر مسیر با پیش‌نیاز مشخص.',
  shortDescription: 'درس‌نامهٔ قدم‌به‌قدم برنامه‌سازی پیشرفته با پایتون',
  locale: 'fa',
  direction: 'rtl',

  // --- Brand (per-topic logo) ---
  // The header mark renders `icon` (a programming code-mark for this
  // course), falling back to `monogram`; the favicon renders the code
  // brackets wrapped around `monogram`. `icon` must be an IconName from
  // `src/components/ui/icon-names.ts`. Change these values and both follow.
  logo: {
    monogram: 'پ',
    icon: 'code',
  },

  // --- Course metadata ---
  difficulty: 'intermediate',
  estimatedDuration: 'خودآموز · حدود ۱۲ هفته',
  difficultyLevel: 3, // 1–5 scale
  tags: ['پایتون', 'برنامه‌سازی شیءگرا', 'طراحی نرم‌افزار', 'تست', 'هم‌روندی', 'شبکه'],
  category: 'آموزشی',

  // --- Sections (navigation groups) ---
  sections: [
    {
      id: 'prerequisites',
      title: 'پیش‌نیاز و تفکر برنامه‌نویسی',
      description: 'پل ورود به دوره: تفکر الگوریتمی، توابع، ارجاع‌ها و ساختار پروژه',
      order: 1,
    },
    {
      id: 'oop-basics',
      title: 'مبانی برنامه‌سازی شیءگرا',
      description: 'شیء، کلاس، کپسوله‌سازی و طراحی مسئولیت‌ها',
      order: 2,
    },
    {
      id: 'inheritance',
      title: 'وراثت و چندریختی',
      description: 'وراثت، بازنویسی، ارسال پویا، ترکیب و MRO',
      order: 3,
    },
    {
      id: 'class-design',
      title: 'طراحی پیشرفته کلاس‌ها و مدل شیء پایتون',
      description: 'متدهای کلاس و ایستا، ویژگی‌ها، متدهای جادویی و چرخهٔ عمر شیء',
      order: 4,
    },
    {
      id: 'modules-typing',
      title: 'ماژول، پکیج و برنامه‌نویسی جنریک',
      description: 'واردات، فضاهای نام، اعلان نوع و طراحی نوع‌محور',
      order: 5,
    },
    {
      id: 'errors-testing',
      title: 'مدیریت خطا، اشکال‌زدایی و آزمون',
      description: 'استثناها، زمینه‌بان‌ها، روش اشکال‌زدایی و تست واحد',
      order: 6,
    },
    {
      id: 'data-structures',
      title: 'ساختمان داده‌ها و الگوریتم‌های پایه',
      description: 'کالکشن‌های پایتون، تکرارگرها، جست‌وجو، مرتب‌سازی و پیچیدگی',
      order: 7,
    },
    {
      id: 'files-io',
      title: 'فایل، ورودی/خروجی و سریال‌سازی',
      description: 'متن و باینری، pathlib، JSON و CSV و بار امن دادهٔ خارجی',
      order: 8,
    },
    {
      id: 'refactoring-patterns',
      title: 'بازآرایی، کد تمیز و الگوهای طراحی',
      description: 'بوی کد، ساده‌سازی، انسجام و الگوهای کاربردی با جایگزین پایتونیک',
      order: 9,
    },
    {
      id: 'gui-events',
      title: 'رابط گرافیکی و برنامه‌نویسی رویدادمحور',
      description: 'مدل ذهنی GUI، حلقهٔ رویداد و جدایی منطق از نما',
      order: 10,
    },
    {
      id: 'concurrency-network',
      title: 'هم‌روندی، موازی‌سازی و شبکه',
      description: 'ریسه‌ها، همگام‌سازی، اجراکننده‌ها و سوکت‌های TCP',
      order: 11,
    },
    {
      id: 'reflection-advanced',
      title: 'بازتاب و مباحث تکمیلی',
      description: 'درون‌نگری، تزئین‌کننده‌ها، بستارها و enum',
      order: 12,
    },
    {
      id: 'review-project',
      title: 'مرور، حل مسئله و پروژه',
      description: 'تمرین‌های ترکیبی، ردیابی کد و پروژهٔ پایانی',
      order: 13,
    },
  ],

  // --- Course-specific theming ---
  // Uses the shared `programming` preset; never fork `src/styles/theme.css`.
  themePreset: 'programming',
  theme: {
    name: 'programming',
    // Python-duo palette on the shared preset (wash/label stay preset-owned).
    // Measured WCAG 2.2 ratios (relative-luminance formula):
    // light canvas #FAF7F0 — white-on-primary 4.84, primary-as-text 4.52,
    //   accent-as-text 4.69 (all >= 4.5:1 PASS); dark canvas #14120F —
    //   primary-as-text 3.87, dark-btn-text-on-primary 3.51, accent 3.72
    //   (>= 3:1, strictly better than the stock preset in dark; no single
    //   hex can reach 4.5 for both button directions with fixed on-colors).
    colors: {
      primary: '#3776AB',
      primaryHover: '#285E96',
      accent: '#B45309',
    },
    typography: 'modern',
    motif: 'technical',
  },

  // --- Feature flags ---
  features: {
    search: true,
    commandPalette: true,
    formulas: true,
    glossary: true,
    practice: true,
    progress: true,
    simulations: true,
    toc: true,
    related: true,
    courseMap: true,
  },
};
