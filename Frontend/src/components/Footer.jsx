import { Link } from "react-router-dom";

function Footer() {
return ( 
<footer className="bg-green-900 text-white">

  <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

    {/* Company Info */}
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Merchant Agri Foods Pvt Ltd
      </h2>

      <p className="text-sm leading-relaxed text-green-100">
        Merchant Agri Foods Pvt Ltd is a modern poultry and agri food
        company based in Anand, Gujarat. We specialize in poultry breeding,
        hatchery operations, broiler farming, and high quality poultry feed
        production using advanced farming practices.
      </p>
    </div>


    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Quick Links
      </h3>

      <ul className="space-y-2 text-sm">

        <li>
          <Link
            to="/"
            className="text-green-100 hover:text-white transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="text-green-100 hover:text-white transition"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="text-green-100 hover:text-white transition"
          >
            Contact
          </Link>
        </li>

      </ul>
    </div>


    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Contact
      </h3>

      <p className="text-sm text-green-100">
        Merchant Agri Foods Pvt Ltd
      </p>

      <p className="text-sm text-green-100">
        Anand, Gujarat, India
      </p>

      <p className="text-sm mt-2">
        Email:{" "}
        <a
          href="mailto:merchantgroup07@gmail.com"
          className="text-green-200 hover:text-white"
        >
          merchantgroup07@gmail.com
        </a>
      </p>
    </div>

  </div>


  {/* Bottom */}
  <div className="border-t border-green-800 text-center text-sm text-green-200 py-4 px-4">
    © 2026 Merchant Agri Foods Pvt Ltd – Poultry Farm in Anand, Gujarat.
    All rights reserved.
  </div>

</footer>
);
}

export default Footer;
