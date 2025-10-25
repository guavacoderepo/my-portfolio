import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/guavacoderepo",
      icon: <Github className="w-5 h-5" />,
      color: "hover:bg-gray-900 hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/everistus-nwogo-a04178ab/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+447551119942", // Replace with your WhatsApp number
      icon: <MessageCircle className="w-5 h-5" />,
      color: "hover:bg-green-600 hover:text-white"
    },
    {
      name: "Email",
      url: "mailto:everistusnwogo@gmail.com", // Replace with your email
      icon: <Mail className="w-5 h-5" />,
      color: "hover:bg-purple-600 hover:text-white"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Everistus Nwogo
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI & ML Engineer passionate about building intelligent solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-gray-900">Quick Links</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-gray-900">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:everistus@example.com"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">everistusnwogo@gmail.com</span>
              </a>
              <a
                href="tel:+447551119942"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+447551119942</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 bg-gray-100 text-gray-700 rounded-xl ${link.color} transition-all duration-300 hover:scale-110`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-700 text-sm font-medium">
              © {currentYear} Everistus Nwogo. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
    </footer>
  );
};

export default Footer;