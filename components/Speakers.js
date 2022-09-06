import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

import styles from "../styles/Speakers.module.css"
import shared_styles from "../styles/Event.module.css"

const Speakers = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={styles.section_wrapper}>
      <div className={styles.section}>
        <h1 className={shared_styles.medium_heading}>{blok.title}</h1>
        <div className={styles.cards_wrapper}>
          {blok.speakers_items.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Speakers
