const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-20 hover:bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          &copy; 2026 Settipalli Aruna. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Arunasettipalli"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/settipalliaruna?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwcXxXfR7QuOr6FEXkMWQcQ%3D%3D"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="arunareddy3144@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
