# Chat Application

A real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js), Socket.IO for real-time communication, and styled with Daisy UI.

## Features

- **Real-time Messaging**: Instant messaging between users using Socket.IO.
- **User Authentication**: Secure login and signup functionality.
- **Responsive Design**: Optimized for desktop and mobile using Daisy UI.
- **Typing Indicator**: See when others are typing.
- **Message History**: Stores chat history in MongoDB.

## Technologies Used

- **Frontend**:
  - React.js
  - Daisy UI (Tailwind CSS-based UI library)
- **Backend**:
  - Node.js
  - Express.js
  - Socket.IO
- **Database**:
  - MongoDB (Mongoose for object modeling)

## Installation

### Prerequisites

- Node.js installed on your machine.
- MongoDB database running locally or in the cloud.

### Steps to Install

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies for both client and server:
   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server` folder and add the following:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     PORT=5000
     JWT_SECRET=<your-secret-key>
     ```

4. Start the application:
   - Start the server:
     ```bash
     cd server
     npm start
     ```
   - Start the client:
     ```bash
     cd client
     npm start
     ```

5. Access the application:
   Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

## Features in Detail

### Real-time Messaging
Using Socket.IO, users can send and receive messages instantly.

### Authentication
Secure JWT-based authentication ensures user privacy and data security.

### Responsive Design
Daisy UI provides a clean and responsive design for seamless user experience across devices.

### Persistent Chat History
MongoDB stores user conversations for future reference.


