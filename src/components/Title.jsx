const Title = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center space-y-6 mb-16">
      <div className="relative">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
          {title}
        </h2>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 blur-xl rounded-xl" />
      </div>
      <p className="text-sm md:text-lg text-gray-400 font-medium italic tracking-wide">
        &quot;{subtitle}...&quot;
      </p>
      <div className="animate-pulse mt-4 w-6 h-6 border-4 border-dashed border-cyan-400 rounded-full" />
    </div>
  );
};

export default Title;
