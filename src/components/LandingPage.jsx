import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Globe, 
  BarChart3, 
  Bot, 
  Shield, 
  ArrowRight,
  Moon,
  Sun,
  Brain,
  TrendingUp,
  PieChart,
  Activity,
  LogIn,
  UserPlus
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'
import ParticleBackground from './ParticleBackground'

gsap.registerPlugin(ScrollTrigger)

const LandingPage = () => {
  const [email, setEmail] = useState('')
  const [isDark, setIsDark] = useState(true)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const chartsRef = useRef(null)
  const aiRef = useRef(null)

  // Theme toggle functionality
  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    // Update data-theme attribute on document
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light')
    
    // Store theme preference in localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    let initialTheme = 'dark'
    if (savedTheme) {
      initialTheme = savedTheme
    } else if (prefersDark) {
      initialTheme = 'dark'
    } else {
      initialTheme = 'light'
    }
    
    setIsDark(initialTheme === 'dark')
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )

    gsap.fromTo(chartsRef.current,
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: chartsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    gsap.fromTo(aiRef.current,
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: aiRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  // Chart Data
  const incomeExpenseData = [
    { month: 'Jan', income: 5000, expenses: 3200 },
    { month: 'Feb', income: 5200, expenses: 3100 },
    { month: 'Mar', income: 4800, expenses: 3400 },
    { month: 'Apr', income: 5500, expenses: 2900 },
    { month: 'May', income: 5300, expenses: 3300 },
    { month: 'Jun', income: 5800, expenses: 2800 },
  ]

  const categoryData = [
    { name: 'Food & Dining', value: 25, color: '#8b5cf6' },
    { name: 'Transportation', value: 20, color: '#a855f7' },
    { name: 'Entertainment', value: 15, color: '#c084fc' },
    { name: 'Shopping', value: 18, color: '#d946ef' },
    { name: 'Bills', value: 22, color: '#ec4899' },
  ]

  const investmentData = [
    { month: 'Jan', pif: 10000, mutualFunds: 8000 },
    { month: 'Feb', pif: 10500, mutualFunds: 8200 },
    { month: 'Mar', pif: 11000, mutualFunds: 8500 },
    { month: 'Apr', pif: 11500, mutualFunds: 8800 },
    { month: 'May', pif: 12000, mutualFunds: 9200 },
    { month: 'Jun', pif: 12500, mutualFunds: 9600 },
  ]

  const activityData = [
    { month: 'Jan', transactions: 45, savings: 1800 },
    { month: 'Feb', transactions: 52, savings: 2100 },
    { month: 'Mar', transactions: 38, savings: 1400 },
    { month: 'Apr', transactions: 61, savings: 2600 },
    { month: 'May', transactions: 48, savings: 2000 },
    { month: 'Jun', transactions: 55, savings: 3000 },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden theme-transition">
      <ParticleBackground />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F5F3BB] to-[#F5F3BB] rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold">Finspare</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass-effect hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full glass-effect hover:bg-white/10 transition-all duration-300">
              <LogIn className="w-4 h-4" />
              <span className="text-sm font-medium">Login</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#F5F3BB] to-[#F5F3BB] text-black hover:from-[#F5F3BB]/90 hover:to-[#F5F3BB]/90 transition-all duration-300">
              <UserPlus className="w-4 h-4" />
              <span className="text-sm font-medium">Sign Up</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 z-10 pt-20">
        <div className="text-center max-w-5xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Your Personalized
            <span className="block gradient-text">AI Financial Coach</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-granite-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Smarter savings. Smarter investments. Smarter you.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-border px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto space-x-2"
          >
            <span className='text-black'>Get Started</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Features That Redefine Finance
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, title: "🌍 Multilingual Support", desc: "Global accessibility with multiple language support" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "📊 AI-driven Graphs & Analytics", desc: "Advanced analytics powered by artificial intelligence" },
              { icon: <Bot className="w-8 h-8" />, title: "🤖 Agentic AI Financial Guidance", desc: "Intelligent financial advice and recommendations" },
              { icon: <Shield className="w-8 h-8" />, title: "🔒 Secure & Private", desc: "Bank-level security for your financial data" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileFocus={{ scale: 1.05 }}
                whileActive={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F5F3BB] to-[#F5F3BB] rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer">
                  <div className="text-black cursor-pointer">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 cursor-pointer">{feature.title}</h3>
                <p className="text-granite-400 cursor-pointer">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section ref={chartsRef} className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Visualize Your Finances Like Never Before
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Income vs Expenses */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="chart-container p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Income vs Expenses
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={incomeExpenseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                  <XAxis dataKey="month" stroke={isDark ? "#666" : "#6b7280"} />
                  <YAxis stroke={isDark ? "#666" : "#6b7280"} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: isDark ? '#1a1a1a' : '#ffffff', 
                      border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#1a1a1a'
                    }}
                  />
                  <Line type="monotone" dataKey="income" stroke="#8b5cf6" strokeWidth={3} />
                  <Line type="monotone" dataKey="expenses" stroke="#a855f7" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Category Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="chart-container p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <PieChart className="w-6 h-6 mr-2" />
                Spending Categories
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#EAF2EF', 
                      border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#1a1a1a'
                    }}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* PIF & Mutual Funds */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="chart-container p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                Investment Growth
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={investmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                  <XAxis dataKey="month" stroke={isDark ? "#666" : "#6b7280"} />
                  <YAxis stroke={isDark ? "#666" : "#6b7280"} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: isDark ? '#1a1a1a' : '#ffffff', 
                      border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      color: isDark ? '#ffffff' : '#1a1a1a'
                    }}
                  />
                  <Area type="monotone" dataKey="pif" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="mutualFunds" stackId="1" stroke="#a855f7" fill="#a855f7" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Activity Chart */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="chart-container p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-2" />
                Monthly Activity
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#e5e7eb"} />
                  <XAxis dataKey="month" stroke={isDark ? "#666" : "#6b7280"} />
                  <YAxis stroke={isDark ? "#666" : "#6b7280"} />
                  <Tooltip 
                    contentStyle={{ 
                    //   backgroundColor: isDark ? '#1a1a1a' : '#ffffff', 
                      border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
                      borderRadius: '8px',
                    //   color: isDark ? '#ffffff' : '#1a1a1a'
                    }}
                  />
                  <Bar dataKey="transactions" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="savings" fill="#a855f7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agentic AI Section */}
      <section ref={aiRef} className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Your AI Coach, Always by Your Side
              </h2>
              <p className="text-xl text-granite-300 leading-relaxed mb-8">
                Our Agentic AI looks at your savings, expenditures, and transactions to suggest investment opportunities, saving strategies, and financial insights — giving you more control.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time financial analysis",
                  "Personalized investment recommendations",
                  "Smart spending alerts",
                  "Goal tracking and optimization"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F5F3BB] rounded-full"></div>
                    <span className="text-granite-200">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="futuristic-card p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3BB]/20 to-[#F5F3BB]/20 animate-pulse-slow"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#F5F3BB] to-[#F5F3BB] rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <Bot className="w-12 h-12 text-black" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-granite-300">💡 Based on your spending patterns, I recommend increasing your emergency fund by $500 this month.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-granite-300">📈 Your investment portfolio is performing 12% above market average. Great job!</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-granite-300">🎯 You're 85% to your savings goal. Keep up the momentum!</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Take Control of Your Finances Today
          </motion.h2>
          
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-granite-400 focus:outline-none focus:border-[#F5F3BB] transition-all duration-300"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="gradient-border px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >           
              <span className='text-black'>Join the Waitlist</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Finspare</h3>
              <p className="text-granite-400">Your personalized financial advisor</p>
            </div>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-granite-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-granite-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-granite-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-granite-400 text-sm">
              © 2024 AI Financial Coach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
