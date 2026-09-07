import React from "react";

import {  Mail} from "lucide-react";
import {FaGithub as Github, FaLinkedin as Linkedin} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand/About Section */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Abel Asmelash<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Passionate AI Focused Full-stack Developer Building modern, responsive, and
              user-friendly web Applications.  
            </p>
          </div>

          

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/abel-asmelash",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/abel-asmelash-6325b0382/",
                  label: "LinkedIn",
                },

                {
                  icon: Mail,
                  href: "mailto:abelasmelash07@gmail.com",
                  label: "Email",
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 bg-gray-800 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Abel Asmelash. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Crafted with{" "}
             using
            Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
