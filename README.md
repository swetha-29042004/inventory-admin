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
git clone <https://github.com/swetha-29042004/inventory-admin.git>
cd inventory-admin

2️⃣ Backend Setup

Navigate to backend folder:

cd backend

Install dependencies:

npm install

Start the backend server:

npx nodemon server.js


Backend runs at:

http://localhost:5000

Implemented endpoints:

POST /inventory → Add new item

GET /inventory → Get all items

GET /inventory/:id → Get item by ID

PUT /inventory/:id → Update item

DELETE /inventory/:id → Delete item

3️⃣ Frontend Setup

Open a new terminal, go to frontend:

cd frontend


Install dependencies:

npm install


Start the frontend app:

npm run dev


Frontend runs at:

http://localhost:5173




