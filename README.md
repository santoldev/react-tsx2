# React TSX Template

A minimal React template with TypeScript and Tailwind CSS (via CDN).

## Features

- React 18
- TypeScript
- Vite for fast development
- Tailwind CSS via CDN
- Minimal configuration


## Structure

react-tsx-template/
├── public/              # Static assets
├── src/
│   ├── App.tsx          # Main component
│   ├── index.css        # Global styles
│   ├── main.tsx         # Entry point
│   └── vite-env.d.ts    # Vite type declarations
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # Node TypeScript configuration
└── vite.config.ts       # Vite configuration

## Default Libraries & Philosophy

This template uses [Tailwind CSS](https://tailwindcss.com/) for styling, [Lucide React](https://lucide.dev/) for icons, and [React Router](https://reactrouter.com/) for routing to provide a modern, flexible foundation for most React projects. These choices keep your code fast, beautiful, and easy to customize. 

- UI: Tailwind CSS
- Icons: Lucide React
- Routing: React Router DOM

If you prefer another UI or icon system, feel free to swap out these dependencies.

```
"dependencies": {
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-router-dom": "^6.0.0",
  "tailwindcss": "^3.0.0",
  "lucide-react": "^0.258.0",
  "clsx": "^2.0.0",
  "react-hook-form": "^7.0.0"
}
```
You can omit redux/zustand/etc for extra minimalism.

---

## **Summary Table**

| Category         | Library         | Why Good Default?                  |
|------------------|----------------|------------------------------------|
| UI/Styling       | Tailwind CSS   | Fast, flexible, highly popular     |
| UI Components    | DaisyUI (opt)  | Optional beautiful components      |
| Icons            | Lucide React   | Open, modern, easy                 |
| Routing          | React Router   | Standard, battle-tested            |
| Forms            | React Hook Form| Modern, typesafe, minimal          |
| Classnames util  | clsx           | Works great w/ Tailwind            |

---

## **When ambiguous user prompt, use this set as default:**

- Tailwind CSS
- React Router DOM
- Lucide React
- clsx (optional)
- React Hook Form (optional)