const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { nanoid } = require("nanoid");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let inventory = [
  {
    id: nanoid(),
    name: "Laptop",
    category: "Electronics",
    quantity: 35,
    price: 999,
    status: "active",
    createdAt: new Date().toISOString(),
  },
];

// CREATE
app.post("/inventory", (req, res) => {
  const newItem = { id: nanoid(), createdAt: new Date().toISOString(), ...req.body };
  inventory.push(newItem);
  res.status(201).json(newItem);
});

// READ ALL
app.get("/inventory", (req, res) => res.json(inventory));

// READ BY ID
app.get("/inventory/:id", (req, res) => {
  const item = inventory.find((i) => i.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// UPDATE
app.put("/inventory/:id", (req, res) => {
  const index = inventory.findIndex((i) => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Item not found" });
  inventory[index] = { ...inventory[index], ...req.body };
  res.json(inventory[index]);
});

// DELETE
app.delete("/inventory/:id", (req, res) => {
  inventory = inventory.filter((i) => i.id !== req.params.id);
  res.json({ message: "Item deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
