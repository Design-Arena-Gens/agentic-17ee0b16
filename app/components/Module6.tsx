'use client'

import { useState } from 'react'

interface Props {
  onBack: () => void
}

export default function Module6({ onBack }: Props) {
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (question: string, answer: string) => {
    setQuizAnswers({...quizAnswers, [question]: answer})
  }

  const correctAnswers = {
    q1: 'logistic',
    q2: 'linear',
    q3: 'logistic',
    q4: 'linear',
    q5: 'logistic',
    q6: 'linear'
  }

  const getScore = () => {
    let score = 0
    Object.keys(correctAnswers).forEach(q => {
      if (quizAnswers[q] === correctAnswers[q as keyof typeof correctAnswers]) score++
    })
    return score
  }

  return (
    <div className="lesson-container">
      <h1 style={{color: '#667eea', marginBottom: '20px'}}>
        🎯 Module 6: Comparison & Real Applications
      </h1>

      <div className="progress-bar">
        <div className="progress-fill" style={{width: '100%'}}></div>
      </div>

      <div className="concept-box">
        <h2>🎓 Course Complete Hone Wala Hai!</h2>
        <p>
          Is last module mein hum sab kuch ek saath dekhenge:
        </p>
        <ul>
          <li>Linear vs Logistic Regression - Side by side comparison</li>
          <li>Real-world applications aur examples</li>
          <li>Decision guide - Kab kaunsa use karein</li>
          <li>Practice quiz - Apna knowledge test karein!</li>
        </ul>
      </div>

      <h2>⚖️ Linear vs Logistic Regression - Complete Comparison</h2>

      <div style={{overflowX: 'auto', marginTop: '20px'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', minWidth: '800px'}}>
          <thead>
            <tr style={{background: '#667eea', color: 'white'}}>
              <th style={{padding: '15px', border: '1px solid #ddd', textAlign: 'left'}}>Feature</th>
              <th style={{padding: '15px', border: '1px solid #ddd', textAlign: 'center'}}>Linear Regression</th>
              <th style={{padding: '15px', border: '1px solid #ddd', textAlign: 'center'}}>Logistic Regression</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{background: '#f9f9f9'}}>
              <td style={{padding: '12px', border: '1px solid #ddd'}}><strong>Output Type</strong></td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>Continuous numbers<br />(10, 45.5, 1000, etc.)</td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>Probability (0 to 1)<br />Then classify (Yes/No)</td>
            </tr>
            <tr style={{background: 'white'}}>
              <td style={{padding: '12px', border: '1px solid #ddd'}}><strong>Use Case</strong></td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>Predict numbers</td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>Classification (categories)</td>
            </tr>
            <tr style={{background: '#f9f9f9'}}>
              <td style={{padding: '12px', border: '1px solid #ddd'}}><strong>Model Type</strong></td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>Straight line (y = mx + c)</td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>S-curve (Sigmoid function)</td>
            </tr>
            <tr style={{background: 'white'}}>
              <td style={{padding: '12px', border: '1px solid #ddd'}}><strong>Output Range</strong></td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>-∞ to +∞<br />(Koi bhi number)</td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>0 to 1<br />(Fixed range)</td>
            </tr>
            <tr style={{background: '#f9f9f9'}}>
              <td style={{padding: '12px', border: '1px solid #ddd'}}><strong>Accuracy Metrics</strong></td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>R² score, Mean Error</td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>Accuracy, Precision, Recall, F1</td>
            </tr>
            <tr style={{background: 'white'}}>
              <td style={{padding: '12px', border: '1px solid #ddd'}}><strong>Examples</strong></td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>
                • House price<br />
                • Sales prediction<br />
                • Temperature<br />
                • Stock price
              </td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>
                • Spam detection<br />
                • Disease diagnosis<br />
                • Fraud detection<br />
                • Pass/Fail prediction
              </td>
            </tr>
            <tr style={{background: '#f9f9f9'}}>
              <td style={{padding: '12px', border: '1px solid #ddd'}}><strong>Question Type</strong></td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>"Kitna?"<br />(How much?)</td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>"Haan ya Naa?"<br />(Yes or No?)</td>
            </tr>
            <tr style={{background: 'white'}}>
              <td style={{padding: '12px', border: '1px solid #ddd'}}><strong>Complexity</strong></td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>Simpler</td>
              <td style={{padding: '12px', border: '1px solid #ddd'}}>Slightly complex</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>🌍 Real-World Applications - Detailed Examples</h2>

      <div className="visual-section">
        <h3>🏠 Real Estate (Linear Regression)</h3>
        <div className="example-box">
          <h4>Problem:</h4>
          <p>Ghar ki kimat predict karni hai location, size, aur facilities ke basis par.</p>

          <h4 style={{marginTop: '15px'}}>Approach:</h4>
          <ul>
            <li><strong>Input Features:</strong>
              <ul>
                <li>Size (square feet)</li>
                <li>Number of bedrooms</li>
                <li>Distance from metro (km)</li>
                <li>Age of property (years)</li>
                <li>Floor number</li>
              </ul>
            </li>
            <li><strong>Output:</strong> Price in lakhs (continuous number)</li>
            <li><strong>Model:</strong> Multiple Linear Regression</li>
          </ul>

          <h4 style={{marginTop: '15px'}}>Example Equation:</h4>
          <div style={{background: '#f0f8ff', padding: '15px', borderRadius: '5px', marginTop: '10px'}}>
            <p>Price = (0.045 × Size) + (5 × Bedrooms) - (2 × Distance_from_metro) - (0.5 × Age) + 10</p>
          </div>

          <h4 style={{marginTop: '15px'}}>Real Prediction:</h4>
          <p>
            Size = 1200 sq ft, Bedrooms = 3, Distance = 2 km, Age = 5 years<br />
            Price = (0.045 × 1200) + (5 × 3) - (2 × 2) - (0.5 × 5) + 10<br />
            Price = 54 + 15 - 4 - 2.5 + 10 = <strong>₹72.5 Lakh</strong>
          </p>
        </div>
      </div>

      <div className="visual-section">
        <h3>📧 Email Spam Detection (Logistic Regression)</h3>
        <div className="example-box">
          <h4>Problem:</h4>
          <p>Email spam hai ya nahi, yeh automatically detect karna hai.</p>

          <h4 style={{marginTop: '15px'}}>Approach:</h4>
          <ul>
            <li><strong>Input Features:</strong>
              <ul>
                <li>Spam words count (FREE, WIN, CLICK, etc.)</li>
                <li>Capital letters percentage</li>
                <li>Exclamation marks count</li>
                <li>Links count</li>
                <li>Sender domain reputation score</li>
              </ul>
            </li>
            <li><strong>Output:</strong> Probability (0 to 1), then classify</li>
            <li><strong>Model:</strong> Logistic Regression</li>
          </ul>

          <h4 style={{marginTop: '15px'}}>Example:</h4>
          <div style={{background: '#fff9e6', padding: '15px', borderRadius: '5px', marginTop: '10px'}}>
            <p><strong>Email received:</strong></p>
            <p style={{fontFamily: 'monospace', background: 'white', padding: '10px', borderRadius: '3px'}}>
              "CONGRATULATIONS!!! You WON 10 LAKH! CLICK HERE NOW to claim FREE prize!!!"
            </p>
            <p style={{marginTop: '10px'}}><strong>Features extracted:</strong></p>
            <ul>
              <li>Spam words = 6</li>
              <li>Capitals = 65%</li>
              <li>Exclamations = 7</li>
              <li>Links = 2</li>
              <li>Domain reputation = 0.1 (bad)</li>
            </ul>
            <p style={{marginTop: '10px'}}><strong>Model output:</strong></p>
            <p>Spam Probability = <strong>0.97 (97%)</strong></p>
            <p>Decision (threshold = 0.5): <strong style={{color: '#f00'}}>SPAM! 🚫</strong></p>
          </div>
        </div>
      </div>

      <div className="visual-section">
        <h3>🏥 Medical Diagnosis (Logistic Regression)</h3>
        <div className="example-box">
          <h4>Problem:</h4>
          <p>Patient mein diabetes hai ya nahi predict karna hai test results se.</p>

          <h4 style={{marginTop: '15px'}}>Approach:</h4>
          <ul>
            <li><strong>Input Features:</strong>
              <ul>
                <li>Age</li>
                <li>BMI (Body Mass Index)</li>
                <li>Blood pressure</li>
                <li>Glucose level</li>
                <li>Family history (0 or 1)</li>
              </ul>
            </li>
            <li><strong>Output:</strong> Diabetes hai (1) ya nahi (0)</li>
            <li><strong>Model:</strong> Logistic Regression</li>
          </ul>

          <h4 style={{marginTop: '15px'}}>Example Case:</h4>
          <div style={{background: '#f0fff0', padding: '15px', borderRadius: '5px', marginTop: '10px'}}>
            <p><strong>Patient details:</strong></p>
            <ul>
              <li>Age = 45 years</li>
              <li>BMI = 32 (overweight)</li>
              <li>BP = 140/90 (high)</li>
              <li>Glucose = 180 mg/dL (high)</li>
              <li>Family history = Yes (1)</li>
            </ul>
            <p style={{marginTop: '10px'}}><strong>Model prediction:</strong></p>
            <p>Diabetes Probability = <strong>0.85 (85%)</strong></p>
            <p style={{background: '#fee', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
              <strong>Decision:</strong> High risk! Further tests aur doctor consultation recommend karte hain.
            </p>
          </div>

          <div className="note-box" style={{marginTop: '15px'}}>
            <p>
              <strong>Note:</strong> Medical cases mein threshold kam rakhte hain (jaise 0.3)
              taaki koi case miss na ho. False positive acceptable hai, par false negative dangerous!
            </p>
          </div>
        </div>
      </div>

      <div className="visual-section">
        <h3>📊 Sales Forecasting (Linear Regression)</h3>
        <div className="example-box">
          <h4>Problem:</h4>
          <p>Advertising budget ke basis par sales predict karna.</p>

          <h4 style={{marginTop: '15px'}}>Approach:</h4>
          <ul>
            <li><strong>Input Features:</strong>
              <ul>
                <li>TV advertising budget</li>
                <li>Digital advertising budget</li>
                <li>Previous month sales</li>
                <li>Season (summer/winter coded)</li>
              </ul>
            </li>
            <li><strong>Output:</strong> Sales in lakhs</li>
            <li><strong>Model:</strong> Linear Regression</li>
          </ul>

          <h4 style={{marginTop: '15px'}}>Example:</h4>
          <div style={{background: '#f0f8ff', padding: '15px', borderRadius: '5px', marginTop: '10px'}}>
            <p><strong>Next month plan:</strong></p>
            <ul>
              <li>TV budget = ₹5 lakh</li>
              <li>Digital budget = ₹3 lakh</li>
              <li>Last month sales = ₹50 lakh</li>
              <li>Season = Summer</li>
            </ul>
            <p style={{marginTop: '10px'}}><strong>Prediction:</strong></p>
            <p>Next month sales ≈ <strong>₹62 lakh</strong></p>
            <p style={{marginTop: '10px', fontStyle: 'italic'}}>
              Isse company apne inventory aur resources plan kar sakti hai!
            </p>
          </div>
        </div>
      </div>

      <h2>🎯 Decision Guide - Kab Kya Use Karein?</h2>

      <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '30px', borderRadius: '15px', marginTop: '30px'}}>
        <h3 style={{color: 'white', textAlign: 'center', fontSize: '1.8rem'}}>Quick Decision Flowchart</h3>

        <div style={{background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', marginTop: '20px'}}>
          <p style={{fontSize: '1.3rem', textAlign: 'center', marginBottom: '20px'}}>
            <strong>Kya aapko NUMBER predict karna hai?</strong>
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
            <div style={{background: 'rgba(255,255,255,0.9)', color: '#333', padding: '20px', borderRadius: '10px'}}>
              <h4 style={{textAlign: 'center', color: '#4caf50'}}>✅ HAAN</h4>
              <p style={{textAlign: 'center', fontSize: '1.5rem', margin: '15px 0', fontWeight: 'bold', color: '#667eea'}}>
                LINEAR REGRESSION
              </p>
              <p style={{fontSize: '0.95rem'}}>Examples:</p>
              <ul style={{fontSize: '0.9rem'}}>
                <li>House price</li>
                <li>Temperature</li>
                <li>Sales amount</li>
                <li>Salary prediction</li>
              </ul>
            </div>

            <div style={{background: 'rgba(255,255,255,0.9)', color: '#333', padding: '20px', borderRadius: '10px'}}>
              <h4 style={{textAlign: 'center', color: '#f44336'}}>❌ NAHI</h4>
              <p style={{textAlign: 'center', fontSize: '1.5rem', margin: '15px 0', fontWeight: 'bold', color: '#764ba2'}}>
                LOGISTIC REGRESSION
              </p>
              <p style={{fontSize: '0.95rem'}}>Examples:</p>
              <ul style={{fontSize: '0.9rem'}}>
                <li>Spam or Not</li>
                <li>Disease or Healthy</li>
                <li>Pass or Fail</li>
                <li>Fraud or Genuine</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>🧪 Practice Quiz - Apna Knowledge Test Karein!</h2>

      <div className="interactive-demo">
        <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
          Har question ke liye batayein ki Linear ya Logistic Regression use hoga:
        </p>

        {[
          {id: 'q1', question: 'Customer ka credit card transaction fraud hai ya genuine?', correct: 'logistic'},
          {id: 'q2', question: 'Student ki final exam mein kitne marks aayenge?', correct: 'linear'},
          {id: 'q3', question: 'Kya kal baarish hogi?', correct: 'logistic'},
          {id: 'q4', question: 'Company ka next quarter revenue kitna hoga?', correct: 'linear'},
          {id: 'q5', question: 'Patient ko hospital mein admit karna chahiye ya nahi?', correct: 'logistic'},
          {id: 'q6', question: 'Flat ki rent kitni hogi based on location aur size?', correct: 'linear'}
        ].map((q, idx) => (
          <div key={q.id} style={{background: '#f9f9f9', padding: '20px', borderRadius: '10px', marginBottom: '15px'}}>
            <p style={{fontWeight: 'bold', marginBottom: '10px'}}>
              Q{idx + 1}. {q.question}
            </p>
            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
              <button
                onClick={() => handleAnswer(q.id, 'linear')}
                style={{
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: quizAnswers[q.id] === 'linear' ? '3px solid #667eea' : '2px solid #ddd',
                  background: quizAnswers[q.id] === 'linear' ? '#e3f2fd' : 'white',
                  cursor: 'pointer',
                  fontWeight: quizAnswers[q.id] === 'linear' ? 'bold' : 'normal'
                }}
              >
                Linear Regression
              </button>
              <button
                onClick={() => handleAnswer(q.id, 'logistic')}
                style={{
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: quizAnswers[q.id] === 'logistic' ? '3px solid #764ba2' : '2px solid #ddd',
                  background: quizAnswers[q.id] === 'logistic' ? '#f3e5f5' : 'white',
                  cursor: 'pointer',
                  fontWeight: quizAnswers[q.id] === 'logistic' ? 'bold' : 'normal'
                }}
              >
                Logistic Regression
              </button>
            </div>
            {showResults && (
              <p style={{
                marginTop: '10px',
                padding: '10px',
                borderRadius: '5px',
                background: quizAnswers[q.id] === q.correct ? '#e8f5e9' : '#ffebee',
                color: quizAnswers[q.id] === q.correct ? '#2e7d32' : '#c62828',
                fontWeight: 'bold'
              }}>
                {quizAnswers[q.id] === q.correct ? '✅ Sahi!' : `❌ Galat! Sahi answer: ${q.correct === 'linear' ? 'Linear' : 'Logistic'} Regression`}
              </p>
            )}
          </div>
        ))}

        {!showResults && Object.keys(quizAnswers).length === 6 && (
          <button
            onClick={() => setShowResults(true)}
            className="btn btn-primary"
            style={{width: '100%', marginTop: '20px'}}
          >
            Results Dikhao!
          </button>
        )}

        {showResults && (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            marginTop: '20px'
          }}>
            <h3 style={{color: 'white', fontSize: '2rem'}}>
              Aapka Score: {getScore()}/6
            </h3>
            <p style={{fontSize: '1.3rem', marginTop: '15px'}}>
              {getScore() === 6 && '🎉 Perfect! Aap expert ban gaye!'}
              {getScore() === 5 && '🌟 Bahut achha! Almost perfect!'}
              {getScore() === 4 && '👍 Achha hai! Thoda aur practice karein.'}
              {getScore() < 4 && '💪 Keep learning! Modules dobara padhiye.'}
            </p>
          </div>
        )}
      </div>

      <h2>🎓 Course Summary - Kya Seekha?</h2>

      <div className="concept-box">
        <h3>Module 1: Machine Learning Basics</h3>
        <ul>
          <li>ML kya hai - Computer ka purane data se seekhna</li>
          <li>Data, Patterns, Predictions</li>
          <li>Supervised vs Unsupervised Learning</li>
        </ul>
      </div>

      <div className="concept-box">
        <h3>Module 2 & 3: Linear Regression</h3>
        <ul>
          <li>Numbers predict karna (continuous values)</li>
          <li>Best fit line concept</li>
          <li>Equation: y = mx + c</li>
          <li>R² score se accuracy measure karna</li>
          <li>Multiple features use karna</li>
        </ul>
      </div>

      <div className="concept-box">
        <h3>Module 4 & 5: Logistic Regression</h3>
        <ul>
          <li>Binary classification (Yes/No)</li>
          <li>Sigmoid curve (0 to 1 probability)</li>
          <li>Threshold se decision lena</li>
          <li>Confusion Matrix</li>
          <li>Precision, Recall, F1-Score</li>
        </ul>
      </div>

      <div className="concept-box">
        <h3>Module 6: Practical Knowledge</h3>
        <ul>
          <li>Linear vs Logistic comparison</li>
          <li>Real-world applications</li>
          <li>Decision making guide</li>
          <li>Kab kaunsa model use karna hai</li>
        </ul>
      </div>

      <h2>🚀 Aage Kya?</h2>

      <div className="note-box">
        <h3>Next Steps - Learning Journey Continue Karein!</h3>
        <ul style={{lineHeight: '2'}}>
          <li>
            <strong>Practice karo:</strong> Kaggle par datasets dhundho aur models banao
          </li>
          <li>
            <strong>Python seekho:</strong> Scikit-learn library ML ke liye best hai
          </li>
          <li>
            <strong>Advanced topics:</strong> Decision Trees, Random Forest, Neural Networks
          </li>
          <li>
            <strong>Projects banao:</strong> Real problems solve karo ML se
          </li>
          <li>
            <strong>Community join karo:</strong> Online ML communities mein active raho
          </li>
        </ul>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: 'white',
        padding: '40px',
        borderRadius: '15px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <h2 style={{color: 'white', fontSize: '2.5rem', marginBottom: '20px'}}>
          🎉 Congratulations! 🎉
        </h2>
        <p style={{fontSize: '1.3rem', lineHeight: '1.8'}}>
          Aapne successfully Machine Learning, Linear Regression, aur Logistic Regression
          seekh liya hai - woh bhi bina kisi complex maths ke!
        </p>
        <p style={{fontSize: '1.2rem', marginTop: '20px', opacity: 0.95}}>
          Yeh sirf shuruaat hai. Ab aap ML ki duniya mein kadam rakh chuke ho.
          Practice karte raho aur aage badhte raho!
        </p>
        <p style={{fontSize: '1.5rem', marginTop: '30px', fontWeight: 'bold'}}>
          All the best for your ML journey! 🚀
        </p>
      </div>

      <div className="lesson-nav" style={{marginTop: '40px'}}>
        <button className="btn btn-secondary" onClick={onBack}>
          ← Modules List
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setQuizAnswers({})
            setShowResults(false)
            window.scrollTo(0, 0)
          }}
        >
          🔄 Course Dobara Karein
        </button>
      </div>
    </div>
  )
}
