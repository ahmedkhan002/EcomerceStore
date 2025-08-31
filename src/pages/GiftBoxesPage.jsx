import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button } from "@mui/material";
import { Gift, Heart, Star, Sparkles, ShoppingBag, PartyPopper } from "lucide-react";

const giftBoxes = [
  {
    title: "Birthday Surprise Box",
    description: "Curated goodies and surprises to make birthdays extra special 🎉",
    icon: <PartyPopper className="w-10 h-10 text-pink-500" />,
    link: "#",
  },
  {
    title: "Romantic Gift Box",
    description: "Perfect for anniversaries or Valentine’s Day – full of love 💖",
    icon: <Heart className="w-10 h-10 text-red-500" />,
    link: "#",
  },
  {
    title: "Luxury Gift Box",
    description: "Premium curated items to pamper your loved ones ✨",
    icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
    link: "#",
  },
  {
    title: "Festive Gift Box",
    description: "Celebrate holidays and festivals with themed gift bundles 🎁",
    icon: <Gift className="w-10 h-10 text-purple-500" />,
    link: "#",
  },
  {
    title: "Self-Care Box",
    description: "Relaxation, skincare & goodies for a well-deserved treat 🌿",
    icon: <Star className="w-10 h-10 text-green-500" />,
    link: "#",
  },
  {
    title: "Corporate Gift Box",
    description: "Professional yet stylish gifts – ideal for clients & colleagues 💼",
    icon: <ShoppingBag className="w-10 h-10 text-blue-500" />,
    link: "#",
  },
];

const GiftBoxesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎁 Gift Boxes
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {giftBoxes.map((box, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
              <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                {box.icon}
                <h2 className="text-lg font-semibold text-gray-700">
                  {box.title}
                </h2>
                <p className="text-sm text-gray-500">{box.description}</p>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className="!mt-2 !rounded-full"
                  href={'#'}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GiftBoxesPage;
