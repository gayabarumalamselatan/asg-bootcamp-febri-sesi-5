import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { clubs } from '../Data/club';

const ClubDetail = () => {
  const { clubId } = useParams();
  const [club, setClub] = useState(null);
  const [joined, setJoined] = useState(false);
  const [confirmation, setConfirmation] = useState('');

  useEffect(() => {
    const foundClub = clubs.find(c => c.id === clubId);
    setClub(foundClub);

    if (foundClub) {
      const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
      setJoined(joinedClubs.includes(foundClub.id));
    }
  }, [clubId]);

  if (!club) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white p-6 flex items-center justify-center">
        <p className="text-xl">Club not found.</p>
      </main>
    );
  }

  const handleJoinClick = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    if (!joinedClubs.includes(club.id)) {
      joinedClubs.push(club.id);
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
      setJoined(true);
      setConfirmation('You have successfully joined this club!');
      setTimeout(() => setConfirmation(''), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white p-6 flex justify-center items-center">
      <article className="max-w-4xl w-full bg-white text-indigo-900 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row lg:h-96">
        <img
          src={club.image}
          alt={club.name}
          className="w-full md:w-1/2 object-cover h-70 md:h-auto"
          loading="lazy"
        />
        <section className="p-8 flex flex-col justify-between md:w-1/2">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">{club.name}</h1>
            <p className="text-gray-800 mb-6 whitespace-pre-line">{club.description}</p>

            <h2 className="text-2xl font-semibold mb-3">Upcoming Events</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              {club.events.slice(0, 5).map((event, index) => (
                <li key={index}>
                  <span className="font-semibold">{event.name}</span> —{' '}
                  <time dateTime={event.date}>{new Date(event.date).toLocaleDateString()}</time>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {joined ? (
              <p className="px-6 py-3 bg-green-500 rounded-lg text-white font-semibold text-center select-none">
                You have joined this club!
              </p>
            ) : (
              <button
                onClick={handleJoinClick}
                className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transform transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-400"
              >
                Join Club
              </button>
            )}
            {confirmation && (
              <p className="mt-4 text-center font-semibold text-green-600">{confirmation}</p>
            )}
          </div>
        </section>
      </article>
    </main>
  );
};

export default ClubDetail;
