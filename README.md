# Burger

Burger is a full-stack web-app created for my web development bootcamp. To build it, I used mySQL, Handlebars.js, Node.js and the MVC layout. It's a simple app that allows one to add new burgers, eat—devour, in my case—them and have the underlying database and design-template update dynamically.

The most challenging part of this build was to follow the MVC layout because it required a high proficiency of JavaScript's `module.exports` feature. While I was quite familiar with this feature, I hadn't used it as extensively as the MVC pattern requires. So, most of my time was taken up by figuring out what to export and when, where and how to call it. 

As I built this app, I realized how important files like **orm.js** and **config.js** are for full-stack apps. I also thought back to how one of my first full-stack projects, [Food2u](https://github.com/shamatik/food2u), built by a team of three others, lacked proper structure. Although tricky, the MVC layout serves a crucial role in app organization and even sets a natural order for what should be done first.

As for the front-end build, this was the first time that I used Handlebars.js. Aside from a few `href` issues within the **main.handlebars** file, it was mostly straightforward. It was nice to implement a little logic into the front-end and sort the page's design elements through a `POST` method. 

As I dive deeper into web development, I have realized that building the front-end of an app isn't simply about making static HTML, CSS and JavaScript pages. It obviously goes far beyond that. I hope to get more exposure to this with more complex templating engines like Angular and React. But for now, Handlebars will allow for good practice.

Check out the app here: 
