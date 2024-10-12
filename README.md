Netlify deploment link : https://sassdashboard.netlify.app/

note : 
1) the above site disigned for larger screen,  for better view open the link in 1440px screen.
2) click on Order section in middle of the page to nvigate to orders transactions page.
   <img width="395" alt="Screenshot 2024-10-12 at 5 30 13 PM" src="https://github.com/user-attachments/assets/c9cebc48-53b3-4334-8256-7ef51e7e0738">

3) click on the brightness icon in header to change the mode from light to dark and vice versa
<img width="287" alt="Screenshot 2024-10-12 at 5 32 47 PM" src="https://github.com/user-attachments/assets/c44c4a53-f3cd-412a-a315-bda7cc4ec21f">

-- light mode output --
<img width="1454" alt="Screenshot 2024-10-12 at 5 25 58 PM" src="https://github.com/user-attachments/assets/69126ff9-4cfd-46b9-9417-baa0debf95de">
<img width="1431" alt="Screenshot 2024-10-12 at 5 34 06 PM" src="https://github.com/user-attachments/assets/31ae546d-8c82-4b7f-bfa1-cb3566091202">

-- dark mode output -- 
<img width="1438" alt="Screenshot 2024-10-12 at 5 35 20 PM" src="https://github.com/user-attachments/assets/c1609c9e-fe6a-41ea-b603-bb48d985e480">
<img width="1442" alt="Screenshot 2024-10-12 at 5 35 41 PM" src="https://github.com/user-attachments/assets/bf286898-5048-48ba-84b3-71e6d1fdc271">

-- Table of Contents --

Project Overview,
Technologies Used,
Installation,
Project Setup,
Running the Project,
Testing,
Building for Production,
Ejecting the App,
usage,
contribution

-- Project Overview --

This is a React project that utilizes various libraries for state management, routing, and chart visualization. It is designed to provide a robust foundation for building interactive web applications such as analytical dashboard.

-- Technologies Used --

React: A JavaScript library for building user interfaces.
Redux: A predictable state container for JavaScript apps.
React Router: For navigating between different views of the application.
Chart.js and React Chart.js 2: For rendering charts.
Tailwind CSS: A utility-first CSS framework for styling.
Testing Libraries: Jest and React Testing Library for unit and integration testing.

-- Installation --

Before you begin, ensure you have Node.js installed on your machine.

-- Clone the repository: --

" git clone https://github.com/Mujahid561/Analytics-dashboard.git "
" cd proj "

-- Install the dependencies: --

Make sure you are in the project directory.
Run the following command to install all required packages:

" npm install "

-- Running the Project --

To start the development server, use the following command:

" npm start "
Your app will be available at http://localhost:3000 in your web browser.

-- Testing --

To run the tests for your application, use:

" npm test "
This command will launch Jest and run all test cases defined in your project.

-- Building for Production --

To create an optimized production build, run:

" npm run build "
This will generate a build folder containing a minified version of your app for deployment.

-- Ejecting the App --

If you want to customize the configuration of Create React App, you can eject the app by running:

" npm run eject "
Note: This action is irreversible. It will expose all the configuration files, making it more difficult to maintain updates from Create React App.

-- Usage --

Refer to the documentation of the libraries used in this project for detailed usage instructions and best practices:

React : "https://react.dev/"
Redux-toolkit : "https://redux-toolkit.js.org/"
React Router : "https://reactrouter.com/en/main"
Chart.js : "https://www.chartjs.org/"
Tailwind CSS : "https://tailwindcss.com/"
React-icons : "https://react-icons.github.io/react-icons/"
jest : "https://jestjs.io/"
RTL : "https://testing-library.com/docs/react-testing-library/intro/"

-- Contributing --

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

<!-- Table of Contents -->

Project Overview
Technologies Used
Installation
Project Setup
Running the Project
Testing
Building for Production
Ejecting the App
Usage

<!-- Project Overview -->

This is a React project that utilizes various libraries for state management, routing, and chart visualization. It is designed to provide a robust foundation for building interactive web applications such as analytical dashboard.

<!-- Technologies Used -->

React: A JavaScript library for building user interfaces.
Redux: A predictable state container for JavaScript apps.
React Router: For navigating between different views of the application.
Chart.js and React Chart.js 2: For rendering charts.
Tailwind CSS: A utility-first CSS framework for styling.
Testing Libraries: Jest and React Testing Library for unit and integration testing.

<!-- Installation -->

Before you begin, ensure you have Node.js installed on your machine.

<!-- Clone the repository: -->

git clone https://github.com/Mujahid561/Analytics-dashboard.git
cd proj

<!-- Install the dependencies: -->

Make sure you are in the project directory.
Run the following command to install all required packages:

npm install

<!-- Running the Project -->

To start the development server, use the following command:

npm start
Your app will be available at http://localhost:3000 in your web browser.

<!-- Testing -->

To run the tests for your application, use:

npm test
This command will launch Jest and run all test cases defined in your project.

<!-- Building for Production -->

To create an optimized production build, run:

npm run build
This will generate a build folder containing a minified version of your app for deployment.

<!-- Ejecting the App -->

If you want to customize the configuration of Create React App, you can eject the app by running:

npm run eject
Note: This action is irreversible. It will expose all the configuration files, making it more difficult to maintain updates from Create React App.

Usage
Refer to the documentation of the libraries used in this project for detailed usage instructions and best practices:

React : "https://react.dev/"
Redux-toolkit : "https://redux-toolkit.js.org/"
React Router : "https://reactrouter.com/en/main"
Chart.js : "https://www.chartjs.org/"
Tailwind CSS : "https://tailwindcss.com/"
React-icons : "https://react-icons.github.io/react-icons/"
jest : "https://jestjs.io/"
RTL : "https://testing-library.com/docs/react-testing-library/intro/"

<!-- Contributing -->

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

------------------------------------------------------------------------------------------------------------------------------------------

-- Design Decisions --
1) State Management with Redux: We chose Redux for state management due to its predictable state container and ability to maintain a global state across different components. This was crucial for ensuring a consistent data flow, especially as the application grew in complexity.

2) Component-Based Architecture : The project follows a component-based architecture to promote reusability and maintainability. Each UI element is encapsulated within its own component, allowing for better separation of concerns.

3) Responsive Design with Tailwind CSS: Tailwind CSS was selected for its utility-first approach, which simplifies styling and ensures the application is responsive across various devices. This choice helped in rapidly developing consistent and visually appealing UI elements.

-- Challenges Faced --
1) Complex State Management: Initially, managing complex states with Redux became overwhelming, particularly when dealing with nested data structures. This required us to refine our Redux slices and incorporate selectors for better performance.

2) Chart Integration: Integrating Chart.js with React posed some challenges, especially regarding data updates and re-rendering. We had to implement useEffect hooks to ensure the charts updated properly when data changed.

3) Cross-Browser Compatibility: Ensuring the application worked seamlessly across different browsers was a challenge. This required extensive testing and adjustments in the CSS to fix layout issues in specific browsers.

-- Improvements Made --
1) Optimized State Management: We refactored our Redux store to utilize createSlice from @reduxjs/toolkit, which simplified our reducers and improved performance by reducing boilerplate code.

2) Enhanced Testing Coverage: To ensure reliability, we increased our test coverage by adding more unit and integration tests using Jest and React Testing Library. This helped identify potential bugs early in the development process.

3) Improved Documentation: As the project evolved, we recognized the importance of maintaining up-to-date documentation. We created detailed comments within the code and improved our README to assist new developers in understanding the project structure and functionality.















