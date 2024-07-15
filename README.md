# Social Network API

Building a robust and scalable social media API using Node.js, Express, and MongoDB. The API is designed to handle large amounts of unstructured data, making it ideal for social networking applications.

## Table of Contents
- [User Management](#user-management)
- [Thoughts and Reactions](#thoughts-and-reactions)
- [Data Handling](#data-handling)
- [API Endpoints](#api-endpoints)
- [Utility Functions](#utility-functions)
- [Middleware](#middleware)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Links](#links)

## Key Features

### User Management
- **User Registration**: Create new user accounts with unique usernames and valid email addresses.
- **User Profiles**: Retrieve, update, and delete user profiles.
- **Friend Management**: Add and remove friends, with a virtual field to count the number of friends.

### Thoughts and Reactions
- **Post Thoughts**: Users can create and manage their thoughts, with each thought supporting up to 280 characters.
- **Reactions**: Users can react to thoughts, similar to comments or replies, with a virtual field to count reactions.

### Data Handling
- **NoSQL Database**: Utilizes MongoDB for efficient handling of unstructured data, ensuring scalability.
- **Mongoose ODM**: Provides schema-based solutions to model data, including custom validation and virtual fields.

### API Endpoints
- Comprehensive CRUD operations for users and thoughts.
- Routes designed to handle user interactions like adding friends and posting reactions.
### Users
- GET `/api/users` - Get all users
- POST `/api/users` - Create a new user
- GET `/api/users/:userId` - Get a single user by ID
- PUT `/api/users/:userId` - Update a user by ID
- DELETE `/api/users/:userId` - Delete a user by ID
- POST `/api/users/:userId/friends/:friendId` - Add a friend to a user
- DELETE `/api/users/:userId/friends/:friendId` - Remove a friend from a user
### Thoughts
- GET `/api/thoughts` - Get all thoughts
- POST `/api/thoughts` - Create a new thought
- GET `/api/thoughts/:thoughtId` - Get a single thought by ID
- PUT `/api/thoughts/:thoughtId` - Update a thought by ID
- DELETE `/api/thoughts/:thoughtId` - Delete a thought by ID
- POST `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

### Utility Functions
- **Date Formatting**: Custom date formatting to present timestamps in a readable format.
- **Error Handling**: Centralized error handling to streamline responses and improve debugging.
- **Response Formatting**: Standardized API responses for consistency.

### Middleware
- Express middleware to parse incoming requests and handle errors efficiently.

## Technical Stack

- **Node.js**: JavaScript runtime for building fast and scalable network applications.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for flexible and scalable data storage.
- **Mongoose**: ODM for MongoDB, providing schema validation and data modeling.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/LuisLaplace/my-network-api.git

2. Install dependencies:
    ```sh
    cd my-network-api
    npm install
3. Install `moment` for date formatting:
    ```sh
    npm install moment

## Usage

1. Start the server:
   ```sh
   npm start

2. Use API testing tools like Insomnia to interact with the API

## Contribution

### Week-18 Mini-project

### Chatgpt

  https://chatgpt.com

## Links

You can find more about my work at https://github.com/LuisLaplace

https://github.com/LuisLaplace/my-network-api