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


Setup Instructions

1️⃣ Clone the Repository
git clone <your-repo-link>
cd inventory-admin

2️⃣ Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Start the backend server:

npx nodemon server.js


The backend will run on:

http://localhost:5000


✅ Available API endpoints:

POST /inventory → Add new item

GET /inventory → Get all items

GET /inventory/:id → Get item by ID

PUT /inventory/:id → Update item

DELETE /inventory/:id → Delete item

3️⃣ Frontend Setup

Open a new terminal and navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the frontend app:

npm run dev


Open your browser at:

http://localhost:5173


The frontend will now connect to the backend CRUD APIs automatically.

4️⃣ Using the Admin Panel

Add Item: Fill out the form at the top → click “Add Item”

Edit Item: Click the Edit button in the table → modify values → click “Update Item”

Delete Item: Click Delete button → item removed

Toggle Status: (If implemented) Click status badge to switch Active/Inactive

View Trends: Scroll down to see the inventory chart

5️⃣ Optional / Bonus

Deploy frontend on Vercel and backend on Render / AWS Lambda

Add toast notifications using react-hot-toast

Implement state management using Zustand for larger apps

6️⃣ Folder Structure
inventory-admin/
 ┣ frontend/        # React + Tailwind app
 ┃  ┣ src/
 ┃  ┣ package.json
 ┣ backend/         # Node.js + Express API
 ┃  ┣ server.js
 ┃  ┣ package.json
 ┗ README.md
