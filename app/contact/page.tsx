import {
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ContactPage = () => {
  const contactDetails = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-purple-400" />,
      title: "Email",
      value: "abelasmelash07@gmail.com",
      link: "mailto:abelasmelash07@gmail.com",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      href: "https://wa.me/31613983234",
      value: "31613983234",
      link: "https://wa.me/31613983234",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-purple-400" />,
      title: "Location",
      value: "Gouda, The Netherlands",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/abel-asmelash-6325b0382/",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/abel-asmelash",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0b14] text-gray-100 flex flex-col justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            LET&rsquo;S CONNECT{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
              &
            </span>{" "}
            <span className="bg-linear-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
              WORK TOGETHER
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            I&lsquo;M currently open to new full-stack and AI development
            opportunities. Feel free to reach out directly via email, phone, or
            LinkedIn.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-[#121222]/60 border border-purple-900/30 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <div className="bg-purple-950/50 p-3 rounded-xl w-fit mb-4 border border-purple-800/40">
                {detail.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-400">
                {detail.title}
              </h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-white font-semibold mt-1 inline-flex items-center gap-1 hover:text-purple-300 transition-colors"
                >
                  {detail.value}
                  <FaExternalLinkAlt className="w-4 h-4 opacity-70" />
                </a>
              ) : (
                <p className="text-white font-semibold mt-1">{detail.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Social Links & CTA Section */}
        <div className="bg-linear-to-r from-purple-950/40 via-[#121222] to-purple-950/20 border border-purple-800/40 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Looking for my CV or projects?
            </h3>
            <p className="text-gray-400 text-sm">
              Explore my profiles across the web or grab a copy of my resume.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1a1a2e] border border-gray-700/50 p-3 rounded-xl text-gray-300 hover:text-white hover:border-purple-500 transition-all hover:scale-105"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-2 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-5 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/40"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
