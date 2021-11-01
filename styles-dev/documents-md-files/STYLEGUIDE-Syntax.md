# CSS writing style guide
The team style guide should always win over your own personal preferences. Consistency is important.

## Syntax guidelines

### 1. Use expanded syntax

Write this:
```
p {
  color: white;
  background-color: black;
  padding: 1rem;
}
```

Not this:
```
p { color: white; background-color: black; padding: 1rem; }
```

* Include a space between the selector(s) and the opening curly brace.
* Always include a semi-colon at the end of the last declaration, even though it isn't strictly necessary.
* Put the closing curly brace on a new line.
* In each declaration, put a space after the separating colon, but not before.
* Use 2 spaces for code indentation.

### 2. CSS comments 

Use CSS-style comments to comment code that isn't self-documenting:
``` 
/* This is a CSS-style comment */
```
Put your comments on separate lines preceding the code they are referring to:

```
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

## 3.Don't use !important
!important is a last resort generally only used when you need to override something and there is no other way. It is a bad practice and you should avoid it wherever possible.

Bad:
```
.bad-code {
  font-size: 4rem !important;
}
```
