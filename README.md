# bamazon

ABOUT THE APP:

Bamazon is a customer-friendly portal, where the user has the ability to choose a product in the inventory and make a purchase with a specific quantity. However, the if the store doesn't have enough quantity to meet the user's order, the purchase will not be processed. 

REQUIRED TECH:

SOFTWARE:

MYSQL - To utilize a database to hold the inventory of products for the store.

NPM PACKAGES:

 - MYSQL (https://www.npmjs.com/package/mysql)
 - Inquirer (https://www.npmjs.com/package/inquirer)
 - CLI-TABLE3 (https://www.npmjs.com/package/cli-table3)

HOW THE APP FUNCTIONS:


1) The terminal will first present you with the option to proceed or not with a purchase:

![image 1](https://github.com/florentinob/bamazon/blob/master/Images/Bamazon%20First%20Prompt.png)
![image 2](https://github.com/florentinob/bamazon/blob/master/Images/OPT%20Out%20Option.png)


2) If yes, you will then proceed to the next set of questions. The terminal will ask if you would like to make a purchase and the quantity. If the user quantity is less than than the inventory quantity, then the purchase will go through. Otherwise, if great in quantity, the terminal will address this and cancel the purchase. Finally, if the purchase is successful, then the quantity of the item purchased, will change in the store inventory. The user will then be prompt to the beginning if they wish to make another purchase:

![image 4](https://github.com/florentinob/bamazon/blob/master/Images/Not%20Enough%20Stock%20Scenario%20.png)
![image 3](https://github.com/florentinob/bamazon/blob/master/Images/Purchase%20Operation.png)


OTHER RELEVANT INFO:


MYSQL was required to make a database for the store, which is reflected on the terminal. Here is a snippet of the DB:

![image 5](https://github.com/florentinob/bamazon/blob/master/Images/Bamazon%20DB%20MYSQL.png)
![image 7](https://github.com/florentinob/bamazon/blob/master/Images/Product%20Inventory.png)
![image 8](https://github.com/florentinob/bamazon/blob/master/Images/Product%20Inventory%20Continued.png)

In order for VS Code and MYSQL to work together, they needed to be connected through a local host, with proper permissions:

![image 6](https://github.com/florentinob/bamazon/blob/master/Images/Connecting%20DB%20.png)


