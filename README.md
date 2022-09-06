# code-test-storyblok

## Task for this code test
Build a Storyblok application where a single event page is displayed, based on an "event" template made of modules (multiples sections).

## My comments

### Steps

Here are the steps I went through:

* I read Storyblok's documentation, especially to understand their terminology for the content structure.
* I followed some tutorials to create React app with Storyblok, Next.js app and then Next.js app with Storyblok.
* I made a dummy space in Storyblok to test all blocks types with the app generated with the tutorial.
* Once I felt I understood the content structure in Storyblok, I created blocks according to the designs provided, with some blocks at a lower level for repeating items in a single block (for example `Speaker Card`).
* I created datasources for multi-options fields.
* I created the content-type `Event` that would be the template using all these modules, with the help of some presets.
* I created a single event with this template and the copy provided.
* I made the styling according to the designs provided.


### Deployed app
https://code-test-storyblok-nadialefebvre.vercel.app/


### General comments

I found a similar font for the `h1`'s and used a generic sans-serif font for all other parts.

Since I had only one design that was suited for desktop view, the app isn't responsive below desktop view.

All cards in `Speakers` block are expanding when clicking the `show more` button on one. I didn't know what was intended since no design was provided for the expanded view, but I figured if only one card would expand, it would cause some issue if there would be another row of speakers below.

If the speaker description is longer than 200 characters, a show more/less toggle is shown, but the number isn't hardcoded: I decided to add a field in Storyblok where you can set a different limit depending on your needs, with a default value of 200.

I did my best to put all text in Storyblok, so if there's a need for translation (e.g. for other markets), it's easier to change them directly in the CMS: titles, button texts, date format (en-US, etc.) for example.

Icons links and alt-texts are hardcoded which is not ideal but it didn't seem to be a good idea to add them directly as fields in the blocks because I figured the content editor wouldn't need to change them, and I haven't had the time to find a better way to handle it.

It seems that some options for the styling can be integrated in Storyblok's modules, but I couldn't find enough info about that with the time I had. Also I wasn't able to find a way to prevent the content editor to remove necessary blocks or to add two hero sections.


### Summary

It was a pleasure to build this project! Understanding Storyblok's content structure (what is a template, what is a module, etc.) was a challenge at first, but I feel that I've learned a lot from it. It was the first time I used Next.js and CSS modules, so I am happy with the result and what I've learned there as well. I think the resulting appearance reflects quite well the design provided. It's perfectible, but I am pleased with the result and about the process.

If I had more time, I would have built it with TypeScript. In fact, I created a copy of the app in TS, but due to lack of time, I wasn't able to complete it.

I wish now to learn more how to build content templates in Storyblok, since it's a very powerful CMS, and to extend further my knowledge of Next.js!
