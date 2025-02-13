import React from 'react'
import SplineViewer from './components/SplineViewer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Sample Disclaimer */}
      <div className="fixed top-0 left-0 w-full bg-blue-600 text-white text-center py-1 text-sm z-50">
        This is a just a placeholder demo, not refelective of design.
      </div>

      {/* Header */}
      <header className="fixed w-full z-40 bg-white/80 backdrop-blur-sm shadow-sm mt-7">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-gray-900 font-bold text-2xl">BUDDY DIY</div>
          <div className="space-x-6">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Spline Component */}
      <div className="h-screen pt-24">
        <SplineViewer url="/scene.splinecode" />
      </div>

      {/* Welcome Hero Section */}
      <section className="relative z-10 -mt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              Craft Your Dreams
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
              Welcome to BUDDY DIY, where creativity meets community. Transform your ideas into reality with our innovative platform designed for DIY enthusiasts.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                Start Creating
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
