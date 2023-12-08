# AlloMedia Delivery Platform and CI/CD Pipeline Project - README <img src="https://markdown.land/wp-content/uploads/2021/06/markdown-512px.png" width="60" align="right">
[![GitHub
license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/youssefhammani/marhaba-delivery-service/blob/main/LICENSE)

![Docker Image](https://media.licdn.com/dms/image/C4D12AQFuH4LIRsYb5w/article-cover_image-shrink_720_1280/0/1600912999763?e=2147483647&v=beta&t=76Inq8tEHqmx6CM5SjSzU6em6B4Vg1T0Nu-Q9ZxbsRg)

<!-- ![Docker Image](https://media.geeksforgeeks.org/wp-content/uploads/20210915020701/Readme1.png) -->

## AlloMedia Delivery Platform

The AlloMedia Delivery Platform is crafted to simplify the ordering and delivery of food, fostering a smooth interaction between three key user roles :

1. **Clients :**
   - _Individuals placing food orders through the platform._

2. **Delivery Persons :**
   - _Individuals responsible for transporting orders from restaurants to clients._

3. **Restaurant Managers :**
   - _Professionals overseeing the restaurant's presence and operations on the platform._

This platform is designed to optimize and streamline the entire food delivery process, providing a user-friendly experience for clients, efficient logistics for delivery persons, and effective management tools for restaurant managers.

## AlloMedia CI/CD Pipeline Project

The AlloMedia CI/CD Pipeline Project is dedicated to establishing a resilient and automated workflow for the AlloMedia application's development lifecycle. The project's README.md serves as a comprehensive guide for developers, offering clarity on project objectives and step-by-step instructions for the following key aspects:

1. **Automated Testing :**
   - _Guidelines on setting up and executing automated tests to ensure the reliability and stability of the AlloMedia application._

2. **Docker Integration :**
   - _Instructions for incorporating Docker into the development process, facilitating consistency and portability across different environments._

3. **CI/CD (Continuous Integration/Continuous Deployment :)**
   - _Details on implementing a CI/CD pipeline, enabling continuous integration of code changes and automated deployment to streamline the development and release process._

4. **AWS Deployment :**
   - _Steps for deploying the AlloMedia application on the Amazon Web Services (AWS) cloud infrastructure, ensuring scalability and reliability._

This **`README.md`** is a valuable resource for developers involved in the AlloMedia CI/CD Pipeline Project, providing the necessary information to contribute to the project's success and maintain a high level of automation throughout the application's development and deployment lifecycle.

## Table of Contents

- [AlloMedia Delivery Platform and CI/CD Pipeline Project - README ](#allomedia-delivery-platform-and-cicd-pipeline-project---readme-)
  - [AlloMedia Delivery Platform](#allomedia-delivery-platform)
  - [AlloMedia CI/CD Pipeline Project](#allomedia-cicd-pipeline-project)
  - [Table of Contents](#table-of-contents)
  - [Project Context](#project-context)
    - [Actors](#actors)
    - [Features](#features)
      - [For the Client](#for-the-client)
      - [For the Delivery Person](#for-the-delivery-person)
      - [For the Restaurant Manager](#for-the-restaurant-manager)
  - [List of Required Libraries/Frameworks](#list-of-required-librariesframeworks)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
    - [Authentication and Authorization](#authentication-and-authorization)
    - [Real-time Notifications](#real-time-notifications)
    - [Geolocation Management](#geolocation-management)
    - [Security](#security)
    - [Tests](#tests)
  - [Installation and Usage Guide](#installation-and-usage-guide)
    - [Backend Installation](#backend-installation)
      - [Prerequisites](#prerequisites)
      - [Steps](#steps)
    - [Frontend Installation](#frontend-installation)
      - [Prerequisites](#prerequisites-1)
      - [Steps](#steps-1)
    - [Application Usage](#application-usage)
  - [How to Use the API](#how-to-use-the-api)
  - [API Documentation](#api-documentation)
  - [Testing](#testing)
  - [Docker Setup Guide](#docker-setup-guide)
  - [Professional CI/CD Guide](#professional-cicd-guide)
  - [Conclusion](#conclusion)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)


## Project Context

While working on the same **`AlloMedia`** delivery project, different actors interact:

### Actors

1. **Client** - The user who wants to place an order with a restaurant.
2. **Delivery Person** - The user responsible for delivering orders.
3. **Restaurant Manager** - The user who manages orders and the restaurant's menu.

### Features

#### For the Client

As a client, you have access to the following features:

- **Restaurant Search :**
  - The ability to search for restaurants by name, cuisine type, location, etc.
  
- **Place an Order :**
  - View the menu, add items to the cart, and complete the order.

- **Order Tracking :**
  - Monitor the order status in real-time.

#### For the Delivery Person

- **Receive Orders :**
  - Receive notifications when a new order is ready for delivery.

- **Delivery Confirmation :**
  - Confirm delivery once the order is completed.

#### For the Restaurant Manager

- **Menu Management :**
  - Add, modify, or remove items from the menu.

- **Order Management :**
  - View new orders, accept or reject them, and update their status.

## List of Required Libraries/Frameworks

### Frontend

- **React :**
  - For developing the user interface using reusable components.
  
- **React Router :**
  - Handling routes and navigation in the React application.

- **Axios :**
  - Making HTTP requests to the backend.

- **Redux :**
  - Managing the global state of the application, especially for authentication.

### Backend

- **Node.js :**
  - Execution environment for the backend.

- **Express.js :**
  - Creating RESTful APIs and handling HTTP requests.

- **Socket.IO :**
  - Low-latency real-time communication for notifying new orders.

### Database

- **NoSQL Database (MongoDB) :**
  - Storing semi-structured data, such as real-time notifications.

### Authentication and Authorization

- **JSON Web Tokens (JWT) :**
  - Authenticating users and managing permissions.

### Real-time Notifications

- **WebSocket (Socket.IO) :**
  - Sending notifications to clients, delivery persons, and restaurant managers.

### Geolocation Management

- **Geolocation API (Google Maps API):**
  - Allowing clients to search for nearby restaurants and enabling delivery persons to track their route.

### Security

- **Web Security Practices :**
  - Protecting the application against common attacks, such as SQL injection and data validation.

### Tests

- **Test Frameworks (Jest) :**
  - Testing the application.

## Installation and Usage Guide

The following guide provides step-by-step instructions on how to install and use the AlloMedia project, including both the backend and frontend components.

### Backend Installation

#### Prerequisites

- `Node.js` installed on your machine.
- `MongoDB` server running locally or accessible.

#### Steps

To set up and run this project locally, follow these steps:

1. **Clone the repository :**

   ```bash
   git clone https://github.com/[username]/[project-name].git
   ```

2. **Navigate to the project directory :**

   ```bash
   cd your-repo-name
   ```

3. **Navigate to the Backend Folder :**

   ```bash
   cd backend
   ```

4. **Install Dependencies :**

   ```bash
   npm install
   ```

5. **Set up environment variables :**

   - Create a `.env` file in the root of the project and add the required environment variables.
   - Fill it with necessary credentials for database connection, mail server configuration, etc.
   - For example:

      ```env
      PORT=3000
      MONGODB_URI=mongodb://localhost:27017/your-database-name
      JWT_SECRET=your-secret-key
      ```

   - Make sure to replace the values with your specific configuration.

6. **Run the Server :**

   ```bash
   npm run dev
   ```

7. **Access API Documentation :**

- Explore detailed API documentation at [API Documentation](documents/api-docs.md).

### Frontend Installation

#### Prerequisites

- `Node.js` installed on your machine.

#### Steps

To set up and run this project locally, follow these steps:

1. **Navigate to the project directory :**

   ```bash
   cd your-repo-name
   ```

2. **Navigate to the Frontend Folder :**

   ```bash
   cd frontend
   ```

3. **Install Dependencies :**

   ```bash
   npm install
   ```

4. **Run The Development Server :**

   ```bash
   npm run dev
   ```

5. **Access the Application :**

    The Vite development server has started, and it provides two URLs for accessing the application:

   ```bash
   VITE v4.5.0  ready in 246 ms
   
   ➜  Local:   http://localhost:5173/
   ➜  Network: http://172.16.9.28:5173/
   ➜  press h to show help
   ```

   - 5\. 1) *Open the Application in a Web Browser :*
     - Copy either the local or network URL and paste it into the address bar of your preferred web browser.

   - 5\. 2) *Access the Application Locally :*
     - If you're working on the same machine where the Vite server is running, use the local URL http://localhost:5173/.

   - 5\. 3) *Access the Application from Another Device :*
     - If you want to access the application from another device on the same network, use the network URL http://172.16.9.28:5173/.

   - 5\. 4) *Optional: Show Help in the Terminal :*
     - The message suggests that you can press 'h' to show help in the terminal. If you're curious, you can press the 'h' key in the terminal where the Vite server is running to get additional information or help.

   - 5\. 5) *Enjoy Exploring the Application :*
     - Once you've accessed the application URL in your web browser, you should be able to explore and interact with the web application served by Vite.

6. **Open Postman For Professional API Testing :**

    - Utilize [Postman](https://www.postman.com/) or a similar tool for professional API testing and interaction with the documented endpoints. [Click here](documents/api-docs.md) to access the documentation.

### Application Usage

1. **Explore Features :**

   - _`Client :`_   Search for restaurants, place orders, and track order status.

   - _`Delivery Person :`_  Receive order notifications and confirm deliveries.

   - _`Restaurant Manager :`_   Manage the menu, view, and update order status.

2. **API Interaction :**

   - Use tools like [Postman](https://www.postman.com/) to test and interact with the API.

   - API documentation is available at [API Documentation](documents/api-docs.md).

3. **Contribute and Test :**
    - Refer to [CONTRIBUTING.md](documents/CONTRIBUTING.md) for guidelines on contributing to the project.

4. **Run Tests :**

    - Execute tests using the following command:

    ```bash
    npm test
    ```

**Conclusion :** The `AlloMedia` project provides a seamless and efficient solution for food delivery processes. Follow these instructions to install and explore the features of both the backend and frontend components. For contributing, refer to the [CONTRIBUTING.md](documents/CONTRIBUTING.md) file. If you encounter any issues, check the API documentation or contribute to the project for continuous improvement. 

## How to Use the API

To interact with the API, use the following endpoints:

- Base URL: `http://localhost:3000`
  
- API Version 1: `/api/v1`

Example to access specific features:

- Clients: `/api/v1/users`
- Delivery Persons: `/api/v1/drivers`
- Restaurant Managers: `/api/v1/restaurants`

**Note :** Explore other features by adjusting endpoints accordingly, For detailed information on the API endpoints and how to use them, please refer to our [API Documentation](documents/api-docs.md).

## API Documentation

- For detailed information on the API endpoints and how to use them, please refer to our [API Documentation](documents/api-docs.md).

## Testing

- The app uses Jest as its testing framework. To run tests, simply type: 

   ```bash
   npm test
   ```

## Docker Setup Guide

- For comprehensive details on configuring Docker and utilizing its features, please consult our [Docker Setup Guide](documents/Docker_Setup_Guide.md).

## Professional CI/CD Guide

- For a comprehensive guide on setting up Professional CI/CD processes, please refer to our [Professional CI/CD Guide](documents/ci-cd-guide.md).

## Conclusion

The **`AlloMedia`** Delivery Platform aims to enhance the overall food ordering and delivery experience by providing a seamless and efficient solution for _`clients, delivery persons`_, and _`restaurant managers`_.

## Contributing

- Please follow the guidelines in [CONTRIBUTING.md](documents/CONTRIBUTING.md) to contribute to this project.

## License

- This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [github.com/youssefhammani](https://github.com/youssefhammani)
- Email: [yhammani.dev@gmail.com](mailto:yhammani.dev@gmail.com)
