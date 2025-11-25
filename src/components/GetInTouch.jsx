"use client";
import ConsultationForm from './ConsultationForm';

const GetInTouch = () => {


  return (
    <>
    <div className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 pt-14 lg:pb-0.5 md:pb-1.5 pb-3.5 bg-white relative overflow-hidden">
        <div className="relative max-w-xl md:max-w-lg lg:max-w-xl z-10">
        <h1 className="text-2xl md:text-3xl font-serif mb-6 leading-snug">
          <span className="text-[#1B5439]">
            Advika Naturals LLP
          </span>
          <span className="text-[#F6C23E]">
            - Natural & Healthy Makhana Products
          </span>
        </h1>
       
       
          <div className="mt-12 space-y-6 max-w-xl">
          <div className="bg-gradient-to-r from-[#F6C23E] to-[#F6C23E] p-6 rounded-2xl border-l-4 border-[#1B5439] shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1B5439] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-[#1B5439] font-semibold text-sm mb-1">Our Location</h3>
                <p className="text-[#1B5439] text-sm leading-relaxed">
                  Gulzarbagh, Math Laxmanpur, Kori Tola, Alamganj,<br />
                  Patna-800007, Bihar, India <br />
                  Branch Address : Oxy homez flat no O-309 Loni road bhopura tila mod Near DMart Ghaziabad 
201005 

                </p>
              </div>
            </div>
          </div>


          <div className="bg-gradient-to-r from-[#F6C23E] to-[#F6C23E] p-6 rounded-2xl border-l-4 border-[#1B5439] shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1B5439] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-[#1B5439] font-semibold text-sm mb-1">Email Address</h3>
                <a href="mailto:advikanaturalsllp@gmail.com" className="text-[#1B5439] text-sm hover:text-[#163f2e] transition-colors block">
                  advikanaturalsllp@gmail.com
                </a>
              </div>
            </div>
          </div>

      

          <div className="bg-gradient-to-r from-[#F6C23E] to-[#F6C23E] p-6 rounded-2xl border-l-4 border-[#1B5439] shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1B5439] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-[#1B5439] font-semibold text-sm mb-1">Phone Number</h3>
                <a href="tel:+917678556015" className="text-[#1B5439] text-sm hover:text-[#163f2e] transition-colors font-medium">
                  +91-7678556015
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  <ConsultationForm />
    </div>

        <div className="text-center mt-8">
          <div className="w-full bg-gradient-to-r from-[#1B5439] to-[#163f2e] rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-white mb-4">
              Contact us today to discuss your labeling and barcode solution needs. We're here to help you find the perfect solution for your business.
            </p>
            <button className="bg-white text-[#1B5439] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get in Touch
            </button>
          </div>
        </div>
        </>
  );
};

export default GetInTouch;