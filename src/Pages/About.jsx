
const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white px-6 py-20 flex items-center justify-center">
      <article className="max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl text-center">
        <h1 className="text-4xl font-extrabold mb-6">About Campus Club Finder</h1>
        <p className="mb-4 text-lg leading-relaxed">
          Campus Club Finder is a modern web application designed to help university students discover, learn about, and join student clubs easily and intuitively.
          The app provides a simple way to explore various clubs on campus, view their details and upcoming events, and join clubs with just a click.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          This app is built using the latest web technologies to ensure a fast, responsive, and accessible user experience:
        </p>
        <ul className="list-disc list-inside text-lg mb-6 space-y-2">
          <li><strong>React:</strong> For building a reactive and component-based user interface.</li>
          <li><strong>Vite:</strong> As the build tool and development server for fast, modern workflows.</li>
          <li><strong>Tailwind CSS:</strong> For utility-first, responsive, and customizable styling.</li>
          <li><strong>React Router v7:</strong> For client-side routing and seamless navigation between pages.</li>
        </ul>
        <p className="text-lg">
          We hope this tool helps you connect with communities and make the most of your campus life!
        </p>
      </article>
    </main>
  );
};

export default About;
