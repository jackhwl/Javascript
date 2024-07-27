## Introducton
## Vanilla Javascript
  - What is Vanilla JavaScript
  - Why do we need to care about VanillaJS?
  - The DOM API
    - window global object
    - document object
  - Finding Elements in the DOM
    - One HTML Element: HTMLElement
      - getElementById
      - querySelector: first element of the list
        - document.querySelector("section>header a")
      - null
    - Live HTML Element Collection: HTMLCollection: don't have all the modern Array interface, such as filter, map, reduce or forEach, but you can use Array.from(collection) to do it.
      - getElementsByTagName
      - getElementsByClassName
      - getElementsByName
    - Static Element Collection: NodeList
      - querySelectorAll()
    - Actions:
      - Read and change attributes' values
      - Read and change styles
      - Hook event listeners
      - Add, remove or move children elements
      - Read and change its contents
      - More APIs        
  - Modifying the DOM
    - textContent
    - innerHTML
## The DOM
  - Course Project Overview
  - Scoping querySelector
  - Adding Scripts async & defer
  - Main Script Setup
  - Event Binding & Handlers
    - onevent
    - addEventListener
    - removeEventListener
    - dispatchEvent
  - Advanced Event Handling
  - Helpful Shorthand Methods
  ```
    const $ = function(args){ return document.querySelector(args);}
    const $$ = function(args){ return document.querySelectorAll(args);}

    HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
    HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
    HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
    HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }
  ```
  - Fetching Data
  - Loading Menu Data
## Routing
  - Browser Routing & History API
  - SPA Router from Scratch
  - Router Q&A
  - Changing DOM Element
  - Dynamic Routing
## Web Components
  - Overview & Custom Elements
  - HTML Templates
    ```
        const template = document.getElementById('td_dropdown')
        const content = template.content.cloneNode(true)
        this.appendChild(content)
    ```
  - Shadow DOM
  - Declarative Shadow DOM
  - Creating Web Components
  - Loading Templates
  - Applying a Shadow DOM
  - Styling Web Components