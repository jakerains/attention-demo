import type React from "react"
import styles from "./ControlPanel.module.css"

interface ControlPanelProps {
  weights: { [key: string]: number }
  onWeightChange: (word: string, value: number) => void
  onReset: () => void
}

const ControlPanel: React.FC<ControlPanelProps> = ({ weights, onWeightChange, onReset }) => {
  return (
    <div className={styles.controlPanel}>
      <h2 className={styles.sectionTitle}>Adjust AI's Attention</h2>
      <p className={styles.explanation}>Move the sliders to change how much attention the AI pays to each word:</p>
      {Object.entries(weights).map(([word, weight]) => (
        <div key={word} className={styles.sliderContainer}>
          <label htmlFor={`${word}-slider`}>{word}</label>
          <input
            id={`${word}-slider`}
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={weight}
            onChange={(e) => onWeightChange(word, Number.parseFloat(e.target.value))}
          />
          <span>{(weight * 100).toFixed(0)}%</span>
        </div>
      ))}
      <button onClick={onReset} className={styles.resetButton}>
        Reset Attention
      </button>
      <p className={styles.hint}>Try different combinations. How does it change the AI's understanding?</p>
    </div>
  )
}

export default ControlPanel

