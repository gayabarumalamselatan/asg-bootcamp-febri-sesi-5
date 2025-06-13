import { useState } from "react";
import { clubs } from "../Data/club"; 
import { Link } from "react-router-dom";

const Clubs = () => {
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [viewMode, setViewMode] = useState('grid');
  
  const sortedClubs = [...clubs].sort((a, b) => {
    if (sortOrder === 'A-Z') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white p-6 flex flex-col items-center mt-14">
      <h1 className="text-4xl font-extrabold mb-10">Clubs List</h1>
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="appearance-none bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          aria-label="Sort clubs"
        >
          <option value="A-Z">Name A-Z</option>
          <option value="Z-A">Name Z-A</option>
        </select>
        <div className="flex space-x-3">
          <button
            onClick={() => setViewMode('grid')}
            aria-pressed={viewMode === 'grid'}
            className={`px-5 py-2 rounded-lg font-semibold shadow-md transition-transform transform focus:outline-none focus:ring-4 focus:ring-yellow-400
              ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white'
                  : 'bg-white text-indigo-700 hover:bg-indigo-100'
              }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('list')}
            aria-pressed={viewMode === 'list'}
            className={`px-5 py-2 rounded-lg font-semibold shadow-md transition-transform transform focus:outline-none focus:ring-4 focus:ring-yellow-400
              ${
                viewMode === 'list'
                  ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white'
                  : 'bg-white text-indigo-700 hover:bg-indigo-100'
              }`}
          >
            List View
          </button>
        </div>
      </div>

       <div className={`w-full max-w-6xl ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8' : 'flex flex-col gap-6'}`}>
        {sortedClubs.map((club) => (
          <div
            key={club.id}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col
              ${viewMode === 'list' ? 'md:flex-row' : ''} transition-transform transform hover:scale-[1.03]`}
          >
            <img
              src={club.image}
              alt={club.name}
              className={`${viewMode === 'list' ? 'md:w-48 md:h-auto w-full h-48 object-cover' : 'w-full h-48 object-cover'}`}
              loading="lazy"
            />
            <div className="p-6 flex flex-col justify-between text-indigo-900">
              <div>
                <h2 className="text-2xl font-bold mb-2">{club.name}</h2>
                <p className="text-gray-700">{club.shortDescription}</p>
              </div>
              <Link
                to={`/clubs/${club.id}`}
                className="mt-6 inline-block w-full md:w-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-2 px-6 rounded-xl text-center shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Clubs