import { Link } from 'react-router-dom';

const Navbar = ({ darkMode = false, setDarkMode = () => {} }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Task Manager
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            Home
          </Link>
          <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            Tasks
          </Link>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <span className="text-yellow-300">☀️</span>
            ) : (
              <span className="text-gray-700">🌙</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;