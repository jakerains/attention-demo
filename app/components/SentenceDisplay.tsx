import type React from "react"
import styles from "./SentenceDisplay.module.css"

interface SentenceDisplayProps {
  tokens: string[]
}

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({ tokens }) => {
  return (
    <div className={styles.sentenceContainer}>
      <h2 className={styles.sectionTitle}>The Sentence</h2>
      <p className={styles.explanation}>This is the sentence our AI is trying to understand:</p>
      <div className={styles.tokenContainer}>
        {tokens.map((token, index) => (
          <span key={index} className={`${styles.token} ${token.toLowerCase() === "it" ? styles.highlight : ""}`}>
            {token}
          </span>
        ))}
      </div>
      <p className={styles.hint}>The word "it" is highlighted because it's ambiguous. What does "it" refer to?</p>
    </div>
  )
}

export default SentenceDisplay

