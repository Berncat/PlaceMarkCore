#### Hi 👋, I'm Bernard Cattigan

#### Currently Studying a HDIP in Computer Science at Waterford Institute of Technology

# PlaceMark

- The current module I am working on is Full Stack Web Development
- We have been tasked with the following assignment: [PlaceMark](https://github.com/Berncat/PlaceMarkCore/blob/main/Assignment.pdf)
- It is a web application that will allow users to log in and enter points of interest (POI) that will
  render on a map, then you will be able to click on the POI and it will bring up the details about that specific POI.

## PlaceMark Core

The first stage of the assignment called PlaceMark Core, its main focus is to ensure we have a robust model on which to build the web app over time. There are 4 levels of release
basic, good, excellent and outstanding, each one building up from the previous. I am hoping I will be able to get up to the excellent release level and if I have any extra time
try and implement some of the features required for the outstanding release.

---

## Table of contents

<!--ts-->

- [Languages and Tools](#languages-and-tools)
- [Releases](#releases)
  - [Basic](#basic)
  - [Good](#good)
  - [Excellent](#excellent)
  - [Outstanding](#outstanding)
- [Building](#building)
- [Database Model Selection](#database-model-selection)
- [Running](#running)
  - [Application](#application)
  - [Unit Tests](#unit-tests)
<!--te-->

---

## Languages and Tools

#### Note: I have listed all elements that would be used in all versions of the PlaceMark app, therefore my releases may not contain all components

### Infrastructure:

[JavaScript](https://www.javascript.com),
[Node](https://nodejs.org/),
[Glitch](https://glitch.com),
[OpenAPI](https://www.openapis.org),
[Mongo](https://www.mongodb.com),
[Mongo Atlas](https://www.mongodb.com/atlas/database),
[Cloudinary](https://cloudinary.com),
[Firebase](https://firebase.google.com),
[Heroku](https://www.heroku.com)

<p align="left"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60" />
  <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png" alt="nodejs" width="80" height="60" />
  <img src="https://logos-world.net/wp-content/uploads/2021/03/Glitch-Logo.png" alt="glitch" width="120" height="60" />
  <img src="https://s3-us-west-2.amazonaws.com/assertible/integrations/OpenAPI-Logo-Stacked-Pantone.png" alt="openapi" width="60" height="60" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60" />
  <img
    src="https://assets-global.website-files.com/5f1c75e63b2f950eb473d3e4/603c5eb831820c3ce6a8f057_603a1586fa052d17fc2a6929_MongoDBAtlas.png"
    alt="mongoatlas"
    width="60"
    height="60"
  />
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaYSZNe_z61J3u1Mb9Moocy-L1t2hvq0NPHL8-lWYXJql7n17f3-4eokJ_a_-Tw2S0vE&usqp=CAU"
    alt="cloudinary"
    width="60"
    height="60"
  />
  <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png" alt="firebase" width="60" height="60" />
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ385btMuMTc-sHPBN5YbkDfprSzK87h4gkvQpxetS_w2cEHxZwnT3k18q9vU5U3vpbxnM&usqp=CAU"
    alt="heroku"
    width="60"
    height="60"
  />
</p>

### Back End:

[@hapi/hapi](https://hapi.dev),
[@hapi/vision](https://hapi.dev/module/vision),
[@hapi/boom](https://hapi.dev/module/boom),
[@hapi/cookie](https://hapi.dev/module/cookie),
[@hapi/inert](https://hapi.dev/module/inert),
[@hapi/jwt](https://hapi.dev/module/jwt),
[joi](https://joi.dev/),
[lowdb](https://github.com/typicode/lowdb),
[Mongoose](https://mongoosejs.com/)

<p align="left"> 
<img src="https://raw.githubusercontent.com/hapijs/assets/master/images/hapi.png" alt="hapi" width="80" height="60"/>
<img src="https://raw.githubusercontent.com/nivesh2/joi-error-formatter/master/joi-image.png" alt="joi" width="80" height="60"/>
<img src="https://hcti.io/v1/image/1019f9c1-6ab0-44ed-b228-cf79f2dd3c41" alt="lowdb" width="140" height="60"/>
<img src="https://miro.medium.com/max/1050/1*acfAKaDI7uv5GyFnJmiPhA.png" alt="mongoose" width="140" height="60"/>
</p>

### Tools:

[eSlint](https://eslint.org),
[Prettier](https://prettier.io),
[Nodemon](https://nodemon.io),
[Mocha](https://mochajs.org),
[Chai](https://www.chaijs.com)

<p align="left"> 
<img src="https://images.credly.com/images/e6eebd0c-6a17-4c06-b172-02ca9f6beb06/eslint.png" alt="eslint" width="60" height="60"/>
<img src="https://flaviocopes.com/prettier/logo.png" alt="prettier" width="160" height="60"/>
<img src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-ar21.png" alt="nodemon" width="140" height="60"/>
<img src="https://cdn.freebiesupply.com/logos/large/2x/mocha-1-logo-png-transparent.png" alt="mocha" width="55" height="60"/>
<img src="https://cdn.freebiesupply.com/logos/large/2x/chai-logo-png-transparent.png" alt="chai" width="55" height="60"/>
</p>
  
### Components:
[Uuid](https://github.com/uuidjs/uuid),
[dotEnv](https://github.com/motdotla/dotenv),
[Axios](https://axios-http.com),
[Cloudinary](https://cloudinary.com),
[Swagger](https://swagger.io),
[Json Web Token](https://jwt.io)
<p align="left"> 
<img src="https://godotmarketplace.com/wp-content/uploads/2020/03/logo-10-300x300.png" alt="uuid" width="60" height="60"/>
<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" width="60" height="60"/>
<img src="https://axios-http.com/assets/logo.svg" alt="axios" width="140" height="60"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaYSZNe_z61J3u1Mb9Moocy-L1t2hvq0NPHL8-lWYXJql7n17f3-4eokJ_a_-Tw2S0vE&usqp=CAU" alt="cloudinary" width="60"height="60" />
<img src="https://logovtor.com/wp-content/uploads/2020/09/swagger-supported-by-smartbear-logo-vector-xs.png" alt="swagger" width="120" height="60"/>
<img src="http://jwt.io/img/logo-asset.svg" alt="jwt" width="140" height="60"/>
</p>
      
      
### Front End:
[Handlebars](https://handlebarsjs.com),
[Bulma](https://bulma.io),
[Font Awesome](https://fontawesome.com),
[Leaflet](https://leafletjs.com/)
<p align="left"> 
<img src="https://cdn.tutsplus.com/net/uploads/legacy/2143_handlebars/handlebars-thumb.jpg" width="60" height="60"/>
<img src="https://bulma.io/images/bulma-banner.png" alt="bulma" width="140" height="60"/>
<img src="https://siteorigin.com/wp-content/uploads/2019/01/font-awesome-widgets-bundle.jpg" alt="fontawesome" width="100" height="60"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1200px-Leaflet_logo.svg.png" alt="leaflet" width="140" height="60"/>
</p>

---

## Releases

- [x] [Basic](https://github.com/Berncat/PlaceMarkCore/releases/tag/1.0.0)
- [x] [Good](https://github.com/Berncat/PlaceMarkCore/releases/tag/2.0.0)
- [x] [Excellent](https://github.com/Berncat/PlaceMarkCore/releases/tag/3.0.0) - Please note Catergories feature from assignment spec was not met
- [ ] Outstanding

### Basic

- **Status:**
  - [Released 1.0.0](https://github.com/Berncat/PlaceMarkCore/releases/tag/1.0.0)
- **Languages and Tools:**
  - JavaScript, Node, @hapi/hapi, @hapi/vision, @hapi/boom, joi, eSlint, Prettier, Uuid, Handlebars, Bulma, Font Awesome
- **Structure:**
  - Users { name, email, \_.id }
  - Themes { name, \_.id, userId }
- **Database:**
  - Basic Mem style - Non persistent, only works while localhost session is active
- **API:**
  - Basic
- **Deployment**
  - Only available on localhost

### Good

- **Status:**
  - [Released 2.0.0](https://github.com/Berncat/PlaceMarkCore/releases/tag/2.0.0)
- **Languages and Tools:**
  - JavaScript, Node, Glitch, @hapi/hapi, @hapi/vision, @hapi/boom, @hapi/cookie, joi, lowdb, eSlint, Prettier, Nodemon, Mocha, Chai, Uuid, dotEnv, Axios, Handlebars, Bulma, Font Awesome
- **Structure:**
  - Users { name, email, \_.id }
  - Themes { name, \_.id, userId }
  - Places { name, lon, lat, desc, \_.id, themeId, userId }
- **API:**
  - Unit Tests
- **Deployment**
  - [Deployed on Glitch](https://placemark2022.glitch.me/)

### Excellent

- **Status:**
  - [Released 3.0.0](https://github.com/Berncat/PlaceMarkCore/releases/tag/3.0.0) - Please note Catergories from spec was not attained for this release
- **Languages and Tools:**
  - JavaScript, Node, OpenAPI, Mongo, Mongo Atlas, Back End: @hapi/hapi, @hapi/vision, @hapi/boom, @hapi/cookie, @hapi/inert, @hapi/jwt, joi, Mongoose, eSlint, Prettier, Nodemon, Mocha, Chai, Uuid, dotEnv, Cloudinary, Axios, Swagger, Handlebars, Bulma, Font Awesome
- **Structure:**
  - Users { name, email, \_.id }
  - Themes { name, \_.id, userId }
  - Places { name, lon, lat, desc, \_.id, themeId, userId } 
- **API:**
  - [Open API (Swagger)](https://placemark2022-v2.glitch.me/documentation)
- **Deployment**
  - [Deployed on Glitch with Mongodb Atlas Cloud Database](https://placemark2022-v2.glitch.me/)

### Outstanding

- **Status:**
  - Not Started
- **Languages and Tools:**
  - JavaScript, Node, OpenAPI, Firebase, Heroku, @hapi/hapi, @hapi/vision, @hapi/boom, @hapi/cookie, @hapi/inert, @hapi/jwt, joi, Mongoose(Only if Firebase not adopted), eSlint, Prettier, Nodemon, Mocha, Chai, Uuid, dotEnv, Cloudinary, Axios, Swagger, Json Web Token, Handlebars, Bulma, Font Awesome, Leaflet
- **Structure:**
  - Users { name, email, \_.id }
  - Themes { name, \_.id, userId }
  - Places { name, lon, lat, desc, \_.id, themeId, userId } 
- **API:**
  - JWT
- **Deployment**
  - Heroku

---

## Building

```
npm install
```

---

## Database Model Selection

To slect which database model you are usiing, naviagte to test/fixtures.js

```
export const database = "json"; // Enter "" or "json" or "Mongo"
```

---

## Running

### Application

To run the application, execute the following from within the project folder:

Normal:

```
npm run start
```

Nodemon:

```
npm run dev
```

The application should be served on: <http://localhost:3000/>

### Unit Tests

To run the unit tests, execute the following from within the project folder:

Model tests:

```
npm run testmodels
```

API tests:

```
npm run testapi
```
