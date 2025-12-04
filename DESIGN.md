# Carvers Connection Design Language

This document outlines the design specifications for the Carvers Connection project to ensure consistency across all products and integrations.

## Color Palette

The color scheme is designed to be modern, high-contrast, and energetic, reflecting the dynamic nature of snowboard carving.

### Primary Colors

| Name | Hex Code | Tailwind Token | Usage |
| :--- | :--- | :--- | :--- |
| **Brand Dark** | `#1A1A2E` | `brand-dark` | Primary background, footer, dark mode elements. |
| **Brand Gray** | `#F5F5F7` | `brand-gray` | Secondary background, light mode sections. |
| **Brand Accent** | `#FF4500` | `brand-accent` | Call-to-action buttons, highlights, "Burnt Orange". |
| **Brand Secondary** | `#00A8E8` | `brand-secondary` | Secondary actions, links, "Electric Blue". |

### Text Colors

| Name | Hex Code | Tailwind Token | Usage |
| :--- | :--- | :--- | :--- |
| **Text Main** | `#2D3436` | `brand-text` | Primary body text. |
| **Text Muted** | `#636E72` | `brand-muted` | Secondary text, captions, metadata. |

## Typography

We use a combination of **Oswald** for headings and **Inter** for body text to create a strong, readable visual hierarchy.

### Font Families

-   **Headings (Display)**: `Oswald`, sans-serif
-   **Body (Sans)**: `Inter`, sans-serif

### Font Weights & Styles

#### Oswald (Headings)
-   **Weights**: 500 (Medium), 700 (Bold)
-   **Style**: Uppercase (`text-transform: uppercase`)

#### Inter (Body)
-   **Weights**: 300 (Light), 400 (Regular), 600 (Semi-Bold)

### Usage Examples

```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-weight: 700; /* or 500 */
}

/* Body Text */
body {
  font-family: 'Inter', sans-serif;
  color: #2D3436;
}
```

## External Resources

-   **Google Fonts**: [Inter & Oswald](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Oswald:wght@500;700&display=swap)
-   **Tailwind Config**: See `tailwind.config.js` in the `new-site` directory.
