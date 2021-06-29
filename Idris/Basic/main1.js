function ext() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;

    var result = document.getElementById('result');
    
    document.getElementById('display').innerHTML = `<span id="color">${firstName} ${lastName}</span> is ${age} years old!`;

    

    if(firstName.length > 5) {
        document.getElementById('color').style.color("green");
    } else {
        document.getElementById('color').style.color("red");
    }

}
