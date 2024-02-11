import { faBullhorn, faChartLine, faCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                id="dropdownHoverButton"
                onClick={toggleDropdown}
                className="text-white font-nunito  flex  hover:bg-blue-600 bg-blue-500 hover:text-white rounded-md px-3 py-2  font-medium"
                type="button"
            >
                Services
                <svg
                    className={`w-5 h-5 ml-1 ${isOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute z-10 left-0 mt-2 w-[200px] bg-white rounded-md shadow-lg">
                    <div className="py-1 text-start" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link to='/web' className="block border-b-2 border-dotted px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><FontAwesomeIcon className='me-2' icon={faCode} />Web Development</Link>
                        <Link to='/seo' className="block border-b-2 border-dotted px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><FontAwesomeIcon className='me-2' icon={faChartLine} />Seo</Link>
                        <Link to='/graphic' className="block border-b-2 border-dotted px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><FontAwesomeIcon className='me-2' icon={faPenNib} />Graphic Design</Link>
                        <Link to='/social' className="block  border-dotted px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><FontAwesomeIcon className='me-2' icon={faBullhorn} />Social Media</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
