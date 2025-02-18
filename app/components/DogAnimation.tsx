import type React from "react"
import styles from "./DogAnimation.module.css"

interface DogAnimationProps {
  weights: { [key: string]: number }
}

const DogAnimation: React.FC<DogAnimationProps> = ({ weights }) => {
  const dogPosition = weights.dog * 100
  const drinkPosition = weights.drink * 100
  const heatLevel = weights.hot * 100

  return (
    <div className={styles.animationContainer}>
      <div className={styles.scene}>
        <div className={styles.sun} style={{ opacity: heatLevel / 100 }}></div>
        <div className={styles.street}></div>
        <div className={styles.dog} style={{ left: `${dogPosition}%`, transform: "scaleX(-1)" }}>
          🐕
        </div>
        <div className={styles.street} style={{ top: "70%" }}></div>
        <div className={styles.waterBowl} style={{ left: `${drinkPosition}%` }}>
          🥣
        </div>
      </div>
      <p className={styles.explanation}>
        This animation represents our example sentence. The dog's position, the water bowl's location, and the sun's
        intensity change based on the AI's attention.
      </p>
    </div>
  )
}

export default DogAnimation

