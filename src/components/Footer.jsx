const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 mt-0 border-t border-white/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          {/* Logo (Replace with actual image if needed) */}
          <div className="w-6 h-6 bg-[#C2FF44] flex justify-center items-center rounded-md">
            <span className="text-black font-bold">M</span>
          </div>
          <span className="text-lg font-bold">Moovin</span>
        </div>

        {/* Product Links */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Product</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Web designing</li>
            <li>Product designing</li>
            <li>Software</li>
            <li>Copy writing</li>
            <li>Music production</li>
            <li>Coding</li>
            <li>UI UX designer</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="text-gray-400 space-y-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center text-gray-500 text-sm mt-10">
        Copyright © 2022 E-Card, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
