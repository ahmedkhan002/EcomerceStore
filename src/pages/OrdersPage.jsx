import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@mui/material";
import { Package, Truck, CheckCircle, XCircle, Clock } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


const statusConfig = {
  Delivered: { color: "text-green-600", icon: <CheckCircle className="w-5 h-5 text-green-600" /> },
  Shipped: { color: "text-blue-600", icon: <Truck className="w-5 h-5 text-blue-600" /> },
  Pending: { color: "text-yellow-600", icon: <Clock className="w-5 h-5 text-yellow-600" /> },
  Cancelled: { color: "text-red-600", icon: <XCircle className="w-5 h-5 text-red-600" /> },
};

const OrdersPage = () => {
  const orders = useSelector(state => state.cartReducer.orderDetails?.[0]);
  const navigate = useNavigate()
  useEffect(() => {
   if(!window.currentUser){
    toast.error('User Not Authorized')
    navigate('/auth')
   }

  },[])
  const date = new Date().toISOString().split('T')[0]
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <Card className="w-full max-w-3xl flex flex-col shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
          <Package className="w-6 h-6" />
          <h2 className="font-semibold text-lg">My Orders</h2>
        </div>

        {/* Orders List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {orders?.map((order, index) => (
            <motion.div
              key={order?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow p-4 flex items-center gap-4"
            >
              {/* Product Image */}
              <img
                src={order?.images[0]}
                alt={order?.name}
                className="w-20 h-20 rounded-lg object-cover border"
              />

              {/* Order Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{order?.name}</h3>
                <p className="text-sm text-gray-500">Order ID: {order?.id}</p>
                <p className="text-sm text-gray-500">Date: {date}</p>
                <p className="font-medium text-gray-700">{order?.price}</p>
              </div>

              {/* Status */}
              <div className="flex flex-col items-end">
                {statusConfig['Pending'].icon}
                <p className={`text-sm font-semibold ${statusConfig['Pending'].color}`}>
                  {'Pending'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default OrdersPage;
