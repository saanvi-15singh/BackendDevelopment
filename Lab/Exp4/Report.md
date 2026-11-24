# Experiment 4: Responsive Web Page with Bootstrap

## 1. Aim

To create a responsive web page using the Bootstrap framework.

## 2. Software Requirements

| Item | Details |
|---|---|
| Editor | Visual Studio Code |
| Browser | Google Chrome / Microsoft Edge (with Developer Tools) |
| Framework | Bootstrap 5.3 (through CDN) |
| Internet | Required, because Bootstrap CSS, JavaScript and icons load from a CDN |
| Extension (optional) | Live Server |

## 3. Theory

**Bootstrap** is a free, open-source front-end framework. It provides ready-made CSS classes and JavaScript components for building responsive, mobile-first websites quickly without writing everything from scratch.

### Main Features

| Feature | Description |
|---|---|
| Grid System | The page is divided into 12 columns. Classes like `col-md-6` decide how many columns an element occupies at a particular screen size. |
| Responsive Breakpoints | Predefined screen sizes: `sm`, `md`, `lg`, `xl` and `xxl`. |
| Components | Ready-made navbar, cards, buttons, alerts, modal, carousel, accordion, dropdowns and forms. |
| Utility Classes | Classes for spacing (`mt-3`, `p-4`), colours (`bg-dark`, `text-white`), alignment (`text-center`) and display (`d-none`, `d-flex`). |
| Mobile First | Styles are designed for smaller screens first and scale up for larger screens. |
| JavaScript Plugins | Navbar toggler, modal, carousel and other components work using `data-bs-*` attributes. |

### Bootstrap Breakpoints

| Class Prefix | Screen Width | Device |
|---|---|---|
| `col-` | Below 576px | Extra small (phones) |
| `col-sm-` | 576px and above | Small |
| `col-md-` | 768px and above | Medium (tablets) |
| `col-lg-` | 992px and above | Large (laptops) |
| `col-xl-` | 1200px and above | Extra large |
| `col-xxl-` | 1400px and above | Extra extra large |

### How to Add Bootstrap Using CDN

**Bootstrap CSS (inside `<head>`)**

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

**Bootstrap JavaScript (before `</body>`)**

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

The viewport meta tag is also required:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## 4. Features of the Page

| Section | Bootstrap Classes and Components Used |
|---|---|
| Navbar | `navbar`, `navbar-expand-lg`, `navbar-toggler`, `collapse`, `dropdown`, `sticky-top`. It becomes a hamburger menu on screens smaller than 992px. |
| Hero | `text-center`, `text-white`, `display-4`, `lead`, `btn btn-light btn-lg` |
| Grid and Cards | `container`, `row`, `g-4`, `col-12 col-sm-6 col-lg-3`, `card`, `card-body`, `h-100`, `shadow-sm`. Displays 1 card per row on phones, 2 on tablets and 4 on laptops. |
| Image and Text Layout | `col-md-6`, `img-fluid`, `rounded`, `align-items-center`. Content appears side by side on medium screens and stacks on mobile. |
| Buttons | `btn btn-primary`, `btn-success`, `btn-danger`, `btn-outline-dark`, `btn-sm`, `btn-lg` |
| Alerts | `alert alert-success`, `alert-warning alert-dismissible` |
| Badges and Progress | `badge`, `rounded-pill`, `progress`, `progress-bar-striped`, `progress-bar-animated` |
| Accordion | `accordion`, `accordion-item`, `accordion-button`, `accordion-collapse` |
| Carousel | `carousel slide`, `carousel-inner`, `carousel-item`, controls and indicators |
| Modal | `modal fade`, `modal-dialog`, `modal-content`, opened using `data-bs-toggle="modal"` |
| Table | `table-responsive`, `table`, `table-striped`, `table-hover`, `table-bordered`, `table-dark` |
| Responsive Utilities | `d-none`, `d-sm-block`, `d-md-block` to show or hide content according to screen size |
| Form | `form-control`, `form-select`, `form-check`, `form-label`, `col-md-6` |
| Footer | `bg-dark`, `text-white`, `row`, `col-md-4`, Bootstrap Icons |
| Custom CSS | `style.css` for gradient hero, hover effects on cards and carousel slide colours |

