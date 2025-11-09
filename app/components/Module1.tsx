'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'

interface Props {
  onBack: () => void
}

export default function Module1({ onBack }: Props) {
  const [showExample, setShowExample] = useState(1)

  const studyData = [
    { hours: 1, marks: 30 },
    { hours: 2, marks: 40 },
    { hours: 3, marks: 50 },
    { hours: 4, marks: 65 },
    { hours: 5, marks: 75 },
    { hours: 6, marks: 85 },
    { hours: 7, marks: 90 },
  ]

  const houseData = [
    { size: 500, price: 20 },
    { size: 800, price: 35 },
    { size: 1000, price: 45 },
    { size: 1200, price: 55 },
    { size: 1500, price: 70 },
    { size: 2000, price: 90 },
  ]

  return (
    <div className="lesson-container">
      <h1 style={{color: '#667eea', marginBottom: '20px'}}>
        📘 Module 1: Machine Learning Kya Hai?
      </h1>

      <div className="progress-bar">
        <div className="progress-fill" style={{width: '16.6%'}}></div>
      </div>

      <div className="concept-box">
        <h2>🤔 Sabse Pehle - Ek Simple Sawal</h2>
        <p>
          Agar main aapko kahunga: "Kal baarish hogi ya nahi?" - Aap kaise batayenge?
        </p>
        <p>
          Aap dekhenge:
        </p>
        <ul>
          <li>Aasman mein baadal hain ya nahi?</li>
          <li>Mausam kitna garam/thanda hai?</li>
          <li>Pichle kuch dinon mein baarish hui thi ya nahi?</li>
          <li>Apne purane experience se</li>
        </ul>
        <p>
          <strong>Yahi hai Machine Learning!</strong> Purani information dekh kar, nayi prediction karna.
        </p>
      </div>

      <h2>🎯 Machine Learning Ki Simple Definition</h2>
      <p>
        <strong>Hindi Mein:</strong> Machine Learning ek tarika hai jismein computer khud seekhta hai,
        bina hum use har ek step bataye. Computer purane data ko dekhta hai aur patterns samajhta hai,
        phir nayi cheezein predict karta hai.
      </p>

      <div className="example-box">
        <h3>📖 Example 1: Padhaai aur Marks</h3>
        <p>
          Socho aap ek teacher ho. Aapne dekha hai ki:
        </p>
        <ul>
          <li>Jo students 1 ghanta padhte hain, unhe 30-40 marks milte hain</li>
          <li>Jo 3 ghante padhte hain, unhe 50-60 marks milte hain</li>
          <li>Jo 5-6 ghante padhte hain, unhe 75-90 marks milte hain</li>
        </ul>
        <p>
          Ab agar koi naya student aata hai aur kehta hai "Main 4 ghante padhunga",
          toh aap usse bol sakte ho "Tumhe shayad 65-70 marks mil sakte hain."
        </p>
        <p>
          <strong>Yahi Machine Learning hai!</strong> Purane students ka data dekh kar,
          naye student ke marks predict karna.
        </p>
      </div>

      <div className="visual-section">
        <h3>📊 Visual Representation - Padhaai vs Marks</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="hours"
              label={{ value: 'Padhaai (Ghante)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis
              label={{ value: 'Marks (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Scatter
              name="Students"
              data={studyData}
              fill="#8884d8"
              line={{ stroke: '#8884d8', strokeWidth: 2 }}
            />
          </ScatterChart>
        </ResponsiveContainer>
        <p style={{textAlign: 'center', marginTop: '10px', fontStyle: 'italic'}}>
          Dekho kaise zyada padhaai = zyada marks. Machine Learning is pattern ko samajhti hai!
        </p>
      </div>

      <h2>🏠 Example 2: Ghar Ki Kimat</h2>
      <div className="example-box">
        <p>
          Socho aap ghar kharidna chahte ho. Aapko pata hai:
        </p>
        <ul>
          <li>500 square feet ka ghar = 20 lakh</li>
          <li>1000 square feet ka ghar = 45 lakh</li>
          <li>1500 square feet ka ghar = 70 lakh</li>
        </ul>
        <p>
          Ab agar 1200 square feet ka ghar hai, toh uski kimat kya hogi?
          Aap anumaan laga sakte ho ki shayad 50-60 lakh hogi.
        </p>
        <p>
          <strong>Machine Learning bhi yahi karta hai!</strong> Purane ghar ki kimat dekh kar,
          naye ghar ki kimat bata deta hai.
        </p>
      </div>

      <div className="visual-section">
        <h3>📊 Visual Representation - Ghar Ka Size vs Kimat</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="size"
              label={{ value: 'Size (Square Feet)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis
              label={{ value: 'Kimat (Lakh)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Scatter
              name="Ghar"
              data={houseData}
              fill="#82ca9d"
              line={{ stroke: '#82ca9d', strokeWidth: 2 }}
            />
          </ScatterChart>
        </ResponsiveContainer>
        <p style={{textAlign: 'center', marginTop: '10px', fontStyle: 'italic'}}>
          Bada ghar = zyada kimat. Yeh pattern clear dikh raha hai!
        </p>
      </div>

      <h2>🧠 Machine Learning Ke 3 Important Parts</h2>

      <div className="concept-box">
        <h3>1. Data (Information)</h3>
        <p>
          Yeh woh purani information hai jo hum computer ko dete hain. Jaise:
        </p>
        <ul>
          <li>Purane students ki padhaai aur marks</li>
          <li>Purane gharon ka size aur kimat</li>
          <li>Pichle saalon ka mausam data</li>
        </ul>
        <p>
          <strong>Simple shabdon mein:</strong> Data matlab purani examples jo computer ko sikhane ke liye use hoti hain.
        </p>
      </div>

      <div className="concept-box">
        <h3>2. Pattern (Nakshe/Tarike)</h3>
        <p>
          Computer data mein patterns dhoondhta hai. Jaise:
        </p>
        <ul>
          <li>"Zyada padhaai = Zyada marks" - Yeh ek pattern hai</li>
          <li>"Bada ghar = Zyada kimat" - Yeh bhi ek pattern hai</li>
          <li>"Baadal + Thand = Baarish" - Yeh bhi pattern ho sakta hai</li>
        </ul>
        <p>
          <strong>Simple shabdon mein:</strong> Pattern matlab data mein chhupa hua relationship.
        </p>
      </div>

      <div className="concept-box">
        <h3>3. Prediction (Anumaan)</h3>
        <p>
          Jab computer pattern samajh jaata hai, toh woh naye cases ke liye jawab de sakta hai:
        </p>
        <ul>
          <li>"Agar 4.5 ghante padhe, toh 70 marks milenge" - Prediction</li>
          <li>"1300 sq ft ka ghar 60 lakh ka hoga" - Prediction</li>
          <li>"Kal baarish ho sakti hai" - Prediction</li>
        </ul>
        <p>
          <strong>Simple shabdon mein:</strong> Prediction matlab purane patterns use karke naye sawaal ka jawab dena.
        </p>
      </div>

      <h2>🎓 Machine Learning Kaise Kaam Karta Hai? - Step by Step</h2>

      <div style={{background: '#f0f8ff', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 1: Data Collect Karo (Information Ikattha Karo)</h3>
        <p>
          Sabse pehle, hume bahut saari purani information chahiye. Jaise agar hume
          ghar ki kimat predict karni hai, toh hume bahut sare gharon ki details chahiye:
          unka size, location, rooms, etc.
        </p>
        <div className="example-box" style={{marginTop: '15px'}}>
          <strong>Example:</strong> 100 gharon ki information - unka size aur kimat
        </div>
      </div>

      <div style={{background: '#f0fff0', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 2: Pattern Dhundho (Computer Ko Seekhne Do)</h3>
        <p>
          Ab computer us data ko dekhta hai aur patterns dhoondhta hai. Woh samajhta hai ki
          size aur kimat mein kya relationship hai.
        </p>
        <div className="example-box" style={{marginTop: '15px'}}>
          <strong>Example:</strong> Computer samajh gaya ki har 100 sq ft badhne par kimat
          4-5 lakh badh jaati hai
        </div>
      </div>

      <div style={{background: '#fff5f0', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 3: Test Karo (Check Karo)</h3>
        <p>
          Ab hum computer ko kuch naye examples dete hain jinhein usne pehle nahi dekha.
          Dekhte hain ki woh sahi predict kar raha hai ya nahi.
        </p>
        <div className="example-box" style={{marginTop: '15px'}}>
          <strong>Example:</strong> "1100 sq ft ka ghar bataao kimat" - Computer bolega "48 lakh"
          <br />Agar sahi kimat 50 lakh hai, toh almost sahi hai!
        </div>
      </div>

      <div style={{background: '#f5f0ff', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 4: Use Karo (Real Life Mein Lagao)</h3>
        <p>
          Jab computer achha predict karne lagta hai, toh hum ise real life mein use kar sakte hain.
          Ab koi bhi naya ghar ho, computer turant uski kimat bata dega!
        </p>
      </div>

      <h2>🌟 Machine Learning Ke Types (Simplified)</h2>

      <div className="note-box">
        <h3>Type 1: Supervised Learning (Teacher Ke Saath Seekhna)</h3>
        <p>
          Jaise school mein teacher examples ke saath answers bhi deta hai, waise hi
          computer ko bhi examples ke saath unke answers diye jaate hain.
        </p>
        <p><strong>Example:</strong></p>
        <ul>
          <li>Email spam hai ya nahi - Computer ko spam aur non-spam dono examples diye jaate hain</li>
          <li>Ghar ki kimat - Computer ko size ke saath kimat bhi di jaati hai</li>
        </ul>
        <p style={{marginTop: '10px', fontWeight: 'bold', color: '#28a745'}}>
          ✓ Linear Regression aur Logistic Regression dono is category mein aate hain!
        </p>
      </div>

      <div className="note-box">
        <h3>Type 2: Unsupervised Learning (Khud Se Seekhna)</h3>
        <p>
          Yahan computer ko sirf data diya jaata hai, answers nahi. Computer khud patterns dhoondhta hai.
        </p>
        <p><strong>Example:</strong></p>
        <ul>
          <li>Shopping website par customers ko groups mein baantna</li>
          <li>Similar products ko ek saath rakhna</li>
        </ul>
      </div>

      <h2>🎯 Machine Learning Kahan Use Hoti Hai?</h2>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '20px'}}>
        <div className="example-box">
          <h4>📧 Email Spam Detection</h4>
          <p>Gmail automatically spam emails ko alag kar deta hai. Yeh ML hai!</p>
        </div>

        <div className="example-box">
          <h4>🎬 Netflix Recommendations</h4>
          <p>Netflix aapki pasand ki movies suggest karta hai. ML ki wajah se!</p>
        </div>

        <div className="example-box">
          <h4>🗣️ Voice Assistants</h4>
          <p>Alexa, Siri, Google Assistant - Sab ML use karte hain!</p>
        </div>

        <div className="example-box">
          <h4>🚗 Self-Driving Cars</h4>
          <p>Bina driver ke chalti cars - ML ka kamal!</p>
        </div>

        <div className="example-box">
          <h4>🏥 Medical Diagnosis</h4>
          <p>X-Ray aur MRI reports padhna - ML doctors ki madad karta hai!</p>
        </div>

        <div className="example-box">
          <h4>💰 Bank Fraud Detection</h4>
          <p>Credit card fraud pakadna - ML real-time mein karta hai!</p>
        </div>
      </div>

      <h2>📝 Key Takeaways - Is Module Se Kya Seekha?</h2>

      <div className="concept-box">
        <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
          <li>✅ <strong>Machine Learning</strong> = Computer ka purane data se seekh kar nayi predictions karna</li>
          <li>✅ <strong>Data</strong> = Purani information jo computer ko sikhaने ke liye use hoti hai</li>
          <li>✅ <strong>Pattern</strong> = Data mein chhupe hue relationships</li>
          <li>✅ <strong>Prediction</strong> = Patterns use karke naye sawaal ka jawab dena</li>
          <li>✅ ML har jagah use hoti hai - emails se lekar self-driving cars tak!</li>
          <li>✅ <strong>Supervised Learning</strong> mein computer ko examples ke saath answers bhi diye jaate hain</li>
        </ul>
      </div>

      <div className="note-box" style={{marginTop: '30px'}}>
        <h3>🎉 Badhaayi Ho!</h3>
        <p>
          Aapne Module 1 complete kar liya! Ab aap jaante ho ki Machine Learning kya hai
          aur yeh kaise kaam karti hai. Koi complicated maths nahi, sirf simple concepts!
        </p>
        <p style={{marginTop: '15px'}}>
          <strong>Agle module mein:</strong> Hum Linear Regression seekhenge - ek specific
          type ki ML jo numbers predict karti hai (jaise ghar ki kimat). Woh bhi bilkul
          simple Hindi aur visual examples ke saath!
        </p>
      </div>

      <div className="lesson-nav">
        <button className="btn btn-secondary" onClick={onBack}>
          ← Modules List
        </button>
        <button className="btn btn-primary" onClick={onBack}>
          Module 2: Linear Regression →
        </button>
      </div>
    </div>
  )
}
