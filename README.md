## CGPA Calculator

A simple and user-friendly CGPA calculator built with React.js, Next.js and Tailwind CSS. This app helps students calculate their CGPA based on the grades they input for each semester. The data is stored locally in the browser, ensuring a seamless experience across page refreshes.

## Features

- CGPA Calculation: Calculates CGPA based on grades entered for each semester.
- Persistent State: The app uses local storage to save the CGPA data on the client browser. This ensures that even if the user refreshes their browser, their CGPA and semester grades will still be available, so they don’t have to re-enter their grades every time.
- Privacy: The data is not saved to the backend; all the information remains on the client-side, ensuring complete privacy for all users.
- Responsive Design: Built with a mobile-first approach, the app is fully responsive and works on all screen sizes.
- Visual Progress: Displays the cumulative CGPA with an interactive circular progress bar and line graph to track performance across semesters.

## Technologies Used

- React.js: For building the user interface and managing app state.
- Next.js: A React framework that enables server-side rendering and optimized performance.
- Tailwind CSS: For styling and creating a responsive layout.
- Recharts: For rendering the line chart to show GPA and CGPA trends across semesters.
- Local Storage: To save user data locally, providing persistence without involving a backend.

