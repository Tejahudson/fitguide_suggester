import React, { useState } from 'react';
import { Dumbbell, Scale, Utensils, Youtube } from 'lucide-react';
import { BMI_CATEGORIES, EXERCISE_PLANS, DIET_PLANS } from './data';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string | null>(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) setBmiCategory('underweight');
      else if (bmiValue < 25) setBmiCategory('normal');
      else if (bmiValue < 30) setBmiCategory('overweight');
      else setBmiCategory('obese');
    }
  };

  const getBMIColor = () => {
    if (!bmiCategory) return '';
    return BMI_CATEGORIES[bmiCategory].color;
  };

  return (
    <div className="min-h-screen bg-gray-50 watermark-container">
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center h-[50vh]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40">
          <header className="h-full flex flex-col items-center justify-center text-white">
            <div className="relative">
              <Dumbbell className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <h1 className="text-5xl font-bold text-center mb-4">FitGuide Suggestor</h1>
              <p className="text-xl text-center max-w-2xl mx-auto px-4 text-gray-200">
                Your personalized journey to a healthier lifestyle starts here. Get customized workout plans and diet recommendations based on your body metrics.
              </p>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 -mt-16 relative z-10">
        {/* BMI Calculator Section */}
        <section className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8 border border-purple-100">
          <div className="flex items-center mb-4">
            <Scale className="w-6 h-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-semibold">BMI Calculator</h2>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <button
                className={`flex-1 py-3 px-4 rounded-lg transition-all transform hover:scale-102 ${
                  gender === 'male' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setGender('male')}
              >
                Male
              </button>
              <button
                className={`flex-1 py-3 px-4 rounded-lg transition-all transform hover:scale-102 ${
                  gender === 'female'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setGender('female')}
              >
                Female
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter height"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter weight"
                />
              </div>
            </div>

            <button
              onClick={calculateBMI}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-102 shadow-lg"
            >
              Calculate BMI
            </button>

            {bmi && bmiCategory && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-purple-100 shadow-md">
                <p className="text-lg">
                  Your BMI: <span className={`font-bold ${getBMIColor()}`}>{bmi}</span>
                </p>
                <p className="text-lg">
                  Category:{' '}
                  <span className={`font-bold ${getBMIColor()}`}>
                    {BMI_CATEGORIES[bmiCategory].category}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  BMI Range: {BMI_CATEGORIES[bmiCategory].range}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Results Sections */}
        {bmiCategory && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Exercise Plan */}
            <section className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 relative overflow-hidden border border-purple-100">
              <div className="relative">
                <div className="flex items-center mb-4">
                  <Dumbbell className="w-6 h-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-semibold">Recommended Exercise Plan</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">{EXERCISE_PLANS[bmiCategory].title}</h3>
                  <p className="text-gray-600">{EXERCISE_PLANS[bmiCategory].description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {EXERCISE_PLANS[bmiCategory].exercises.map((exercise, index) => (
                      <div key={index} className="bg-white/90 backdrop-blur-sm border border-purple-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-all">
                        <h4 className="font-medium">{exercise.name}</h4>
                        <p className="text-gray-600">
                          {exercise.sets} sets × {exercise.reps}
                        </p>
                        <div className="mt-2">
                          <a
                            href={`https://www.youtube.com/watch?v=${exercise.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-purple-600 hover:text-purple-700"
                          >
                            <Youtube className="w-4 h-4 mr-1" />
                            Watch Tutorial
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Diet Plan */}
            <section className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 relative overflow-hidden border border-purple-100">
              <div className="relative">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-semibold">Recommended Diet Plan</h2>
                </div>
                <div className="space-y-6">
                  {DIET_PLANS[bmiCategory].meals.map((meal, index) => (
                    <div key={index} className="bg-white/90 backdrop-blur-sm border border-purple-100 rounded-lg p-4 shadow-md">
                      <h3 className="text-lg font-medium mb-2">{meal.time}</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {meal.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-purple-600 mt-1">{meal.portions}</p>
                    </div>
                  ))}
                  <div className="bg-white/90 backdrop-blur-sm border border-purple-100 rounded-lg p-4 shadow-md mt-4">
                    <h3 className="text-lg font-medium mb-2">Dietary Tips</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {DIET_PLANS[bmiCategory].tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <Dumbbell className="w-8 h-8 mx-auto mb-4 text-purple-400" />
          <p>© 2025 FitGuide Suggestor. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">
            Consult with healthcare professionals before starting any new exercise or diet program.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;