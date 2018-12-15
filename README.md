<p align="center">
  <img src="https://github.com/PRGip06/yelp-tropical-retreats/raw/master/public/img/yelp-tropical-retreat-logo-water.png" alt="Yelp         Tropical Retreats" />
</p>

## Overview
A yelp-like web application built to share reviews and display tropical paradise retreats from all over the world.
<br>

## Live Demo
To view the web app go to [https://yelp-tropical-retreats.herokuapp.com/](https://protected-hollows-42589.herokuapp.com/)
<br>

## Features

* Authentication:

  * User login with username and password
  
  * Admin sign-up with admin code
  
* Authorization:

  * Users cannot manage posts and view user profile without authentication
  
  * Users cannot edit or delete posts and comments composed by other users
  
  * Admin can manage all posts and comments
  
* Basic functionality of campground posts   

  * Create, edit, delete posts and comments
  
  * Upload campground photos
  
  * Display campground location on Google Maps
  
  * Search existing campgrounds
  
* Basic functionality of managing User accounts

  * Profile page set-up with sign-up
  
  * Password reset via email confirmation
  
* Flash messages responding to users' interaction with the app

* Responsive web design

### Custom Enhancements

* Update campground photos when editing campgrounds

* Update personal information on profile page

* Improve image load time on the landing page using Cloudinary

## Getting Started

> This app contains API secrets and passwords that have been deliberately hidden, so the app cannot run with its features on your local machine.  You can clone this repository.

### Clone or download this repository

```sh
git clone https://github.com/PRGip06/yelp-tropical-retreats.git
```

### Install dependencies

```sh
npm install
```

## Built with

### Front-end

* [ejs](http://ejs.co/)
* [Google Maps APIs](https://developers.google.com/maps/)
* [Bootstrap](https://getbootstrap.com/docs/3.3/)

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [async](http://caolan.github.io/async/)
* [crypto](https://nodejs.org/api/crypto.html#crypto_crypto)
* [helmet](https://helmetjs.github.io/)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [nodemailer](https://nodemailer.com/about/)
* [moment](https://momentjs.com/)
* [cloudinary](https://cloudinary.com/)
* [geocoder](https://github.com/wyattdanger/geocoder#geocoder)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)

### Platforms

* [Cloudinary](https://cloudinary.com/)
* [Heroku](https://www.heroku.com/)
* [Cloud9](https://aws.amazon.com/cloud9/?origin=c9io)

## License

#### [MIT](./LICENSE)




