const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 px-6 py-20 flex flex-col items-center"
    >
      {}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 tracking-tight">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          At{" "}
          <span className="font-semibold text-blue-700">DentalCare Clinic</span>, 
          we are dedicated to creating <span className="font-medium text-gray-900">healthy, confident smiles</span>. 
          Our clinic combines <span className="text-blue-600">advanced dental technology</span> 
          with a warm and welcoming environment, ensuring you and your family feel 
          comfortable at every visit.
        </p>
      </div>

      {}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mb-20">
        {}
        <div className="w-full h-[26rem] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/pic3.jpg"
            alt="Dr. Sayena Mashkouri"
            className="w-full h-full object-cover hover:grayscale transition duration-300"
          />
        </div>

        {}
        <div>
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">
            Meet <span className="text-gray-900">Dr. Sayena Mashkouri</span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With years of expertise in family and cosmetic dentistry, 
            Dr. Mashkouri is passionate about helping patients achieve 
            the smile they’ve always dreamed of. She is known for her 
            <span className="font-medium text-gray-900"> gentle approach</span> 
            and <span className="font-medium text-gray-900">commitment to patient comfort</span>.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            From routine checkups to advanced cosmetic treatments, 
            she ensures every patient receives{" "}
            <span className="text-blue-600 font-medium">personalized, high-quality care</span>.
          </p>
        </div>
      </div>

      {}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        {}
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6">
            Why Choose Us?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Experienced and friendly dental team
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              State-of-the-art technology
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Personalized treatment plans
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              Comfortable, patient-centered environment
            </li>
          </ul>
        </div>

        {}
        <div className="w-full h-[26rem] rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
          <img
            src="/pic4.jpg"
            alt="Dental Care"
            className="w-full h-full object-cover hover:grayscale transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;