# Project Name

SMART-T


## Description

It is the best way to get around the city, it helps you to choose the different tickets of public transport. Configure your Smar-t on your mobile, travel without worrying about fares and save money.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that it is not my fault.
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Configure your Profile** As a user I can create my profile
-  **Configure your ticket** As a user I can configure my ticket with de best offers
-  **Select your fare** As a user I can discover the best fare in 3 steps(Set transport use, zones, type of passenger)or Set manually your ticket
-  **Best fares for you** As a user I can select my recommended fare
-  **Choose pay metod** As a user I can pay with 3 platforms(Credit Card, Bank Account and Paypal)
-  **Payment Screen** As a user I can confirm the purchase
-  **See My Smar-t** As a user I can see and use my differents Tickets
-  **My purchases log** As a user I can see my Log with all trips spent by ticket
-  **Map with filters by transport category** As a user I can choose the transport category and see her own lines or stops
-  **Select the Stop to begin the route** As a user I can see the stops by line and select the stop destination to see the route.

## Backlog

Add more differents transport tickets.

Geo Location:
- Add geolocation.
  
Add API's:
- Connect with Bicing, Bus, Ferro, Tram, Parkings, Renfe and show the stops and routes information on MapBox.
  
Routes:
- Calculate routes.
  
Update profile:
- Change image profile.
- Update your data.



# Client

## Pages

## Routes

| URL | Public | Funcionality |
|--------|------|-------------|
| `/home` | true | renders the homepage   |
| `/login` | true | renders login form and redirects to /signup if user don't have account |
| `/signup` | true | renders signup form and redirects to /:userid if user logged in |
| `/logout` | false | logout |
| `/:userid` | false |renders the userpage |
| `/:userid/log` | false | render the log page and select by day, month or year log |
| `/:userid/tkconfig` | false | render the configuration page and enter your tickets especifications |
| `/:userid/tkconfig/pay` | false | render the payment page and enter your payment information and purchase |
| `/:userid/profile` | false | render the user profile page and update your profile page |


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous


# Server

## Models

User model

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastName: { type: String },
  email: { type: String },
  myTickets: [{type: ObjectId, ref: 'Ticket'}],
     
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

Ticket Model

```
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ticketSchema = new Schema({
    
    tkName: { type: String},
    tkCategory: { type: String },
    tkZones: Number,
    tkDuration: Number,
    description: String,
    tkPrice: Number,
    userID: {
        type: ObjectId,
        ref: 'User',
    },
    
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
```

Log Model

```
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const logSchema = new Schema({
    
    Date: Number,
    Trip: Number,
    tkPrice: Number,
    TicketID: {
        type: ObjectId,
        ref: 'Ticket',
    },
    
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
```



## API routes:


### auth
| Method | Route | Functionality |
|---|---|---|
| GET | api/me |Check session status|
| POST | api/signup |Log in user to app and set user to session (Body: username, password)|
| POST | api/login |Register user to app and set user to session (Body: username, password)|
| POST | api/logout |Log out user from app and remove session|
| GET | api/:userid/tkconfig | Render the configuration form |
| POST | api/:userid/tkconfig | Configure your ticket |
| GET | api/:userid/tkconfig/pay | Render the payment form |
| POST | api/:userid/tkconfig/pay | Configure your purchase |
| GET | api/:userid/log | Render the log of your trips by ticket |
| POST | api/:userid/log | Select by day, week or month  |
| GET | api/:userid/profile | Render the user profile |
| POST | api/:userid/profile | Update user information |



## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/kHDEnnDt/map)

### Git

The URL to your repository and to your deployed project

[Client repository Link](https://github.com/Nessiec86/MapFrontEnd)

[Server repository Link](https://github.com/Nessiec86/MapBackEnd)

[Deploy Link Backend](https://smar-t.herokuapp.com/)

[Deploy Link Frontend](https://smar-t.firebaseapp.com/)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)

### Wire-Frames InVision

https://projects.invisionapp.com/share/9KGOMY7384Q
