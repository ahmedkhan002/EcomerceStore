import React from 'react';
import { 
  Home, 
  Grid3x3, 
  Heart, 
  Package, 
  Globe, 
  MessageCircle, 
  Info, 
  FileText, 
  Users, 
  Shield,
  X
} from 'lucide-react';
import { NavLink } from 'react-router';

const Sidebar = ({ isOpen, onClose }) => {

  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Grid3x3, label: 'Categories' },
    { icon: Heart, label: 'Favorites' },
    { icon: Package, label: 'My orders' },
    { icon: Globe, label: 'English | USD' },
    { icon: MessageCircle, label: 'Contact us' },
    { icon: Info, label: 'About' },
  ];

  const footerItems = [
    { icon: FileText, label: 'User agreement' },
    { icon: Users, label: 'Partnership' },
    { icon: Shield, label: 'Privacy policy' },
  ];

  return (
    <div className="relative">
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed overflow-scroll left-0 top-0 h-full bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      } w-80 md:w-64`}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 bg-gray-100 flex justify-between items-center">
          <div className="flex flex-col space-y-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="text-sm text-gray-500 font-medium">Sign in | Register</span>
          </div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1 absolute top-5 right-5 cursor-pointer group hover:bg-red-50 transition-all rounded-full duration-200"
          >
            <X size={18} className="text-gray-500 group-hover:text-red-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item, index) => (
            <NavLink key={index} to='/'>
            <div
              className={`flex items-center space-x-3 px-4 py-3 transition-all duration-200 group transform ${
                item.active
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-l-4 border-blue-500 scale-105'
                  : 'text-gray-700 hover:bg-gray-50 hover:translate-x-1 hover:scale-102'
              }`}
            >
              <item.icon 
                size={20} 
                className={`transition-colors duration-200 ${
                  item.active ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                }`} 
              />
              <span className="font-medium">{item.label}</span>
            </div>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-100 px-4 py-6 space-y-1">
          {footerItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-all duration-200 group transform hover:scale-102"
            >
              <item.icon 
                size={18} 
                className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200" 
              />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Sidebar;