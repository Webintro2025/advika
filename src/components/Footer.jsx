import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1B5439' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/">
                <h2 className="text-2xl font-bold text-white mb-2 cursor-pointer" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Advika Naturals LLP
                </h2>
              </Link>
              <p className="text-sm text-[#F6C548] font-medium mb-3">Natural & Healthy Makhana Products</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Premium Phool Makhana and allied healthy foods — roasted, flavoured, bakery-ready, and ready-to-make mixes.
              </p>
              <p className="text-gray-300 text-xs mt-2">GST: <span className="font-semibold text-white">10ACKFA0448G1ZX</span></p>
            </div>
          </div>

          {/* Services and Quick Links - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            {/* Products (as services area) */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
                Products
              </h3>
              <div className=' w-16 lg:w-20 h-0.5 bg-[#F6C548] mb-3.5'></div>
              <ul className="text-gray-300 text-xs lg:text-sm space-y-1 lg:space-y-1.5 max-h-40 overflow-y-auto pr-2 custom-scrollbar" style={{ scrollbarWidth: 'thin' }}>
                {[
                  'Phool Makahana',
                  'Rosted / Flavoured Makahan',
                  'Makhana Cookies',
                  'Makhana Drink',
                  'Makhana Atta/Flour',
                  'Honey',
                  'Makhana Pasta',
                  'Vermicile',
                  'Instant Makhana Kheer',
                 
                ].map((title, index) => (
                  <li key={title} className="truncate">
                    <Link
                      href={`/category/${index + 1}`}
                      className="text-gray-300 hover:text-[#F6C548] cursor-pointer transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
                Quick Links
              </h3>
              <div className=' w-16 lg:w-20 h-0.5 bg-[#F6C548] mb-3.5'></div>
              <ul className="text-gray-300 text-xs lg:text-sm space-y-1 lg:space-y-1.5">
                <li>
                  <Link href="/about" className="hover:text-[#F6C548] cursor-pointer transition-colors">About Us</Link>
                </li>
               
                <li>
                  <Link href="/contact" className="hover:text-[#F6C548] cursor-pointer transition-colors">Contact Us</Link>
                </li>

               
              </ul>
            </div>
          </div>

          {/* Contact Info and Follow Us - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4 lg:block">
            {/* Contact Information */}
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
                Contact Info
              </h3>
              <div className=' w-16 lg:w-20 h-0.5 bg-[#F6C548] mb-3.5'></div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#F6C548] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-semibold">+91-7678556015</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#F6C548] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold">advikanaturalsllp@gmail.com</p>
                  </div>
                </div>
                
                <div className="mt-2">
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white text-sm">0, Gulzarbagh, Math Laxmanpur, Kori Tola, Alamganj, Patna-800007, Bihar, India</p> 
                  <p className='text-white text-sm'> Branch Address : Oxy homez flat no O-309 Loni road bhopura tila mod Near DMart Ghaziabad 
201005 </p>
                </div>
              </div>
              
              {/* Follow Us - Below Contact Info on Desktop Only */}
              <div className="hidden lg:block mt-6 lg:mt-8">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
                  Follow Us
                </h3>
                <div className=' w-16 lg:w-20 h-0.5 bg-[#F6C548] mb-3.5'></div>
                <div className="flex flex-wrap gap-2">
                 
                  {/* Instagram */}
                  <a href="https://www.instagram.com/advikanaturals/" className="w-6 h-6 lg:w-8 lg:h-8 bg-[#EE008A] rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 5.75zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 7.25zm5.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/people/Advika-Naturals/61576944879066/#" className="w-6 h-6 lg:w-8 lg:h-8 bg-[#0866FF] rounded-full flex items-center justify-center  transition-colors">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/917678556015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 lg:w-8 lg:h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us - Mobile/Tablet Side by Side */}
            <div className="lg:hidden">
              <h3 className="text-base font-semibold text-white mb-1">
                Follow Us
              </h3>
              <div className=' w-16 h-0.5 bg-[#F6C548] mb-3.5'></div> 
              <div className="flex flex-wrap gap-2">
              
               <a href="https://www.instagram.com/advikanaturals/" className="w-6 h-6 lg:w-8 lg:h-8 bg-[#EE008A] rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25A5.25 5.25 0 0 1 12 5.75zm0 1.5a3.75 3.75 0 1 0 3.75 3.75A3.75 3.75 0 0 0 12 7.25zm5.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/people/Advika-Naturals/61576944879066/#" className="w-6 h-6 lg:w-8 lg:h-8 bg-[#0866FF] rounded-full flex items-center justify-center  transition-colors">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                    </svg>
                  </a>
                <a href="#" className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-[#F6C548]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
            <div className="text-black mb-2 md:mb-0 text-center md:text-left">
              © 2025 Advika Naturals. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end text-black text-xs md:text-sm">
              <span>Developed with</span>
              <svg className="w-3 h-3 md:w-4 md:h-4 text-red-500 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span>by</span>
                <a href="https://webintro.in/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[1B5439] transition-colors font-medium mx-1">
                Webintro.in
              </a>
              <span>and</span>
              <a href="https://webintro.in/delhi/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[1B5439] transition-colors font-medium mx-1">
                Google Promotion Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;