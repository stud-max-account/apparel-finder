export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-3">PM</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul>
              <li>
                <span className="text-gray-400 hover:text-white">Home</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white">About Us</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white">Services</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white">Contact</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.45-9.96 9.96 0 4.41 3.55 8.02 8.13 8.96v-6.34h-2.44v-2.62h2.44v-1.98c0-2.41 1.46-3.74 3.6-3.74 1.04 0 1.94.08 2.2.11v2.55h-1.51c-1.18 0-1.41.56-1.41 1.38v1.68h2.81l-.37 2.62h-2.44v6.34c4.58-.94 8.13-4.55 8.13-8.96 0-5.51-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.95 4.57a10 10 0 01-2.82.78 4.93 4.93 0 002.17-2.72 9.84 9.84 0 01-3.12 1.19 4.92 4.92 0 00-8.4 4.49 13.94 13.94 0 01-10.11-5.13 4.9 4.9 0 001.52 6.56 4.86 4.86 0 01-2.23-.62v.06c0 2.34 1.67 4.3 3.88 4.74a4.92 4.92 0 01-2.22.08 4.92 4.92 0 004.6 3.42A9.86 9.86 0 010 21.54a13.9 13.9 0 007.56 2.22c9.05 0 14-7.49 14-13.97 0-.21 0-.42-.02-.63a10 10 0 002.46-2.57z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.43 3.77a4.78 4.78 0 00-3.38-1.42H5.95C4.31 2.35 3 3.68 3 5.33v13.34C3 20.31 4.31 21.65 5.95 21.65h12.1c1.64 0 2.95-1.34 2.95-2.98V5.33c0-1.65-1.31-2.98-2.95-2.98zm-5.25 10.98h-2.43v7.61H8.25v-7.61H6.12V9.68h2.13V8.13c0-2.34 1.44-3.62 3.55-3.62 1.01 0 1.87.07 2.13.11v2.47h-1.47c-1.15 0-1.37.55-1.37 1.36v1.79h2.75l-.36 2.72z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
