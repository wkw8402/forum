# Next.js Forum Project

## Overview

**Next.js Forum Project** is a comprehensive full-stack forum application built with Next.js and MongoDB. This project includes a wide range of features such as user authentication, post creation, editing, deletion, and comment management. It utilizes dynamic rendering techniques and incorporates advanced features like JWT, OAuth, and dark mode, providing a robust and modern user experience.

### Project Demo

Click on the image below to watch a video demo of the application in action:

[![Watch the video](https://img.youtube.com/vi/YADtH78KfpE/maxresdefault.jpg)](https://youtu.be/YADtH78KfpE)

## Features

- **User Authentication:** Secure user authentication using JWT, OAuth, and traditional ID/password methods.
- **Post Management:** Users can create, edit, and delete posts, with dynamic routing and server-side functionality.
- **Comment System:** Integrated comment management system for user interaction on posts.
- **Dark Mode:** Optional dark mode for a user-friendly interface, managed via cookies and localStorage.
- **Social Login:** Social login functionality using Auth.js, supporting OAuth for seamless user experience.
- **Middleware Integration:** Server-side middleware for enhanced functionality and server action interception.
- **Responsive UI:** Handling of various states including loading, errors, and not-found scenarios.

## Technologies Used

- **Next.js:** A React framework for building server-rendered React applications.
- **MongoDB:** A NoSQL database for managing and storing forum data.
- **JWT & OAuth:** Advanced authentication methods for secure user login and session management.
- **Auth.js:** Used for implementing social login and managing user sessions.
- **CSS & Dark Mode:** Custom CSS for styling and dark mode support using cookies and localStorage.
- **Middleware:** Middleware integration for server-side function interception and additional features.

## Installation and Running the Project

To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/nextjs-forum.git
   cd nextjs-forum
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - Ensure you have MongoDB installed and running.
   - Create a `.env.local` file in the root of the project and add your MongoDB connection string:
     ```plaintext
     MONGODB_URI=your-mongodb-connection-string
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

5. **Running in Production:**
   To run the project in production mode:
   ```bash
   npm run build
   npm start
   ```

## Usage

### Key Functionalities

1. **User Authentication:** 
   - Register or log in using ID/password, JWT, or OAuth.
   - Social login via Auth.js for platforms like Google and GitHub.

2. **Post Creation & Management:**
   - Navigate to the "Create Post" section to start a new discussion.
   - Edit or delete existing posts as needed.

3. **Commenting:**
   - Engage with posts by adding comments.
   - Edit or delete your comments for better control over discussions.

4. **Dark Mode:**
   - Toggle dark mode from the user interface to switch themes.

## Implementation Details

This project was developed following a systematic approach:

1. **MongoDB Integration:** Setting up MongoDB with Next.js for managing forum data.
2. **Dynamic Routing:** Building list and detail views for posts using dynamic routing.
3. **Post Management:** Implementing server-side functionalities for post creation, editing, and deletion.
4. **Authentication:** Implementing JWT, session methods, and OAuth for secure user authentication.
5. **Comment System:** Developing a feature-rich comment system to enhance user interaction.
6. **Dark Mode:** Adding dark mode with support for cookies and localStorage.

## License

This project is licensed under the MIT License.

## Conclusion

The **Next.js Forum Project** serves as a practical guide and a comprehensive example of modern web development using Next.js and MongoDB. It is designed to demonstrate best practices in full-stack development and to showcase the powerful features of Next.js.
