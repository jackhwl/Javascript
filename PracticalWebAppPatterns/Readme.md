## Practical Web App Patterns
1. Part 1
   - Classic Patterns
     - Creational Design Patterns
       - Singleton
         - Managing a global configuration object
         - Database connection pooling
         - Logging service
         - State management
         '''
         const Database = {
            open: async () => {}
            sendQuery: async (query) => {}
         }
         '''
       - Factory
         - UI element creation
         - Different types of notifications
         - Data Parsers
