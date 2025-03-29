export default function Footer() {
  return (
    <footer className="p-6 bg-gray-800 text-green-400 shadow-md flex flex-col items-center text-center space-y-2">
      <p className="text-lg font-semibold">Lazisku</p>

      <p className="text-sm">Made with ❤️ by Lazisku Team</p>
      <p className="text-sm font-medium">Follow us on social media:</p>

      {/* Social Media Icons */}
      <ul className="flex gap-4 mt-2">
        <li>
          <a
            href="https://twitter.com/lazisku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/twitter-icon.png"
              alt="Twitter"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </a>
        </li>
        <li>
          <a
            href="www.facebook.com/laziskhoiroummah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/facebook-icon.png"
              alt="Facebook"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bkpp_khoiro_ummah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instagram-icon.png"
              alt="Instagram"
              className="w-6 h-6 hover:opacity-80 transition-opacity"
            />
          </a>
        </li>
      </ul>
      <p className="text-sm">
        © {new Date().getFullYear()} Lazisku. All rights reserved.
      </p>
    </footer>
  );
}
