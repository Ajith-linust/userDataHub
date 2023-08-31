# React + TypeScript + Vite Project Setup Guide

## Project Overview

This guide will walk you through setting up and running the 'userDataHub' project, which is built using React, TypeScript, and Vite. The project includes features like routing, interactive maps, global state management, and styled components for styling.

## Installation and Running

- Clone the Project: Begin by cloning the project repository from GitHub using the following command:
```js
git clone https://github.com/Ajith-linust/userDataHub.git
```
- Navigate to Project Directory: Change your terminal's working directory to the project path:
```js
cd userDataHub
```
-Install Dependencies: Use either npm or yarn to install the project's required packages. Run one of the following commands:
```js
npm install OR yarn
```
-Run the Application: After successfully installing the packages, start the application using the following command:
```js
npm run preview
```

## Third-Party Libraries

The project utilizes the following third-party libraries to enhance its functionality:

- React Router Dom: Enables client-side routing for seamless navigation within the application.
- Leaflet and React-Leaflet: Provides tools for integrating interactive maps into the application.
- React Redux and @reduxjs/toolkit: Facilitates global state management, allowing components to share and update data efficiently.
- Styled-Components: Offers a CSS-in-JS approach for styling components, enhancing maintainability and reusability.

## Development Notes

Here are some noteworthy details about the project's development:

- Folder Structure: The project follows a well-organized structure with separate folders and files, enhancing code readability and maintainability.
- Vite Module Bundler: Unlike webpack, Vite serves files dynamically to the browser, resulting in faster page load times during development.
- Package Versions: The project employs up-to-date package versions to ensure compatibility and leverage the latest features.
- Styled-Components Warnings: During development, you might encounter warnings related to styled-components versions. These warnings are harmless and won't impact the code or output.
- Desktop View: The project is designed to fit desktop views, offering a consistent and engaging user experience on larger screens.
- Browser Compatibility: Thorough testing has been performed across multiple browsers, including Chrome, Brave, Firefox, Safari, and more, to ensure cross-browser compatibility.
