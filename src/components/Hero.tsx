// src/pages/Index.tsx

const Index = () => {
  return (
    // Main container with a dark, magical gradient background
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* 1. The Static Quote */}
      <blockquote className="text-2xl md:text-3xl font-light text-white text-center max-w-3xl mx-auto z-10 mb-24">
        "Any sufficiently advanced technology is indistinguishable from magic."
      </blockquote>

      {/* 2. The Portal Placeholder */}
      {/* This is a simple div that we will layer all our magic onto later. */}
      <div 
        id="magic-portal" 
        className="w-80 h-80 bg-black/20 rounded-full border-2 border-purple-400/30 shadow-xl"
      >
        {/* We will add the swirling background and iframe preview here in the next phases */}
      </div>

    </div>
  );
};

export default Index;