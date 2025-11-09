'use client'

import { useState } from 'react'
import Module1 from './components/Module1'
import Module2 from './components/Module2'
import Module3 from './components/Module3'
import Module4 from './components/Module4'
import Module5 from './components/Module5'
import Module6 from './components/Module6'

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null)

  const modules = [
    {
      id: 1,
      title: "Machine Learning Kya Hai?",
      description: "Sabse pehle samjhenge ki Machine Learning kya hoti hai, simple Hindi examples ke saath. Koi maths nahi, sirf concepts!"
    },
    {
      id: 2,
      title: "Linear Regression - Seedhi Line Ka Khel",
      description: "Ek simple line se prediction kaise karein? Gharelu examples se samjhenge, jaise ghar ki kimat kaise pata karein."
    },
    {
      id: 3,
      title: "Linear Regression - Deep Dive",
      description: "Linear Regression ko aur gehrayi se samjhenge. Visual examples aur interactive demos ke saath."
    },
    {
      id: 4,
      title: "Logistic Regression - Haan ya Naa?",
      description: "Jab jawab sirf 'Haan' ya 'Naa' mein chahiye. Email spam hai ya nahi? Yeh logistic regression batayega!"
    },
    {
      id: 5,
      title: "Logistic Regression - Complete Understanding",
      description: "Logistic regression ki poori samajh, real-world examples aur visual explanations ke saath."
    },
    {
      id: 6,
      title: "Comparison aur Real Applications",
      description: "Linear vs Logistic - Kab kaunsa use karein? Real duniya ke examples aur practice."
    }
  ]

  if (selectedModule !== null) {
    const ModuleComponent = [Module1, Module2, Module3, Module4, Module5, Module6][selectedModule - 1]
    return (
      <div className="container">
        <ModuleComponent onBack={() => setSelectedModule(null)} />
      </div>
    )
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🎓 Machine Learning - Hindi Mein Seekhiye</h1>
        <p>Linear aur Logistic Regression - Bilkul Beginners Ke Liye</p>
        <p style={{fontSize: '1rem', marginTop: '10px'}}>
          Visual Learning • No Maths Background Needed • University-Level Content
        </p>
      </div>

      <div style={{textAlign: 'center', color: 'white', marginBottom: '30px'}}>
        <h2 style={{color: 'white', fontSize: '1.8rem'}}>📚 Course Modules</h2>
        <p style={{fontSize: '1.1rem', opacity: 0.9}}>
          Har module ko ek-ek karke complete karein. Har topic ko depth mein visual examples ke saath samjhaya gaya hai.
        </p>
      </div>

      <div className="modules-grid">
        {modules.map((module) => (
          <div
            key={module.id}
            className="module-card"
            onClick={() => setSelectedModule(module.id)}
          >
            <div className="module-number">{module.id}</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
          </div>
        ))}
      </div>

      <div className="lesson-container" style={{marginTop: '40px', background: 'rgba(255,255,255,0.95)'}}>
        <h2>🎯 Is Course Mein Aap Kya Seekhenge?</h2>
        <ul>
          <li><strong>Machine Learning Basics:</strong> Bina kisi maths background ke ML ko samajhna</li>
          <li><strong>Linear Regression:</strong> Numbers predict karna (jaise ghar ki kimat)</li>
          <li><strong>Logistic Regression:</strong> Yes/No decisions lena (jaise spam detection)</li>
          <li><strong>Visual Learning:</strong> Har concept ke liye interactive graphs aur diagrams</li>
          <li><strong>Real Examples:</strong> Rojmarra ki zindagi se examples</li>
          <li><strong>Practice:</strong> Hands-on interactive demos</li>
        </ul>

        <div className="note-box" style={{marginTop: '30px'}}>
          <h3>✨ Khaas Baatein:</h3>
          <ul>
            <li>Poora course Hindi (Roman script) mein</li>
            <li>Koi complex maths nahi - sab kuch simple language mein</li>
            <li>University-level content, par beginner-friendly way mein</li>
            <li>Har module independent - apni speed se seekhiye</li>
            <li>Interactive visualizations - concepts ko dekh kar samjhiye</li>
          </ul>
        </div>

        <div style={{textAlign: 'center', marginTop: '30px'}}>
          <button
            className="btn btn-primary"
            onClick={() => setSelectedModule(1)}
          >
            Module 1 Se Shuru Karein →
          </button>
        </div>
      </div>
    </div>
  )
}
