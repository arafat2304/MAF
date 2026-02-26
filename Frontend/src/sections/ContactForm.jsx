import { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "916356110110"; // WhatsApp number with country code

    const text = `
New Inquiry from Website

Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-green-800">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            For chicks supply, broilers, poultry feed,
            or contract farming inquiries, feel free to contact us.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong> F-9 First Floor Diya Cinema Complex, 100 Feet Road Anand</p>
            <p><strong>📞 Phone:</strong> +91 635611011</p>
            <p><strong>✉ Email:</strong> merchantgroup07@gmail.com</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg space-y-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"
          >
            Send Inquiry on WhatsApp
          </button>
        </motion.form>

      </div>
    </section>
  );
}

export default ContactForm;