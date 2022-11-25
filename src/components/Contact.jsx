import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500">
      <div className="h-screen container mx-auto flex flex-col justify-center w-1/2 gap-8 ">
        <h1 className="text-4xl font-semibold text-center">Get In Touch</h1>
        <p className="text-xl text-center">
          I am very open to new opportunities, my inbox is always open. Whether
          you have a question or just want to say hi, I’ll try my best to get
          back to you!
        </p>
        <div className="flex justify-center w-full gap-8">
          <a href="https://github.com/alwiramadhan">
            <button>
              <FaGithub />
            </button>
          </a>
          <a href="https://instagram.com/alwiiirmdhn">
            <button>
              <FaInstagram />
            </button>
          </a>
          <a href="https://twitter.com/alwiiiramadhan">
            <button>
              <FaTwitter />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
