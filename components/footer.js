import { FaInstagramSquare, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0C99D5] to-[#0C99D5] text-[#374151] py-12" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex-[1] min-w-[150px]">
            <h4 className="text-lg text-[#000000] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#F0F4F8] hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-[#F0F4F8] hover:text-white transition-colors">Plans</a></li>
              <li><a href="#" className="text-[#F0F4F8] hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#F0F4F8] hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="flex-[1] min-w-[120px]">
            <h4 className="text-lg text-[#000000] font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-2">
              <a href="https://www.instagram.com/actnow4family" className="text-[#F0F4F8] hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="flex-[2] min-w-[300px]">
            <h4 className="text-lg text-[#000000] font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="text-[#F0F4F8]">ActNow4Family Financial Services</li>
              <li className="text-[#F0F4F8]">Phone: (469) 636-6602</li>
              <li className="text-[#F0F4F8]">Email: kiran@actnow4family.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#A5C9EA] mt-8 pt-4 text-center text-[#F0F4F8]">
          <p>&copy; {new Date().getFullYear()} Actnow4family. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
