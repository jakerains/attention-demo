import type React from "react"
import { useState } from "react"
import styles from "./AttentionVisualization.module.css"

interface AttentionVisualizationProps {
  tokens: string[]
  weights: { [key: string]: number }
  onWeightChange: (word: string, value: number) => void
}

const AttentionVisualization: React.FC<AttentionVisualizationProps> = ({ tokens, weights, onWeightChange }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null)

  const handleWordClick = (word: string) => {
    setSelectedWord(word === selectedWord ? null : word)
    if (!(word in weights)) {
      onWeightChange(word, 0.1)
    }
  }

  const getInterpretation = () => {
    const maxWeight = Math.max(...Object.values(weights))
    const mostAttendedWord = Object.entries(weights).find(([_, weight]) => weight === maxWeight)?.[0]

    if (mostAttendedWord === "dog") {
      return "The AI thinks 'it' refers to the dog. The sentence might mean the dog was hot after walking across the street."
    } else if (mostAttendedWord === "drink") {
      return "The AI thinks 'it' refers to the drink. The sentence might imply the drink was hot, which is why the dog went to get it."
    } else if (mostAttendedWord === "hot") {
      return "The AI is focusing on the temperature. It might interpret the sentence to mean the weather or general situation was hot, causing the dog to seek a drink."
    } else {
      return "The AI isn't sure what 'it' refers to. Try adjusting the attention to different words!"
    }
  }

  return (
    <div className={styles.visualizationContainer}>
      <h2 className={styles.sectionTitle}>AI's Attention and Interpretation</h2>
      <p className={styles.explanation}>
        Click on words to see how changing the AI's attention affects its understanding of "it":
      </p>
      <div className={styles.sentenceArea}>
        {tokens.map((token, index) => (
          <div
            key={index}
            className={`${styles.word} ${styles.clickable} ${token.toLowerCase() === selectedWord ? styles.selected : ""}`}
            style={{
              fontSize: `${16 + (weights[token.toLowerCase()] || 0) * 20}px`,
            }}
            onClick={() => handleWordClick(token.toLowerCase())}
          >
            {token}
          </div>
        ))}
      </div>
      {selectedWord && (
        <div className={styles.sliderContainer}>
          <label htmlFor="attentionSlider">Adjust attention for "{selectedWord}":</label>
          <input
            id="attentionSlider"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={weights[selectedWord] || 0}
            onChange={(e) => onWeightChange(selectedWord, Number.parseFloat(e.target.value))}
          />
        </div>
      )}
      <div className={styles.interpretationBox}>
        <h3>AI's Current Interpretation:</h3>
        <p>{getInterpretation()}</p>
      </div>
    </div>
  )
}

export default AttentionVisualization

