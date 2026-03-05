function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Merchant Agri Foods Pvt Ltd
          </h2>
          <p className="text-sm leading-relaxed">
            Merchant Agri Foods Pvt Ltd is a modern poultry and agri food
            company based in Anand, Gujarat. We provide high quality poultry
            products and advanced farming facilities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-green-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-300">About Us</a>
            </li>
            <li>
              <a href="/facilities" className="hover:text-green-300">Facilities</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">
            Merchant Agri Foods Pvt Ltd
          </p>
          <p className="text-sm">
            Anand, Gujarat, India
          </p>
          <p className="text-sm">
            Email: merchantgroup07@gmail.com
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-8 pt-4 text-center text-sm">
        © 2026 Merchant Agri Foods Pvt Ltd – Poultry Farm in Anand, Gujarat. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;