# Experiment 3: Responsive Web Page with HTML and CSS

## 1. Aim

To create a responsive web page using HTML and CSS that adjusts its layout automatically to mobile, tablet, laptop and large-screen devices.

## 2. Software Requirements

| Item | Details |
|---|---|
| Editor | Visual Studio Code |
| Browser | Google Chrome / Microsoft Edge (with Developer Tools) |
| Languages | HTML5 and CSS3 |
| Extension (optional) | Live Server |

## 3. Theory

**Responsive Web Design (RWD)** is an approach in which a web page changes its layout according to the screen size, so the same page works properly on mobile phones, tablets, laptops and desktops.

### Main Building Blocks

| Building Block | Meaning | Used in This Page |
|---|---|---|
| Viewport Meta Tag | Tells the mobile browser to use the device width instead of zooming out | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| Flexible (Fluid) Layout | Uses flexible units such as `%`, `fr` and `rem` instead of fixed pixels | `width: 100%`, `1fr`, `rem` |
| Flexible Images | Images automatically adjust according to the container size | `img { max-width: 100%; height: auto; }` |
| Media Queries | Apply CSS rules when specific screen conditions match | `@media (min-width: 601px) { ... }` |
| Flexbox and Grid | Create layouts that automatically rearrange themselves | `display: flex`, `display: grid` |

### Mobile-First Approach

The mobile-first approach means writing the basic CSS for the smallest screen first, usually using a single-column layout. Then, `min-width` media queries are added to introduce more columns and features as the screen size increases.

This approach keeps the CSS simple and makes the page suitable for mobile devices.

### Breakpoints Used

| Screen | Width | Layout |
|---|---|---|
| Mobile | Up to 600px | One column and hamburger menu |
| Tablet | 601px and above | Two columns |
| Laptop | 901px and above | Four cards and full navigation menu in a row |
| Large Screen | 1200px and above | Bigger text and spacing |

## 4. Features of the Page

| Section | Responsive Behaviour |
|---|---|
| Header and Navigation | On mobile, a hamburger icon (☰) opens and closes the menu using the checkbox technique without JavaScript. On screens 901px and above, the full menu appears in a row. The header is sticky. |
| Hero | Padding and heading size increase according to the screen size. |
| About | Two columns stack vertically on mobile and appear side by side from 601px. |
| Services Cards | One column on mobile, two columns on tablet and four columns on laptop using CSS Grid. |
| Images | `max-width: 100%` prevents images from overflowing. The gallery displays one, two or three columns. The `<picture>` element loads a different image for wide screens. |
| Table | Wrapped in a container with `overflow-x: auto`, allowing horizontal scrolling on smaller screens. |
| Contact Form | Name and email fields stack on mobile and appear side by side from 601px. |
| Footer | Displays one, two or three columns depending on the screen width. |
| Screen Information | A small script displays the current window width in the footer. |
| Print and Landscape | Special CSS rules are used for printing and for phones held horizontally. |

## 5. Procedure

1. Create a folder named `experiment3` in VS Code.
2. Create two files named `index.html` and `style.css` inside the folder.
3. In `index.html`, write the HTML5 structure and add the viewport meta tag.
4. Link the external CSS file using `<link rel="stylesheet" href="style.css">`.
5. Create the required sections: header with navigation, hero, about, services cards, gallery, table, contact form and footer.
6. In `style.css`, write the basic mobile styles first.
7. Make images flexible using `max-width: 100%` and `height: auto`.
8. Use Flexbox and Grid to create responsive layouts.
9. Add media queries using `min-width` for 601px, 901px and 1200px.
10. Save both files and open `index.html` using Live Server.
11. Test the page by pressing `F12` in the browser and clicking the Device Toolbar icon (or pressing `Ctrl + Shift + M`). Select different mobile, tablet and laptop screen sizes.
12. Take screenshots of the page at different screen sizes.

## 6. Structure of the Code

```text
experiment3/
├── index.html    # HTML structure, viewport meta tag, hamburger menu and content
└── style.css     # Mobile-first styles and media queries
```

### Key Code Snippets

**Viewport Meta Tag**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Flexible Images**

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

**Cards: One, Two and Four Columns**

```css
.cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

/* Tablet */
@media (min-width: 601px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Laptop */
@media (min-width: 901px) {
    .cards {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

**Hamburger Menu Without JavaScript**

```css
#menu-toggle {
    display: none;
}

.nav {
    display: none;
}

#menu-toggle:checked ~ .nav {
    display: flex;
}

/* Large Screens */
@media (min-width: 901px) {
    .menu-icon {
        display: none;
    }

    .nav {
        display: flex;
        flex-direction: row;
    }
}
```

**Scrollable Table**

```css
.table-wrap {
    overflow-x: auto;
}
```

## 7. Output

Take screenshots of the web page in the browser at different screen sizes and paste them here:

```markdown
![Mobile View](mobile.png)
![Tablet View](tablet.png)
![Laptop View](laptop.png)
```

### Expected Output

| Screen | What You See |
|---|---|
| Mobile (below 600px) | Hamburger menu, one-column cards, stacked about section, one-column gallery, stacked form fields and one-column footer. |
| Tablet (601px to 900px) | Hamburger menu, two-column cards and gallery, side-by-side about section and form fields, two-column footer. |
| Laptop (901px and above) | Full navigation menu in a row, four cards in one row, three-column gallery and three-column footer. |

## 8. Observations

- Without the viewport meta tag, a mobile browser may display the page as a zoomed-out desktop page. With the tag, the layout adjusts to the device width.
- Images do not overflow the screen because of `max-width: 100%`.
- The same HTML displays different layouts because CSS rules change according to the screen size.
- CSS Grid with `repeat()` and `1fr` makes columns share available space equally. Only the number of columns changes in each media query.
- The hamburger menu works using the `:checked` pseudo-class without requiring JavaScript.
- The table does not break the page layout on mobile because it scrolls horizontally inside its container.
- Media queries help make the website accessible and user-friendly across different devices.

## 9. Result

A responsive web page was created successfully using HTML and CSS. Its layout adapted correctly to mobile, tablet, laptop and large-screen devices using flexible layouts, CSS Grid, Flexbox and media queries.

## 10. Conclusion

Responsive web design allows a single web page to work across different devices and screen sizes. The viewport meta tag, flexible images, Flexbox, Grid and media queries are the main tools used to achieve responsiveness. Following a mobile-first approach keeps the code simple and allows larger layouts to be added when the screen size increases.
