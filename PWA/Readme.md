## Practical Web App Patterns with Vanilla JS
1. Part 1
  - PWA -- The DNA of Web and Mobile
2. Part 2
  - No support or plans for it
    - Firefox on desktop
    - visionOS
    - Android WebView
    - iOS WebView
    - watchOS
    - tvOS
    - Andrioid TV
  - Components of a PWA
    - PWA Levels
      - Default
      - Basic Metadata provided
      - PWA Criteria Approved
      - Full offline experience
      - PWA Criteria: Defined by the browser. If passed, there are hints, banners, dialogs or bars explaining to the user that the current web app is installable and inviting them to install it.
  - Lab
    - The Web App Manifest: It's a JSON file that defines all the meta data that will help the browser and the OS to install the app and have integration into the operating system.
    - meta viewport after 2007
    - Manifest default extension: .webmanifest
    ```
    <link rel="manifest" href="web.manifest">
    ```
    - micro-app
    ```
    {
      "id": "/",
      "name": "My PWA",
      "short_name": "PWA",
      "display": "standalone",
      "scope": "/",
      "start_url": "/?pwa",
      "theme_color": "orange",
      "background_color": "white"
    }
    ```
    - origin: protocol+host+port
    - id: "/soda/267"
    - start_url
    - link manifest to index.html
3. Part 3
  - Display modes
    - browser
    - standalone
    - fullscreen
    - minimal-ui  fall back to browser
    - On a separate spec
      - tabbed
      - window-controls-overlay
    - web.wurfl.io detect device
    - navigator.standalone return true if it's on iphone
  - Testing and Debugging
  - Standalone User Experience
  - Shortcut Icons on Andrioid
  - WebAPK Icons on Android
  - Icons in the Web App Manifest
    - 192x192, 512x512, 1024x1024
    - Maskable.app
    - 180x180 is the recommended size
    <link rel="apple-touch-icon" href="ios_icon.png">
    <link rel="apple-touch-icon" href="ios_icon.png" sizes="120x120">
4. Part 4
  - Splash Screen
    - Android automatically does that
    - iOs using pwa compact
  - Making the App Offline-capable
    - Service Worker: A javascript file running in its own thread that will act as a middleware ooffering a local installed web server or web proxy for your PWA, including resources and API calls.
