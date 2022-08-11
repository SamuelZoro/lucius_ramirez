# lucius_ramirez

This project is a simple personal responsive, mobile-first developed Philosophy web application that provides an ebook that the user can flick through manually, and search through using a search engine. The user is also provided with the feature of sending a message to the owner of the web application by filling out a contact form.

## Technologies

The technologies used were jQuery, Font Awesome, Algolia's InstantSearch API, Node.js, Nodemailer, Express.js, and Typed.js.

Using jQuery means I can implement the same required functionality with less lines as there are provided methods that I would overthise have to build from scratch which would take longer. It therefore makes using JQuery efficient.

Font awesome is a useful tool and source for improving the user interface and user experience with icons. I chose to include this library in my app as it saves time trying to make the icons myself.

Algolia's InstantSearch API was implemented into my project to allow users to use a search engine. I picked this as the documentation was simple, easy to follow and all the configurations I required for the search functionality were available.

I used Nodejs as the Nodemailer module allowed me to verify its functionality without having to deploy my application, which wouldn't have been the case with PHP.

The Nodemailer Node.js module was for the backend of my web app to provide a mail transporter for the contact form's functionality. This was my choice because it is very well secured, and permits you to verify whether the implementation worked locally, thus without having to deploy your application, which is incredibly useful.

The Express.js backend framework was part of my Node.js app. It was useful as I used it to add all my backend features but also to connect to the front end of my application.

Typed.js was used for animating my text, to give a typewriter effect. I used this to give a fun aesthetic to the visual design of the page.

## Challenges Encountered

One of the challenges that I faced during the development of this project was being able to integrate my Nodejs app with my Algolia InstantSearch app. I did not understand why only one could run at a time. After carefully reading the errors and doing some research I came to realisation that I had to use a different port number for the additional app.

Another challenge, was struggling to display a background image in the CSS of my Nodejs/Express app even though it would display when put in my HTML. It did not make sense to me since I had the CSS linked into my file that had the HTML and it was in the folder that my Express app was routed to run in. The mistake I had made was that I needed to include whatever folder I wished to use, regardless of whether it was in the folder which the app ran in, as a relative reference using the 'app.use' method.

An additional one I encountered was my div element overlapping the viewport when switching between screen sizes even though the div was nested in a container. The solution to this issue was simply changing the unit to 'vh' rather than 'px', which at the time I wasn't even aware of the functionality of the different CSS units.

My typwriter animation was also not working how I wanted. Every time it reached a particular word it would freeze for a second and then continue. For a while, I believed it had to do with the settings of the Typed.js library, maybe the speed of the typing. Eventually I decided to closely examine the HTML tag where the text was placed. I realised the text takes up two lines and where the line breaks is where the animation pauses for a second. So, it was because the text was not on a single line, which I hadn't imagined would have been a problem.

Trying to add a backdrop filter blur to a moving element (side navigation) in Safari was an issue that took me quite some time to figure out, only to realise it was bug that had nothing to do with me and something that the developers of Safari need to work on. Still, I wanted to use a backdrop filter for the moving element. So Instead I had a static div element in the background with the backdrop filter blur property applied to it, and a transparent property on the side navigation. When the side navigation slid out, behind it would be the static div, giving the impression that the side navigation has the backdrop filter blur.

## Things to improve

A feature I wish to fix is adding more available text that fills the whole div element for my search results in the desktop view, which i am working on doing by changing the word count of my text attribute in my Algolia InstantSearch app.

## Future features to add

A feature I'm thinking of implementing is a dynamic background image that changes everytime you refresh the page

A second feature, is the choice to change the language in the web app.

I also plan to add hover properties to all clickable elements.

## Demo

### Mobile

### Desktop

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.
