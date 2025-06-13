import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-6xl font-extrabold mb-6">404</h1>
      <p className="text-2xl mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
