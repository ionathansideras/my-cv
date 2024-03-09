import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// Import the sass preprocessor
import sass from "sass";

// Export the configuration for Vite
export default defineConfig({
  // Use the react plugin
  plugins: [react()],

  // Configure CSS options
  css: {
    // Configure preprocessor options
    preprocessorOptions: {
      // Configure options for SCSS
      scss: {
        // Use the sass preprocessor for SCSS
        implementation: sass,
      },
    },
  },
});
