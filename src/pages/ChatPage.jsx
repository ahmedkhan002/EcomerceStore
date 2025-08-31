import React, { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Headset } from "lucide-react";
import { Card } from "@mui/material";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

// Message Component (memoized for performance + nicer styling)
const Message = React.memo(({ msg }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className={`flex items-end gap-2 ${
      msg.sender === "user" ? "justify-end" : "justify-start"
    }`}
  >
    {msg.sender === "bot" && (
      <Bot className="w-7 h-7 text-gray-600 bg-gray-200 rounded-full p-1 shadow-sm" />
    )}

    <div
      className={`px-4 py-2 max-w-xs text-sm break-words shadow-md ${
        msg.sender === "user"
          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl rounded-br-sm"
          : "bg-gray-200 text-gray-800 rounded-2xl rounded-bl-sm"
      }`}
    >
      {msg.text}
    </div>

    {msg.sender === "user" && (
      <User className="w-7 h-7 text-blue-600 bg-blue-100 rounded-full p-1 shadow-sm" />
    )}
  </motion.div>
));

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! Welcome to Customer Care. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate()

  const getBotReply = useMemo(
    () => (msg) => {
      const lower = msg.toLowerCase();
      if (lower.includes("order"))
        return "📦 You can track your order in 'Track My Orders' under your account.";
      if (lower.includes("refund"))
        return "💰 Refunds are processed within 3–5 business days.";
      if (lower.includes("shipping"))
        return "🚚 Shipping usually takes 3–7 days depending on your location.";
      if (lower.includes("hi") || lower.includes("hello"))
        return "👋 Hello there! How can I assist you?";
      return "🤖 I'm not sure, but a support agent will assist you shortly.";
    },
    []
  );

  const handleSend = useCallback(() => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    inputRef.current?.focus();

    setIsTyping(true);
    setTimeout(() => {
      const reply = { sender: "bot", text: getBotReply(newMessage.text) };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, [input, getBotReply]);

useEffect(() => {
 if(!window.currentUser){
  toast.error('User Not Authorized')
  navigate('/auth')
 }
},[])

  
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <Card className="w-full max-w-2xl bg-white h-[80vh] flex flex-col rounded-4xl overflow-hidden">
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 flex items-center gap-3">
          <Headset className="w-7 h-7 animate-bounce" />
          <h2 className="font-bold text-lg">Customer Care Chat</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-400">
          {messages.map((msg, index) => (
            <Message key={index} msg={msg} />
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-gray-500"
            >
              <Bot className="w-6 h-6 bg-gray-200 rounded-full p-1" />
              <div className="px-4 py-2 bg-gray-200 text-gray-700 rounded-2xl text-sm">
                Typing<span className="animate-pulse">...</span>
              </div>
            </motion.div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 bg-white border-t flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white p-3 rounded-full shadow-md"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </Card>
    </div>
  );
};

export default ChatPage;
