# ⚛️ React UI Components

A collection of **reusable, accessible React UI components** styled with Tailwind CSS.

## 📦 Components

| Component | Description | File |
|-----------|-------------|------|
| **Button** | Primary/secondary button with hover transitions | `Button.jsx` |
| **Card** | Content card with title and body | `Card.jsx` |

## 🚀 Usage

```jsx
import { Button } from './Button';
import { Card } from './Card';

function App() {
  return (
    <div>
      <Card title="Welcome" content="This is a reusable card component." />
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```

## 🎨 Design Principles

- **Accessible** — proper ARIA labels and keyboard navigation
- **Composable** — each component is self-contained
- **Responsive** — works on mobile and desktop
- **Themeable** — easy to customize via Tailwind config

## 📋 Roadmap

- [x] Button
- [x] Card
- [ ] Modal
- [ ] Dropdown
- [ ] Toast / Notification
- [ ] Tabs

---

⭐ Star this repo if you find it useful!
