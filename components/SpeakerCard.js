/* eslint-disable @next/next/no-img-element */
import { storyblokEditable } from "@storyblok/react"
import { useState } from "react"

import styles from "../styles/SpeakerCard.module.css"
import shared_styles from "../styles/Event.module.css"

const SpeakerCard = ({ blok }) => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(true)

  return (
    <div {...storyblokEditable(blok)} className={styles.card}>
      <img alt={blok.image.alt} src={blok.image.filename} />

      <h2>{blok.name}</h2>

      <p className={shared_styles.tiny_heading}>
        <span>{blok.role}</span> at <span>{blok.company}</span>
      </p>

      <p className={`${shared_styles.paragraph} ${isOverflowHidden && `${styles.overflow_hidden}`}`}>
        {isOverflowHidden ? blok.description.substring(0, blok.description_max) : blok.description}
      </p>

      {blok.description.length > blok.description_max &&
        <button onClick={() => setIsOverflowHidden(!isOverflowHidden)}>
          <hr className={styles.hr_line} />
          &emsp;
          <span>{`Show ${isOverflowHidden ? "more" : "less"}`}</span>
          &ensp;
          <img
            alt="caret icon"
            className={isOverflowHidden ? "" : `${styles.caret_up}`}
            src="https://a.storyblok.com/f/173422/x/6bb82d64a7/caret-down.svg"
          />
          &emsp;
          <hr className={styles.hr_line} />
        </button>
      }
    </div>
  )
}

export default SpeakerCard
