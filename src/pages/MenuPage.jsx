import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button } from "@mui/material";
import {
  Utensils,
  Coffee,
  Beer,
  Cake,
  Pizza,
  Sandwich,
} from "lucide-react";

const menuItems = [
  {
    title: "Breakfast Specials",
    description: "Fresh coffee, sandwiches & morning bites to start your day ☕",
    icon: <Coffee className="w-10 h-10 text-brown-500" />,
    link: "#",
  },
  {
    title: "Appetizers",
    description: "Tasty small plates & starters to share with friends 🍽️",
    icon: <Utensils className="w-10 h-10 text-orange-500" />,
    link: "#",
  },
  {
    title: "Main Courses",
    description: "Delicious pizzas, pastas & full meals 🍕",
    icon: <Pizza className="w-10 h-10 text-red-500" />,
    link: "#",
  },
  {
    title: "Sandwiches & Burgers",
    description: "Juicy burgers, subs & wraps made fresh 🥪",
    icon: <Sandwich className="w-10 h-10 text-green-500" />,
    link: "#",
  },
  {
    title: "Desserts",
    description: "Sweet cakes, pastries & treats to end on a high 🍰",
    icon: <Cake className="w-10 h-10 text-pink-500" />,
    link: "#",
  },
  {
    title: "Drinks & Beverages",
    description: "Coolers, cocktails, beers & refreshing drinks 🍺",
    icon: <Beer className="w-10 h-10 text-blue-500" />,
    link: "#",
  },
];

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🍽️ Our Menu
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                {item.icon}
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="!mt-2 !rounded-full"
                  href={'#'}
                >
                  View Items
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
