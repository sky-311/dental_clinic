const Services = () => {
  const services = [
    {
      title: "Teeth Cleaning",
      desc: "Professional cleaning to maintain healthy gums and teeth.",
      img: "/pic.jpg",
    },
    {
      title: "Root Canal",
      desc: "Advanced treatment to save infected teeth.",
      img: "/pic2.jpg",
    },
    {
      title: "Braces & Orthodontics",
      desc: "Align and straighten teeth for a perfect smile.",
      img: "/pic.jpg",
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Whitening and cosmetic procedures for a confident look.",
      img: "/pic2.jpg",
    },
    {
      title: "Dental Implants",
      desc: "Durable implants to replace missing teeth.",
      img: "/pic.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-white px-6 py-20"
    >
      {}
      <div className="max-w-2xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We offer a wide range of dental treatments designed to keep your smile
          healthy, bright, and confident.
        </p>
      </div>

      {}
      <div className="flex flex-col space-y-16 w-full max-w-6xl">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-72 object-cover transform hover:scale-105 transition duration-700"
              />
            </div>

            {}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;