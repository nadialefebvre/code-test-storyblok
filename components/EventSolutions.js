import { storyblokEditable } from "@storyblok/react"

import styles from "../styles/EventSolutions.module.css"
import shared_styles from "../styles/Event.module.css"

const EventSolutions = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={styles.section}>
      <h3 className={shared_styles.tiny_heading}>{blok.title}</h3>
      <div className={styles.tags_wrapper}>
        {blok.solutions.map(solution =>
          <span className={shared_styles.tag} key={solution}>{solution}</span>
        )}
      </div>
    </div>
  )
}

export default EventSolutions
