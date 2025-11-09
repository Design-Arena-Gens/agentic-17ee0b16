'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'

interface Props {
  onBack: () => void
}

export default function Module4({ onBack }: Props) {
  const [threshold, setThreshold] = useState(0.5)
  const [emailScore, setEmailScore] = useState(0.7)

  // Sigmoid function
  const sigmoid = (x: number) => {
    return 1 / (1 + Math.exp(-x))
  }

  // Generate sigmoid curve data
  const sigmoidData = []
  for (let x = -10; x <= 10; x += 0.5) {
    sigmoidData.push({
      x,
      y: sigmoid(x)
    })
  }

  // Email spam data
  const emailData = [
    { spamWords: 0, isSpam: 0, label: 'Safe' },
    { spamWords: 1, isSpam: 0, label: 'Safe' },
    { spamWords: 2, isSpam: 0, label: 'Safe' },
    { spamWords: 3, isSpam: 0.2, label: 'Maybe' },
    { spamWords: 4, isSpam: 0.4, label: 'Maybe' },
    { spamWords: 5, isSpam: 0.6, label: 'Maybe' },
    { spamWords: 6, isSpam: 0.8, label: 'Spam' },
    { spamWords: 7, isSpam: 0.9, label: 'Spam' },
    { spamWords: 8, isSpam: 1, label: 'Spam' },
    { spamWords: 9, isSpam: 1, label: 'Spam' },
    { spamWords: 10, isSpam: 1, label: 'Spam' },
  ]

  return (
    <div className="lesson-container">
      <h1 style={{color: '#667eea', marginBottom: '20px'}}>
        🎲 Module 4: Logistic Regression - Haan Ya Naa?
      </h1>

      <div className="progress-bar">
        <div className="progress-fill" style={{width: '66.6%'}}></div>
      </div>

      <div className="concept-box">
        <h2>🤔 Linear Regression Vs Logistic Regression</h2>
        <p>
          <strong>Linear Regression:</strong> Numbers predict karta hai (10, 45.5, 1000, etc.)<br />
          <em>Example: Ghar ki kimat ₹50 lakh</em>
        </p>
        <p style={{marginTop: '15px'}}>
          <strong>Logistic Regression:</strong> Yes/No type jawab deta hai<br />
          <em>Example: Email spam hai? Haan ya Naa</em>
        </p>
      </div>

      <h2>🎯 Logistic Regression Kya Hai?</h2>

      <div className="visual-section">
        <p style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
          <strong>Simple Hindi Mein:</strong> Logistic Regression ek tarika hai jismein hum
          0 aur 1 ke beech ek probability nikal te hain, jo batati hai ki koi cheez ek
          particular category mein hai ya nahi.
        </p>
        <ul style={{marginTop: '15px'}}>
          <li><strong>0</strong> = Nahi / False / Negative</li>
          <li><strong>1</strong> = Haan / True / Positive</li>
          <li><strong>0.5</strong> = 50-50 chance (confused!)</li>
          <li><strong>0.8</strong> = 80% chance haan ka</li>
        </ul>
      </div>

      <div className="example-box">
        <h3>📧 Example: Email Spam Detection</h3>
        <p>
          Socho aapke paas ek email aaya:
        </p>
        <div style={{background: '#f5f5f5', padding: '15px', borderRadius: '5px', marginTop: '10px', fontFamily: 'monospace'}}>
          <p><strong>Subject:</strong> "CONGRATULATIONS! Aapne 10 LAKH JEET LIYE!!!"</p>
          <p><strong>Body:</strong> "Abhi click karo aur apna prize claim karo! FREE! WINNER!"</p>
        </div>
        <p style={{marginTop: '15px'}}>
          Logistic Regression dekhega:
        </p>
        <ul>
          <li>Kitne spam words hain? (FREE, WINNER, CONGRATULATIONS) = Bahut!</li>
          <li>Capital letters ka overuse? = Haan</li>
          <li>Suspicious links? = Haan</li>
        </ul>
        <p style={{marginTop: '15px', padding: '15px', background: '#fee', borderRadius: '5px'}}>
          <strong>Output:</strong> Spam hone ki probability = <strong>0.95 (95%)</strong><br />
          <strong>Decision:</strong> SPAM! (Kyunki 95% zyada hai 50% se)
        </p>
      </div>

      <h2>📊 Linear Vs Logistic - Visual Difference</h2>

      <div className="visual-section">
        <h3>Problem With Linear Regression For Yes/No Questions</h3>
        <p>
          Agar hum email spam detection ke liye Linear Regression use karein, toh
          kya problem hogi? Dekhte hain:
        </p>

        <div style={{background: '#fff3cd', padding: '20px', borderRadius: '10px', marginTop: '15px'}}>
          <p><strong>Problem 1:</strong> Linear line 0 aur 1 ke bahar bhi jaa sakti hai!</p>
          <ul>
            <li>Prediction = -0.5? (Kya matlab? Negative spam?)</li>
            <li>Prediction = 1.8? (180% spam? Impossible!)</li>
          </ul>
          <p style={{marginTop: '10px'}}>
            <strong>Hume chahiye:</strong> Output hamesha 0 aur 1 ke beech rahe!
          </p>
        </div>

        <div style={{background: '#d1ecf1', padding: '20px', borderRadius: '10px', marginTop: '15px'}}>
          <p><strong>Solution: Logistic Regression!</strong></p>
          <p>
            Yeh ek special curve use karta hai jo <strong>hamesha 0 aur 1 ke beech</strong> rehta hai.
            Is curve ko <strong>"Sigmoid Curve"</strong> kehte hain (S-shaped curve).
          </p>
        </div>

        <h3 style={{marginTop: '30px'}}>Sigmoid Curve - The Magic S!</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={sigmoidData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              label={{ value: 'Input Value', position: 'insideBottom', offset: -10 }}
            />
            <YAxis
              domain={[0, 1]}
              label={{ value: 'Probability (0 to 1)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="note-box" style={{marginTop: '15px'}}>
          <p>
            <strong>Dekho kaise:</strong> Curve kabhi 0 se neeche nahi jaata, kabhi 1 se upar nahi jaata!
            Yahi perfect hai Yes/No decisions ke liye.
          </p>
          <ul style={{marginTop: '10px'}}>
            <li>Left side (negative values) → Probability 0 ke kareeb (NO)</li>
            <li>Middle (around 0) → Probability 0.5 ke kareeb (CONFUSED)</li>
            <li>Right side (positive values) → Probability 1 ke kareeb (YES)</li>
          </ul>
        </div>
      </div>

      <h2>🎮 Interactive Demo - Email Spam Detector</h2>

      <div className="interactive-demo">
        <h3>📧 Email Spam Probability Calculator</h3>
        <p>Slider move karke dekho email ka spam score kaise decision par asar karta hai:</p>

        <div className="slider-container">
          <label>Email Ka Spam Score: {emailScore.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={emailScore}
            onChange={(e) => setEmailScore(Number(e.target.value))}
          />
          <p style={{fontSize: '0.9rem', color: '#666'}}>
            (0 = Bilkul safe email, 1 = Pakka spam)
          </p>
        </div>

        <div className="slider-container">
          <label>Decision Threshold: {threshold.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
          />
          <p style={{fontSize: '0.9rem', color: '#666'}}>
            Agar score threshold se zyada hai, toh SPAM!
          </p>
        </div>

        <div style={{
          background: emailScore >= threshold ? '#fee' : '#efe',
          border: `3px solid ${emailScore >= threshold ? '#f00' : '#0f0'}`,
          padding: '30px',
          borderRadius: '15px',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <h2 style={{margin: '0 0 15px 0', fontSize: '2rem'}}>
            {emailScore >= threshold ? '🚫 SPAM!' : '✅ SAFE!'}
          </h2>
          <p style={{fontSize: '1.5rem', margin: 0}}>
            Probability: {(emailScore * 100).toFixed(0)}%
          </p>
          <p style={{fontSize: '1.1rem', marginTop: '10px'}}>
            {emailScore >= threshold
              ? 'Is email ko spam folder mein bhejo!'
              : 'Yeh email safe lagta hai, inbox mein rakho.'}
          </p>
        </div>

        <div className="note-box" style={{marginTop: '20px'}}>
          <p><strong>Samjhe?</strong></p>
          <ul>
            <li>Score threshold se <strong>zyada</strong> = SPAM</li>
            <li>Score threshold se <strong>kam</strong> = SAFE</li>
            <li>Threshold ko adjust karke sensitivity control kar sakte hain!</li>
          </ul>
        </div>
      </div>

      <h2>🔍 Real Example: Email Spam Detection Step-by-Step</h2>

      <div style={{background: '#f0f8ff', padding: '25px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 1: Features Nikalo (Email Ko Analyze Karo)</h3>
        <p>Email se important information nikalo:</p>
        <ul>
          <li>Spam words ki count (FREE, WIN, WINNER, CLICK, etc.)</li>
          <li>Capital letters ka percentage</li>
          <li>Suspicious links ki count</li>
          <li>Exclamation marks (!!!) ki count</li>
        </ul>
        <div className="example-box" style={{marginTop: '15px'}}>
          <strong>Example Email:</strong><br />
          Spam words = 5<br />
          Capitals = 40%<br />
          Links = 3<br />
          Exclamations = 8
        </div>
      </div>

      <div style={{background: '#e8f5e9', padding: '25px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 2: Score Calculate Karo</h3>
        <p>Har feature ka weight hota hai (importance):</p>
        <div style={{background: 'white', padding: '15px', borderRadius: '5px', marginTop: '10px'}}>
          <p>Score = (Spam_words × 0.3) + (Capitals × 0.2) + (Links × 0.3) + (Exclamations × 0.2)</p>
          <p style={{marginTop: '10px'}}>
            Score = (5 × 0.3) + (40 × 0.2) + (3 × 0.3) + (8 × 0.2)<br />
            Score = 1.5 + 8 + 0.9 + 1.6<br />
            <strong>Score = 12</strong>
          </p>
        </div>
      </div>

      <div style={{background: '#fff3e0', padding: '25px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 3: Sigmoid Function Apply Karo</h3>
        <p>Score ko 0-1 ke beech laane ke liye sigmoid use karo:</p>
        <div style={{background: 'white', padding: '15px', borderRadius: '5px', marginTop: '10px'}}>
          <p>Probability = 1 / (1 + e^(-Score))</p>
          <p style={{marginTop: '10px'}}>
            <em>(e ek mathematical constant hai, value ≈ 2.718)</em>
          </p>
          <p style={{marginTop: '10px'}}>
            Probability = 1 / (1 + e^(-12))<br />
            Probability = 1 / (1 + 0.000006)<br />
            <strong>Probability ≈ 0.999 (99.9%)</strong>
          </p>
        </div>
      </div>

      <div style={{background: '#fce4ec', padding: '25px', borderRadius: '10px', marginTop: '20px'}}>
        <h3>Step 4: Decision Lo</h3>
        <p>Threshold (usually 0.5) se compare karo:</p>
        <div style={{background: '#fee', padding: '20px', borderRadius: '5px', marginTop: '10px', border: '2px solid #f00'}}>
          <p style={{fontSize: '1.2rem'}}>
            Probability (0.999) zyada hai Threshold (0.5) se<br />
            <strong style={{fontSize: '1.5rem'}}>Decision: SPAM! 🚫</strong>
          </p>
        </div>
      </div>

      <h2>🎯 Logistic Regression Kab Use Karein?</h2>

      <div className="concept-box">
        <h3>Perfect For Binary Classification!</h3>
        <p>
          <strong>Binary Classification</strong> = Do categories mein classify karna (Yes/No, True/False, 0/1)
        </p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginTop: '20px'}}>
        <div className="example-box">
          <h4>📧 Email: Spam ya Not Spam?</h4>
          <p>Email ko analyze karke decide karna ki spam folder mein jaaye ya inbox mein.</p>
        </div>

        <div className="example-box">
          <h4>🏥 Medical: Disease Hai Ya Nahi?</h4>
          <p>Patient ke tests dekh kar predict karna ki disease hai ya nahi.</p>
        </div>

        <div className="example-box">
          <h4>💳 Banking: Fraud Ya Genuine?</h4>
          <p>Credit card transaction genuine hai ya fraud, real-time detect karna.</p>
        </div>

        <div className="example-box">
          <h4>🎓 Student: Pass Ya Fail?</h4>
          <p>Attendance aur assignments dekh kar predict karna pass hoga ya fail.</p>
        </div>

        <div className="example-box">
          <h4>🏠 Loan: Approve Ya Reject?</h4>
          <p>Applicant ki salary, credit score dekh kar loan approval decision.</p>
        </div>

        <div className="example-box">
          <h4>☔ Weather: Baarish Hogi Ya Nahi?</h4>
          <p>Temperature, humidity dekh kar kal baarish hogi ya nahi predict karna.</p>
        </div>
      </div>

      <h2>📊 Threshold Ka Importance</h2>

      <div className="concept-box">
        <h3>Threshold = Decision Line</h3>
        <p>
          Logistic Regression probability deta hai (0-1 ke beech).<br />
          Par final decision hume lena padta hai: Yes ya No?
        </p>
        <p style={{marginTop: '15px'}}>
          <strong>Threshold</strong> woh boundary hai jo decide karti hai ki Yes bolein ya No.
        </p>
      </div>

      <div className="visual-section">
        <h3>Threshold Ki Different Values:</h3>

        <div style={{marginTop: '20px'}}>
          <div style={{background: '#e8f5e9', padding: '15px', borderRadius: '5px', marginBottom: '15px'}}>
            <h4>Threshold = 0.5 (Standard)</h4>
            <ul>
              <li>Probability ≥ 0.5 → YES</li>
              <li>Probability &lt; 0.5 → NO</li>
            </ul>
            <p style={{marginTop: '10px'}}>
              <strong>Use case:</strong> Jab false positive aur false negative dono equally bad hain.
            </p>
          </div>

          <div style={{background: '#fff3cd', padding: '15px', borderRadius: '5px', marginBottom: '15px'}}>
            <h4>Threshold = 0.7 (Conservative)</h4>
            <ul>
              <li>Probability ≥ 0.7 → YES</li>
              <li>Probability &lt; 0.7 → NO</li>
            </ul>
            <p style={{marginTop: '10px'}}>
              <strong>Use case:</strong> Jab false positive bahut dangerous hai.<br />
              <em>Example: Disease detection - Galat positive mat do!</em>
            </p>
          </div>

          <div style={{background: '#fee', padding: '15px', borderRadius: '5px'}}>
            <h4>Threshold = 0.3 (Aggressive)</h4>
            <ul>
              <li>Probability ≥ 0.3 → YES</li>
              <li>Probability &lt; 0.3 → NO</li>
            </ul>
            <p style={{marginTop: '10px'}}>
              <strong>Use case:</strong> Jab false negative bahut dangerous hai.<br />
              <em>Example: Fraud detection - Koi fraud miss mat karo!</em>
            </p>
          </div>
        </div>
      </div>

      <h2>📝 Key Takeaways - Is Module Se Kya Seekha?</h2>

      <div className="concept-box">
        <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
          <li>✅ <strong>Logistic Regression</strong> = Binary classification ke liye (Yes/No decisions)</li>
          <li>✅ Output hamesha <strong>0 aur 1 ke beech</strong> (probability)</li>
          <li>✅ <strong>Sigmoid curve</strong> use karta hai (S-shaped curve)</li>
          <li>✅ <strong>Threshold</strong> decide karta hai final decision (usually 0.5)</li>
          <li>✅ Spam detection, disease diagnosis, fraud detection mein use hota hai</li>
          <li>✅ Linear se different - numbers nahi, categories predict karta hai!</li>
        </ul>
      </div>

      <div className="note-box" style={{marginTop: '30px'}}>
        <h3>🎉 Excellent!</h3>
        <p>
          Aapne Logistic Regression ki basics achhe se samajh li! Ab aap jaante ho ki
          Yes/No type questions ke liye yeh kaise kaam karta hai.
        </p>
        <p style={{marginTop: '15px'}}>
          <strong>Agle module mein:</strong> Logistic Regression ko aur detail mein
          explore karenge - accuracy metrics, confusion matrix, aur advanced concepts!
        </p>
      </div>

      <div className="lesson-nav">
        <button className="btn btn-secondary" onClick={onBack}>
          ← Modules List
        </button>
        <button className="btn btn-primary" onClick={onBack}>
          Module 5: Deep Dive →
        </button>
      </div>
    </div>
  )
}
