"use client"

import { useState } from "react"
import AttentionVisualization from "./components/AttentionVisualization"
import ExplanationSection from "./components/ExplanationSection"
import IntroductionStep from "./components/IntroductionStep"
import IntroModal from "./components/IntroModal"
import TopBar from "./components/TopBar"
import styles from "./page.module.css"

const sentence = "The dog walked across the street to get a drink. It was hot."
const tokens = sentence.split(" ")

const steps = [
  { title: "Introduction", component: IntroductionStep },
  { title: "Visualization", component: AttentionVisualization },
  { title: "Explanation", component: ExplanationSection },
]

// First, let's define the type for the weights
type Weights = {
  dog: number;
  drink: number;
  hot: number;
}

export default function AttentionDemo() {
  const [weights, setWeights] = useState({
    dog: 0.2,
    drink: 0.7,
    hot: 0.1,
  })
  const [showIntro, setShowIntro] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  // Then fix the handleWeightChange function
  const handleWeightChange = (word: string, value: number) => {
    setWeights((prev: Weights) => {
      const newWeights = { ...prev, [word]: value } as Weights;
      const sum = Object.values(newWeights).reduce((a, b) => a + b, 0);
      // Ensure we return an object with the correct shape
      return {
        dog: newWeights.dog / sum,
        drink: newWeights.drink / sum,
        hot: newWeights.hot / sum
      };
    });
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  const CurrentStepComponent = steps[currentStep].component

  return (
    <div className={styles.container}>
      <TopBar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <h1 className={styles.title}>AI Attention Explorer</h1>
      <p className={styles.subtitle}>Discover how AI understands ambiguous language</p>
      <div className={styles.demoArea}>
        <CurrentStepComponent tokens={tokens} weights={weights} onWeightChange={handleWeightChange} />
      </div>
      <div className={styles.navigation}>
        {currentStep > 0 && (
          <button onClick={prevStep} className={styles.navButton}>
            Previous
          </button>
        )}
        <div style={{ flex: 1 }}></div>
        {currentStep < steps.length - 1 && (
          <button onClick={nextStep} className={styles.navButton}>
            Next
          </button>
        )}
      </div>
      {showIntro && <IntroModal onClose={() => setShowIntro(false)} />}
    </div>
  )
}

