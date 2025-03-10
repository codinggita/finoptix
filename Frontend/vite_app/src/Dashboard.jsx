import { Bell, Facebook, Twitter, Instagram, Youtube, ArrowUp, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "./assets/Logo.png";
import Home from "./assets/Home.png";
import ClockP from "./assets/ClockP.png";
import Wallet from "./assets/Wallet.png";
import Goal from "./assets/Goal.png";
import Graph from "./assets/Graph.png";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Loader from "./Components/Loader";




const expenseData = [
  { name: "Housing", value: 35, color: "#8884d8" },
  { name: "Transportation", value: 25, color: "#9b59b6" },
  { name: "Food", value: 20, color: "#e91e63" },
  { name: "Utilities", value: 12, color: "#00acc1" },
  { name: "Entertainment", value: 8, color: "#ff9800" },
]

const monthlyData = [
  { month: "Jan", amount: 2500 },
  { month: "Feb", amount: 3200 },
  { month: "Mar", amount: 2800 },
  { month: "Apr", amount: 2000 },
  { month: "May", amount: 3500 },
  { month: "Jun", amount: 3000 },
]

function App() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true); // <-- Initialize loading state



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulated loading delay (2 seconds)
  }, []);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#E0EBF7] relative">
      {/* Header */}
      <motion.header
        className="bg-[#4B0082] text-white px-6 h-[83px] flex items-center shadow-[0_6px_6px_rgba(0,0,0,0.25)] mb-[35px]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between w-full">
          <motion.img
            src={Logo}
            alt="Finoptix Logo"
            className="w-[174px] h-[92px] object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          <nav className="hidden md:flex items-center gap-x-[15px] flex-grow justify-center text-[20px] font-outfit font-normal tracking-[0.08em]">
            <motion.a
              href="/"
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Home}
                alt="Finoptix Logo"
                className="w-[22px] h-[22px] object-contain pt-0.5"
              />Home
            </motion.a>

            <motion.a
              href="/dashboard"
              className="px-4 flex items-center gap-x-[9px] p-2 bg-[#F0A6F4] text-[#4B0082] rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={ClockP}
                alt="Finoptix Logo"
                className="w-[20px] h-[20px] object-contain pt-0.5"
              />Dashboard
            </motion.a>

            <motion.a
              href="/your_budget"
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Wallet}
                alt="Finoptix Logo"
                className="w-[20px] h-[20px] object-contain pt-0.5"
              />Your Budget
            </motion.a>

            <motion.a
              href="/goals"
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Goal}
                alt="Finoptix Logo"
                className="w-[20px] h-[20px] object-contain pt-0.5 text-[#4B0082]"
              />Goals
            </motion.a>

            <motion.a
              href="/analytics"
              className="px-4 flex items-center gap-x-[9px] py-2 rounded-md hover:bg-purple-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Graph}
                alt="Finoptix Logo"
                className="w-[20px] h-[20px] object-contain pt-0.5"
              />Investment Analytics
            </motion.a>
          </nav>

          <div className="flex items-center gap-x-[15px] relative left-[-30px]">
            <motion.button
              className="hover:bg-purple-700 rounded-full pl-[15px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="hover:bg-purple-700 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/profile")} // Navigate to Profile Page
            >
              <div className="w-8 h-8 bg-purple-300 rounded-full" />
            </motion.button>
          </div>
        </div>
      </motion.header>


      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-1 ">

            <div className="bg-[#bfd7f9] w-[340px] h-[153px] p-[24px] rounded-lg shadow-lg">
              <div className="flex justify-between items-center text-black-500">
                <span className="font-semibold" style={{ fontSize: "18px", fontWeight: "500" }}>Total Balance</span>
                <span className="font-medium" style={{ fontSize: "12px", fontWeight: "500", color: "#535252" }}>Updated 2m ago</span>
              </div>
              <div className="text-2xl font-bold text-[26px] text-[#8913f1eb] mt-[12px] mb-[12px]">
              ₹12,002.78
              </div>
              <div className="flex items-center text-[#00CA2F] text-[16px]">
                <ArrowUp className="w-4 h-4 mr-1" />
                4.75% from last month
              </div>
            </div>




            <div className="bg-[#e2d6f5]  w-[340px] h-[153px] p-[24px] rounded-lg shadow-lg">
              <div className="flex justify-between items-center text-sm text-black-500">
                <span className="font-semibold" style={{ fontSize: "18px", fontWeight: "500" }}>Monthly Spending</span>
                <span className="font-medium" style={{ fontSize: "12px", fontWeight: "500", color: "#535252" }}>January 2025</span>
              </div>
              <div className="text-2xl font-bold text-[26px] text-[#8913f1eb] mt-[12px] mb-[12px]">₹80,000</div>
              <div className="flex items-center text-[#E07577] text-[16px]">
                <ArrowDown className="w-4 h-4 mr-1" />
                4.75% from last month
              </div>
            </div>

            <div className="bg-[#f3cfe8]  w-[340px] h-[153px] p-[24px] rounded-lg shadow-lg">
              <div className="flex justify-between items-center text-sm text-black-500">
                <span className="font-semibold" style={{ fontSize: "18px", fontWeight: "500" }}>Savings Goal</span>
                <span className="font-medium" style={{ fontSize: "12px", fontWeight: "500", color: "#535252", paddingBottom: "2px" }}>Home Down Payment</span>
              </div>
              <div className="text-2xl font-bold text-[26px] text-[#8913f1eb]">
                <p>₹15,00,000 /</p>
                <span className="text-[#535252] text-[22px]">₹50,00,000</span>
              </div>
              <div className="h-2 bg-purple-100 rounded-full mt-2">
                <div className="h-full bg-purple-600 rounded-full" style={{ width: "45%" }} />
              </div>
            </div>



            <div className="bg-[#cdd5f7]  w-[340px] h-[153px] p-[24px] rounded-lg shadow-lg">
              <div className="flex justify-between items-center text-sm text-black-500">
                <span className="font-semibold" style={{ fontSize: "18px", fontWeight: "500" }}>Investment Returns</span>
                <span className="font-medium" style={{ fontSize: "12px", fontWeight: "500", color: "#535252" }}>YTD</span>
              </div>
              <div className="text-2xl font-bold text-[26px] text-[#8913f1eb] mt-[12px] mb-[12px]">+12.8%</div>
              <div className="flex items-center text-[#00CA2F] text-[16px]">
                <ArrowUp className="w-4 h-4 mr-1" />
                4.75% from last month
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ml-1">
            {/* Expense Breakdown */}
            <div className="bg-[#BBFFBE] p-6 rounded-lg w-[705px] shadow-lg">
              <h3 className="text-[20px] font-medium mb-4">Expense Breakdown</h3>
              <div className="h-[280px]">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend
                      layout="vertical"
                      align="right"
                      verticalAlign="middle"
                      wrapperStyle={{ paddingLeft: "30px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Monthly Trend */}
            <div className="bg-[#BBFFBE] p-6 rounded-lg w-[705px] h-[40] shadow-lg">
              <h3 className="text-[20px] font-medium mb-4">Monthly Trend</h3>
              <div className="h-[300px]">
                <ResponsiveContainer>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="7 7" />
                    <XAxis dataKey="month" />
                    <YAxis ticks={[0, 1000, 2000, 3000, 4000]} />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={3} dot={{ fill: "#8884d8" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Budget Summary */}
          <div className="bg-[#FFF8DC] p-6 rounded-lg mt-8 h-[155px] shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] font-medium mb-1">Budget Summary</h3>
              <div className="text-xs text-gray-500">Last 30 Days</div>
            </div>

            <div className="flex justify-around items-center">
              <div className="space-y-1">
                <div className="text-[24px] font-bold">₹11,350</div>
                <div className="text-[14px] font-bold text-gray-500">Total Spent</div>
              </div>
              <div className="space-y-1 text-center">
                <div className="text-[24px] font-bold">₹16,900</div>
                <div className="text-[14px] font-bold text-gray-500">Total Budget</div>
              </div>
              <div className="space-y-1 text-right">
                <div className="text-[24px] font-bold text-[#02BB02]">₹5,550</div>
                <div className="text-[14px] font-bold text-gray-500">Remaining</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4B0082] text-white mt-7 h-[466px]">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:justify-between ml-18">
            <div className="font-outfit font-normal tracking-[0.08em]">
              <h3 className="font-semibold text-[22px] mb-4">Our Features</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Get Started as a Fresher</li>
                <li>How To Earn More</li>
                <li>Write Blogs Or Read</li>
                <li>Learn To Invest</li>
                <li>Manage Your Budget</li>
                <li>Personalize Future Plans For Your Future</li>
              </ul>
            </div>


            <div className="font-outfit font-normal tracking-[0.08em]">
              <h3 className="font-semibold text-[22px] mb-4">Our Potential Partners</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Banks</li>
                <li>Tech Companies</li>
                <li>Insurance Companies</li>
                <li>Expert Traders</li>
              </ul>
            </div>


            <div className="font-outfit font-normal tracking-[0.08em]">
              <h3 className="font-semibold text-[22px] mb-4">Help</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>How to get Started</li>
                <li>Video Tutorials</li>
                <li>Copyright</li>
              </ul>
            </div>


            <div className="font-outfit font-normal tracking-[0.08em]">
              <h3 className="font-semibold text-[22px] mb-4">About Us</h3>
              <ul className="space-y-2 text-[14px]">
                <li>Location</li>
                <li>Security</li>
                <li>Our Plans</li>
                <li>Our Vision</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-purple-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[12px] font-medium">© 2015-2025 FINOPTIX All Rights Reserved</div>
              <img
                src={Logo}
                alt="Finoptix Logo"
                className="w-[174px] h-[92px] object-contain"
              />
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-[20px] mr-4font-outfit font-normal">Follow Us on :</span>
                <a href="#" className="hover:text-purple-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-300">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

