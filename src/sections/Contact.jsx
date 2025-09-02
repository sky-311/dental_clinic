const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Have questions or need to book an appointment? We’d love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          <div>
            <img
              src="/pic.jpg"
              alt="Location"
              className="mx-auto mb-4 w-16 h-16 object-cover rounded-full shadow-md"
            />
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Our Location
            </h3>
            <p>Jind, Haryana</p>
          </div>

          <div>
            <img
              src="/pic2.jpg"
              alt="Call"
              className="mx-auto mb-4 w-16 h-16 object-cover rounded-full shadow-md"
            />
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Call Us
            </h3>
            <p>📞 +91 98765 43210</p>
          </div>

          <div>
            <img
              src="/pic.jpg"
              alt="Email"
              className="mx-auto mb-4 w-16 h-16 object-cover rounded-full shadow-md"
            />
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Email
            </h3>
            <p>✉️ contact@dentalcare.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
