import type React from "react"
import styles from "./TopBar.module.css"

interface TopBarProps {
  steps: { title: string }[]
  currentStep: number
  setCurrentStep: (step: number) => void
}

const TopBar: React.FC<TopBarProps> = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <div className={styles.topBar}>
      {steps.map((step, index) => (
        <button
          key={index}
          className={`${styles.stepButton} ${index === currentStep ? styles.active : ""}`}
          onClick={() => setCurrentStep(index)}
        >
          {step.title}
        </button>
      ))}
    </div>
  )
}

export default TopBar

