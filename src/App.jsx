import React, { useState } from "react";
import img1 from './assets/images/images(1).jpg'
import img2 from './assets/images/images.jpg'
import img3 from './assets/images/images(2).jpg'
import img4 from './assets/images/images(3).jpg'
import img5 from './assets/images/images(4).jpg'
import img6 from './assets/images/images(5).jpg'
import img7 from './assets/images/images(6).jpg'
import img8 from './assets/images/images(7).jpg'
import img9 from './assets/images/images(8).jpg'



function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white min-h-full w-screen">
      
        <div className="navbar w-full h-16 flex items-center justify-between px-4 lg:px-8 shadow-md">
         
          <div className="flex items-center">
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </button>
            </div>

            <ul className="hidden lg:flex space-x-8">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  Our Project
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  About Us
                </a>
              </li>
            </ul>
          </div>

       
          <div className="text-2xl font-bold text-center absolute left-1/2 transform -translate-x-1/2">
            <a href="#">Aruna</a>
          </div>

       
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="hover:text-blue-500">
              Contact Us
            </a>
            <a href="#" className="underline text-blue-500 hover:text-blue-600">
              Book a Call
            </a>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg p-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              Properties
            </a> 
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              Our Project
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              FAQs
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              About Us
            </a>
            <hr />
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Contact Us
            </a>
            <a href="#" className="block text-blue-500 hover:text-blue-600 underline">
              Book a Call
            </a>
          </div>
        )}

        <div className="w-full bg-slate-800 text-gray-50 flex justify-center text-xs md:text-lg"><p>Look in Your New Home with Flexible Payment Plans and Special Discounts! <u> <a href="#" className="text-blue-300"> Learn More</a></u></p></div>
  
             <div className="w-full md:min-h-40 min-h-40 flex justify-center items-center">
             <div className="h-full w-11/12 md:border-b-2 border-b-2 flex justify-center gap-4 flex-wrap text-xs md:justify-evenly">
             <div className="h-24 w-28 md:h-40  md:w-48 md:text-lg ">
              <div><p>Looking for</p></div>
              <div className=" pt-5 w-full "> <button className="rounded-lg border  w-full h-10">residence</button></div>
             </div>
             <div className="h-24 w-28 md:h-40  md:w-48 md:text-lg">
              <div><p>Type</p></div>
              <div className=" pt-5 w-full"> <button className="rounded-lg border  w-full h-10">residence</button></div>
             </div>
             <div className="h-24 w-28 md:h-40  md:w-48 md:text-lg">
              <div><p>Price</p></div>
              <div className=" pt-5 w-full"> <button className="rounded-lg border  w-full h-10"> residence</button></div>
             </div>
             <div className="h-24 w-28 md:h-40  md:w-48 md:text-lg">
              <div ><p>Location</p></div>
              <div className=" pt-5 w-full"> <button className="rounded-lg border  w-full h-10">residence</button></div>
             </div>
             <div className="h-24 w-28md:h-40  md:w-48 md:text-lg ">
              <div><p>Find Specific Property</p></div>
              <div className=" pt-2 w-full"> <button className="rounded-lg border  w-full h-10">residence</button></div>
             </div>
             <div className="h-24 w-28md:h-40  md:w-48 md:text-lg ">
              <div><p></p></div>
              <div className=" pt-10 w-full"> <button className="rounded-lg border w-4/5 h-10">residence</button></div>
             </div>
                         </div>
                         </div>
                       
                       <div className="h-20 w-full  flex justify-between mt-10"><div className="ml-2 md:ml-10"> <h1>Resdidence in Yogyakarta</h1>  <p className="text-xs mt-5 ">we found 242 property</p> </div>
                       <div className="mr-2 md:mr-10"><select name="" id=""> <option value="">sort by</option></select></div> </div>

                       <div className=" grid grid-cols-1 md:grid-cols-3 ml-10 md:ml-32 gap-10"> 
                            <div><div> <img className="w-4/5 md:w-3/5 rounded-lg" src={img1} alt="" /></div>
                            <div className="flex justify-between w-4/5 md:w-3/5 text-sm"><p><b>Serenoty Heights Vilas  </b><br /> <p className="text-xs">Bogor Tengah</p></p> <p c><b>$250,000</b></p></div></div>

                            <div><div><img className="w-4/5 md:w-3/5 rounded-lg" src={img2} alt="" /></div>
                            <div className="flex justify-between md:w-3/5 w-4/5 text-sm"><p><b>Ewald Bay Residenсия  </b><br /> <p className="text-xs">Gunungkidul, Yogyakarta</p></p> <p c><b>$250,000</b></p></div></div>

                            <div><div><img className="w-4/5 md:w-3/5 rounded-lg" src={img3} alt="" /></div>
                            <div className="flex justify-between w-4/5 md:w-3/5 text-sm"><p><b>Palm Grove Estate  </b><br /> <p className="text-xs">Semarang Selatan</p></p> <p c><b>$250,000</b></p></div></div>

                            <div><div><img className="w-4/5 md:w-3/5 rounded-lg" src={img4} alt="" /></div>
                            <div className="flex justify-between w-4/5 md:w-3/5 text-sm"><p><b>Golden Horizon Residences  </b><br /> <p className="text-xs">Malang Barat</p></p> <p c><b>$250,000</b></p></div></div>

                            <div><div><img className="w-4/5 md:w-3/5 rounded-lg" src={img5} alt="" /></div>
                            <div className="flex justify-between w-4/5  md:w-3/5 text-sm"><p><b>Sapphire Riverfront Villas  </b><br /> <p className="text-xs">Jakarta Selatan</p></p> <p c><b>$250,000</b></p></div></div>

                            <div><div><img className="w-4/5 md:w-3/5 rounded-lg" src={img6} alt="" /></div>
                            <div className="flex justify-between  w-4/5 md:w-3/5 text-sm"><p><b>Sunset Cliffside Homes </b><br /> <p className="text-xs">Surabaya Timur</p></p> <p c><b>$250,000</b></p></div></div>

                            <div><div><img className="w-4/5 md:w-3/5 rounded-lg" src={img7} alt="" /></div>
                            <div className="flex justify-between md:w-3/5 w-4/5 text-sm"><p><b>Breeze Valley Residences  </b><br /> <p className="text-xs">Yogyakarta Utara</p></p> <p c><b>$250,000</b></p></div></div>

                            <div><div><img className="w-4/5 md:w-3/5 rounded-lg" src={img8} alt="" /></div>
                            <div className="flex justify-between  w-4/5 md:w-3/5 text-sm"><p><b>Ocean Pearl Estate  </b><br /> <p className="text-xs">Tangerang Selatan</p></p> <p c><b>$250,000</b></p></div></div>

                            <div><div><img className="w-4/5 md:w-3/5 rounded-lg" src={img9} alt="" /></div>
                            <div className="flex justify-between w-4/5 md:w-3/5 text-sm"><p><b>Whispering Pines Retreat  </b><br /> <p className="text-xs">Medan Kota</p></p> <p c><b>$250,000</b></p></div></div>

                       </div>
       
      </div>
    </>
  );
}

export default App;
