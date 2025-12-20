const NUM_STARS = 100;

function getRandomStarProps() {
  const duration = Math.random() * 2 + 6; // 2s to 4s
  const delay = Math.random() * 4;        // 0s to 4s
  return {
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1.5}px`,
    opacity: Math.random() * 0.7 + 0.3,
    duration: `${duration}s`,
    delay: `${delay}s`,
  };
}

export default function StarField() {
  const stars = Array.from({ length: NUM_STARS }, getRandomStarProps);

  return (
    <div className="fixed top-0 left-0 bg-[#0f1328] w-full h-full z-10 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star absolute rounded-full bg-white pointer-events-none"
          style={{
            left: star.left,
            top: "-10px",
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}