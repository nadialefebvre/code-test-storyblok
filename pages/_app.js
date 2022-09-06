import { storyblokInit, apiPlugin } from "@storyblok/react"

import "../styles/globals.css"

import Event from "../components/Event"
import Hero from "../components/Hero"
import Content from "../components/Content"
import ContentAddItem from "../components/ContentAddItem"
import Agenda from "../components/Agenda"
import AgendaItem from "../components/AgendaItem"
import EventDetails from "../components/EventDetails"
import EventTypes from "../components/EventTypes"
import EventProducts from "../components/EventProducts"
import EventSolutions from "../components/EventSolutions"
import Share from "../components/Share"
import Speakers from "../components/Speakers"
import SpeakerCard from "../components/SpeakerCard"

const components = {
  event: Event,
  hero: Hero,
  content: Content,
  "content-add-item": ContentAddItem,
  agenda: Agenda,
  "agenda-item": AgendaItem,
  "event-details": EventDetails,
  "event-types": EventTypes,
  "event-products": EventProducts,
  "event-solutions": EventSolutions,
  share: Share,
  speakers: Speakers,
  "speaker-card": SpeakerCard
}

storyblokInit({
  accessToken: "yZsii1zszWoNpbcJBSRkVQtt",
  use: [apiPlugin],
  components,
})

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
