import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

import styles from "../styles/Agenda.module.css"
import shared_styles from "../styles/Event.module.css"

const Agenda = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={styles.section}>
      <h1 className={shared_styles.medium_heading}>{blok.title}</h1>
      <div>
        {blok.agenda_items.map(nestedBlok => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  )
}

export default Agenda
