// import img from '../../assets/logoheader.png';
// import Image from 'next/image';
import { FaGooglePlay, FaAppStoreIos, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 rounded-t-3xl h-fit p-5 pt-10">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left'>
                    {/* <Image src={img} alt="img" className='w-32' /> */}
                    <h1 className="text-2xl md:text-3xl text-white font-semibold capitalize mt-4 md:mt-0">Job well-done.</h1>
                </div>
                
                <div className='text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-10 gap-y-8'>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">Office Services</li>
                            <li className="hover:text-gray-300 cursor-pointer">Personal Assistant</li>
                            <li className="hover:text-gray-300 cursor-pointer">Shopping Delivery</li>
                            <li className="hover:text-gray-300 cursor-pointer">Miscellaneous</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Home & Repairs</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">Home Repairs</li>
                            <li className="hover:text-gray-300 cursor-pointer">Furniture Assembly</li>
                            <li className="hover:text-gray-300 cursor-pointer">Painting</li>
                            <li className="hover:text-gray-300 cursor-pointer">Farm Work</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">More Services</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">Plumbing</li>
                            <li className="hover:text-gray-300 cursor-pointer">Outdoor Help</li>
                            <li className="hover:text-gray-300 cursor-pointer">Shipping & Freight</li>
                            <li className="hover:text-gray-300 cursor-pointer">Livestock</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
                            <li className="hover:text-gray-300 cursor-pointer">Careers</li>
                            <li className="hover:text-gray-300 cursor-pointer">Support Center</li>
                            <li className="hover:text-gray-300 cursor-pointer">Sarwisi AI</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">For Taskers</li>
                            <li className="hover:text-gray-300 cursor-pointer">For Drivers</li>
                            <li className="hover:text-gray-300 cursor-pointer">For Merchants</li>
                            <li className="hover:text-gray-300 cursor-pointer">Safety Standards</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="hover:text-gray-300 cursor-pointer">+91 620-382-1043</li>
                            <li className="hover:text-gray-300 cursor-pointer">anissh946@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Mobile App</h3>
                        <div className="flex items-center gap-4">
                            <FaGooglePlay size={24} className='cursor-pointer' />
                            <FaAppStoreIos size={24} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='border-t-2 max-w-7xl mx-auto border-gray-200 py-5 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-white text-sm'>©2024 Fusion Flow Pvt Ltd.</p>
                <ul className='text-white flex gap-3 text-xl mt-4 md:mt-0'>
                    <li className='cursor-pointer'><FaFacebook /></li>
                    <li className='cursor-pointer'><FaSquareXTwitter /></li>
                    <li className='cursor-pointer'><FaLinkedin /></li>
                    <li className='cursor-pointer'><FaInstagram /></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;