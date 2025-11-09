'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'

interface Props {
  onBack: () => void
}

export default function Module3({ onBack }: Props) {
  const [slope, setSlope] = useState(0.045)
  const [intercept, setIntercept] = useState(2)

  const generateData = (m: number, c: number) => {
    const data = []
    for (let x = 500; x <= 2000; x += 100) {
      data.push({
        x,
        y: m * x + c,
        actual: m * x + c + (Math.random() - 0.5) * 10
      })
    }
    return data
  }

  const data = generateData(slope, intercept)

  return (
    <div className="lesson-container">
      <h1 style={{color: '#667eea', marginBottom: '20px'}}>
        🔬 Module 3: Linear Regression - Deep Dive
      </h1>

      <div className="progress-bar">
        <div className="progress-fill" style={{width: '50%'}}></div>
      </div>

      <div className="concept-box">
        <h2>🎯 Is Module Mein Kya Seekhenge?</h2>
        <p>
          Ab tak humne Linear Regression ki basics samajh li. Ab hum thoda technical
          detail mein jaayenge - par tension mat lo, sab kuch simple Hindi mein rahega!
        </p>
        <ul>
          <li>Line ki equation kaise banti hai</li>
          <li>"Best fit" line kaise calculate hoti hai</li>
          <li>Accuracy kaise measure karte hain</li>
          <li>Common mistakes aur unse kaise bache</li>
        </ul>
      </div>

      <h2>📐 Line Ki Equation - The Magic Formula</h2>

      <div className="visual-section">
        <h3>Basic School Mein Padhaya Tha - Yaad Hai?</h3>
        <p>
          School mein line ki equation padhaayi thi: <strong>y = mx + c</strong>
        </p>
        <div style={{background: 'white', padding: '20px', borderRadius: '10px', margin: '20px 0'}}>
          <p style={{fontSize: '1.3rem', textAlign: 'center', fontWeight: 'bold'}}>
            y = mx + c
          </p>
          <ul style={{marginTop: '15px'}}>
            <li><strong>y</strong> = Output (jo hum predict karna chahte hain)</li>
            <li><strong>x</strong> = Input (jo information hum de rahe hain)</li>
            <li><strong>m</strong> = Slope (Line kitni teedi hai - dhaal)</li>
            <li><strong>c</strong> = Intercept (Line Y-axis ko kahan touch karti hai)</li>
          </ul>
        </div>
      </div>

      <div className="example-box">
        <h3>🏠 Ghar Ki Example Se Samjhein</h3>
        <p>
          Maan lo humari equation hai: <strong>Price = 0.045 × Size + 2</strong>
        </p>
        <ul>
          <li><strong>Price</strong> = Ghar ki kimat (lakh mein)</li>
          <li><strong>Size</strong> = Ghar ka size (square feet mein)</li>
          <li><strong>0.045</strong> = Slope (m) - Har sq ft ka 0.045 lakh rate</li>
          <li><strong>2</strong> = Intercept (c) - Base price 2 lakh</li>
        </ul>

        <div style={{background: '#e8f5e9', padding: '15px', borderRadius: '5px', marginTop: '15px'}}>
          <p><strong>Example Calculation:</strong></p>
          <p>1000 sq ft ka ghar ki kimat?</p>
          <p>Price = 0.045 × 1000 + 2</p>
          <p>Price = 45 + 2</p>
          <p><strong>Price = ₹47 Lakh</strong></p>
        </div>
      </div>

      <h2>🎮 Interactive: Equation Ko Khud Explore Karein!</h2>

      <div className="interactive-demo">
        <h3>Line Ki Equation Ke Saath Khelein</h3>
        <p>Slope (m) aur Intercept (c) change karke dekhiye line kaise badalti hai:</p>

        <div className="slider-container">
          <label>Slope (m) = {slope.toFixed(3)}</label>
          <input
            type="range"
            min="0.01"
            max="0.08"
            step="0.005"
            value={slope}
            onChange={(e) => setSlope(Number(e.target.value))}
          />
          <p style={{fontSize: '0.9rem', color: '#666'}}>
            Slope: Line kitni teedi/chaudi hai. Zyada slope = Line zyada upar jaayegi
          </p>
        </div>

        <div className="slider-container">
          <label>Intercept (c) = {intercept}</label>
          <input
            type="range"
            min="-20"
            max="30"
            step="1"
            value={intercept}
            onChange={(e) => setIntercept(Number(e.target.value))}
          />
          <p style={{fontSize: '0.9rem', color: '#666'}}>
            Intercept: Line Y-axis ko kahan touch karti hai. Starting point!
          </p>
        </div>

        <div style={{background: '#f0f8ff', padding: '15px', borderRadius: '5px', marginTop: '15px'}}>
          <p style={{fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center'}}>
            Current Equation: Price = {slope.toFixed(3)} × Size + {intercept}
          </p>
        </div>

        <ResponsiveContainer width="100%" height={350} style={{marginTop: '20px'}}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              type="number"
              domain={[400, 2100]}
              label={{ value: 'Size (sq ft)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis
              type="number"
              domain={[-20, 120]}
              label={{ value: 'Price (Lakh)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Scatter name="Data Points" data={data} fill="#3b82f6" dataKey="actual" />
            <Line
              type="monotone"
              dataKey="y"
              data={data}
              stroke="#ef4444"
              strokeWidth={3}
              dot={false}
              name="Your Line"
            />
          </ScatterChart>
        </ResponsiveContainer>

        <div className="note-box" style={{marginTop: '15px'}}>
          <p>
            <strong>Experiment karein:</strong> Different values try karke dekhen ki
            kaun si line data points ko best represent karti hai!
          </p>
        </div>
      </div>

      <h2>🎯 "Best Fit" Line Kaise Milti Hai?</h2>

      <div className="concept-box">
        <h3>Problem: Kitni Lines Ho Sakti Hain?</h3>
        <p>
          Data points ke beech se infinite (anant) lines draw ho sakti hain!
          Par hume <strong>BEST</strong> line chahiye. Kaun si best hai?
        </p>
        <p style={{marginTop: '15px'}}>
          <strong>Answer:</strong> Woh line best hai jiska <strong>ERROR sabse kam</strong> ho!
        </p>
      </div>

      <div className="visual-section">
        <h3>Error Kya Hai?</h3>
        <p>
          Error matlab: Actual value aur Predicted value ka difference
        </p>

        <div className="example-box" style={{marginTop: '15px'}}>
          <p><strong>Example:</strong></p>
          <ul>
            <li>Actual kimat = ₹50 Lakh</li>
            <li>Humari prediction = ₹47 Lakh</li>
            <li><strong>Error = 50 - 47 = 3 Lakh</strong></li>
          </ul>
          <p style={{marginTop: '10px'}}>
            Jitna kam error, utni achhi prediction!
          </p>
        </div>

        <div style={{background: '#fff3cd', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
          <h3>Best Fit Line Ka Goal:</h3>
          <p style={{fontSize: '1.2rem'}}>
            <strong>Sabhi points ka TOTAL ERROR minimize karna!</strong>
          </p>
          <p style={{marginTop: '10px'}}>
            Computer bahut saari lines try karta hai aur woh line choose karta hai
            jiska total error sabse kam ho.
          </p>
        </div>
      </div>

      <h2>📊 Accuracy Kaise Check Karein?</h2>

      <div className="concept-box">
        <h3>1. R² Score (R-Squared)</h3>
        <p>
          Yeh ek number hai 0 se 1 ke beech jo batata hai ki humari line kitni achhi hai.
        </p>
        <ul>
          <li><strong>R² = 1.0 (100%):</strong> Perfect! Sabhi points line par hain</li>
          <li><strong>R² = 0.9 (90%):</strong> Bahut achha! Line almost sahi hai</li>
          <li><strong>R² = 0.7 (70%):</strong> Theek hai, use kar sakte hain</li>
          <li><strong>R² = 0.3 (30%):</strong> Kam hai, prediction accurate nahi hogi</li>
          <li><strong>R² = 0:</strong> Bilkul kharab, line kaam ki nahi</li>
        </ul>

        <div className="note-box" style={{marginTop: '15px'}}>
          <p>
            <strong>Simple mein:</strong> R² score jitna zyada, prediction utni achhi!
            70% se upar achha mana jata hai.
          </p>
        </div>
      </div>

      <div className="concept-box">
        <h3>2. Mean Error (Average Error)</h3>
        <p>
          Sabhi predictions ka average error kitna hai?
        </p>
        <div className="example-box" style={{marginTop: '15px'}}>
          <p><strong>Example:</strong></p>
          <ul>
            <li>Ghar 1: Error = 3 lakh</li>
            <li>Ghar 2: Error = 2 lakh</li>
            <li>Ghar 3: Error = 5 lakh</li>
            <li><strong>Mean Error = (3+2+5)/3 = 3.33 lakh</strong></li>
          </ul>
          <p style={{marginTop: '10px'}}>
            Matlab average 3.33 lakh ka difference hai actual aur predicted mein.
          </p>
        </div>
      </div>

      <h2>⚠️ Linear Regression Ki Limitations</h2>

      <div className="example-box">
        <h3>1. Sirf Linear Relationships Ke Liye</h3>
        <p>
          Agar data ka pattern seedhi line ki tarah nahi hai, toh Linear Regression
          kaam nahi karega!
        </p>
        <div style={{marginTop: '15px', padding: '15px', background: '#fff', borderRadius: '5px'}}>
          <p><strong>Example:</strong></p>
          <p>
            Population growth exponential hoti hai (tezi se badhti hai), seedhi line
            nahi banti. Aise cases mein Linear Regression galat predictions dega.
          </p>
        </div>
      </div>

      <div className="example-box">
        <h3>2. Outliers Ka Problem</h3>
        <p>
          <strong>Outlier</strong> = Aisi value jo bahut alag hai baaki sab se
        </p>
        <div style={{marginTop: '15px', padding: '15px', background: '#fff', borderRadius: '5px'}}>
          <p><strong>Example:</strong></p>
          <p>
            99 ghar ki kimat 20-80 lakh ke beech hai, par ek ghar 500 lakh ka hai
            (celebrity ka mansion). Yeh outlier poori line ko affect karega aur
            predictions galat ho jayengi.
          </p>
        </div>
        <div className="note-box" style={{marginTop: '10px'}}>
          <p>
            <strong>Solution:</strong> Outliers ko pehchan kar remove karna ya
            special treatment dena.
          </p>
        </div>
      </div>

      <div className="example-box">
        <h3>3. Extrapolation Ka Khatra</h3>
        <p>
          <strong>Extrapolation</strong> = Training data ke range se bahar prediction karna
        </p>
        <div style={{marginTop: '15px', padding: '15px', background: '#fff', borderRadius: '5px'}}>
          <p><strong>Example:</strong></p>
          <p>
            Humara data 500-2000 sq ft ke gharon ka hai. Ab hum 5000 sq ft ke ghar
            ki kimat predict kar rahe hain. Yeh risky hai kyunki pattern same nahi
            reh sakta!
          </p>
        </div>
        <div className="note-box" style={{marginTop: '10px'}}>
          <p>
            <strong>Rule:</strong> Hamesha training data ke range ke andar hi
            predictions karo. Bahar ke predictions unreliable ho sakti hain.
          </p>
        </div>
      </div>

      <h2>🔧 Multiple Linear Regression</h2>

      <div className="concept-box">
        <h3>Ek Se Zyada Inputs!</h3>
        <p>
          Ab tak humne sirf ek input use kiya (jaise sirf size). Par real life mein
          bahut saare factors hote hain!
        </p>

        <div className="example-box" style={{marginTop: '15px'}}>
          <p><strong>Ghar Ki Kimat Par Asar:</strong></p>
          <ul>
            <li>Size (square feet)</li>
            <li>Location (area)</li>
            <li>Number of bedrooms</li>
            <li>Age of house</li>
            <li>Nearby facilities (metro, school, etc.)</li>
          </ul>
        </div>

        <div style={{background: '#e3f2fd', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
          <h3>Multiple Linear Regression Equation:</h3>
          <p style={{fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold'}}>
            Price = m₁×Size + m₂×Bedrooms + m₃×Age + c
          </p>
          <p style={{marginTop: '15px'}}>
            Har input ka apna slope (coefficient) hota hai jo batata hai ki
            woh factor kitna important hai.
          </p>
        </div>

        <div className="note-box" style={{marginTop: '15px'}}>
          <p>
            <strong>Advantage:</strong> Zyada accurate predictions kyunki hum
            zyada factors consider kar rahe hain!
          </p>
        </div>
      </div>

      <h2>🎯 Practical Tips - Achha Model Kaise Banayein?</h2>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginTop: '20px'}}>
        <div className="note-box">
          <h4>1. Enough Data Rakhein</h4>
          <p>
            Kam se kam 50-100 examples chahiye. Jitna zyada data, utni achhi
            learning!
          </p>
        </div>

        <div className="note-box">
          <h4>2. Data Ko Clean Karein</h4>
          <p>
            Missing values, errors, outliers ko handle karein pehle. Gandha
            data = Gandhi predictions!
          </p>
        </div>

        <div className="note-box">
          <h4>3. Relevant Features Lo</h4>
          <p>
            Sirf woh inputs lo jo actually output ko affect karte hain. Bekaar
            ki information na do.
          </p>
        </div>

        <div className="note-box">
          <h4>4. Test Karein</h4>
          <p>
            Model ko naye, unseen data par test karo. Training data par achha
            kaam karna kaafi nahi!
          </p>
        </div>

        <div className="note-box">
          <h4>5. Visualize Karein</h4>
          <p>
            Hamesha graphs draw karo. Pattern dekh kar samajh aata hai ki
            Linear Regression sahi approach hai ya nahi.
          </p>
        </div>

        <div className="note-box">
          <h4>6. Realistic Rahein</h4>
          <p>
            100% accuracy expect mat karo. Real world messy hai! 80-90%
            accuracy bhi bahut achhi hai.
          </p>
        </div>
      </div>

      <h2>📝 Key Takeaways - Is Module Se Kya Seekha?</h2>

      <div className="concept-box">
        <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
          <li>✅ Line ki equation: <strong>y = mx + c</strong> (m=slope, c=intercept)</li>
          <li>✅ Best fit line = Sabse kam error wali line</li>
          <li>✅ R² score se accuracy measure karte hain (higher is better!)</li>
          <li>✅ Linear Regression sirf linear patterns ke liye kaam karta hai</li>
          <li>✅ Outliers predictions ko kharab kar sakte hain</li>
          <li>✅ Multiple inputs use kar sakte hain better predictions ke liye</li>
          <li>✅ Good data + Right features = Accurate model!</li>
        </ul>
      </div>

      <div className="note-box" style={{marginTop: '30px'}}>
        <h3>🌟 Bahut Badhiya!</h3>
        <p>
          Aapne Linear Regression ko gehrayi se samajh liya! Ab aap jaante ho ki
          yeh kaise kaam karta hai aur iske limitations kya hain.
        </p>
        <p style={{marginTop: '15px'}}>
          <strong>Agle module mein:</strong> Hum ek nayi technique seekhenge -
          <strong> Logistic Regression</strong>! Yeh thoda different hai Linear se.
          Jab hume Yes/No type answers chahiye (jaise email spam hai ya nahi),
          tab Logistic Regression use karte hain!
        </p>
      </div>

      <div className="lesson-nav">
        <button className="btn btn-secondary" onClick={onBack}>
          ← Modules List
        </button>
        <button className="btn btn-primary" onClick={onBack}>
          Module 4: Logistic Regression →
        </button>
      </div>
    </div>
  )
}
