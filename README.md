# Web Profile Builder

Web Profile Builder is a Vue.js-based application designed to help users create, customize, and manage web profiles effortlessly. With a drag-and-drop interface and modern features, it empowers users to establish their online presence easily and effectively.

## Features

- **Drag-and-Drop Interface**: Easily customize the layout and components.
- **Customizable Templates**: Prebuilt components for quick profile creation.
- **Responsive Design**: Profiles look great on all devices.
- **Real-Time Preview**: See your changes instantly as you build.
- **Integration Ready**: Easily extend with APIs and custom components.

## Technologies Used

- **Vue.js**: Reactive UI framework.
- **Vue Router**: For page navigation.
- **TypeScript**: Static typing for robust development.
- **Vite**: Fast build tool for modern frontend projects.

---

## Folder Structure

Here’s an overview of the project’s folder structure:
```
│   .gitignore                # Specifies intentionally untracked files to ignore
│   env.d.ts                  # TypeScript environment declaration file
│   index.html                # Main HTML file for the app
│   LICENSE                   # Project license (MIT)
│   package-lock.json         # Exact versions of installed dependencies
│   package.json              # Project dependencies and scripts
│   README.md                 # Documentation for the project
│   tsconfig.app.json         # TypeScript configuration for the app
│   tsconfig.json             # Root TypeScript configuration
│   tsconfig.node.json        # TypeScript configuration for Node.js
│   vite.config.ts            # Vite configuration file
│   web.config                # Web server configuration (if applicable)
│
├───public
│       favicon.ico           # App icon
│
└───src                       # Source code folder
    │   App.vue               # Root Vue component
    │   main.ts               # Application entry point
    │
    ├───assets                # Static assets like styles, images, etc.
    │       base.css          # Base CSS styles
    │       logo.svg          # App logo
    │       main.css          # Main stylesheet
    │       template.css      # Styles for templates
    │
    ├───components            # Reusable Vue components
    │   ├───template          # Template-specific components
    │   │       CoreWebVitals.vue         # Displays core web vitals data
    │   │       GoogleTranslate.vue       # Google Translate integration
    │   │       RestOfRegions.vue         # Component for additional regions
    │   │       WpAbout1.vue              # About section template
    │   │       WpAppbarTop1.vue          # App bar template
    │   │       WpDoctorsList.vue         # Doctors list component
    │   │       WpFeaturedCTASection1.vue # Featured call-to-action section
    │   │       WpFeedback1.vue           # Feedback component
    │   │       WpHeaderBar.vue           # Header bar component
    │   │       WpHero1.vue               # Hero section template 1
    │   │       WpHero2.vue               # Hero section template 2
    │   │       WpIcons.vue               # Icons display component
    │   │       WpMenuDrawer.vue          # Menu drawer component
    │   │       WpPhotos.vue              # Photo gallery component
    │   │       WpQuickBarTop.vue         # Quick bar component
    │   │
    │   └───ui               # General-purpose UI components
    │           EmptyComponent.vue             # Empty state component
    │           FileUpload.vue                 # File upload component
    │           ThemeEditor.vue                # Theme editor interface
    │           VariableComponentSelection.vue # Dynamically choose components
    │           WpHero.vue                     # Base hero component includes all hero components from template and enables swapping
    │
    ├───composables           # Reusable logic (Vue composables)
    │   └───useCarousel       # Composables for carousel functionality
    │           index.ts      # Main carousel logic
    │           ReadMe.md     # Documentation for the composables
    │
    ├───dummies               # Dummy JSON data for testing
    │       Documents.json    # Sample documents data
    │       Faqs.json         # Frequently asked questions
    │       Info.json         # Generic information
    │       Keywords.json     # List of keywords
    │       photos.json       # Sample photos data
    │       ProfileDetails.json # Profile details data
    │       Reviews.json      # Customer reviews data
    │       SingleDoctorDetail.json         # Individual doctor details
    │       SingleDoctorInfo.json           # Additional doctor info
    │       SingleDoctorProfileAvailabilitySlots.json # Doctor availability
    │
    ├───rolex                 # Packaged library for project utilities
    │       rolex-0.0.0.tgz   # Compressed Rolex library file
    │
    ├───router                # Application routing
    │       index.ts          # Vue Router configuration
    │
    ├───types                 # TypeScript type definitions
    │       webProfileBuilderTypes.ts # Type definitions for the project
    │
    └───views                 # Page-level components
        │   Customers.vue     # Customers page
        │   HomeView.vue      # Home page
        │   Integrations.vue  # Integrations page
        │   Pricing.vue       # Pricing page
        │   Templates.vue     # Templates page
        │
        └───WebProfileBuilder # Components for profile building
                Interactive.vue         # Main interactive builder
                ProfileBuilder.vue      # Profile builder page switch between interactive and selectingbyname
                SelectByName.vue        # Component for selecting by name
```

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/tynkmad/sitebuilder.git
   cd sitebuilder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

---

## Scripts

- **Development**: Start the development server with Vite:
  ```bash
  npm run dev
  ```

- **Build**: Create a production build:
  ```bash
  npm run build
  ```

- **Deploy**: Deploy the build to GitHub Pages:
  ```bash
  npm run deploy
  ```

- **Preview**: Serve the production build locally:
  ```bash
  npm run preview
  ```

- **Type Checking**: Run TypeScript type checks:
  ```bash
  npm run type-check
  ```

- **Linting**: Run ESLint and fix issues:
  ```bash
  npm run lint
  ```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).