# HU002
Listar categorias existentes 

## Atomic design

Atomic design online book by Brad Frost, chapter 2: [click here](https://atomicdesign.bradfrost.com/chapter-2/)

- **Atoms**: Basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.
- **Molecules**: Simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.
- **Organism**: Complex UI components composed of groups of molecules and/or atoms and/or other organisms. Example, search input in a header organism with logo image, primary navigation list, and search form. Also a repeated card in an e-commerce
- **Templates**: Page-level objects that place components into a layout and articulate the design’s underlying content structure. Page’s underlying content structure rather than the page’s final content (mockup)
- **Pages**: Specific instances of templates that show what a UI looks like with real representative content in place.

### Structure proposal 

- components (atomic design)
- core (bussines model)
- shared (utils)
  
```
src/app
- components
  |- atoms
      |- button
      |- input
      |- textarea
      |- logo
      |- icons
  |- molecules
      |- form-create-category
      |- table-list-category
  |- organisms
      |- navbar
      |- sidebar
      |- footer
  |- pages
      |- category-create
      |- category-list
- shared
  |- pipes
  |- directives
  |- helpers


src/enviroments
```
