## Practical Web App Patterns
1. Part 1
   - Classic Patterns
     - Creational Design Patterns
       - Singleton
         - Managing a global configuration object
         - Database connection pooling
         - Logging service
         - State management
         ```
         const Database = {
            open: async () => {}
            sendQuery: async (query) => {}
         }
         ```
       - Factory
         - UI element creation
         - Different types of notifications
         - Data Parsers
         ```
         class PDFReader extends Reader {}
         class CSVReader extends Reader {}
         class SQLReader extends Reader {}

         class Reader {
            static getReader(url) {
               // based on the return type of the URL
               // we return one of the possible readers
            }
         }
         ```
     - Structural Design Patterns
       - Decorator: Wrap an object with another object that adds the desired behavior.
         - Adding logging, validation, or caching to method calls.
         - Extending user interface components with additional features.
         - Wrapping API responses to format or process data before passing it on.
       - Adapter: allow incompatible interfaces to work together
         - Integrating third-party libraries with different interfaces into your application.
         - Adapting legacy code to work with new systems or APIs
         - Converting data formats.
       - Mixins: Share functionality between classes without using inheritance.
         - Create a class containing methods that can be used by other classes and apply it to multiple classes.
         - Integrating third-party libraries with different interfaces into your application.
       - Value Object: Represent a value that is immutable and distinct from other objects based on its properties rather than its identity.
         - Create a class where instances are considered equal if all their properties are equal and ensure the object is immutable.
         - Representing complex data types like money, coordinates, or dates.
     - Behavioral Design Patterns
       - Observer
         - Event handlers
         - Real-time notifications
         - UI updates
       - Template Method
         - Data Processing
         - Form Validation
       - Memento
         - Capture and externalize an object's internal state so that it can be restored later, without violation encapsulation
         - Create an object that stores the state of the original object and provide methods to save and restore the state.
         - Undo/Redo functionality
         - Saving a game or app session
         - Time-travel debugging
       - Command
         - Manage the actions of your app (such as Add, Delete, print, save, load)
2. Part 2
  - Todo Masters
    - add mixin
    - add TodoItem class
      - turn it to singleton
      - bring in observer
3. Part 3
  - Command
  - fix typo
  - add todo item
  - delete todo item
  - persist data to local storage
  - keyboard shortcut key add todo item
  - add undo function
4. Part 4
  - single page application
  - Lazy Load
  - View Transitions
  - HTML Templates with Interpolation
  - Routing Metadata
  - Lab 
   - Lazy loading order page and cart item page
   - Adding new transitions
     - avoid header change
     - change shadow dom style through part
   - interpolate template
   - change meta data - title, theme color
5. Part 5
  - multiple page application patterns
  - view transitions for MPA
  - prefetch
  - HTML Templates for MPA
  - Lab
    - view transitions for MPA

