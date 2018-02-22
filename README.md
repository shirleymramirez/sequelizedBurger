# sequelizedBurger

## Description:
- A burger logger with MySQL, Node, Express, Handlebars and sequelize, which is a fully functional ORM.
- Same as my burger app with the addition of the following features:

  - Removed all references with vanilla MySQL queries and replaced them with Sequelize queries.
  - Removed old ORM files and replaced those references with Sequelize's ORM methods.
  - Added in a Customer association to the project. This will involve creating at least one new Customer model and connecting it with Burger model.

### Added validations where:

1. A burger's name cannot be null
2. A burger's devoured status is false by default
3. A Customer's name cannot be null

Order the Burgers you send back to the user in alphabetical order using the Sequelize "order" option.

Heroku Link:
 https://morning-falls-11723.herokuapp.com/ 


Sample screenshots of sequelizedBurger App:
![screen shot 2018-02-22 at 4 29 53 pm](https://user-images.githubusercontent.com/31137669/36570106-bfc590be-17ed-11e8-8d0d-c3ecdbbc232a.png)

### Copyright 2018 Shirley Ramirez
