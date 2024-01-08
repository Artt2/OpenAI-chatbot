# OpenAI-chatbot

An AI chatbot web application developed with the MERN stack: **MongoDB**, **Express**, **React** and **Node**, using the [OpenAI API](https://openai.com/blog/openai-api). See all packages and libraries used [here](#Frontend-Packages-and-Libraries).

## Features

- User registration and authentication
- Persistent login utilizing cookies
- Real-time chatting with AI: a personalized ChatGPT experience
- Chat history
- Managing chats
- Responsive and modern UI: suitable for both mobile and desktop

## Technologies used

- Programming Languages: **TypeScript**
- Scripts: package.json configuration 
- Other: **CSS**, **HTML**

## Frontend Packages and Libraries

- **React**
- **Vite**
- **Material-UI**: React UI framework, pre-built components
- **Axios**
- **ESLint**: coding style consistency
- **react-hot-toast**: 
- **react-syntax-highlighter**: syntax highlighting for chat codeblocks
- **react-type-animation**: type animations for fancy UI

## Backend Packages and Libraries
- **Node.js**
- **Express**
- **OpenAI**: communicating with AI through the OpenAI API
- **Mongoose**: databases for MongoDB
- **jsonwebtoken**: cookies, authentication and authorization
- **dotenv**: environment variables
- **bcrypt**: hashing passwords

## Installation

1. Clone the repository and install dependencies for both frontend and backend with 'npm install'.
2. Create a MongoDB database and an OpenAI account. 
3. Create a .env file in the backend and add the following environmental variables:
  - OPEN_AI_SECRET (from your OpenAI profile)
  - OPENAI_ORGANIZATION_ID (from your OpenAI profile)
  - MONGODB_URL (database url)
  - JWT_SECRET (choose one yourself)
  - COOKIE_SECRET (choose one yourself)
  - PORT=3000
  - FRONTEND_URL=http://localhost:5173

## Usage

After installation, start the application with 'npm start'.
Access the chatbot application at [localhost:5173](http://localhost:5173).

## Sources

Based partly on a tutorial found [here](https://www.youtube.com/watch?v=wrHTcjSZQ1Y).