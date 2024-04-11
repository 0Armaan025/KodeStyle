import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black opacity-30 blur-[0.3px]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              KodeStyle™️
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-2 text-sm  font-medium text-white">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6 text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
