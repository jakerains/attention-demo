import type React from "react"
import styles from "./ExplanationPanel.module.css"

const ExplanationPanel: React.FC = () => {
  return (
    <div className={styles.explanationPanel}>
      <h2 className={styles.sectionTitle}>AI Insights: Understanding Attention</h2>
      <p>
        When AI reads a sentence, it doesn't just look at words one by one. Instead, it uses a clever trick called
        "attention" to understand the meaning better.
      </p>
      <p>
        Imagine you're trying to solve a mystery in a story. You don't just read straight through - you might look back
        at earlier clues or focus on certain important details. AI does something similar with attention!
      </p>
      <p>
        In our example, when the AI sees the word "it," it looks at all the other words to figure out what "it" might be
        referring to. The attention weights show how important the AI thinks each word is for understanding "it."
      </p>
      <p>
        By adjusting the sliders, you're telling the AI to pay more or less attention to different words. This can
        change how the AI understands the sentence - just like how focusing on different clues might lead you to
        different conclusions in a mystery!
      </p>
    </div>
  )
}

export default ExplanationPanel

