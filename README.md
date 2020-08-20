# wanderlust-client


<br>


## Description

Warderlust is an app to organize your trip, you can select recommended places, to eat, museums, and much more! and add it to your travel itinerary.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **index-logo** - As a user I want to be able to access to log in. 
- **sign up** - As a user I want to sign up on the web page.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account.
- **homepage** - As a user I want to see all the list of uncoming trips and those that I have already done.
- **result** - As a user I want to see the list of trips and filter by my preferences.
- **tripDetails** - As a user I want to see more details of my trips.
- **pendingTrips** - As a user I want to see the list of my pending trips, create a new trip, edit or delete them.
- **createTrip** - As a user I want to create a new trip.
- **editTrip** - As a user I want to edit or delete the trip.
- **Profile** - As a user I want to be able to see my profile.
- **edit user** - As a user I want to be able to edit my profile.
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.

<br>


## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders `Presentacion` view.               |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | { name, email, password }                                |
| `GET`      | `/profile`                         | Private route. Renders `profile` form view.                  |                                                          |
| `PUT`      | `/edit-profile/:id`                | Private route. Sends edit-profile info to server and updates user in DB. | { bio, city }                                |
| `GET`      | `/trips`                           | Private route. Render the `trips` view.                      |                                                          |
| `POST`     | `/trips/:id/completed`             | Renders `completedTrips` form view.                          |                                                          |
| `POST`     | `/trips`                           | Private route. Adds a new trip for the current user.         |  {travelCity, travelDate}                                |
| `GET`      | `/trips/:id`                       | Private route. Render a specific `trip` view.                |                                                          |
| `PUT`      | `/trips/:id`                       |  Private route. Sends edit-trip info to server and updates trip in DB.|  { travelCity, travelDate }                     |
| `DELETE`   | `/trips/:id`                       | Private route. Deletes the existing trip from the user.      |                                                          |
| `PUT`      | `/trips/:id/addThing/:idActivity`  | Private route. Adds a new activity to the current user.      |                                                          |
| `PUT`      | `/trips/:id/removeThing/:idActivity`| Private route. Remove an activity to the current user.      |                                                          |





<br>

## Models

User model

```javascript
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String },
    bio: { type: String },
    profileImage: { type: String },
    pendingTrips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Travels" }],
    completedTrips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Travels" }]

```
Travel model

```javascript
    travelCity: { type: String, required: true },
    travelDate: { type: String, required: true },
    idActivities: [{ type: String, required: true }],
    travelOrganizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" } 
```

    

<br>


### Backlog
- Geolocation - Google Maps API
- Create a trip with another user.
- Inbox Messages - Send/receive messages between users.
- Authentication with Gmail/ Facebook accounts.


<br>

### Links

[See the Trello board.]( https://trello.com/b/aNiG6dZ7/wanderlust )

<br>

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/natiloresilva/wanderlust-client)

[Server repository Link](https://github.com/natiloresilva/wanderlust-server)

<br>

### Slides

The url to your presentation slides
