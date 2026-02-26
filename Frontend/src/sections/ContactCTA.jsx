import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-green-700 text-white py-16 text-center">
      <h2 className="text-2xl md:text-4xl font-bold">
        Ready to Work with Us?
      </h2>

      <p className="mt-4">
        Interested in working with Merchant Agri Foods? Apply now.
      </p>

      <Link to="/job">
        <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold">
          Apply for Job
        </button>
      </Link>
    </section>
  );
}

export default ContactCTA;