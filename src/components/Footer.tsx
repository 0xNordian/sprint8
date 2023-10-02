import {
    FaTiktok,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-transparent py-8 text-white">
            <hr className="mb-6"/>
            <div className="container mx-auto px-4">
                <div className="flex flex-col  gap-6">
                    {/* Social Media Links */}
                    <div className="mb-4 md:mb-0 flex flex-col items-center">
                        <h3 className="mb-2 text-lg font-semibold">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-white hover:text-gray-400"
                            >
                                <FaTiktok size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-400"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-400"
                            >
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-400"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-gray-400"
                            >
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="mb-4 text-center md:text-left">
                        <p className="text-sm text-center">
                            TM & © Lucasfilm Ltd. All Rights Reserved
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className="text-sm flex gap-2 md:gap-6 justify-center flex-wrap">
                            <li className="mb-1">
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400"
                                >
                                    Terms of Use
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400"
                                >
                                    Additional Content Information
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400"
                                >
                                    Children's Online Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-400"
                                >
                                    Your US State Privacy Rights
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
