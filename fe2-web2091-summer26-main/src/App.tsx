import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import Lab1 from "./labs/lab1/lab1";
import Lab2 from "./labs/Lab2";
import Lab3 from "./labs/Lab3";
import Lab4 from "./labs/lab4";
import Lab5 from "./labs/lab5";



function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/lab2" className="hover:text-gray-200">
              lap2
            </Link>
            <Link to="/lab1" className="hover:text-gray-200">
              lab1
            </Link>
            <Link to="/lab3" className="hover:text-gray-200">
              lab3
            </Link>
            <Link to="/lab4" className="hover:text-gray-200">
              lab4
            </Link>
            <Link to="/Lab5" className="hover:text-gray-200">
              lab5
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/reg" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        {/* <Lab1 /> */}
        {/* <Lab2 /> */}
      </div>


      <Routes>
        <Route path="/lab1" element={<Lab1 />} />
        <Route path="/lab2" element={<Lab2 />} />
        <Route path="/lab3" element={<Lab3 />} />
        <Route path="/lab4" element={<Lab4 />} />
        <Route path="/Lab5" element={<Lab5 />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;