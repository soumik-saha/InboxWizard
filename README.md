# InboxWizard

InboxWizard is a web application designed to manage your inbox efficiently. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Implementation Choices](#implementation-choices)
- [Learn More](#learn-more)

## Getting Started

To run and view the web page locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/inboxwizard.git
   cd inboxwizard
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Running the Application**

   Start the development server:

   ```sh
   npm start
   ```

   Open your browser and navigate to:

   [http://localhost:3000](http://localhost:3000)

   The page will reload when you make changes. You may also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

- `npm start`

  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- `npm test`

  Launches the test runner in the interactive watch mode. See the section about running tests for more information.

- `npm run build`

  Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm run eject`

  Note: This is a one-way operation. Once you eject, you can't go back!

  If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

## Project Structure

- `.gitignore`
- `LICENSE`
- `package.json`
- `postcss.config.js`
- `public/`
  - `index.html`
  - `manifest.json`
  - `robots.txt`
- `README.md`
- `src/`
  - `App.css`
  - `App.js`
  - `App.test.js`
  - `assets/`
  - `components/`
    - `Dashboard/`
      - `AllInbox.js`
      - `CenterPage.js`
      - `CustomMail.js`
      - `DeletePopUp.js`
      - `MainPage.js`
      - `Onebox.js`
      - `RightSection.js`
      - `SideBar.js`
      - `SubView.js`
      - `ThemeToggle.js`
      - `TopBar.js`
    - `Login/`
      - `...`
  - `config.js`
  - `context/`
    - `ThemeContext.js`
  - `index.css`
  - `index.js`
  - `reportWebVitals.js`
  - `setupTests.js`
- `tailwind.config.js`
- `tailwind.css`

## Implementation Choices

- **React and Create React App:** The project is built using React and bootstrapped with Create React App to streamline the setup process.
- **Tailwind CSS:** Tailwind CSS is used for styling to ensure a consistent and responsive design.
- **React Router:** React Router is used for client-side routing to manage navigation within the application.
- **Context API:** The Context API is used to manage global state, such as theme settings, across the application.
- **Component-Based Architecture:** The application is structured into reusable components to promote modularity and maintainability.

## Learn More

You can learn more in the Create React App documentation:

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [npm run build fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

This `README.md` file includes a clear structure and covers essential aspects of setting up, running, and understanding your project. You can copy and paste this content into your `README.md` file.
