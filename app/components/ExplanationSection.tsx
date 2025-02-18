import type React from "react"
import styles from "./ExplanationSection.module.css"

const ExplanationSection: React.FC = () => {
  return (
    <div className={styles.explanationContainer}>
      <h2 className={styles.sectionTitle}>How AI Attention Works</h2>
      <p>
        When an AI model encounters an ambiguous word like "it", it uses attention to focus on relevant parts of the
        sentence. By assigning different weights to words, the AI can better understand the context and resolve
        ambiguities.
      </p>
      <p>
        In this example, increasing attention on "dog" might lead the AI to think "it" refers to the dog being hot. More
        attention on "drink" could suggest the drink was hot, while focusing on "hot" might indicate the general weather
        or situation was hot.
      </p>
      <p>
        This process helps AI understand natural language by considering the relationships between words, much like
        humans do when interpreting context-dependent phrases.
      </p>
    </div>
  )
}

export default ExplanationSection

