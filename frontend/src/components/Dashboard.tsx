import { useEffect, useState } from "react";
import axios from "axios";
import ChartSection from "./ChartSection";

const API_URL = "http://localhost:5000/inventory";

const Dashboard = () => {
  const [inventory, setInventory] = useState<any[]>([]);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    status: "active",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // ✅ READ - Fetch all inventory items
  const fetchInventory = async () => {
    const res = await axios.get(API_URL);
    setInventory(res.data);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // ✅ CREATE
  const handleAdd = async () => {
    if (!newItem.name || !newItem.category || !newItem.quantity || !newItem.price) return;
    await axios.post(API_URL, {
      ...newItem,
      quantity: Number(newItem.quantity),
      price: Number(newItem.price),
    });
    setNewItem({ name: "", category: "", quantity: "", price: "", status: "active" });
    fetchInventory();
  };

  // ✅ DELETE with confirmation
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await axios.delete(`${API_URL}/${id}`);
      fetchInventory();
    }
  };

  // ✅ EDIT
  const handleEdit = (item: any) => {
    setNewItem({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      price: item.price,
      status: item.status,
    });
    setEditId(item.id);
  };

  // ✅ UPDATE
  const handleUpdate = async () => {
    await axios.put(`${API_URL}/${editId}`, {
      ...newItem,
      quantity: Number(newItem.quantity),
      price: Number(newItem.price),
    });
    setEditId(null);
    setNewItem({ name: "", category: "", quantity: "", price: "", status: "active" });
    fetchInventory();
  };

  // ✅ TOGGLE STATUS
  const handleToggleStatus = async (item: any) => {
    const updatedStatus = item.status === "active" ? "inactive" : "active";
    await axios.put(`${API_URL}/${item.id}`, { ...item, status: updatedStatus });
    fetchInventory();
  };

  // ✅ SEARCH & FILTER logic
  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ? true : item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory Dashboard</h1>

      {/* Add/Edit Form */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">
          {editId ? "Edit Item" : "Add New Item"}
        </h2>

        <div className="grid grid-cols-4 gap-3 mb-3">
          <input
            className="border rounded p-2"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            className="border rounded p-2"
            placeholder="Category"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          />
          <input
            className="border rounded p-2"
            placeholder="Quantity"
            type="number"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          />
          <input
            className="border rounded p-2"
            placeholder="Price"
            type="number"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
        </div>

        <button
          onClick={editId ? handleUpdate : handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editId ? "Update Item" : "Add Item"}
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="border rounded p-2 w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border rounded p-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Inventory Table</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.category}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">${item.price}</td>
                <td className="border p-2 text-center">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      item.status === "active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="border p-2 space-x-2 text-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleToggleStatus(item)}
                    className={`px-3 py-1 rounded text-white ${
                      item.status === "active"
                        ? "bg-gray-400 hover:bg-gray-500"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {item.status === "active" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <ChartSection />
    </div>
  );
};

export default Dashboard;

