const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved. Abel Asmelash
        </p>
      </div>
    </footer>
  );
};

export default Footer;
