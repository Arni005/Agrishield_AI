// src/components/InputForm.jsx
import { useState } from 'react';
import { FaLocationDot, FaSeedling, FaCloudRain, FaChartLine } from 'react-icons/fa6';

const InputForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    location: '',
    crop: '',
    rainfall: 'Low'
  });

  const crops = ['Rice', 'Wheat', 'Maize', 'Cotton', 'Sugarcane', 'Millet', 'Sorghum'];
  const rainfallOptions = ['Low', 'Medium', 'High'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Location Input */}
      <div className="group">
        <label className="flex items-center text-[#1f3d2b] mb-3 font-medium">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition">
            <FaLocationDot className="text-emerald-700" />
          </div>
          <div>
            <div className="font-semibold">Location</div>
            <div className="text-xs text-gray-500">Select farming region</div>
          </div>
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
          className="w-full p-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition"
          placeholder="Enter farming region"
        />
      </div>

      {/* Crop Input */}
      <div className="group">
        <label className="flex items-center text-[#1f3d2b] mb-3 font-medium">
          <div className="w-10 h-10 bg-lime-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-lime-200 transition">
            <FaSeedling className="text-lime-700" />
          </div>
          <div>
            <div className="font-semibold">Crop</div>
            <div className="text-xs text-gray-500">Select primary crop</div>
          </div>
        </label>
        <select
          value={formData.crop}
          onChange={(e) => setFormData({...formData, crop: e.target.value})}
          className="w-full p-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition appearance-none"
        >
          <option value="" disabled className="text-gray-400">Choose...</option>
          {crops.map(crop => (
            <option key={crop} value={crop} className="p-2 text-gray-700">{crop}</option> 
          ))}
        </select>
      </div>

      {/* Rainfall Input */}
      <div className="group">
        <label className="flex items-center text-[#1f3d2b] mb-3 font-medium">
          <div className="w-10 h-10 bg-lime-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-lime-200 transition">
            <FaCloudRain className="text-lime-700" />
          </div>
          <div>
            <div className="font-semibold">Rainfall Condition</div>
            <div className="text-xs text-gray-500">Expected rainfall level</div>
          </div>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {rainfallOptions.map(level => (
            <button
              key={level}
              type="button"
              onClick={() => setFormData({...formData, rainfall: level})}
              className={`py-4 rounded-2xl border-2 transition-all duration-300 ${
                formData.rainfall === level 
                  ? 'border-emerald-400 bg-emerald-50 text-emerald-700 shadow-lg shadow-emerald-100' 
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600'
              }`}
            >
              <div className="text-lg font-semibold">{level}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full p-5 bg-gradient-to-r from-emerald-600 to-lime-500 hover:from-emerald-700 hover:to-lime-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 hover:shadow-2xl hover:shadow-emerald-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Analyzing with AI...
          </>
        ) : (
          <>
            <FaChartLine className="text-xl" />
            <span>Analyze Climate Risk</span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
          </>
        )}
      </button>

      {/* Hint */}
      <div className="p-4 bg-emerald-50/50 border border-gray-200 rounded-2xl">
        <p className="text-sm text-[#1f3d2b] flex items-start gap-2">
          <span className="text-emerald-600">💡</span>
          <span>Analysis based on crop requirements, regional climate data, and rainfall patterns from the knowledge base.</span>
        </p>
      </div>
    </form>
  );
};

export default InputForm;
