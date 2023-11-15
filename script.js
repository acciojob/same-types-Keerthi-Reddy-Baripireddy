function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }

    // Check if the types are the same
    return typeof value1 === typeof value2;
}

// Example usage
let value1 = prompt("Enter value 1:");
let value2 = prompt("Enter value 2:");
alert(isSameType(value1, value2));
