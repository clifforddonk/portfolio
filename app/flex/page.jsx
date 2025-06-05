import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
        <div className="text-xl font-bold">MySite</div>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 flex-1 bg-gray-100">
        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <div class="flex justify-center mb-4">
            <svg
              class="w-12 h-12 text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            Available Balance
          </h3>
          <p class="text-3xl font-bold text-purple-600 mb-2">$2,847.50</p>
          <p class="text-sm text-gray-600">Ready for withdrawal</p>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <div class="flex justify-center mb-4">
            <svg
              class="w-12 h-12 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 6H4zm6.5-6L7 8.5V4h3l6.5 6.5-6 6z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Total Referrals</h3>
          <p class="text-3xl font-bold text-blue-600 mb-2">89</p>
          <p class="text-sm text-gray-600">Active referrals</p>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 text-center">
          <div class="flex justify-center mb-4">
            <svg
              class="w-12 h-12 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Total Earnings</h3>
          <p class="text-3xl font-bold text-green-600 mb-2">$12,543.25</p>
          <p class="text-sm text-gray-600">All time earnings</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2025 MySite. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
