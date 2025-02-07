import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-900 to-yellow-800 text-white py-12" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex-[1] min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="flex-[1] min-w-[120px]">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaTwitter size={20} /></a>
            </div>
          </div>

          <div className="flex-[2] min-w-[300px]">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">ActNow4Family Financial Services</li>
              <li className="text-gray-300">Phone: (123) 456-7890</li>
              <li className="text-gray-300">Email: kiran@actnow4family.com</li>
              <li className="text-gray-300">3820 Roosevelt dr, irving, Texas-75063</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-700 mt-8 pt-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Actnow4family. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
