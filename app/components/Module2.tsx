'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'

interface Props {
  onBack: () => void
}

export default function Module2({ onBack }: Props) {
  const [houseSize, setHouseSize] = useState(1000)
  const [studyHours, setStudyHours] = useState(4)

  // Prediction functions
  const predictHousePrice = (size: number) => {
    return Math.round((size * 0.045) + 2)
  }

  const predictMarks = (hours: number) => {
    return Math.round((hours * 12) + 18)
  }

  const houseData = [
    { size: 500, price: 25 },
    { size: 800, price: 38 },
    { size: 1000, price: 47 },
    { size: 1200, price: 56 },
    { size: 1500, price: 70 },
    { size: 1800, price: 83 },
    { size: 2000, price: 92 },
  ]

  const studyData = [
    { hours: 1, marks: 30 },
    { hours: 2, marks: 42 },
    { hours: 3, marks: 54 },
    { hours: 4, marks: 66 },
    { hours: 5, marks: 78 },
    { hours: 6, marks: 85 },
    { hours: 7, marks: 92 },
  ]

  // Generate line data for visualization
  const generateLineData = (dataPoints: any[], xKey: string, prediction: (x: number) => number) => {
    const min = Math.min(...dataPoints.map(d => d[xKey]))
    const max = Math.max(...dataPoints.map(d => d[xKey]))
    const step = (max - min) / 20
    const line = []
    for (let i = min; i <= max; i += step) {
      line.push({ [xKey]: i, predicted: prediction(i) })
    }
    return line
  }

  return (
    <div className="lesson-container">
      <h1 style={{color: '#667eea', marginBottom: '20px'}}>
        📐 Module 2: Linear Regression - Seedhi Line Ka Khel
      </h1>

      <div className="progress-bar">
        <div className="progress-fill" style={{width: '33.3%'}}></div>
      </div>

      <div className="concept-box">
        <h2>🤔 Linear Regression Kya Hai?</h2>
        <p style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
          <strong>Simple Hindi Mein:</strong> Linear Regression ek tarika hai jismein hum
          ek seedhi line draw karte hain jo sabse achhe se data ko represent karti hai.
          Is line ki madad se hum naye values predict kar sakte hain.
        </p>
        <p style={{fontSize: '1.1rem', marginTop: '15px'}}>
          <strong>"Linear"</strong> ka matlab = Seedhi line<br />
          <strong>"Regression"</strong> ka matlab = Prediction karna
        </p>
      </div>

      <h2>🎯 Concept Ko Samjhne Ke Liye - Ek Kahani</h2>

      <div className="example-box">
        <h3>📖 Kahani: Ramesh Ka Samosa Ka Dhanda</h3>
        <p>
          Ramesh ke paas ek samosa ki dukaan hai. Usne dekha ki:
        </p>
        <ul>
          <li>Jab temperature 20°C hota hai, toh woh 100 samose bechta hai</li>
          <li>Jab temperature 25°C hota hai, toh 80 samose bikte hain</li>
          <li>Jab temperature 30°C hota hai, toh sirf 60 samose bikte hain</li>
          <li>Jab temperature 35°C hota hai, toh 40 samose bikte hain</li>
        </ul>
        <p>
          Ramesh ne pattern dekha: <strong>Jitna zyada garmi, utne kam samose bikte hain!</strong>
        </p>
        <p style={{marginTop: '15px', padding: '15px', background: '#fff9e6', borderRadius: '5px'}}>
          <strong>Sawal:</strong> Kal mausam vibhag ne bola ki temperature 28°C rahega.
          Ramesh kitne samose banaaye taaki waste na ho?
        </p>
        <p style={{marginTop: '10px'}}>
          <strong>Yahi Linear Regression solve karta hai!</strong> Purane data se ek line
          banaake, naye temperature ke liye prediction kar deta hai.
        </p>
      </div>

      <h2>📊 Linear Regression Ko Visualize Karein</h2>

      <div className="visual-section">
        <h3>Example 1: Ghar Ka Size → Ghar Ki Kimat</h3>
        <p>
          Neeche graph mein blue dots = Real data (purane gharon ki info)<br />
          Red line = Linear Regression ki prediction line
        </p>
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="size"
              type="number"
              domain={[400, 2200]}
              label={{ value: 'Ghar Ka Size (Square Feet)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis
              type="number"
              domain={[0, 100]}
              label={{ value: 'Kimat (Lakh)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Scatter name="Real Data" data={houseData} fill="#3b82f6" />
            <Line
              type="monotone"
              dataKey="predicted"
              data={generateLineData(houseData, 'size', predictHousePrice)}
              stroke="#ef4444"
              strokeWidth={3}
              dot={false}
              name="Prediction Line"
            />
          </ScatterChart>
        </ResponsiveContainer>
        <div className="note-box" style={{marginTop: '15px'}}>
          <p>
            <strong>Dhyaan se dekhiye:</strong> Red line sabhi blue dots ke beech se
            guzarti hai. Yeh line best fit hai - matlab sabse achha tarika data ko
            represent karne ka!
          </p>
        </div>
      </div>

      <h2>🎮 Interactive Demo - Khud Predict Karein!</h2>

      <div className="interactive-demo">
        <h3>🏠 Ghar Ki Kimat Calculator</h3>
        <p>Slider move karke different sizes ke ghar ki kimat dekhiye:</p>

        <div className="slider-container">
          <label>Ghar Ka Size: {houseSize} square feet</label>
          <input
            type="range"
            min="400"
            max="2500"
            value={houseSize}
            onChange={(e) => setHouseSize(Number(e.target.value))}
          />
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <h2 style={{color: 'white', margin: '0 0 10px 0'}}>Predicted Price</h2>
          <p style={{fontSize: '3rem', margin: 0, fontWeight: 'bold'}}>
            ₹{predictHousePrice(houseSize)} Lakh
          </p>
        </div>

        <p style={{marginTop: '15px', fontStyle: 'italic', textAlign: 'center'}}>
          Yeh prediction Linear Regression model se aaya hai jo purane data se seekha hai!
        </p>
      </div>

      <div className="interactive-demo" style={{marginTop: '30px'}}>
        <h3>📚 Marks Predictor</h3>
        <p>Kitne ghante padhoge? Slider move karke dekho kitne marks mil sakte hain:</p>

        <div className="slider-container">
          <label>Padhaai: {studyHours} ghante</label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={studyHours}
            onChange={(e) => setStudyHours(Number(e.target.value))}
          />
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <h2 style={{color: 'white', margin: '0 0 10px 0'}}>Expected Marks</h2>
          <p style={{fontSize: '3rem', margin: 0, fontWeight: 'bold'}}>
            {Math.min(predictMarks(studyHours), 100)}%
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300} style={{marginTop: '20px'}}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="hours"
              type="number"
              domain={[0, 8]}
              label={{ value: 'Padhaai (Ghante)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis
              type="number"
              domain={[0, 100]}
              label={{ value: 'Marks (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Scatter name="Students Data" data={studyData} fill="#8b5cf6" />
            <Line
              type="monotone"
              dataKey="predicted"
              data={generateLineData(studyData, 'hours', predictMarks)}
              stroke="#f59e0b"
              strokeWidth={3}
              dot={false}
              name="Prediction Line"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <h2>🔍 Linear Regression Kaise Kaam Karta Hai? - Step by Step</h2>

      <div style={{background: '#e8f5e9', padding: '25px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 1: Data Collect Karo</h3>
        <p>
          Sabse pehle, hume data chahiye. Jaise ghar ki example mein:
        </p>
        <table style={{width: '100%', marginTop: '15px', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{background: '#4caf50', color: 'white'}}>
              <th style={{padding: '10px', border: '1px solid #ddd'}}>Ghar Ka Size (sq ft)</th>
              <th style={{padding: '10px', border: '1px solid #ddd'}}>Kimat (Lakh)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{background: 'white'}}>
              <td style={{padding: '10px', border: '1px solid #ddd', textAlign: 'center'}}>500</td>
              <td style={{padding: '10px', border: '1px solid #ddd', textAlign: 'center'}}>25</td>
            </tr>
            <tr style={{background: '#f9f9f9'}}>
              <td style={{padding: '10px', border: '1px solid #ddd', textAlign: 'center'}}>1000</td>
              <td style={{padding: '10px', border: '1px solid #ddd', textAlign: 'center'}}>47</td>
            </tr>
            <tr style={{background: 'white'}}>
              <td style={{padding: '10px', border: '1px solid #ddd', textAlign: 'center'}}>1500</td>
              <td style={{padding: '10px', border: '1px solid #ddd', textAlign: 'center'}}>70</td>
            </tr>
            <tr style={{background: '#f9f9f9'}}>
              <td style={{padding: '10px', border: '1px solid #ddd', textAlign: 'center'}}>2000</td>
              <td style={{padding: '10px', border: '1px solid #ddd', textAlign: 'center'}}>92</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{background: '#e3f2fd', padding: '25px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 2: Graph Par Plot Karo</h3>
        <p>
          Sab data points ko ek graph par dots ki tarah plot karte hain. X-axis par size,
          Y-axis par kimat.
        </p>
        <p style={{marginTop: '10px', fontWeight: 'bold'}}>
          Result: Hume dots ka ek pattern dikh raha hai - jaise woh ek line ki tarah lag rahe hain!
        </p>
      </div>

      <div style={{background: '#fff3e0', padding: '25px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 3: Best Fit Line Dhundho</h3>
        <p>
          Ab computer ek aisi seedhi line dhoondhta hai jo sabhi dots ke sabse kareeb ho.
          Is line ko <strong>"Best Fit Line"</strong> kehte hain.
        </p>
        <p style={{marginTop: '10px'}}>
          <strong>Kaise dhoondhte hain?</strong> Computer bahut saari lines try karta hai
          aur dekhta hai ki kaun si line sabse achhi hai (sabse kam error ke saath).
        </p>
        <div className="note-box" style={{marginTop: '15px'}}>
          <p>
            <strong>Note:</strong> Yeh process automatic hai - computer khud calculate kar leta hai.
            Hume bas data dena hai!
          </p>
        </div>
      </div>

      <div style={{background: '#fce4ec', padding: '25px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 4: Line Use Karke Predict Karo</h3>
        <p>
          Jab best fit line mil gayi, toh ab hum kisi bhi naye size ke liye kimat predict kar sakte hain!
        </p>
        <p style={{marginTop: '10px'}}>
          <strong>Example:</strong> 1300 sq ft ka ghar?<br />
          Line par 1300 dekhte hain → Prediction milti hai: ₹60.5 Lakh!
        </p>
      </div>

      <h2>🎯 Linear Regression Ki Important Baatein</h2>

      <div className="concept-box">
        <h3>1. Input aur Output</h3>
        <p>
          <strong>Input (X):</strong> Woh cheez jisse hum predict karna chahte hain<br />
          <em>Example: Ghar ka size, padhaai ke ghante, temperature</em>
        </p>
        <p style={{marginTop: '10px'}}>
          <strong>Output (Y):</strong> Woh cheez jo hum predict karna chahte hain<br />
          <em>Example: Ghar ki kimat, marks, samose ki sale</em>
        </p>
      </div>

      <div className="concept-box">
        <h3>2. Relationship - Positive ya Negative?</h3>
        <p><strong>Positive Relationship:</strong></p>
        <ul>
          <li>X badhta hai → Y bhi badhta hai</li>
          <li>Example: Zyada size → Zyada kimat</li>
          <li>Line upar ki taraf jaati hai ↗️</li>
        </ul>
        <p style={{marginTop: '15px'}}><strong>Negative Relationship:</strong></p>
        <ul>
          <li>X badhta hai → Y kam hota hai</li>
          <li>Example: Zyada temperature → Kam samose bikenge</li>
          <li>Line neeche ki taraf jaati hai ↘️</li>
        </ul>
      </div>

      <div className="concept-box">
        <h3>3. Perfect Fit Nahi Hota</h3>
        <p>
          Dhyaan rakhiye: Line sabhi dots se exactly touch nahi karti. Kuch dots line
          ke upar hain, kuch neeche. <strong>Yeh normal hai!</strong>
        </p>
        <p style={{marginTop: '10px'}}>
          Real life mein perfect predictions nahi hoti. Bas best possible prediction
          karne ki koshish karte hain.
        </p>
        <div className="example-box" style={{marginTop: '15px'}}>
          <strong>Example:</strong> Do gharon ka size same hai (1000 sq ft) par ek beachside hai
          aur ek highway par. Unki kimat alag hogi! Linear Regression sirf size dekhta hai,
          toh prediction thoda different ho sakta hai reality se.
        </div>
      </div>

      <h2>✅ Linear Regression Kab Use Karein?</h2>

      <div className="note-box">
        <h3>Perfect Situations:</h3>
        <ul>
          <li>✅ Jab aapko <strong>number predict</strong> karna ho (kimat, temperature, sales, etc.)</li>
          <li>✅ Jab input aur output mein <strong>linear relationship</strong> ho (seedhi line ban sakti ho)</li>
          <li>✅ Jab aapke paas <strong>achha data</strong> ho (enough examples)</li>
        </ul>
      </div>

      <div className="example-box" style={{marginTop: '20px'}}>
        <h3>🌟 Real Life Examples:</h3>
        <ul>
          <li>🏠 <strong>Real Estate:</strong> Ghar ki kimat predict karna (size, location se)</li>
          <li>💰 <strong>Sales Prediction:</strong> Advertising budget se sales predict karna</li>
          <li>📈 <strong>Stock Prices:</strong> Company ke revenue se stock price estimate karna</li>
          <li>🌡️ <strong>Temperature:</strong> Altitude (height) se temperature predict karna</li>
          <li>🚗 <strong>Car Price:</strong> Car ki age aur mileage se kimat predict karna</li>
          <li>⚡ <strong>Electricity Bill:</strong> Units consumed se bill amount predict karna</li>
        </ul>
      </div>

      <h2>📝 Key Takeaways - Is Module Se Kya Seekha?</h2>

      <div className="concept-box">
        <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
          <li>✅ <strong>Linear Regression</strong> = Best fit line draw karke predictions karna</li>
          <li>✅ <strong>Best Fit Line</strong> = Woh seedhi line jo data ko sabse achhe se represent karti hai</li>
          <li>✅ Input badhne par output bhi badh sakta hai (positive) ya kam ho sakta hai (negative)</li>
          <li>✅ Linear Regression <strong>numbers predict</strong> karta hai (continuous values)</li>
          <li>✅ Perfect predictions nahi, par best possible estimate milta hai</li>
          <li>✅ Real life mein bahut jagah use hota hai - real estate se lekar sales prediction tak!</li>
        </ul>
      </div>

      <div className="note-box" style={{marginTop: '30px'}}>
        <h3>🎊 Shabash!</h3>
        <p>
          Aapne Linear Regression ki basics samajh li! Yeh ek powerful tool hai jo
          numbers predict karne mein bahut helpful hai.
        </p>
        <p style={{marginTop: '15px'}}>
          <strong>Agle module mein:</strong> Hum Linear Regression ko aur detail mein
          samjhenge - technical terms, formulas (simple ones!), aur advanced concepts.
          Tension mat lo, sab kuch visual aur simple rahega!
        </p>
      </div>

      <div className="lesson-nav">
        <button className="btn btn-secondary" onClick={onBack}>
          ← Modules List
        </button>
        <button className="btn btn-primary" onClick={onBack}>
          Module 3: Deep Dive →
        </button>
      </div>
    </div>
  )
}
