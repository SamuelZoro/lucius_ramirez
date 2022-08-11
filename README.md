# lucius_ramirez

This project is a simple personal Philosophy web application that provides an ebook that the user can flick through manually, and search through using a search engine. The user is also provided with the feature of sending a message to the owner of the web application by filling out a contact form.

The technologies used were jQuery, Font Awesome, Algolia's InstantSearch API, Node.js, Nodemailer, Express.js, and Typed.js.

Using jQuery means I can implement the same required functionality with less lines as there are provided methods that I would overthise have to build from scratch which would take longer. It therefore makes using JQuery efficient.

Font awesome is a useful tool and source for improving the user interface and user experience with icons. I chose to include this library in my app as it saves time trying to make the icons myself.

Algolia's InstantSearch API was implemented into my project to allow users to use a search engine. I picked this as the documentation was simple, easy to follow and all the configurations I required for the search functionality were available.

The Nodemailer Node.js module was for the backend of my web app to provide a mail transporter for the contact form's functionality. This was my choice because it is very well secured, and permits you to verify whether the implementation worked locally, thus without having to deploy your application, which is incredibly useful.

The Express.js backend framework was part of my Node.js app. It was useful as I used it to add all my backend features but also to connect to the front end of my application. 

## Demo

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
