/* eslint-disable @next/next/no-img-element */
import { storyblokEditable } from "@storyblok/react"

import styles from "../styles/Hero.module.css"
import shared_styles from "../styles/Event.module.css"

const Hero = ({ blok, date, place }) => {

  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const formattedDate = new Date(date).toLocaleDateString("en-US", options)

  return (
    <header {...storyblokEditable(blok)} className={styles.hero}>
      <img
        alt={blok.image.alt}
        src={blok.image.filename}
      />
      <div className={styles.overlay}>

      </div>
      <div className={styles.content_box}>
        <div className={styles.content}>
          <p className={shared_styles.tiny_heading}>{blok.tagline}</p>
          <h1 className={styles.title}>{blok.title}</h1>
          <p className={styles.preamble}>{blok.preamble}</p>
          <p className={styles.details}>{formattedDate} • {place}</p>
          <div className={styles.button}>
            <a
              href={blok.sign_up.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{blok.button_text}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero