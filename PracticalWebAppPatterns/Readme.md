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
