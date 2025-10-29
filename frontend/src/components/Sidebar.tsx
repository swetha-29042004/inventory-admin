import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = ["Dashboard", "Inventory", "Orders", "Reports", "Settings"];

  return (
    <div
      className={`${
        open ? "w-64" : "w-16"
      } bg-gray-900 text-white h-screen p-5 pt-8 relative duration-300`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-9 bg-white text-gray-900 rounded-full p-1"
      >
        {open ? "<" : ">"}
      </button>

      <div className="flex gap-x-4 items-center">
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Admin Panel
        </h1>
      </div>

      <ul className="pt-6">
        {menus.map((menu) => (
          <li
            key={menu}
            className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-2"
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
