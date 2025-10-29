# Inventory Admin Panel

Simple Admin Panel for Inventory (React + TypeScript + Tailwind frontend, Node.js + Express + lowdb backend).

## Features
- Full CRUD for Inventory items
- List with search & filters (category, status)
- Add/Edit modal with validation
- Delete confirmation
- Status toggle
- Zustand for state management
- Toast notifications

## Tech stack
- Frontend: React + TypeScript + Vite + Tailwind CSS + Zustand + Axios + react-hot-toast
- Backend: Node.js + Express + lowdb (JSON file persistence)+


## Setup and Instructions

 ## 1.Clone the repository:

<pre> git clone <https://github.com/swetha-29042004/inventory-admin.git>

cd inventory-admin </pre>

 ## 1.Backend Setup:

Navigate to backend folder:

<pre> cd backend </pre>

Install dependencies:

<pre> npm install </pre>

Start the backend server:

<pre> npx nodemon server.js  </pre>


Backend runs at:

<pre> http://localhost:5000  </pre>

 Implemented endpoints:

POST /inventory → Add new item

GET /inventory → Get all items

GET /inventory/:id → Get item by ID

PUT /inventory/:id → Update item

DELETE /inventory/:id → Delete item  

## 3.Frontend Setup:

Open a new terminal, go to frontend:

<pre> cd frontend  </pre>


Install dependencies:

<pre> npm install  </pre>


Start the frontend app:

<pre> npm run dev  </pre>


Frontend runs at:

<pre> http://localhost:5173 </pre>




