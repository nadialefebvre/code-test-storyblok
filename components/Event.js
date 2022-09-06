import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

import styles from "../styles/Event.module.css"

const Event = ({ blok }) => {

  return (
    <main {...storyblokEditable(blok)}>
      {blok.hero ? blok.hero.map((nestedBlok) => (
        <StoryblokComponent date={blok.body_side[0].date} place={blok.body_side[0].place} blok={nestedBlok} key={nestedBlok._uid} />
      ))
        : null}
      <div className={styles.body}>
        <div className={styles.body_main}>
          {blok.body_main ? blok.body_main.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))
            : null}
        </div>
        <div className={styles.body_side}>
          {blok.body_side ? blok.body_side.map((nestedBlok) => (
            <StoryblokComponent date={blok.hero[0].details_date} blok={nestedBlok} key={nestedBlok._uid} />
          ))
            : null}
        </div>

      </div>
      {blok.speakers ? blok.speakers.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))
        : null}
    </main>
  )
}

export default Event