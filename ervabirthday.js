import React, { useState, useEffect } from 'react';

// Main App Component
function App() {
  // birthdayTargetDate and countdown logic commented out for immediate viewing
  // const birthdayTargetDate = new Date('2025-06-24T00:00:00+03:00').getTime();
  const [timeLeft, setTimeLeft] = React.useState(0); // Using React.useState
  const [isBirthday, setIsBirthday] = React.useState(true); // Set to true to bypass countdown
  const [currentPage, setCurrentPage] = React.useState('home'); // State to manage current page

  React.useEffect(() => { // Using React.useEffect
    // The original countdown logic is commented out to ensure the website is always visible.
    // If you wish to re-enable the countdown later, uncomment the 'birthdayTargetDate'
    // and the entire 'calculateTimeLeft' function and its related 'useEffect' logic.
    /*
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = birthdayTargetDate - now;

      if (difference <= 0) {
        setIsBirthday(true);
        setTimeLeft(0);
        return {};
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const initialTime = calculateTimeLeft();
    if (Object.keys(initialTime).length === 0) {
      setIsBirthday(true);
    } else {
      setTimeLeft(initialTime);
    }

    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      if (Object.keys(updatedTime).length === 0) {
        setIsBirthday(true);
        clearInterval(timer);
      } else {
        setTimeLeft(updatedTime);
      }
    }, 1000);

    return () => clearInterval(timer);
    */
  }, []); // Empty dependency array as no dynamic values from external scope are needed for this bypassed state

  // Conditional rendering based on countdown
  // This block is now effectively skipped because isBirthday is always true
  if (!isBirthday) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white font-inter p-4">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 text-center border border-white border-opacity-30">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-pulse">
            Her Special Day Is Coming!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Get ready for a beautiful surprise...
          </p>
          <div className="flex justify-center space-x-4 md:space-x-8 text-2xl md:text-5xl font-bold">
            <CountdownSegment value={timeLeft.days || 0} label="Days" />
            <CountdownSegment value={timeLeft.hours || 0} label="Hours" />
            <CountdownSegment value={timeLeft.minutes || 0} label="Minutes" />
            <CountdownSegment value={timeLeft.seconds || 0} label="Seconds" />
          </div>
          <p className="text-md md:text-lg mt-8 opacity-80">
            (The website will magically appear when the countdown hits zero!)
          </p>
        </div>
      </div>
    );
  }

  // --- Main Website Content (displayed after countdown) ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-300 to-blue-200 font-inter text-gray-800">
      {/* Navigation */}
      <nav className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-lg p-4 md:p-6 sticky top-0 z-50 rounded-b-3xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 md:mb-0">
            Happy Birthday, Erva! 🎉
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <NavLink title="Home" currentPage={currentPage} targetPage="home" onClick={() => setCurrentPage('home')} />
            <NavLink title="My Message" currentPage={currentPage} targetPage="message" onClick={() => setCurrentPage('message')} />
            <NavLink title="Gallery" currentPage={currentPage} targetPage="gallery" onClick={() => setCurrentPage('gallery')} />
            <NavLink title="Friend's Wishes" currentPage={currentPage} targetPage="wishes" onClick={() => setCurrentPage('wishes')} />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mx-auto py-8 px-4">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'message' && <MessagePage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'wishes' && <WishesPage />}
      </div>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center p-6 mt-8 rounded-t-3xl">
        <p>&copy; {new Date().getFullYear()} Created with love for Erva ❤️</p>
      </footer>
    </div>
  );
}

// Reusable Countdown Segment Component
const CountdownSegment = ({ value, label }) => (
  <div className="flex flex-col items-center p-3 bg-white bg-opacity-30 rounded-xl shadow-md min-w-[90px] md:min-w-[120px]">
    <span className="text-white text-3xl md:text-5xl font-extrabold">{String(value).padStart(2, '0')}</span>
    <span className="text-sm md:text-lg text-white opacity-90">{label}</span>
  </div>
);

// Reusable Navigation Link Component
const NavLink = ({ title, currentPage, targetPage, onClick }) => (
  <button
    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out
      ${currentPage === targetPage
        ? 'bg-purple-600 text-white shadow-md'
        : 'bg-transparent text-purple-700 hover:bg-purple-100'
      } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
    onClick={onClick}
  >
    {title}
  </button>
);

