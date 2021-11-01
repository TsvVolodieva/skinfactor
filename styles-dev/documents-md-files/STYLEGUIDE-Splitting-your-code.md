# CSS writing style guide
The team style guide should always win over your own personal preferences. Consistency is important.


## Folder structure

main.css is the only file outside all other folders. In main.css we import all other css files. 

### Folder ''abstracts''
Abstracts (or utilities): holds Sass tools, helper files, variables, functions, mixins and other config files. These files are meant to be just helpers which don’t output any CSS when compiled.
* variables, 
* mixins

### Folder ''base''
Base: holds the boilerplate code for the project. Including standard styles such as resets and typographic rules, which are commonly used throughout your project.
* reset and/or normalize files, 
* typography,
* helper / decoration classes

### Folder ''components'' 
Components (or modules): holds all of your styles for buttons, carousels, sliders, and similar page components (think widgets). Your project will typically contain a lot of component files — as the whole site/app should be mostly composed of small modules.
* buttons
* other sections, which may be made into components

### Folder ''layout'' 
Layout: contains all styles involved with the layout of your project. Such as styles for your header, footer, navigation and the grid system.

### Folder ''pages'' includes:
* home pages styles
* about page styles (if relevant)
* collection page styles (if relevant)
* product page styles (if relevant)

## Splitting your styles

### Try to split your CSS / SCSS into logical sections

It is a good idea to have all of the common styling first in the stylesheet. 
This means all of the styles which will generally apply unless you do something special with that element. You will typically have rules set up for:

* body
* p
* h1, h2, h3, h4, h5
* ul and ol
* The table properties
* Links

### Put comments whenever you begin a new section

```
/* GENERAL STYLES */

...

/* HEADER AND NAVIGATION */

...

/* SECTION SIDEBAR */

...

/* SECTION MAIN CONTENT */

...

/* FOOTER */

...
```

### Documentation on the top of the CSS / SCSS file :
- write which sections your CSS file consists of in the beginning of the file for easier search
```
/*
1. GENERAL STYLES
2. HEADER AND NAVIGATION
3. SECTION SIDEBAR
4. SECTION MAIN CONTENT
5. FOOTER
*/
```
 