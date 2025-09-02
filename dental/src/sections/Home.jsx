const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src="/pic.jpg" // ✅ image from public folder
          alt="Family"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side with Image + Text Overlay */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <img
          src="/pic2.jpg" // ✅ second image from public folder
          alt="Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute max-w-lg text-center md:text-left text-white px-6">
          <p className="uppercase tracking-widest text-sm text-blue-400 mb-2">
            Advanced Dental Techniques
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Family Dentistry
          </h1>
          <p className="text-lg mb-6">Dr. Sayena Mashkouri</p>

          <button className="bg-black text-white px-6 py-3 rounded font-semibold uppercase tracking-wide hover:bg-gray-800 transition">
            Book Appointment →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
