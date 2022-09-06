import { storyblokInit, apiPlugin } from "@storyblok/react";

import "../styles/globals.css"

import Event from "../components/Event";
import Speakers from "../components/Speakers"
import SpeakerCard from "../components/SpeakerCard"
import EventProducts from "../components/EventProducts"
import AgendaItem from "../components/AgendaItem"
import Agenda from "../components/Agenda"
import Content from "../components/Content"
import ContentAddItem from "../components/ContentAddItem"
import EventSolutions from "../components/EventSolutions"
import EventTypes from "../components/EventTypes"
import Share from "../components/Share"
import EventDetails from "../components/EventDetails"
import Hero from "../components/Hero"

const components = {
  event: Event,
  hero: Hero,
  "event-details": EventDetails,
  "event-types": EventTypes,
  "event-products": EventProducts,
  "event-solutions": EventSolutions,
  share: Share,
  content: Content,
  "content-add-item": ContentAddItem,
  "agenda-item": AgendaItem,
  agenda: Agenda,
  speakers: Speakers,
  "speaker-card": SpeakerCard
};

storyblokInit({
  // accessToken: "kOO69s77DdbugvLdV7iQOgtt",
  accessToken: "yZsii1zszWoNpbcJBSRkVQtt",
  use: [apiPlugin],
  components,
});

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
