*INFR3120 Assignment 3 -- RateMyFlix*
This is a CRUD Based web application for a movie rating site that was built using NodeJS, ExpressJS, MongoDB/Mongoose, and EJS. It was made keeping all rubric requirements in mind.

* Project Overview *
RateMyFlix allows users to rate the movies they've watched, see the date the they watched them, and make comments on what they liked/disliked about the movie. Users are able to read and create new ratings, edit their existing ratings and delete ratings they no longer need.

* Technologies Used *
- EJS  
- Bootstrap 5  
- dotenv for environment variables  
- NodeJS  
- ExpressJS  
- MongoDB Atlas  
- Mongoose  


*Features of the Project*

* CRUD Functionality*
- **Create:** Users can submit a new movie, entering the date the movie was watched, details, and rating.  
- **Read:** A public listing page displays all meal documents stored in MongoDB.  
- **Update:** Users can edit any previous ratings they made.
- **Delete:** Users can remove any movie, but will be prompted for confirmation.

* Shared EJS Partials*
A shared header and footer are included on all pages using EJS partials to maintain a consistent film themed layout throughout the site.

* Home Page *
A splash-style home page introduces the movie rating.

* Database Configuration *
MongoDB credentials are stored securely using `.env` and not committed to GitHub due to `.gitignore`.  
This meets the requirement of securing the username/password outside of `app.js`.

* Bootstrap & UI Design *
The application uses Bootstrap 5 for layout, styling, and custom elements for card and carousel implementation.

 Sites Used
Bootstrap:
Bootstrap Cards: https://getbootstrap.com/docs/4.0/components/card/
Bootstrap Carousel: https://getbootstrap.com/docs/4.0/components/carousel/
Font-Awesome:
font-awesome: Film:https://fontawesome.com/icons/film?f=classic&s=solid
Home: https://fontawesome.com/icons/house?f=classic&s=regular
Info: https://fontawesome.com/icons/info?f=classic&s=solid
Canva (image design)
- https://www.canva.com/s/templates?query=stars+background

Render & Git links:
Github: https://github.com/dalofarrington/Assignment-3
Render: https://assignment-3-l9vb.onrender.com
Project Plan: https://docs.google.com/document/d/1SIAgjj8eB8w_zRv0UASv4Sc8tsqCRVzgTneNI3yoouU/edit?usp=sharing
