import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white px-4 py-20">
      <section className="max-w-4xl w-full flex flex-col items-center text-center space-y-12 px-4">
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Welcome to Campus Club Finder
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto">
            Discover student clubs that match your interests, connect with peers,
            and join communities to make the most of your university experience.
          </p>
          <Link
            to="/clubs"
            className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
              hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 
              text-white font-semibold rounded-lg px-8 py-4 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400"
          >
            Explore Clubs
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

