import type React from "react"
import styles from "./IntroModal.module.css"

interface IntroModalProps {
  onClose: () => void
}

const IntroModal: React.FC<IntroModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Welcome to AI Attention Explorer!</h2>
        <p>Hey there! Ready to learn how AI understands language? Don't worry, it's easier than you think!</p>
        <p>Imagine you're teaching a friendly robot dog to understand a story. That's kind of what we're doing here!</p>
        <p>
          We'll guide you through each step, and you'll see how our AI dog pays attention to different words to
          understand what's happening.
        </p>
        <p>Ready to start your AI adventure? Let's go!</p>
        <button className={styles.startButton} onClick={onClose}>
          Let's Begin!
        </button>
      </div>
    </div>
  )
}

export default IntroModal

