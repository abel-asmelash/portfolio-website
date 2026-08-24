import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="min-h-screen  bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Section */}
        <section className="flex flex-col space-y-4 text-left">
          <p className="text-gray-400 text-sm tracking-widest uppercase font-medium-bold">
            HELLO, I&lsquo;M ABEL ASMELASH
          </p>

          <h1 className="text-4xl sm:text-3xl font-extrabold uppercase leading-tight tracking-wide">
            FULL-STACK DEVELOPER
            <br />
            <span className="bg-linear-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
              AI INTEGRATION
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Crafting clean, high-performance web applications powered by modern
            AI workflows.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-block bg-linear-to-r from-purple-500 to-blue-400 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-md"
            >
              View My Work
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-4">
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/abel-asmelash",
              },
              {
                icon: <FaLinkedinIn />,
                href: "https://www.linkedin.com/in/abel-asmelash-6325b0382/",
              },
              {
                icon: <FaEnvelope />,
                href: "mailto:abelasmelash07@gmail.com",
              },
              {
                icon: <FaWhatsapp />,
                href: "https://wa.me/31613983234",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900/80 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-all"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </section>

        {/* Right Column: Profile Picture */}
        <section className="flex justify-center items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full"></div>
            <Image
              src="/images/profile.png.jpeg"
              alt="Profile Picture"
              width={300}
              height={300}
              priority
              className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
