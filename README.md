# REACT-project
# hotelooking App
![App Homepage](screenshots/app_homepage.png)

## Description
This is a hotel reservation application which is for its exclusive members. It allows you to search among some great hotels options all around the world and select your hotel whereever and whenever you want. 
[full description will be added later]

## Demo

Online deployment of this project is available here: "I'll add the demo link here after I finished the project. "


## The project structure

```text
hotelooking
└── backend
    └── api
       └── controllers
          └── hotelController.js
          └── roomController.js
       └── models
          └── Hotel.js
          └── Room.js
       └── routes
          └── hotels.js
          └── rooms.js
       └── utils
          └── error.js
    └── node_modules
    |__ index.js
        
    
└── client
    └── public
       └── index.html
    └── src
       └── components
           └── count
               └── count.jsx
           └── featured_cities
               └── FeaturedCities.jsx
               └── featuredCities.css
           └── footer
               └── Footer.jsx
               └── footer.css
           └── header
               └── Header.jsx
               └── header.css
           └── navbar
               └── Navbar.jsx
               └── navbar.css
           └── propertyList
               └── propertyList.jsx
               └── propertyList.css
               └── hotelImages.js
           └── reserve
               └── Reserve.jsx
               └── reserve.css
           └── search_item
               └── SearchItem.jsx
               └── searchItem.css
           
       └── context
           └── SearchContext.js
       └── hooks  
           └── useFetch.js
       └── pages
          └── home
              └── Home.jsx
              └── home.css
          └── hotel
              └── SingleHotel.jsx
              └── singleHotel.css
          └── hotelList
              └── HotelList.jsx
              └── hotelList.css
          └── login
              └── Login.jsx
              └── login.css.jsx
              
    └── App.js
    └── index.js
        



```
## Setup

I'm thinking to add setup info..

 

## MUST-HAVE
1. Create the project structure
2. Create a search bar according to place, date and number of persons.
3. Create a navbar at the top.
4. Create a home page. 
5. Create a search result page.
6. Create a single hotel description page
7. Add the ability to calculate the price and display the sum.
8. Create your own backend. 
9. Use mongodb as your database and fetch the data from there.
10. Prepare the repository

## NICE-TO-HAVE
- a new page for register and login. 
- add a sidebar for searching in order to change the search preferences in the result page.
- unable to reselect the same hotel on the same date during the selection process.
- add a feature to the single hotel room page to see the room pictures like a gallery.
