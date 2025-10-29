import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      {/* Right side content (Navbar + Dashboard) */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}
export default App;
