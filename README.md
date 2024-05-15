<div align="center">
        <h1>
        vite-react-hero-button
        </h1>
</div>

### Features

- You can build button of variant: "default" | "destructive" | "link" | "outline" | "subtle" | "ghost"
- Button can be of size: "default" | "sm" | "xs" | "lg";

### Install

    npm install vite-react-hero-button

### Quickstart

- First add these css classes in root folders' index.css file
- Tailwindcss must be installed to use this package.

```css
.hero_btn {
  @apply active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none;
}

.hero_btn:hover {
  animation: hero_btn_anime 500ms alternate forwards;
}

@keyframes hero_btn_anime {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-5px);
  }
}

/* hero btn variants */

.hero_btn_default {
  @apply bg-[#003280] text-zinc-100 hover:bg-zinc-800;
}

.hero_btn_destructive {
  @apply text-white hover:bg-red-600 dark:hover:bg-red-600;
}

.hero_btn_outline {
  @apply bg-zinc-100 text-zinc-900 hover:bg-zinc-200 outline outline-1 outline-zinc-300;
}

.hero_btn_subtle {
  @apply hover:bg-zinc-200 bg-zinc-100 text-zinc-900;
}

.hero_btn_ghost {
  @apply bg-transparent hover:bg-zinc-100 text-zinc-800 data-[state=open]:bg-transparent data-[state=open]:bg-transparent;
}

.hero_btn_link {
  @apply bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent;
}

/* size */

.hero_btn_default {
  @apply h-10 py-2 px-4;
}

.hero_btn_sm {
  @apply h-9 px-2 rounded-md;
}

.hero_btn_xs {
  @apply h-8 px-1.5 rounded-md;
}

.hero_btn_lg {
  @apply h-11 px-8 rounded-md;
}
```

- 
- 
- Use case

```jsx
import { HeroButton } from "vite-react-hero-button";

function App() {
  return (
    <>
      <HeroButton className="" variant="default" size="lg">
        HeroButton{" "}
      </HeroButton>
    </>
  );
}
```

### User

Thank you for using....
