import { storyblokEditable } from "@storyblok/react"

import shared_styles from "../styles/Event.module.css"

const ContentAddItem = ({ blok }) => {
  return (
    <p {...storyblokEditable(blok)} className={shared_styles.paragraph}>{blok.paragraph}</p>
  )
}

export default ContentAddItem
