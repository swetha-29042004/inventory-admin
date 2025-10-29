const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      <h1 className="text-2xl font-bold text-gray-700">Inventory Management</h1>

      <div className="flex items-center space-x-4">
        <span className="text-gray-600 font-medium">Welcome, Admin</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </div>
  );
};

export default Navbar;
