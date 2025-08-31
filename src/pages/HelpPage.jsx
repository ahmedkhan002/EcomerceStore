import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {
  Headset,
  PackageSearch,
  RotateCcw,
  Truck,
  HelpCircle,
  Ruler,
  Mail,
  MessageSquare,
  AlertTriangle,
  UserCog,
} from "lucide-react";

const helpItems = [
  { 
    title: "Customer Service", 
    icon: <Headset className="w-8 h-8 text-blue-500" />, 
    content: "Our customer service team is available 24/7 to assist you with inquiries, complaints, or general support." 
  },
  { 
    title: "Track Your Order", 
    icon: <PackageSearch className="w-8 h-8 text-green-500" />, 
    content: "Enter your order ID in the tracking section of your account to see real-time delivery updates." 
  },
  { 
    title: "Returns & Refunds", 
    icon: <RotateCcw className="w-8 h-8 text-red-500" />, 
    content: "You can request a return within 14 days of delivery. Refunds are processed within 3–5 business days." 
  },
  { 
    title: "Shipping Information", 
    icon: <Truck className="w-8 h-8 text-yellow-500" />, 
    content: "We offer standard, express, and international shipping options. Delivery times vary by location." 
  },
  { 
    title: "FAQ", 
    icon: <HelpCircle className="w-8 h-8 text-purple-500" />, 
    content: "Q: How do I reset my password? \nA: Click 'Forgot Password' at login. \n\nQ: Can I cancel an order? \nA: Orders can be canceled within 12 hours of placement." 
  },
  { 
    title: "Size Guide", 
    icon: <Ruler className="w-8 h-8 text-orange-500" />, 
    content: "Use our size chart to find the best fit for clothing and shoes before purchasing." 
  },
  { 
    title: "Contact Us", 
    icon: <Mail className="w-8 h-8 text-pink-500" />, 
    content: "You can contact us via email at support@company.com or through our contact form." 
  },
  { 
    title: "Live Chat", 
    icon: <MessageSquare className="w-8 h-8 text-teal-500" />, 
    content: "Chat with a live agent anytime between 9 AM – 10 PM (Mon–Sat)." 
  },
  { 
    title: "Report an Issue", 
    icon: <AlertTriangle className="w-8 h-8 text-rose-500" />, 
    content: "Facing a bug or delivery problem? Report it here and we’ll resolve it quickly." 
  },
  { 
    title: "Account Help", 
    icon: <UserCog className="w-8 h-8 text-indigo-500" />, 
    content: "Need help with account settings, privacy, or security? Visit the account help section." 
  },
];

const HelpPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How Can We Help You?
      </motion.h1>

      {/* Grid of Help Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOpen(item)}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <CardContent className="flex flex-col items-center text-center space-y-3 p-6">
                {item.icon}
                <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  Learn more about {item.title.toLowerCase()}.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        {selectedItem && (
          <>
            <DialogTitle className="!font-bold !text-xl flex items-center gap-2">
              {selectedItem.icon} {selectedItem.title}
            </DialogTitle>
            <DialogContent dividers>
              <p className="whitespace-pre-line text-gray-700 text-sm leading-relaxed">
                {selectedItem.content}
              </p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" variant="contained">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default HelpPage;
