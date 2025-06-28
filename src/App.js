import React, { useState } from "react";

// Define the content for each screen
const screens = [
  {
    id: 1,
    title: "👋 Cześć! 👋",
    content: "Dopiero zaczynam naukę programowania i tworzenia stron internetowych.",
    backgroundColor: "#222831",
  },
  {
    id: 2,
    title: "💡 Moja droga 💡",
    content: (
    <>
      Na tej stronie dzielę się swoimi pierwszymi krokami w świecie programowania.
      Uczę się tworzenia stron internetowych z wykorzystaniem technologii takich jak{" "}
      <strong className="font-bold text-white">React</strong> i{" "}
      <strong className="font-bold text-white">TailwindCSS</strong>. Codziennie staram się rozwijać,
      tworzyć nowe projekty i zdobywać doświadczenie.
      <br />
      <br />
      
    </>
  ),
    backgroundColor: "#393E46",
  },
  {
    id: 3,
    title: "💻 Moje Projekty 💻",
    content: (
      <>
        Wszystkie moje projekty znajdziesz na GitHubie{" "}
        <a
          href="https://github.com/oskyrus"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white font-medium hover:text-blue-200 transition-colors duration-200"
        >
          klikając tutaj
        </a>
      </>
    ),
    backgroundColor: "#273F4F",
  },
];

export default function App() {
  const [activeScreenId, setActiveScreenId] = useState(1);

  const handleCircleClick = (id) => {
    setActiveScreenId(id);
  };

  const currentScreen = screens.find((screen) => screen.id === activeScreenId);

  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen p-4 animate-gradient-diagonal"
    style={{
      background: "linear-gradient(135deg, rgb(182, 39, 146), rgb(31, 93, 185), rgb(17, 57, 133))",
      backgroundSize: "400% 400%",
    }}
    >
      {/* Main container */}
      <div
        className="w-full max-w-lg p-6 bg-neutral-200 rounded-xl shadow-lg animate-explode"
        style={{ animationDelay: `${activeScreenId * 0.1}s` }} // Optional delay for smoother transitions
      >
        {/* Content area - now larger */}
        <div
          className="w-full h-80 bg-gray-300 rounded-lg flex flex-col items-center justify-center transition-all duration-500 ease-in-out text-center px-4 md:px-8"
          style={{ backgroundColor: currentScreen?.backgroundColor }}
        >
          <h2 className="text-2xl font-bold text-white px-4">{currentScreen?.title}</h2>
          <p className="mt-4 text-base text-white px-6">{currentScreen?.content}</p>
        </div>

        {/* Circles at the bottom */}
        <div className="flex justify-center mt-6 space-x-3">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => handleCircleClick(screen.id)}
              className={`w-7 h-7 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                activeScreenId === screen.id
                  ? "bg-gray-700 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to ${screen.title} section`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}