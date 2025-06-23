import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import ApiData from './pages/ApiData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then prefer user's system preference
    return localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Apply dark mode class to HTML element and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="container mx-auto py-8 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/api-data" element={<ApiData />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