## 5. Procedure

1. Create a folder named `experiment4` in VS Code.
2. Create two files named `index.html` and `style.css` inside the folder.
3. Write the HTML5 structure and add the viewport meta tag.
4. Add the Bootstrap CSS link and Bootstrap Icons link inside the `<head>` section.
5. Add the Bootstrap JavaScript bundle script before the closing `</body>` tag.
6. Build the navigation bar with a toggler button for smaller screens.
7. Add the hero section and then create the card grid using `container`, `row` and `col-*` classes.
8. Add Bootstrap components such as buttons, alerts, accordion, carousel and modal.
9. Add a responsive table inside `table-responsive` and a form using Bootstrap form classes.
10. Add the footer section.
11. Add additional styles in `style.css` and link it after the Bootstrap CSS.
12. Save both files and open `index.html` using Live Server. Make sure the internet connection is active.
13. Press `F12`, then `Ctrl + Shift + M`, and test the page on mobile, tablet and laptop screen sizes.
14. Take screenshots of the page at different screen sizes.

## 6. Structure of the Code

```text
experiment4/
├── index.html    # Page using Bootstrap classes and components (CDN)
└── style.css     # Custom CSS added after Bootstrap
```

### Key Code Snippets

**Responsive Grid of Cards**

```html
<div class="container">
    <div class="row g-4">
        <div class="col-12 col-sm-6 col-lg-3">
            <div class="card h-100 text-center shadow-sm">
                <div class="card-body">
                    Card Content
                </div>
            </div>
        </div>
        <!-- More columns -->
    </div>
</div>
```

**Navbar with Hamburger Menu**

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
        <a class="navbar-brand" href="#">BootSite</a>

        <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#mainNav"
            aria-controls="mainNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNav">
            <!-- Navigation Links -->
        </div>
    </div>
</nav>
```

**Responsive Table**

```html
<div class="table-responsive">
    <table class="table table-striped table-hover">
        <!-- Table Content -->
    </table>
</div>
```

**Modal**

```html
<button class="btn btn-dark" data-bs-toggle="modal"
    data-bs-target="#demoModal">
    Open Modal
</button>

<div class="modal fade" id="demoModal" tabindex="-1">
    <!-- Modal Content -->
</div>
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
| Mobile (below 576px) | Hamburger menu, one card per row, image above text, stacked form fields and stacked footer. |
| Tablet (768px) | Hamburger menu, two cards per row, image and text side by side, two-column form. |
| Laptop (992px and above) | Full navigation menu in a row, four cards in one row and three-column footer. |

## 8. Observations

- Bootstrap produced a responsive and attractive web page using predefined classes with very little custom CSS.
- The 12-column grid system with `col-12 col-sm-6 col-lg-3` changed the number of cards per row without requiring manually written media queries.
- The navbar, modal, carousel and accordion worked using `data-bs-*` attributes and Bootstrap's JavaScript bundle.
- The `img-fluid` and `table-responsive` classes prevented images and tables from overflowing on smaller screens.
- Without the Bootstrap JavaScript bundle, interactive components such as the hamburger menu, modal, carousel and dropdown do not work.
- The page requires an internet connection because Bootstrap files are loaded through a CDN.

## 9. Result

A responsive web page was successfully created using Bootstrap 5. Its layout and components worked correctly on mobile, tablet and laptop screen sizes.

## 10. Conclusion

Bootstrap makes web development faster and easier because its grid system, ready-made components and utility classes handle most responsive design requirements. Compared with plain CSS used in Experiment 3, Bootstrap provides similar responsive layouts with less code. Its JavaScript components also provide interactive features without requiring separate JavaScript code for each component.