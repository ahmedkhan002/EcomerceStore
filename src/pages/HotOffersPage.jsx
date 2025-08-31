import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button } from "@mui/material";
import { Tag, Gift, Percent, ShoppingBag, Zap, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";

const hotOffers = [
  {
    title: "50% Off Electronics",
    description: "Get the latest gadgets at half the price for a limited time!",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    link: "#",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "On selected fashion items – shop your favorite styles now!",
    icon: <ShoppingBag className="w-10 h-10 text-pink-500" />,
    link: "#",
  },
  {
    title: "Flat 30% Off",
    description: "Exclusive discount on health & beauty products this week.",
    icon: <Percent className="w-10 h-10 text-green-500" />,
    link: "#",
  },
  {
    title: "Special Gift Bundles",
    description: "Bundle up and save more on curated gift sets & combos.",
    icon: <Gift className="w-10 h-10 text-purple-500" />,
    link: "#",
  },
  {
    title: "Clearance Sale",
    description: "Last chance deals on furniture and home decor – up to 70% off!",
    icon: <Tag className="w-10 h-10 text-red-500" />,
    link: "#",
  },
  {
    title: "Trending Tech Deals",
    description: "Save big on smartphones, laptops, and accessories.",
    icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
    link: "#",
  },
];

const HotOffersPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🔥 Hot Offers
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotOffers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                {offer.icon}
                <h2 className="text-lg font-semibold text-gray-700">
                  {offer.title}
                </h2>
                <p className="text-sm text-gray-500">{offer.description}</p>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  className="!mt-2 !rounded-full font-semibold"
                  href={navigate('/collection')}
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HotOffersPage;
