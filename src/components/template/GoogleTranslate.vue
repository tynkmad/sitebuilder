<script setup lang="ts">
import { onMounted } from "vue";

// Ensure the "google" namespace is recognized by TypeScript
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

// Dynamically load the Google Translate script
const loadGoogleTranslateScript = () => {
  if (!document.querySelector("#google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.type = "text/javascript";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);
  }
};

// Initialize the Google Translate element
const initGoogleTranslate = () => {
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en", // Set the default language
        includedLanguages: 'en, hi,ta,te,kn,ml,gu,pa,bn,mar,ne,ur,fr,es,de'
      },
      "google_translate_element" // ID of the element to manipulate
    );
  };
};

// Call the initialization functions when the component is mounted
onMounted(() => {
  initGoogleTranslate();
  loadGoogleTranslateScript();
});
</script>
<template>
  <div id="google_translate_element" class="translate-widget"></div>
</template>
<style>
.translate-widget {
  border: 0.1rem solid var(--color-border);
  border-radius: var(--radius-base);
  padding: var(--gutter-xsmall);
  cursor: pointer;
}
.goog-te-gadget span {
  display: none;
}
.goog-te-gadget {
  font-size: 0 !important;
  cursor: pointer;
}
.goog-te-gadget .goog-te-combo {
  cursor: pointer;
}

@media (max-width: 768px) {
  .translate-widget {
    width: 14rem;
  }
  .goog-te-gadget .goog-te-combo {
    width: 100%;
  }
}
</style>
