# Next.js Project Setup and Basics
To initialize the project, we use the following command:

npx create-next-app@latest airbnb-clone --typescript --eslint --tailwind
Choose the following options: - src directory: No - App Router: No - Customize the default import alias: Yes (use @/* for simpler imports)

This command scaffolds a Next.js project with TypeScript, ESLint, and Tailwind CSS, creating a solid foundation for our Airbnb clone.

Project Structure Overview
The project is divided into several folders and files, each serving a specific purpose:

1. Root Directory
The root directory contains essential files and folders required to run the project: - pages/: Houses all page components. Each file within this directory corresponds to a route in the application. - components/: Contains reusable components used across various pages. - public/: Stores static files like images and icons. - styles/: Manages global and component-specific styling with Tailwind CSS. - utils/: Contains helper functions that simplify tasks like API calls and data formatting. - hooks/: Custom React hooks for managing state and reusing logic. - context/: Global state management through React context providers. - assets/: Additional static assets, such as fonts or SVG icons.

2. Key Folders and Their Roles
- pages/
Purpose: Defines the main pages of the application.
Files:
index.tsx: Home - Listing Page displaying all available properties.
[slug].tsx: Dynamic route for the Detail Page, providing information on a selected listing.
checkout.tsx: Checkout Page where users can review and confirm bookings.
- components/
Purpose: Contains modular, reusable components that help build the UI.
Components:
ListingCard.tsx: Displays property information on the Home Page.
Navbar.tsx & Footer.tsx: Layout components used for navigation and footer content on every page.
DetailView.tsx: Presents detailed information about a specific property.
CheckoutForm.tsx: Form component handling checkout details.
ImageGallery.tsx: A gallery for displaying images in the Detail Page.
ReviewSection.tsx: Lists reviews on the Detail Page.
- styles/
Purpose: Manages CSS, utilizing Tailwind CSS for utility-first styling.
Files:
globals.css: Global styles and Tailwind CSS configuration.
tailwind.config.js and postcss.config.js: Configuration files for Tailwind CSS.
- utils/
Purpose: Holds utility functions for reusable logic.
Files:
apiClient.ts: Configurations and functions for API calls.
formatPrice.ts: Formats currency for price display.
- hooks/
Purpose: Contains custom hooks to manage specific logic.
Files:
useListings.ts: Manages data fetching for property listings.
useCart.ts: Manages state for items added to the cart.
- context/
Purpose: Global state management using React Context API.
Files:
CartContext.tsx: Provides a context for managing the cart globally.
UserContext.tsx: Handles user authentication and state.
3. Essential Configuration Files
tsconfig.json:
Purpose: TypeScript configuration file for managing paths and aliases.
Example Aliases:
    "paths": {
      "@/components/*": ["components/*"],
      "@/hooks/*": ["hooks/*"],
      "@/utils/*": ["utils/*"],
      "@/context/*": ["context/*"],
      "@/assets/*": ["assets/*"]
    }
tailwind.config.js & postcss.config.js:
Purpose: Configures Tailwind CSS for styling and sets up PostCSS for processing CSS.