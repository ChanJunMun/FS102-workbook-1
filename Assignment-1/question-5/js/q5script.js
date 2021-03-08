function calculations (value) {
    let halfNum = value / 2;
    console.log ("Half of " + value + " is equal to " + halfNum);

    let squareNum = value * value;
    console.log ("The square of " + value + " is equal to " + squareNum);

    let areaCirle = Math.PI * (value * value);
    console.log ("The area of circle with a radius of " + value + " is equal to " + areaCirle);

    let percentOf = (squareNum / areaCirle) * 100;
    console.log ("The percentage of the squared results against the area of circle is " + percentOf + "%");
}

calculations (5);