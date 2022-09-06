import { storyblokEditable } from "@storyblok/react"

import styles from "../styles/EventTypes.module.css"
import shared_styles from "../styles/Event.module.css"

const EventTypes = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={styles.section}>
      <h3 className={shared_styles.tiny_heading}>{blok.title}</h3>
      <div className={styles.tags_wrapper}>
        {blok.types.map((item) =>
          <span className={shared_styles.tag} key={item}>{item}</span>
        )}
      </div>
    </div>
  )
}

export default EventTypes