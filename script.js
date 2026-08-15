const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        }else {
            resolve(num1/num2)
        }
    });
};

//case 1
divideNumbers(10 , 2)
    .then((result) => {
        console.log("Dividing 10 by 2...");
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log(error);
    });

// case 2
divideNumbers(20 , 4)
    .then((result) => {
        console.log("Dividing 20 by 4...");
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log(error);
    });

// case 3
divideNumbers(15 , 3)
    .then((result) => {
        console.log("Dividing 15 by 3...");
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log(error);
    });

// case 4
divideNumbers(10 , 0)
    .then((result) => {
        console.log("Dividing 10 by 0...");
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log(error);
    });

// case 5
divideNumbers(100 , 5)
    .then((result) => {
        console.log("Dividing 100 by 5...");
        console.log("Result:", result);
    })
    .catch((error) => {
        console.log(error);
    });