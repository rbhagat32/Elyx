# Elyx-UI

Elyx-UI is a lightweight and customizable React UI library built with TypeScript, Tailwind CSS, and Motion (Framer Motion). It provides smooth animations and modern UI components for your React applications.

## 🚀 Installation

First, install the package via npm or yarn:

```sh
npm install elyx
# or
yarn add elyx
```

## 📦 Peer Dependencies

Elyx-UI requires the following peer dependencies in your project:

```sh
npm install react react-dom motion tailwindcss
```

Ensure Tailwind CSS is properly configured in your project.

## 🛠 Setup Tailwind CSS

If you haven’t set up Tailwind CSS, follow these steps:

### 1️⃣ Install Tailwind CSS

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2️⃣ Configure `tailwind.config.js`

Modify `tailwind.config.js` to include Elyx-UI components:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Your components
    "./node_modules/elyx/dist/**/*.js", // Elyx-UI components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3️⃣ Add Tailwind to Your Styles

Include Tailwind’s directives in your `styles.css` or `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ✨ Usage

Import and use components in your React application:

```tsx
import { ButtonUnderline } from "elyx";

export default function App() {
  return (
    <div className="p-10 bg-gray-900 text-white">
      <ButtonUnderline className="text-blue-500">Click Me</ButtonUnderline>
    </div>
  );
}
```

## 📌 Available Components

### 🔹 `ButtonUnderline`

A button with a smooth animated underline effect.

#### Props:

| Prop         | Type         | Default      | Description                    |
| ------------ | ------------ | ------------ | ------------------------------ |
| `children`   | `ReactNode`  | `"Button"`   | Text inside the button         |
| `className`  | `string`     | `""`         | Custom class names for styling |
| `lineColor`  | `string`     | `"bg-white"` | Color of the underline         |
| `lineHeight` | `number`     | `1.5`        | Thickness of the underline     |
| `onClick`    | `() => void` | `() => {}`   | Click event handler            |

## 🛠 Development

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/elyx-ui.git
cd elyx-ui
npm install
```

### Build the package

```sh
npm run build
```

### Publish to NPM

```sh
npm login
npm publish --access public
```

## 📜 License

This project is licensed under the **ISC License**.

## 📮 Feedback

Feel free to open an issue on [GitHub](https://github.com/your-username/elyx-ui) if you have any feedback or suggestions!
