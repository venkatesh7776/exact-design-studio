const CountdownTimer = () => {
  return (
    <div 
      className="bg-[#FFCEB8] -mt-12 relative z-20 flex-shrink-0"
      style={{
        width: '1495.541px',
        height: '250.59px',
        transform: 'rotate(-1.69deg)'
      }}
    >
      <div className="container mx-auto px-4 py-8 h-full flex items-center justify-center"
           style={{ transform: 'rotate(1.69deg)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Trophy and Grand Prizes */}
          <div className="flex items-center gap-6">
            <img 
              src="/trophee.png" 
              alt="Trophy" 
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Grand</h3>
              <h3 className="text-4xl font-bold text-gray-800 -mt-2">Prizes</h3>
              <p className="text-gray-600 text-sm mt-1">Win Amazing Rewards</p>
            </div>
          </div>
          
          {/* Center - Orange Stats Card */}
          <div className="bg-orange-500 rounded-3xl px-8 py-6 text-white shadow-lg">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold">45</div>
                <div className="text-sm opacity-90">Days</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">7</div>
                <div className="text-sm opacity-90">Rounds</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">∞</div>
                <div className="text-sm opacity-90">Wisdom</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Tap Play Learn and Mobile */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <h3 className="text-4xl font-bold text-gray-800">Tap.</h3>
              <h3 className="text-4xl font-bold text-gray-800 -mt-2">Play.</h3>
              <h3 className="text-4xl font-bold text-gray-800 -mt-2">Learn.</h3>
            </div>
            <img 
              src="/Mobile.png" 
              alt="Mobile App" 
              className="w-16 h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
