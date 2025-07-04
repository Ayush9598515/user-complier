import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-4 sm:px-10 py-10 transition-colors duration-300">
      {/* ✅ Centered Hello Username Section */}
      {username && (
        <div className="flex items-center justify-center mb-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-mono text-blue-500">
              <span className="text-green-500">Hello,</span> {username} 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 font-mono">
              Welcome back to your coding dojo 🧠💻
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium mb-2">
          ✨ New Era of Coding ✨
        </p>
        <h2 className="text-4xl font-bold mb-4">Master Your Coding Journey</h2>
        <p className="text-gray-700 dark:text-gray-400 mb-6">
          Transform your programming skills with our revolutionary platform.
          Practice algorithms, compete with peers, and unlock your coding potential.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Start Coding Now →
        </button>
      </section>

      {/* Motivation Section */}
      <section className="bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl text-center transition-colors">
        <h3 className="text-2xl font-semibold mb-2">🚀 Daily Coding Motivation</h3>
        <p className="text-gray-700 dark:text-gray-400">
          “Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.” — Patrick McKenzie
        </p>
      </section>
    </div>
  );
};

export default Home;
