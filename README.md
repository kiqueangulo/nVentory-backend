# nVentory-Backend

The nVentory application was thought of by AJ Phoenix from working at a wine store which uses Shopify to manage inventory. The slow process of organizng the space availible inspired AJ to build a cleaner and easier system for tracking inventory. 

## Landing Page

![nVenotry](https://github.com/kiqueangulo/nVentory-backend/blob/Jay/images/nventory_home_page.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
npm install
```
# Our Database Layout to start

![Database](https://github.com/kiqueangulo/nVentory-backend/blob/main/images/Database.png)

# The technologies used to build the application
This is a PERN application. It uses Heroku and includes Heroku-postgres-database.  The backend also included the use of pgadmin and draw.io for tracing, creating and maintaining the database.

## Backend Built With

* [Heroku](https://dashboard.heroku.com/apps) - Deployment Method
* [Express](https://expressjs.com/) - Web Application Framework
* [PostgreSQL](https://www.postgresql.org/) - Realational Database Management System

## Contributing

[CONTRIBUTERS](https://github.com/kiqueangulo/nVentory-backend/graphs/contributors?from=2022-07-10&to=2022-07-27&type=a) include Collin Blank and Jay Brewer with reviews from Enrique Angulo and AJ Phoenix.

## Bugs/Unfinished Goals
- Wish we could have finished the at-home "proxy" creating a secure-key so random front end applications are not able to call our database and use it or mess it up with malicious intent. 
- Adding limit and offset to the application would definitely be needed for a large store inventory.  We had a decent amount at 200 pieces but a larger store would not want to load all products at once. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


