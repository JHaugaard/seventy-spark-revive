# My 70th Year - Design System Documentation

A comprehensive design system for a minimal, photography-focused portfolio website honoring the Polaroid photography aesthetic.

## 🎨 Color Palette

### Primary Colors
```css
--color-primary: #2C2C2C    /* Dark gray - Primary text */
--color-secondary: #6B6B6B  /* Medium gray - Captions & dates */
--color-accent: #8B7355     /* Warm brown - Links & focus states */
```

### Feedback Colors
```css
--color-success: #4A7C59   /* Success green */
--color-warning: #C17817   /* Warning orange */
--color-error: #A63A3A     /* Error red */
```

### Neutral Colors
```css
--color-neutral-light: #F5F5F5  /* Light background */
--color-neutral-mid: #E0E0E0    /* Borders & dividers */
--color-neutral-dark: #1A1A1A   /* Lightbox overlay */
--color-white: #FFFFFF          /* Pure white */
```

## 📏 Spacing Scale

Based on an 8px base unit for consistent rhythm:

```css
--space-xs: 0.5rem   /* 8px */
--space-sm: 1rem     /* 16px */
--space-md: 1.5rem   /* 24px */
--space-lg: 2rem     /* 32px */
--space-xl: 3rem     /* 48px */
--space-2xl: 4rem    /* 64px */
```

### Usage Examples
- **Component padding**: `--space-md` (24px)
- **Section spacing**: `--space-xl` (48px)
- **Page margins**: `--space-lg` (32px desktop), `--space-sm` (16px mobile)

## ✍️ Typography

### Font Stack
```css
--font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                "Helvetica Neue", Arial, sans-serif;
```

System fonts provide optimal legibility and performance across platforms.

### Type Scale

| Element | Size | Weight | Line Height | Use Case |
|---------|------|--------|-------------|----------|
| `h1` | 2.5rem (40px) | 300 | 1.2 | Page titles |
| `h2` | 1.75rem (28px) | 400 | 1.3 | Month dividers |
| `h3` | 1.25rem (20px) | 500 | 1.4 | Section headers |
| `p` | 1rem (16px) | 400 | 1.6 | Body text, captions |
| `small` | 0.875rem (14px) | 400 | 1.5 | Dates, metadata |

### Typography Classes

```tsx
// Headings
<h1 className="text-4xl font-light text-foreground">Page Title</h1>
<h2 className="text-3xl font-normal text-foreground">Month Divider</h2>

// Body text
<p className="text-base text-foreground">Photo caption</p>
<small className="text-sm text-muted-foreground">August 13, 2023</small>
```

## 🖼️ Layout

### Container
```css
--max-width: 1400px
```

Center content with consistent max-width:
```tsx
<div className="max-w-container mx-auto px-6">
  {/* Content */}
</div>
```

### Responsive Breakpoints

Following Tailwind's default breakpoints:

| Breakpoint | Min Width | Columns | Gap |
|------------|-----------|---------|-----|
| Mobile | 320px | 1-2 | 16px |
| Tablet | 768px | 2-3 | 16px |
| Desktop | 1024px | 4 | 24px |

### Grid Layout

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
  {/* Photo cards */}
</div>
```

## 📸 Polaroid Photos

### Aspect Ratio
```css
--polaroid-aspect-ratio: 1.22 / 1  /* Width : Height */
```

Polaroid photos are **rectangular** with the authentic white border included in the image file.

### Implementation

```tsx
// Using Tailwind
<div className="aspect-[1.22] overflow-hidden">
  <img src={photo} className="w-full h-full object-cover" />
</div>

// Using utility class
<div className="aspect-polaroid overflow-hidden">
  <img src={photo} className="w-full h-full object-cover" />
</div>
```

**Important**: 
- Use `object-fit: cover` for photo grid thumbnails
- Use `object-fit: contain` in lightbox to show entire photo including border
- Never add CSS borders or padding to simulate frames

## 🎭 Shadows

Three shadow levels for depth hierarchy:

```css
--shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.08)   /* Cards */
--shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.12)  /* Hover states */
--shadow-large: 0 8px 24px rgba(0, 0, 0, 0.16)   /* Modals */
```

### Usage
```tsx
// Subtle shadow on cards
<div className="shadow-subtle">

// Medium shadow on hover
<div className="hover:shadow-medium transition-shadow">

// Large shadow on lightbox
<div className="shadow-large">
```

## 🎬 Animations

### Keyframes

```css
/* Fade in with slide */
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Scale in */
@keyframes scale-in {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

/* Shimmer for skeleton loading */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

### Animation Classes

```tsx
// Fade in photo cards
<div className="animate-fade-in">

// Scale in lightbox
<div className="animate-scale-in">

// Shimmer skeleton loader
<div className="animate-shimmer">
```

### Transition Utilities

```tsx
// Smooth hover transitions
<div className="transition-all duration-300 ease-out hover:scale-[1.03]">

// Color transitions
<a className="transition-colors hover:text-accent">
```

## 🎯 Focus States

Accessibility-first focus indicators using the accent color:

```tsx
<button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
  Button
</button>
```

## 🌙 Dark Mode

The design system includes dark mode variants:

```tsx
// Toggle dark mode by adding 'dark' class to html element
<html className="dark">
```

Dark mode automatically adjusts:
- Text colors (light text on dark background)
- Background colors
- Border colors
- Shadow opacity

## 📦 Component Examples

### Photo Card
```tsx
<article className="group animate-fade-in">
  <div className="aspect-[1.22] overflow-hidden transition-all duration-300 
                  hover:scale-[1.03] hover:shadow-medium cursor-pointer">
    <img src={photo} alt={alt} className="w-full h-full object-cover" 
         loading="lazy" />
  </div>
  <div className="mt-md">
    <p className="text-sm text-muted-foreground">{date}</p>
    <p className="text-base text-foreground mt-1">{caption}</p>
  </div>
</article>
```

### Month Divider
```tsx
<div className="col-span-full mt-xl mb-lg">
  <h2 className="text-3xl font-normal text-foreground">
    {monthYear}
  </h2>
</div>
```

### Lightbox
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center 
                bg-color-neutral-dark/95 animate-fade-in">
  <div className="animate-scale-in">
    <img src={photo} alt={alt} 
         className="max-h-[75vh] object-contain" />
  </div>
</div>
```

## 🔧 Best Practices

### Performance
- Use `loading="lazy"` for images below the fold
- Add `decoding="async"` to image tags
- Leverage GPU-accelerated properties (transform, opacity)

### Accessibility
- Minimum 44×44px touch targets on mobile
- WCAG AA contrast ratios (4.5:1 for normal text)
- Visible focus indicators on all interactive elements
- Semantic HTML (`<article>`, `<nav>`, `<main>`, etc.)

### Maintainability
- Use CSS variables for all colors, spacing, and layout values
- Never hardcode color values in components
- Keep components small and focused
- Use semantic class names

## 🚀 Usage in Components

```tsx
import { cn } from "@/lib/utils";

// Always use semantic color tokens
<div className="text-foreground bg-background">

// Use spacing tokens
<div className="px-md py-lg">

// Use design system shadows
<div className="shadow-subtle hover:shadow-medium">

// Use typography scale
<h2 className="text-3xl font-normal">

// Combine with cn() utility for conditional styles
<div className={cn(
  "transition-all duration-300",
  isActive && "shadow-medium scale-105"
)}>
```

---

## 📚 Related Documentation

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
