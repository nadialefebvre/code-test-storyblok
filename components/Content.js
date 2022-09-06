import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

import styles from "../styles/Content.module.css"
import shared_styles from "../styles/Event.module.css"

const Content = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1 className={shared_styles.medium_heading}>{blok.title}</h1>
      <p className={shared_styles.paragraph}>{blok.description}</p>
      <div>
        {blok.content_add_items.length !== 0 &&
          <>
            <h2 className={styles.small_heading}>{blok.subtitle}</h2>
            {blok.content_add_items.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </>
        }
      </div>
    </div>
  )
}

export default Content
