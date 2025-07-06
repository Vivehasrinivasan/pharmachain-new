"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Shield,
  Database,
  Brain,
  Scan,
  CheckCircle,
  Globe,
  Lock,
  ArrowRight,
  Zap,
  Eye,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function PharmaChainFuturistic() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Glassmorphic Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/30 border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-75 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                PharmaChain
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-blue-300 hover:text-white hover:bg-blue-500/20 border border-transparent hover:border-blue-500/50 transition-all duration-300"
              >
                Login
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300 border-0">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Verify Your Medicines
              </span>
              <br />
              <span className="text-white">Instantly</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-4 max-w-3xl mx-auto">
              Powered by <span className="text-cyan-400 font-semibold">Blockchain</span> +
              <span className="text-blue-400 font-semibold"> AI</span> +
              <span className="text-purple-400 font-semibold"> FDA APIs</span>
            </p>
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
              Revolutionary drug authentication system ensuring your medications are genuine and safe
            </p>
          </div>

          {/* Futuristic Search Card */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="max-w-3xl mx-auto bg-slate-800/40 backdrop-blur-xl border border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Enter drug name or scan barcode..."
                        className="h-14 text-lg bg-slate-700/50 border-blue-500/50 focus:border-cyan-400 focus:ring-cyan-400/50 text-white placeholder-slate-400 backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    <Button className="h-14 px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 border-0 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Search className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Verify</span>
                    </Button>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex items-center text-cyan-400 bg-slate-700/50 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group">
                      <Scan className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium">Or scan barcode</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {[
              { icon: CheckCircle, text: "FDA Verified", color: "text-green-400" },
              { icon: Shield, text: "CDSCO Approved", color: "text-blue-400" },
              { icon: Lock, text: "Blockchain Secured", color: "text-purple-400" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-slate-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <item.icon
                  className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Process Flow */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              How PharmaChain Works
            </h2>
            <p className="text-xl text-slate-300">Three simple steps to verify your medication</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-5xl mx-auto">
            {[
              {
                icon: Scan,
                title: "Scan or Input",
                desc: "Enter drug name or scan barcode",
                color: "from-blue-500 to-cyan-400",
              },
              {
                icon: Database,
                title: "API Verification",
                desc: "Cross-check with FDA & CDSCO",
                color: "from-cyan-500 to-blue-400",
              },
              {
                icon: CheckCircle,
                title: "Blockchain Confirmed",
                desc: "Immutable verification record",
                color: "from-purple-500 to-blue-400",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card
                  className={`w-80 h-64 bg-slate-800/40 backdrop-blur-xl border transition-all duration-500 ${
                    activeStep === index
                      ? "border-cyan-400/50 shadow-2xl shadow-cyan-500/25 scale-105"
                      : "border-slate-600/30 hover:border-blue-500/50"
                  }`}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 ${
                        activeStep === index ? "shadow-cyan-500/50 scale-110" : ""
                      }`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-300">{step.desc}</p>
                  </CardContent>
                </Card>

                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Advanced Technology
            </h2>
            <p className="text-xl text-slate-300">Cutting-edge features for ultimate drug verification</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "AI-Powered Analysis",
                desc: "Machine learning algorithms detect counterfeit patterns with 99.9% accuracy",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Zap,
                title: "Real-time Verification",
                desc: "Instant results powered by high-performance cloud infrastructure",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Eye,
                title: "Visual Recognition",
                desc: "Advanced computer vision for pill identification and authenticity checks",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: Globe,
                title: "Global Database",
                desc: "Access to international regulatory databases and drug registries",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Lock,
                title: "Blockchain Security",
                desc: "Immutable records ensure data integrity and prevent tampering",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Cpu,
                title: "Smart Contracts",
                desc: "Automated verification processes with transparent smart contract execution",
                color: "from-pink-500 to-red-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/40 backdrop-blur-xl border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-500 group hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Secure Your Health?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the future of pharmaceutical verification with blockchain-powered security
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 px-8 py-4 text-lg border-0 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Start Verifying Now</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-50"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                PharmaChain
              </span>
            </div>
            <div className="flex space-x-8 text-sm">
              {["Privacy Policy", "Terms of Service", "API Docs", "Contact"].map((link) => (
                <Link key={link} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 PharmaChain. Securing pharmaceutical integrity with blockchain technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
