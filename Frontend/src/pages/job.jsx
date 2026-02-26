import { useState } from "react";

function Job() {

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    cv: null
  });

  const handleChange = (e) => {

    if (e.target.name === "cv") {
      setForm({
        ...form,
        cv: e.target.files[0]
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    }
  };

  const sendWhatsApp = () => {

const message =
`Job Application

Name: ${form.name}
Address: ${form.address}
Phone: ${form.phone}
Email: ${form.email}

Please attach your CV file before sending.`;

const whatsappURL =
"https://wa.me/916356110110?text=" + encodeURIComponent(message);

window.location.href = whatsappURL;

};

  return (

    <section className="py-16 max-w-3xl mx-auto px-4">

      <h2 className="text-3xl font-bold text-center mb-8">
        Job Application Form
      </h2>

      <div className="space-y-4">

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Full Address"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />
        
        <button
          onClick={sendWhatsApp}
          className="bg-green-700 text-white w-full py-3 rounded-lg font-semibold hover:bg-green-800"
        >
          Submit Application
        </button>

      </div>

    </section>
  );
}

export default Job;