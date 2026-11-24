# Experiment 2: Web Page with All Types of Cascading Style Sheets

## 1. Aim

To create a web page that uses all types of CSS (inline, internal and external) along with the main selectors, properties, layouts and effects.

## 2. Software Requirements

| Item                 | Details                                  |
| -------------------- | ---------------------------------------- |
| Editor               | Visual Studio Code                       |
| Browser              | Google Chrome / Microsoft Edge / Firefox |
| Languages            | HTML5 and CSS3                           |
| Extension (optional) | Live Server                              |

## 3. Theory

**CSS (Cascading Style Sheets)** is used to control the look and layout of HTML pages, including colours, fonts, spacing, positions and animations. It separates the content (HTML) from the design (CSS).

### Syntax

```css
selector {
    property: value;
}
```

### Types of CSS

| Type     | Where it is written                             | Example                                    | Use                                  |
| -------- | ----------------------------------------------- | ------------------------------------------ | ------------------------------------ |
| Inline   | In the `style` attribute of a tag               | `<p style="color:red;">`                   | Styling a single element             |
| Internal | In a `<style>` tag inside `<head>`              | `<style> p { color: red; } </style>`       | Styling a single page                |
| External | In a separate `.css` file, linked with `<link>` | `<link rel="stylesheet" href="style.css">` | Styling multiple pages with one file |
| Imported | `@import` inside a CSS file or `<style>`        | `@import url("extra.css");`                | Loading one CSS file from another    |

### Priority (Cascade Order)

Inline CSS > ID selector > Class selector > Element selector. If the specificity is equal, the rule written last wins. `!important` can override normal declarations.

## 4. Concepts Covered in the Page

### 4.1 Selectors

| Selector         | Example                                                                | Meaning                                           |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| Universal        | `*`                                                                    | Selects all elements                              |
| Element          | `p`                                                                    | Selects all paragraph tags                        |
| Group            | `h1, h2, h3`                                                           | Applies the same style to multiple elements       |
| Class            | `.highlight`                                                           | Selects elements with `class="highlight"`         |
| ID               | `#unique-box`                                                          | Selects the element with `id="unique-box"`        |
| Descendant       | `header h1`                                                            | Selects h1 elements inside header                 |
| Child            | `.parent > p`                                                          | Selects only direct child paragraphs              |
| Adjacent sibling | `h3 + p`                                                               | Selects the paragraph immediately after h3        |
| General sibling  | `.marker ~ p`                                                          | Selects all paragraphs after `.marker`            |
| Attribute        | `input[type="text"]`, `a[href$=".pdf"]`                                | Selects elements based on attributes              |
| Pseudo-class     | `a:hover`, `li:first-child`, `tr:nth-child(even)`, `input:focus`       | Selects elements based on their state or position |
| Pseudo-element   | `::first-letter`, `::first-line`, `::before`, `::after`, `::selection` | Styles a specific part of an element              |

### 4.2 Properties Used

| Group      | Properties                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------- |
| Colours    | Name, HEX, `rgb()`, `rgba()`, `hsl()`, `linear-gradient()`, `radial-gradient()`                                   |
| Text       | `text-align`, `text-transform`, `text-decoration`, `letter-spacing`, `word-spacing`, `text-shadow`, `text-indent` |
| Font       | `font-family`, `font-size`, `font-style`, `font-weight`, `font-variant`                                           |
| Box Model  | `width`, `height`, `padding`, `margin`, `border`, `border-radius`, `box-sizing`, `box-shadow`                     |
| Display    | `display`, `visibility`, `opacity`, `overflow`, `cursor`                                                          |
| Position   | `static`, `relative`, `absolute`, `fixed`, `sticky`, `top`, `left`, `right`, `bottom`, `z-index`                  |
| Float      | `float`, `clear`                                                                                                  |
| Flexbox    | `display: flex`, `justify-content`, `align-items`, `flex-wrap`, `gap`, `flex`                                     |
| Grid       | `display: grid`, `grid-template-columns`, `gap`, `grid-column`                                                    |
| Effects    | `transform`, `transition`, `@keyframes`, `animation`                                                              |
| Responsive | `@media (max-width: 700px)`, `@media print`                                                                       |
| Variables  | `:root { --primary: ... }` and `var(--primary)`                                                                   |

