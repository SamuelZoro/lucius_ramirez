# lucius_ramirez

This project is a simple personal responsive, mobile-first developed Philosophy web application that provides an ebook that the user can flick through by the click or touch of a button, and search through using a search engine. The user is also provided with the feature of sending a message to the author by filling out a contact form.

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

## Future features to add

A feature I'm thinking of implementing is a dynamic background image that changes everytime you refresh the page

A second feature, is the choice to change the language in the web app.

I also plan to add hover properties to all clickable elements.

## UI Designs

Here are a some examples of the designs I made, using Adobe XD, prior to the development of my application:

#### High and Low-fidelity Wireframes (Mobile)

![index page (mobile, lo-fi)](https://user-images.githubusercontent.com/84352644/193344343-b49c2ee9-756b-449f-9128-7ed886e9112d.png)
![index page (mobile, hi-fi)](https://user-images.githubusercontent.com/84352644/193344856-d0fec5b4-7d5e-4c60-ac84-958fcea9f287.png)


![e-book page (mobile, lo-fi)](https://user-images.githubusercontent.com/84352644/193344360-7b62cb6c-1af3-484f-b3e8-c24807bf9ea0.png)
![e-book page (mobile, hi-fi)](https://user-images.githubusercontent.com/84352644/193344866-64b49495-2ab8-4f7d-ad79-aafefa76a051.png)

![contact page (mobile, lo-fi)](https://user-images.githubusercontent.com/84352644/193344369-9c9652c8-86e7-4fc8-821a-cb6cfcf2c613.png)
![contact page (mobile, hi-fi)](https://user-images.githubusercontent.com/84352644/193344884-9c1d791c-a6e3-4a15-8758-49e67b33f88f.png)

#### High and Low Fidelity Wireframes (Desktop)
![index page (desktop, lo-fi)](https://user-images.githubusercontent.com/84352644/193344496-78b0b3a7-d195-43e9-a27e-7da1871c146c.png)
![index page (desktop, hi-fi)](https://user-images.githubusercontent.com/84352644/193344933-8fe2fe4f-a6a0-43d6-ac05-30427aa0ea76.png)

![e-book page (desktop, lo-fi)](https://user-images.githubusercontent.com/84352644/193344506-96bde9da-f7dc-48c1-805f-30ff5efa0fca.png)
![e-book page (desktop, hi-fi)](https://user-images.githubusercontent.com/84352644/193344947-36da423a-c8aa-4f54-83cd-cbf4e806f7a4.png)

![contact page (desktop, lo-fi)](https://user-images.githubusercontent.com/84352644/193344511-8ccfa416-591d-4dc2-a34a-01eec84f58e8.png)
![contact page (desktop, hi-fi)](https://user-images.githubusercontent.com/84352644/193345574-c7c754a2-54e9-457c-8930-604f711127b0.png)


## Demo

### Mobile

Watch the mobile demonstration [here](https://1drv.ms/v/s!Al17jSRcUpo4gP4CTkbemwYTee5JOQ)

### Desktop

Watch the desktop demonstration [here](https://1drv.ms/v/s!Al17jSRcUpo4gP4E93H17KtKBU062Q)
