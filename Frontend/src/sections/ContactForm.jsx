import { useState } from "react";

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
    alert("Inquiry sent!");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        
        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold text-green-800">
            Contact Information
          </h2>
          <p className="mt-4 text-gray-600">
            Reach out to us for chicks, broilers, or contract farming.
          </p>

          <div className="mt-6 space-y-4">
            <p><strong>Address:</strong> Your Farm Address Here</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> info@poultryfarm.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-green-50 p-6 rounded-xl shadow space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded border"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded border"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded border"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;