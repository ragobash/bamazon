var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',
    password: 'R1y9A9n0',
    database: 'bamazon'
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected")
    start ();
})

function start() {
    connection.query(
        "SELECT * FROM products", (err, results) => {
            if (err) throw err;
            inquirer
                .prompt([{
                        name: 'choices',
                        type: 'list',
                        choices: () => {
                            var choiceArr = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArr.push(results[i].product_name)
                            }
                            return choiceArr
                        },
                        message: "Which item would you like to buy?"
                    },
                    {
                        name: 'amount',
                        type: 'input',
                        message: 'How many would you like to buy?'
                    }
                ])
                .then((answer) => {
                    var chosenProduct;
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].product_name === answer.choices) {
                            chosenProduct = results[i];
                        }
                    }
                    if (chosenProduct.stock_quantity > parseInt(answer.amount)) {
                        connection.query(
                            "UPDATE products SET ? WHERE ?", [{
                                    stock_quantity: chosenProduct.stock_quantity - answer.amount
                                },
                                {
                                    item_id: chosenProduct.item_id
                                }
                            ],
                            (err) => {
                                if (err) throw err;
                                console.log('Your order has been placed!')
                                shopAgain();
                            }
                        );
                    }
                });
        });
}

function startShopping() {
    console.log('Here are the current items available:')
    query = connection.query(
        "SELECT * FROM products",
        (err, res) => {
            if (err) throw err;
            for (var i = 0; i < res.length; i++){
                console.log(`Id: ${res[i].item_id}: Name: ${res[i].product_name}: Dep: ${res[i].department_name}: Price: ${res[i].price}: In Stock: ${res[i].stock_quantity}:`)
            }
            start();
        }
    )
};
var shopAgain = () => {
    inquirer
        .prompt([{
            type: 'confirm',
            name: 'shop',
            message: "Would you like to start shopping?"
        }]).then((answer) => {
            if (answer.shop === true) {
                startShopping();
            } else {
                console.log('Thank you! Have a good day!');
                connection.end();
            }
        })
}