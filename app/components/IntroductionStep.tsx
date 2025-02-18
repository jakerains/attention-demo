import type React from "react"
import SentenceDisplay from "./SentenceDisplay"
import DogAnimation from "./DogAnimation"
import styles from "./IntroductionStep.module.css"

interface IntroductionStepProps {
  tokens: string[]
  weights: { [key: string]: number }
}

const IntroductionStep: React.FC<IntroductionStepProps> = ({ tokens, weights }) => {
  return (
    <div className={styles.introductionContainer}>
      <DogAnimation weights={weights} />
      <SentenceDisplay tokens={tokens} />
      <p className={styles.explanation}>
        Welcome to the AI Attention Explorer! Here, you'll learn how AI understands ambiguous language by focusing on
        different parts of a sentence. The animation above represents our example sentence, and you'll see how changing
        the AI's attention affects its interpretation.
      </p>
    </div>
  )
}

export default IntroductionStep

