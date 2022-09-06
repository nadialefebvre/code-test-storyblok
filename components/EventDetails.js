/* eslint-disable @next/next/no-img-element */
import { storyblokEditable } from "@storyblok/react"

import styles from "../styles/EventDetails.module.css"
import shared_styles from "../styles/Event.module.css"

const EventDetails = ({ blok }) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = new Date(blok.date).toLocaleDateString(blok.date_format, options)

  return (
    <div {...storyblokEditable(blok)} className={styles.section}>
      <h3 className={shared_styles.tiny_heading}>{blok.title}</h3>

      <div className={styles.item}>
        <img
          alt="calendar icon"
          src="https://a.storyblok.com/f/173422/x/1d2f2f88ef/calendar.svg"
        />
        <span>{formattedDate}</span>
      </div>

      <div className={styles.item}>
        <img
          alt="location icon"
          src="https://a.storyblok.com/f/173422/x/d2d7d019b3/location.svg"
        />
        <span>{blok.place}
          <br />
          {blok.online_availability &&
            <span className={styles.text_light}>{blok.online_availability_note}
            </span>
          }
        </span>
      </div>

      <div className={styles.item}>
        <img
          alt="chat icon"
          src="https://a.storyblok.com/f/173422/x/888647ea88/chat.svg"
        />
        <span>
          {blok.languages.map(language =>
            <span className={styles.enum} key={language}>{language}</span>
          )}
        </span>
      </div>

      <div className={styles.item}>
        <img
          alt="wallet icon"
          src="https://a.storyblok.com/f/173422/x/ce400090b1/wallet.svg"
        />
        <span>{blok.price}</span>
      </div>

      <div className={styles.item}>
        <img
          alt="clock icon"
          src="https://a.storyblok.com/f/173422/x/62ee54f73d/clock.svg"
        />
        <span>{blok.duration}</span>
      </div>
    </div>
  )
}

export default EventDetails
