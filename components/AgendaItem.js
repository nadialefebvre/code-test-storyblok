import { storyblokEditable } from "@storyblok/react"

import styles from "../styles/AgendaItem.module.css"
import shared_styles from "../styles/Event.module.css"

const AgendaItem = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className={styles.small_heading}>{blok.title}</h2>
      <p className={shared_styles.paragraph}>{blok.details}</p>
    </div>
  )
}

export default AgendaItem
