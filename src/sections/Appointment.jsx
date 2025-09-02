const Appointment = () => {
  return (
    <section
      id="appointment"
      className="min-h-screen bg-blue-50 px-6 py-16 flex flex-col items-center"
    >
      {}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Book an Appointment
        </h2>
        <p className="text-lg text-gray-700">
          Schedule your visit with our dental experts today. 
          Fill out the form below and we’ll confirm your appointment.
        </p>
      </div>

      {}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {}
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/pic4.jpg"
            alt="Dental Appointment"
            className="w-full h-full object-cover hover:grayscale transition duration-300"
          />
        </div>

        {}
        <form className="bg-white p-8 rounded-xl shadow-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-blue-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:outline-blue-600"
            />
            <input
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-blue-600"
            />
          </div>

          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg mt-4 focus:outline-blue-600"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg mt-6 hover:bg-blue-800 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;