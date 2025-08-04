
export default function Projects() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6">
      <div className="max-w-6xl mx-auto cursor-pointer">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A showcase of my work in web development, React, and full-stack applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Project 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">OTP Generator</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A simple React-based app to generate and copy OTP codes. Includes copy-to-clipboard functionality.
            </p>
            <span className="inline-block bg-black dark:bg-white dark:text-black text-white text-sm px-3 py-1 rounded-full">
              <a href="https://github.com/eezy-10/03otpGenerator">Code Link</a>
            </span>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Currency Converter</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A currency converter app built in React using a custom hook and external API to fetch live rates.
            </p>
            <span className="inline-block bg-black dark:bg-white dark:text-black text-white text-sm px-3 py-1 rounded-full">
              <a href="https://github.com/eezy-10/04currencyConverter">Code Link</a>
            </span>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">E-Commerce App</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A full-stack MERN e-commerce platform with user auth, product CRUD, and cart functionality.
            </p>
            <span className="inline-block bg-black dark:bg-white dark:text-black text-white text-sm px-3 py-1 rounded-full">
              <a href="https://github.com/eezy-10/E-Commerce-App">Code Link</a>
            </span>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">To-Do List Maker</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A dynamic to-do app using JavaScript and DOM manipulation. Add, edit, and delete tasks in real time.
            </p>
            <span className="inline-block bg-black dark:bg-white dark:text-black text-white text-sm px-3 py-1 rounded-full">
              <a href="https://github.com/eezy-10/todos">Code Link</a>
            </span>
          </div>

          {/* Project 5 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Node.js APIs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Developed multiple APIs using Express and MongoDB for data handling, routing, and CRUD operations.
            </p>
            <span className="inline-block bg-black dark:bg-white dark:text-black text-white text-sm px-3 py-1 rounded-full">
              Node.js + Express
            </span>
          </div>

          {/* Project 6 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Data Science Snippets</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Python scripts for data analysis using Pandas, NumPy, and Matplotlib for visualizations and insights.
            </p>
            <span className="inline-block bg-black dark:bg-white dark:text-black text-white text-sm px-3 py-1 rounded-full">
              Python + DS
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}