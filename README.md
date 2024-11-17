Next.js + Tailwind CSS + TypeScript Dashboard UI

Overview

This project is a responsive and functional Dashboard UI built using Next.js, Tailwind CSS, and TypeScript. The application is designed to closely match the high-fidelity designs provided in a Figma file and includes mobile responsiveness, user authentication, and seamless interactions.

Features

	1.	Figma Integration
	•	Converted the provided Figma designs into a fully functional and responsive user interface.
	•	Ensured pixel-perfect implementation of the Figma prototype.
	•	Figma File: View Design
	2.	Google Authentication
	•	Integrated Google Auth using Firebase for secure Login and Signup functionality.
	•	Provided error handling and edge-case management for invalid/missing inputs using toast messages.
	3.	Data Handling
	•	File Upload: Users can upload a sample ".csv, .xlsx, .xls" file. Upon upload:
	•	The file’s data is parsed using the Papa Parse library.
	•	The parsed data is dynamically mapped and displayed in the dashboard.
	4.	Mobile Responsiveness
	•	Fully responsive UI that adapts to mobile, tablet, and desktop screen sizes.
	•	Matches the responsiveness guidelines outlined in the Figma design.
	5.	Dark and Light Modes
	•	Implemented a theme toggle (Dark Mode and Light Mode) using the Context API and Tailwind CSS.
	6.	Error Handling
	•	Included proper error handling for:
	•	Invalid login credentials.
	•	Missing inputs during file upload.
	•	Edge cases, such as empty states, with suitable alert or toast messages.
	7.	Browser Compatibility
	•	Verified compatibility with all major modern web browsers.
	8.	Best Practices
	•	Folder Structure:
	•	components: Reusable UI components.
	•	context: Context API for theme and authentication.
	•	hooks: Custom hooks for managing reusable logic.
	•	lib: Firebase integration.
	•	constants: Sidebar and Navbar configuration data.
	•	Next.js Best Practices:
	•	Used NextImage for optimized images.
	•	Kept static assets in the public folder for easy access.
	•	Layouts:
	•	Two layout strategies: one for the Sign-in screen and another for the Dashboard.

Technologies Used

	•	Next.js: Framework for building server-rendered and static web applications.
	•	Tailwind CSS: Utility-first CSS framework for rapid UI development.
	•	TypeScript: For type safety and improved development experience.
	•	Firebase: For authentication and backend services.
	•	Papa Parse: To parse ".csv, .xlsx, .xls" files and process the data.# Demo-Dashboard
