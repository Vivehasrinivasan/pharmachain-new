import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Shield, Database, Brain, Scan, CheckCircle, Globe, Lock } from "lucide-react"
import Link from "next/link"

export default function PharmaChainLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-900">PharmaChain</span>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-blue-700 hover:text-blue-900 hover:bg-blue-50">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Verify Your Medicines
            <span className="block text-blue-600">Instantly</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ensure the authenticity of your medications with our blockchain-powered verification system using FDA and
            CDSCO data.
          </p>

          {/* Search Card */}
          <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter drug name or batch number..."
                      className="h-12 text-lg border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <Button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                    <Search className="w-5 h-5 mr-2" />
                    Verify
                  </Button>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                    <Scan className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Or scan barcode</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-blue-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">FDA Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">CDSCO Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5" />
              <span className="text-sm font-medium">Blockchain Secured</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How PharmaChain Works</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Our advanced system combines cutting-edge technology to ensure the authenticity and safety of your
              medications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Blockchain Technology */}
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Blockchain Security</h3>
              <p className="text-blue-700 leading-relaxed">
                Immutable ledger technology ensures that drug information cannot be tampered with, providing complete
                transparency in the supply chain.
              </p>
            </Card>

            {/* FDA & CDSCO Integration */}
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Regulatory Data</h3>
              <p className="text-blue-700 leading-relaxed">
                Real-time integration with FDA and CDSCO databases ensures you get the most up-to-date and accurate drug
                information available.
              </p>
            </Card>

            {/* AI Verification */}
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">AI-Powered Analysis</h3>
              <p className="text-blue-700 leading-relaxed">
                Advanced machine learning algorithms analyze patterns and detect counterfeit drugs with unprecedented
                accuracy and speed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose PharmaChain?</h2>
              <p className="text-lg text-blue-700">Protecting your health with technology you can trust.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Global Database Access</h3>
                    <p className="text-blue-700">
                      Access to international drug databases for comprehensive verification coverage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Instant Verification</h3>
                    <p className="text-blue-700">Get results in seconds with our optimized verification algorithms.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">99.9% Accuracy</h3>
                    <p className="text-blue-700">
                      Industry-leading accuracy rates powered by advanced AI and blockchain technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Privacy Protected</h3>
                    <p className="text-blue-700">
                      Your searches are encrypted and never stored, ensuring complete privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Verifying Your Medicines Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust PharmaChain to keep their medications safe and authentic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg px-8 py-3 text-lg">
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">PharmaChain</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-300">
            <p>&copy; 2024 PharmaChain. All rights reserved. Protecting your health with blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
