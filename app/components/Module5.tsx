'use client';

import { useState } from 'react';

interface Props {
  onBack: () => void;
}

export default function Module5({ onBack }: Props) {
  const [tp, setTp] = useState(80);
  const [tn, setTn] = useState(85);
  const [fp, setFp] = useState(10);
  const [fn, setFn] = useState(5);

  const total = tp + tn + fp + fn;
  const accuracy = ((tp + tn) / total * 100).toFixed(1);
  const precision = (tp / (tp + fp) * 100).toFixed(1);
  const recall = (tp / (tp + fn) * 100).toFixed(1);
  const precisionNum = parseFloat(precision);
  const recallNum = parseFloat(recall);
  const f1Score = (precisionNum + recallNum > 0) ? (2 * (precisionNum * recallNum) / (precisionNum + recallNum)).toFixed(1) : '0';

  return (
    <div className="lesson-container">
      <h1 style={{color: '#667eea', marginBottom: '20px'}}>
        🎓 Module 5: Logistic Regression - Complete Understanding
      </h1>

      <div className="progress-bar">
        <div className="progress-fill" style={{width: '83.3%'}}></div>
      </div>

      <div className="concept-box">
        <h2>🎯 Is Module Mein Kya Seekhenge</h2>
        <p>
          Module 4 mein humne Logistic Regression ki basics dekhi. Ab hum gehrayi
          se samjhenge:
        </p>
        <ul>
          <li>Model ki accuracy kaise measure karein (sirf sahi answers count karna kaafi nahi!)</li>
          <li>Confusion Matrix kya hai</li>
          <li>Precision, Recall, F1-Score kya hote hain</li>
          <li>Model ko improve kaise karein</li>
        </ul>
      </div>

      <h2>🎯 Accuracy - Bas Itna Kaafi Hai</h2>

      <div className="example-box">
        <h3>Problem: Simple Accuracy Misleading Ho Sakti Hai!</h3>
        <p>
          Maan lo ek bank mein:
        </p>
        <ul>
          <li>100 transactions check kiye</li>
          <li>Genuine transactions = 95</li>
          <li>Fraud transactions = 5</li>
        </ul>

        <p style={{marginTop: '15px'}}>
          Agar hum ek <strong>lazy model</strong> banaye jo SABKO genuine bol de:
        </p>
        <div style={{background: '#fff3cd', padding: '15px', borderRadius: '5px', marginTop: '10px'}}>
          <p>
            <strong>Predictions:</strong> Sab 100 ko Genuine bola<br />
            <strong>Correct:</strong> 95 (kyunki 95 actually genuine the)<br />
            <strong>Accuracy:</strong> 95/100 = <strong>95%!</strong>
          </p>
        </div>

        <p style={{marginTop: '15px', color: '#d32f2f', fontWeight: 'bold'}}>
          Par yeh model bekar hai! 5 fraud cases miss kar diye! 😱
        </p>

        <div className="note-box" style={{marginTop: '15px'}}>
          <p>
            <strong>Lesson:</strong> Sirf accuracy dekh kar model judge nahi kar sakte.
            Hume aur bhi metrics chahiye!
          </p>
        </div>
      </div>

      <h2>📊 Confusion Matrix - Sabse Important Tool!</h2>

      <div className="concept-box">
        <h3>Confusion Matrix Kya Hai</h3>
        <p>
          Yeh ek table hai jo batata hai ki model ne 4 tarah ki predictions ki:
        </p>
        <ol>
          <li><strong>True Positive (TP):</strong> Sahi mein YES tha, aur model ne YES bola ✅</li>
          <li><strong>True Negative (TN):</strong> Sahi mein NO tha, aur model ne NO bola ✅</li>
          <li><strong>False Positive (FP):</strong> Sahi mein NO tha, par model ne YES bola ❌</li>
          <li><strong>False Negative (FN):</strong> Sahi mein YES tha, par model ne NO bola ❌</li>
        </ol>
      </div>

      <h2>🎮 Interactive Confusion Matrix Calculator</h2>

      <div className="interactive-demo">
        <h3>Metrics Ko Khud Calculate Karein!</h3>
        <p>Values change karke dekho metrics kaise badalte hain:</p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '20px'}}>
          <div className="slider-container">
            <label>True Positives (TP): {tp}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={tp}
              onChange={(e) => setTp(Number(e.target.value))}
            />
          </div>

          <div className="slider-container">
            <label>True Negatives (TN): {tn}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={tn}
              onChange={(e) => setTn(Number(e.target.value))}
            />
          </div>

          <div className="slider-container">
            <label>False Positives (FP): {fp}</label>
            <input
              type="range"
              min="0"
              max="50"
              value={fp}
              onChange={(e) => setFp(Number(e.target.value))}
            />
          </div>

          <div className="slider-container">
            <label>False Negatives (FN): {fn}</label>
            <input
              type="range"
              min="0"
              max="50"
              value={fn}
              onChange={(e) => setFn(Number(e.target.value))}
            />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '15px',
          marginTop: '30px'
        }}>
          <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center'}}>
            <h3 style={{color: 'white', margin: '0 0 10px 0'}}>Accuracy</h3>
            <p style={{fontSize: '2.5rem', margin: 0, fontWeight: 'bold'}}>{accuracy}%</p>
            <p style={{fontSize: '0.9rem', marginTop: '5px', opacity: 0.9}}>Overall sahi predictions</p>
          </div>

          <div style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center'}}>
            <h3 style={{color: 'white', margin: '0 0 10px 0'}}>Precision</h3>
            <p style={{fontSize: '2.5rem', margin: 0, fontWeight: 'bold'}}>{precision}%</p>
            <p style={{fontSize: '0.9rem', marginTop: '5px', opacity: 0.9}}>YES bole toh kitne sahi</p>
          </div>

          <div style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center'}}>
            <h3 style={{color: 'white', margin: '0 0 10px 0'}}>Recall</h3>
            <p style={{fontSize: '2.5rem', margin: 0, fontWeight: 'bold'}}>{recall}%</p>
            <p style={{fontSize: '0.9rem', marginTop: '5px', opacity: 0.9}}>Actual YES mein se kitne pakde</p>
          </div>

          <div style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center'}}>
            <h3 style={{color: 'white', margin: '0 0 10px 0'}}>F1-Score</h3>
            <p style={{fontSize: '2.5rem', margin: 0, fontWeight: 'bold'}}>{f1Score}%</p>
            <p style={{fontSize: '0.9rem', marginTop: '5px', opacity: 0.9}}>Balanced metric</p>
          </div>
        </div>

        <div className="note-box" style={{marginTop: '20px'}}>
          <p><strong>Observe Karein:</strong></p>
          <ul>
            <li>TP aur TN badhao → Sabhi metrics improve honge!</li>
            <li>FP badhao → Precision kam hoga</li>
            <li>FN badhao → Recall kam hoga</li>
          </ul>
        </div>
      </div>

      <h2>📝 Key Takeaways - Is Module Se Kya Seekha</h2>

      <div className="concept-box">
        <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
          <li>✅ <strong>Accuracy alone</strong> misleading ho sakti hai, aur metrics bhi dekhne chahiye</li>
          <li>✅ <strong>Confusion Matrix</strong> = TP, TN, FP, FN dikhata hai</li>
          <li>✅ <strong>Precision</strong> = Jab YES bolein toh kitne sahi (TP/TP+FP)</li>
          <li>✅ <strong>Recall</strong> = Actual YES mein se kitne pakde (TP/TP+FN)</li>
          <li>✅ <strong>F1-Score</strong> = Precision aur Recall ka balanced metric</li>
          <li>✅ Precision vs Recall mein trade-off hota hai</li>
          <li>✅ Use case ke hisaab se threshold aur metrics choose karo!</li>
        </ul>
      </div>

      <div className="note-box" style={{marginTop: '30px'}}>
        <h3>🏆 Outstanding!</h3>
        <p>
          Aapne Logistic Regression ko completely samajh liya - basics se lekar
          advanced metrics tak! Yeh knowledge real-world projects mein bahut kaam aayegi.
        </p>
        <p style={{marginTop: '15px'}}>
          <strong>Agle aur last module mein:</strong> Hum Linear aur Logistic Regression
          ka comparison karenge, real-world applications dekhenge, aur yeh decide karna
          seekhenge ki kab kaunsa use karna chahiye!
        </p>
      </div>

      <div className="lesson-nav">
        <button className="btn btn-secondary" onClick={onBack}>
          ← Modules List
        </button>
        <button className="btn btn-primary" onClick={onBack}>
          Module 6: Comparison & Applications →
        </button>
      </div>
    </div>
  );
}
