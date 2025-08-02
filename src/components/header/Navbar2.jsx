import React, { useEffect, useState } from 'react';
import { Menu, ChevronDown, MapPin } from 'lucide-react';
import { NavLink } from 'react-router';
import AE from '../../assets/header/flags/AE.png'
import AU from '../../assets/header/flags/AU.png'
import CN from '../../assets/header/flags/CN.png'
import DE from '../../assets/header/flags/DE.png'
import DK from '../../assets/header/flags/DK.png'
import FR from '../../assets/header/flags/FR.png'
import GB from '../../assets/header/flags/GB.png'
import IT from '../../assets/header/flags/IT.png'
import RU from '../../assets/header/flags/RU.png'
import US from '../../assets/header/flags/US.png'


const Nav2 = () => {

  const flags = [
    {
      icon: DE,
      name: 'Germony'
    },
    {
      icon: AE,
      name: 'UAE'
    },
    {
      icon: AU,
      name: 'Austrailia'
    },
    {
      icon: CN,
      name: 'China'
    },
    {
      icon: IT,
      name: 'Italy'
    },
    {
      icon: DK,
      name: 'Denmark'
    },
    {
      icon: FR,
      name: 'France'
    },
    {
      icon: GB,
      name: 'England'
    },
    {
      icon: RU,
      name: 'Russia'
    },
    {
      icon: US,
      name: 'USA'
    }
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [locationDropdown, setlocationDropdown] = useState(false);
  const [currCountry, setcurCountry] = useState(flags[0])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? false : dropdown);
  };

  const handleItemClick = (item) => {
    setActiveDropdown(!activeDropdown)
  };



  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-lg:hidden">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center space-x-8">
            {/* All Categories */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('categories')}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Menu className="h-4 w-4" />
                <NavLink to='/collection' className="text-sm font-medium">All category</NavLink>
              </button>
              {activeDropdown === 'categories' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Health & Beauty'].map((category) => (
                      <button
                        key={category}
                        onClick={() => handleItemClick(category)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => handleItemClick('Hot offers')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Hot offers
              </button>
              <button
                onClick={() => handleItemClick('Gift boxes')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Gift boxes
              </button>
              <button
                onClick={() => handleItemClick('Projects')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => handleItemClick('Menu item')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Menu item
              </button>

              {/* Help Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('help')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <span className="text-sm font-medium">Help</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'help' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {['Customer Service', 'Track Your Order', 'Returns & Refunds', 'Shipping Information', 'FAQ', 'Size Guide', 'Contact Us', 'Live Chat', 'Report an Issue', 'Account Help'].map((helpItem) => (
                        <button
                          key={helpItem}
                          onClick={() => handleItemClick(helpItem)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {helpItem}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Language, Currency, Location */}
          <div className="flex items-center space-x-6">
            {/* Language/Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('language')}
                className="flex items-center cursor-pointer space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="text-sm font-medium">English, USD</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {['English, USD'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleItemClick(option,)}
                        className="block cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ship to Location */}
            <div className="relative">
              <button
                onClick={() => setlocationDropdown(!locationDropdown)}
                className="flex cursor-pointer items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="text-sm font-medium">Ship to</span>
                <img src={currCountry.icon} alt='404' className='h-4' />
                <ChevronDown className="h-4 w-4" />
              </button>
              {locationDropdown  && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {flags.map((country) => (
                      <button
                        key={country.name}
                        onClick={() => {setcurCountry(country); setlocationDropdown(!locationDropdown)}}
                        className="flex cursor-pointer items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <MapPin className="h-4 w-4" />
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pt-4 pb-4">
            <div className="space-y-3">
              <button
                onClick={() => handleItemClick('Hot offers')}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
              >
                Hot offers
              </button>
              <button
                onClick={() => handleItemClick('Gift boxes')}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
              >
                Gift boxes
              </button>
              <button
                onClick={() => handleItemClick('Projects')}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
              >
                Projects
              </button>
              <button
                onClick={() => handleItemClick('Menu item')}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
              >
                Menu item
              </button>
              <button
                onClick={() => handleItemClick('Help')}
                className="block w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
              >
                Help
              </button>
            </div>
          </div>
        )} */}
      </div>

      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}

    </nav>
  );
};

export default Nav2;