### 4.3 The Box Model

Every HTML element is considered a box consisting of four layers:

```text
+--------------------------------+
|            MARGIN              |
|   +------------------------+   |
|   |        BORDER          |   |
|   |   +----------------+   |   |
|   |   |    PADDING     |   |   |
|   |   |   +--------+   |   |   |
|   |   |   |CONTENT |   |   |   |
|   |   |   +--------+   |   |   |
|   |   +----------------+   |   |
|   +------------------------+   |
+--------------------------------+
```

## 5. Procedure

1. Create a folder named `experiment2` in VS Code.
2. Create `index.html` and add the HTML5 structure with a header, navigation bar, main sections and footer.
3. Create `style.css` in the same folder.
4. In `index.html`, link the external CSS using `<link rel="stylesheet" href="style.css">`.
5. Add internal CSS inside a `<style>` tag in the `<head>` section.
6. Add inline CSS using the `style` attribute on an HTML element.
7. Write CSS rules for selectors, colours, text, box model, display, position, float, flexbox and grid in `style.css`.
8. Add transformations, transitions, animations and media queries.
9. Save both files using `Ctrl + S`.
10. Open `index.html` with Live Server or double-click it to open it in a browser.
11. Hover over elements, click them and resize the browser to test hover effects, focus styles, animations and responsiveness.

## 6. Structure of the Code

```text
experiment2/
├── index.html    # Inline CSS, internal CSS and page content
└── style.css     # External CSS
```

### Key Code Snippets

**Inline CSS**

```html
<p style="color: white; background-color: #c0392b; padding: 10px;">
    Inline CSS - Designed by Saanvi Singh
</p>
```

**Internal CSS**

```html
<style>
    .internal-demo {
        background-color: #e8f8f5;
        color: #117a65;
        padding: 12px;
    }
</style>
```

**External CSS**

```html
<link rel="stylesheet" href="style.css">
```

**Flexbox**

```css
.flex-container {
    display: flex;
    justify-content: space-around;
    gap: 10px;
}
```

**Grid**

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
```

**Animation**

```css
@keyframes slide {
    0%   { left: 0; }
    50%  { left: 200px; }
    100% { left: 0; }
}

.anim-box {
    position: absolute;
    animation: slide 4s infinite;
}
```

**Media Query**

```css
@media (max-width: 700px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
```

## 7. Output

Take a screenshot of the web page in the browser and paste it here:

```markdown
![Output of Experiment 2](screenshot.png)
```

The page shows:

1. A gradient header, a dark navigation bar and sections in white cards with shadows.
2. Three paragraphs styled using inline, internal and external CSS.
3. Examples of different selector types, including attribute and pseudo selectors.
4. Text in different colours, fonts, alignments, decorations and shadows.
5. Boxes with different border styles, padding, margin and gradient backgrounds.
6. Layout demonstrations using display, position, float, flexbox and a three-column grid.
7. Boxes that rotate, scale, skew and move on hover, along with sliding animations and pulsing text.
8. A striped table and lists with different markers.
9. A fixed label at the bottom-right corner of the screen.

## 8. Observations

- Inline CSS generally overrides internal or external CSS when applied to the same property because it has higher specificity.
- A change in `style.css` changes the appearance of the page, allowing one file to control the design of multiple pages.
- `:hover`, `:focus` and `:nth-child` change the appearance of elements according to user actions and positions without requiring JavaScript.
- `position: fixed` keeps an element in the same place on the screen while scrolling, whereas `sticky` keeps it in position only within its containing section.
- Flexbox arranges items in one direction (row or column), whereas Grid works with rows and columns together.
- When the browser width is reduced below 700px, the grid changes to one column and the flex items stack because of the media query.

## 9. Result

A web page using inline, internal and external CSS with different selectors, box model properties, layouts, transformations and animations was created successfully, and the styles were displayed correctly in the browser.

## 10. Conclusion

CSS separates the design from the content of a web page and makes it attractive, consistent and responsive. External CSS is useful for large websites because one file can style multiple pages. Internal CSS is suitable for styling a single page, while inline CSS is useful for making quick changes to individual HTML elements.

