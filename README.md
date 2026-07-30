# SiteBuilder

**A dynamic landing page builder utilizing the custom "Rolex" framework by Sulekha, built with Vue.js.**

![SiteBuilder Banner](https://via.placeholder.com/1200x400?text=SiteBuilder+Banner)

---

## 🚀 Overview

SiteBuilder is an intuitive platform that empowers users to create dynamic landing pages effortlessly. Leveraging Vue.js and the proprietary Rolex framework developed by Sulekha, SiteBuilder offers a seamless drag-and-drop interface, enabling rapid development and customization of landing pages without the need for extensive coding knowledge.

---

## 🔧 Features

* **Drag-and-Drop Interface**: Easily add and arrange components to build your landing page.
* **Rolex Framework Integration**: Utilize Sulekha's custom-built Rolex framework for enhanced functionality.
* **Responsive Design**: Ensure your landing pages look great on all devices.
* **Customizable Components**: Tailor each component to fit your brand's identity.
* **Real-Time Preview**: See changes instantly with live previews.
* **Export Options**: Download your landing page as static HTML/CSS files for deployment.

---

## 🛠️ Tech Stack

* **Frontend**: Vue.js
* **Framework**: Rolex (custom framework by Sulekha)
* **Styling**: Tailwind CSS
* **Build Tool**: Vite
* **Version Control**: Git

---

## 📦 Installation

To get started with SiteBuilder locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tynkmad/sitebuilder.git
   cd sitebuilder
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   Navigate to `http://localhost:3000` in your browser to view the application.

---

## 🧪 Usage

* **Create a New Project**: Click on "New Project" to start building your landing page.
* **Add Components**: Drag components from the sidebar and drop them onto the canvas.
* **Customize Components**: Click on any component to edit its content, style, and settings.
* **Preview Changes**: Use the "Preview" button to see your landing page in real-time.
* **Export Project**: Once satisfied, export your project as static HTML/CSS files for deployment.

---

## 📁 Project Structure

Here's an overview of the project's directory structure:

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
    │   │       WpAbout1.vue              # About section template
    │   │       WpAppbarTop1.vue          # App bar template
    │   │       WpAreasServed.vue         # Areas served list component
    │   │       WpArticles.vue            # Articles/blog section component
    │   │       WpCategories.vue          # Service categories tabs component
    │   │       WpDoctorsList.vue         # Doctors list component
    │   │       WpDocuments.vue           # Downloadable documents component
    │   │       WpFaq.vue                 # FAQ accordion component
    │   │       WpFeaturedCTASection1.vue # Featured call-to-action section
    │   │       WpFeedback1.vue           # Feedback component
    │   │       WpFooter.vue              # Footer component
    │   │       WpHeaderBar.vue           # Header bar component
    │   │       WpHero1.vue               # Hero section template 1
    │   │       WpHero2.vue               # Hero section template 2
    │   │       WpIcons.vue               # Icons display component
    │   │       WpLocation.vue            # Location/map component
    │   │       WpMenuDrawer.vue          # Menu drawer component
    │   │       WpPhotos.vue              # Photo gallery component
    │   │       WpReviews.vue             # Reviews/testimonials carousel component
    │   │       WpTags.vue                # Tags list component
    │   │       WpVideos.vue              # Video gallery component
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

## 🤝 Contributing

We welcome contributions to enhance SiteBuilder! To get started:

1. **Fork the repository**.

2. **Clone your fork**:

   ```bash
   git clone https://github.com/your-username/sitebuilder.git
   cd sitebuilder
   ```

3. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature
   ```

4. **Make your changes** and **commit** them:

   ```bash
   git commit -am 'Add new feature'
   ```

5. **Push to your fork**:

   ```bash
   git push origin feature/your-feature
   ```

6. **Open a Pull Request** to the main repository.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For inquiries or support, please reach out to:

* **Email**: [karthikeyan.m@example.com](mailto:karthikeyan.m@example.com)
* **LinkedIn**: [linkedin.com/in/karthikeyan-m](https://www.linkedin.com/in/karthikeyan-m)
* **GitHub**: [github.com/tynkmad](https://github.com/tynkmad)

