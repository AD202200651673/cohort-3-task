import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState } from "@/store/Store";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <nav className="h-16 w-full flex items-center justify-between px-8">
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className="font-bold text-2xl cursor-pointer"
        >
          EaseUi
        </h1>

        <div className="hidden sm:flex items-center bg-transparent rounded-md px-3 py-1.5 shadow-xs shadow-gray-300 border border-gray-200">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search components"
            className="ml-2 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-6 text-gray-500">
        <li
          onClick={() => navigate("components/button")}
          className="cursor-pointer hover:text-black"
        >
          Components
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => dispatch(toggleTheme())}
          aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${mode === "dark" ? "light" : "dark"} theme`}
        >
          {mode === "dark" ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-600 dark:text-gray-400" />
          )}
        </button>
        <button type="button" className="md:hidden text-gray-700 dark:text-gray-300">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
