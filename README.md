## Welcome to Earthen - Online Handmade Ceramic Store

Earthen is an online marketplace dedicated to handmade ceramics and pottery, offering a platform for buying and selling unique artisanal pieces. Built with Next.js 14, deployed on Vercel, utilizing PostgreSQL for data management, and incorporating essential features such as dark mode, internationalization, authentication with Auth0, payment processing with Stripe, blob storage for photos, user profile management, product management with ratings, and blog management.

<img width="484" alt="earthen" src="https://github.com/anikobakhidze/react-accelerator/assets/80447919/68b404a4-4d59-4ad8-aa2f-2165c55ff797">

# Getting Started

To get started with the project, follow these steps:

* **Clone the repository from GitHub:**

  [https://github.com/anikobakhidze/earthen.git](https://github.com/anikobakhidze/earthen.git)

  Or run the following command in your terminal:

  ```sh
  git clone https://github.com/anikobakhidze/earthen.git

* *Open the cloned project in VS Code editor.*

* *Install dependencies:*

  In the terminal, navigate to the project directory and run the following command to install all the libraries and tools listed in the package.json file:

  
  npm install
  

* *Set up environment variables:*

  Create a .env file in the root directory of the project and configure it with your Auth0 credentials, Stripe API keys, PostgreSQL database connection string, blob storage credentials, and any other necessary environment variables. 

* *Start the development server:*

  Run the following command in the terminal to start the development server:

  
  npm run dev
  

* *Open the project in the browser:*

  After running the development server, a local address similar to [http://localhost:3000](http://localhost:3000) will appear in the terminal. Click on it or copy and paste it into your browser to open the project.

# Live demo

Explore the live demo of Earthen: **<a href="https://react-accelerator-chi.vercel.app" target="_blank">live demo.</a>**

# Project Features

## Features

* **Buy and Sell Ceramics**: Browse and list handmade ceramics and pottery items with detailed descriptions and images.
* **Dark Mode**: Toggle between light and dark mode.
* **Internationalization (i18n)**: Multi-language support.
* **Authentication with Auth0**: Secure signup and login.
* **Payment Processing with Stripe**: online transactions.
* **PostgreSQL Database**: Reliable data storage and management.
* **Blob Storage for Photos**: Efficient media asset management.
* **User Profile Management**: Manage profiles, view order history, and update preferences.
* **Product Management and Ratings**: Manage product listings, track inventory, and receive customer reviews.
* **Blog Management**: Articles on ceramic art.

## Technologies Used

* Next.js 14
* Vercel
* Auth0
* Stripe
* PostgreSQL
* Blob Storage Service
* Tailwind CSS
* TypeScript

## Project Structure

* *app* - Main directory containing the core application structure.
  * *[locale]* - Directory for handling different locales/languages.
  * *(dashboard)* - Directory containing all pages that exist within the application.
    * *about* - About page of the application.
    * *admin* - Admin dashboard for managing the application.
    * *blogs* - Blog management and display pages.
    * *cancel* - Page displayed when an order is canceled.
    * *cart* - Shopping cart page.
    * *checkout* - Checkout page for completing purchases.
    * *contact* - Contact information and form page.
    * *editblog* - Page for editing blog posts.
    * *editproduct* - Page for editing product listings.
    * *myproducts* - User's product listings page.
    * *products* - General product listings page.
    * *profile* - User profile management page.
    * *success* - Page displayed upon successful order completion.
    * *users* - User management pages.
  * *layout.tsx* - Layout component for the application.
  * *loading.tsx* - Loading component displayed during data fetching.
  * *page.tsx* - Main page component.
  * *globals.css* - Global CSS styles for the application.
  * *providers.tsx* - Providers component for wrapping the application with necessary context providers.

* *api* - Directory containing API endpoints.

* *components* - Directory containing reusable React components for various parts of the application.
  * *admin* - Components related to the admin dashboard.
  * *blog* - Components for managing and displaying blog posts.
  * *cart* - Components for the shopping cart functionality.
  * *checkoutPage* - Components for the checkout page.
  * *contact* - Components for the contact page.
  * *footer* - Components for the footer section of the application.
  * *header* - Components for the header section of the application.
  * *home* - Components for the home page.
  * *products* - Components for displaying and managing products.
  * *profile* - Components for the user profile management.
  * *sharedComponents* - Shared components used across different parts of the application.

* *hook* - Directory containing custom React hooks.

* *locales* - Directory containing localization files for multi-language support.

* *node_modules* - Directory containing installed npm packages.

* *public* - Directory containing static files such as images and favicon.

* *utils* - Directory containing utility functions and helpers.

* *favicon.ico* - Favicon for the application.

* *.env.local* - Environment variables configuration file.

* *.eslintrc.json* - ESLint configuration file for linting JavaScript and TypeScript code.

* *.gitignore* - Specifies files and directories to be ignored by Git.

* *actions.ts* - Action definitions for managing state and side effects.

* *api.ts* - API utility functions for making HTTP requests.

* *constants.ts* - Constant values used across the application.

* *jsconfig.json* - Configuration file for JavaScript and TypeScript development.

* *middleware.ts* - Middleware functions for handling requests and responses.

* *next-env.d.ts* - TypeScript definitions for Next.js.

* *next.config.mjs* - Configuration file for Next.js.

* *package-lock.json* - Automatically generated file for locking the versions of npm dependencies.

* *package.json* - Lists the project's dependencies and scripts.

* *postcss.config.js* - Configuration file for PostCSS, a tool for transforming CSS.

* *README.md* - ReadMe file containing information about the project.

* *tailwind.config.ts* - Configuration file for Tailwind CSS.

* *tsconfig.json* - TypeScript configuration file.

* *types.d.ts* - TypeScript type definitions.