// Home Page Component
function HomePage() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-200">
      <h2 className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-6 leading-tight">
        Happy Birthday, My Dearest Erva!
      </h2>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
        Today, the world celebrates the day you came into it, and I'm incredibly grateful for every moment we've shared. This little website is a small token of my immense love for you. I hope it brings a smile to your beautiful face!
      </p>
      <div className="flex justify-center mt-8">
        <img
          src="https://placehold.co/400x300/a78bfa/ffffff?text=Your+Favorite+Picture+Here"
          alt="Birthday celebration"
          className="rounded-3xl shadow-lg max-w-full h-auto"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/ccc/333?text=Image+Load+Error"; }}
        />
      </div>
      <p className="text-md md:text-lg text-gray-600 mt-6">
        Click through the navigation above to explore your special birthday surprises!
      </p>
    </div>
  );
}

// My Message Page Component
function MessagePage() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
      <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6 text-center">
        A Message Just For You
      </h2>
      <div className="prose lg:prose-xl mx-auto text-gray-800 leading-relaxed text-lg">
        <p>My Dearest Erva,</p>
        <p>
          As I sit here writing this, my heart is overflowing with gratitude for having you in my life. You bring so much joy, laughter, and light into my world. Every day with you is an adventure, and I cherish every memory we create together.
        </p>
        <p>
          You are the most incredible person I know – kind, intelligent, beautiful, and endlessly inspiring. Thank you for your unwavering support, your gentle understanding, and for simply being you.
        </p>
        <p>
          I wish you a birthday filled with everything you dream of and more. May this year be your happiest and most successful yet. I promise to always be by your side, loving you, supporting you, and making you smile.
        </p>
        <p className="text-right mt-6 font-semibold">- Anant</p>
      </div>
      <p className="mt-8 text-center text-gray-600">
        (Remember to replace the placeholder text above with your actual, heartfelt message!)
      </p>
    </div>
  );
}

// Gallery Page Component
function GalleryPage() {
  // Replace these with actual image URLs of your girlfriend!
  const photos = [
    { id: 1, src: "https://placehold.co/600x400/FFD1DC/333333?text=Photo+1", alt: "Memory 1" },
    { id: 2, src: "https://placehold.co/600x400/C8A2C8/333333?text=Photo+2", alt: "Memory 2" },
    { id: 3, src: "https://placehold.co/600x400/ADD8E6/333333?text=Photo+3", alt: "Memory 3" },
    { id: 4, src: "https://placehold.co/600x400/90EE90/333333?text=Photo+4", alt: "Memory 4" },
    { id: 5, src: "https://placehold.co/600x400/F0E68C/333333?text=Photo+5", alt: "Memory 5" },
    { id: 6, src: "https://placehold.co/600x400/FFB6C1/333333?text=Photo+6", alt: "Memory 6" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-8 text-center">
        Our Beautiful Moments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="relative group rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/ccc/333?text=Image+Load+Error"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end p-4">
              <p className="text-white text-lg font-semibold">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-gray-600">
        (Remember to replace the placeholder images with your actual photos together!)
      </p>
    </div>
  );
}

// Wishes Page Component
function WishesPage() {
  // Placeholder for friend's wishes. You would manually add these.
  const friendsWishes = [
    { name: "Sarah", wish: "Happy Birthday! Hope you have an amazing day filled with joy and laughter. Love you!" },
    { name: "Mike", wish: "Wishing you the happiest of birthdays, Erva! May all your dreams come true this year." },
    { name: "Jessica", wish: "To my wonderful friend, Happy Birthday! So glad to have you in my life. Let's celebrate soon!" },
    { name: "David", wish: "Happy Birthday! Hope you get spoiled rotten today. You deserve it!" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
      <h2 className="text-3xl md:text-5xl font-bold text-green-600 mb-8 text-center">
        Wishes From Your Amazing Friends!
      </h2>

      {/* Section for displaying wishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {friendsWishes.map((wish, index) => (
          <div key={index} className="bg-purple-50 p-6 rounded-2xl shadow-md border border-purple-100">
            <p className="text-gray-800 text-lg italic mb-3">"{wish.wish}"</p>
            <p className="text-right font-semibold text-purple-700">- {wish.name}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-100 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">How to Add More Wishes:</h3>
        <p className="text-gray-700 mb-4">
          To add more wishes, simply edit the `friendsWishes` array directly in the code for this `WishesPage` component.
          Each wish should be an object with a `name` and a `wish` property, like this:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg text-left text-sm overflow-x-auto my-4 mx-auto max-w-lg">
          <code>
            {`{ name: "Friend's Name", wish: "Their birthday message here!" },`}
          </code>
        </pre>
        <p className="text-gray-700">
          Just add new objects to the `friendsWishes` array, and they will appear here automatically!
        </p>
      </div>
    </div>
  );
}

// Export the main App component as default
export default App;
