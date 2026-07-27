export default function Home() {
  const features = [
    "AI Image Generation", "AI Video Maker", "AI Chat Bot", "AI Voice Clone",
    "AI Code Assistant", "AI Logo Maker", "AI Presentation", "AI Website Builder",
    "AI Music Generator", "AI Avatar", "AI Resume Builder", "AI Social Post",
    "AI PDF Chat", "AI Translator"
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-white">
      
      {/* 1. Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] via-[#0a001a] to-[#000614]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* 2. Floating Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{'--i': i}} />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 text-center">
        
        {/* 3. Title with Gradient + Glow */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-glow">
          CHHAVI
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-glow">
          AI STUDIO
        </h2>
        
        {/* 4. Subtitle */}
        <p className="mt-4 text-xl md:text-2xl text-cyan-300 animate-fade-in">
          Transform the World with AI
        </p>

        {/* 5. Glassmorphism Card */}
        <div className="mt-12 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border-white/10 shadow-2xl hover:border-purple-400 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-yellow-400">Premium Co-Founder Team</h3>
          <p className="mt-2 text-gray-300">Building the future of AI together</p>
        </div>

        {/* 6. Animated Feature Buttons */}
        <div className="mt-16 grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {features.map((feature, i) => (
            <button key={i} className="p-4 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 hover:scale-105 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300 font-semibold">
              {feature}
            </button>
          ))}
        </div>
      </div>

      {/* CSS for Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 10px #a855f7); }
          50% { filter: drop-shadow(0 0 25px #ec4899); }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.5s ease-out; }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: float 10s infinite;
          animation-delay: calc(var(--i) * 0.5s);
          left: calc(var(--i) * 5%);
          top: 100%;
        }
        @keyframes float {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
      `}</style>
    </main>
  )
}
