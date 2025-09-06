
import './App.css'
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col justify-center items-center">
      {/* Main Heading */}
      <div className="w-full text-center mb-12">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 drop-shadow-lg">
          Assignment-2 Counter Application
        </h1>
      </div>
      
      {/* Counter Components Container */}
      <div className="flex-1 w-full max-w-7xl flex items-center justify-center px-8">
        <div className="grid grid-cols-2 gap-12 w-full">
          <ClassCounter />
          <FunctionalCounter />
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="w-full text-center mb-8">
        <p className="text-gray-300 text-sm">
          Both counters prevent negative values and feature smooth animations
        </p>
      </div>
    </div>
  );
}

export default App
