
function calculatePoints(speed) {
    const overalSpeed = 70;
    const killometersPerPoint = 5;
    const pointsMaximum = 12;

    if (speed < overalSpeed) {
        console.log(`Your Speed is: ${speed} km/h - Ok`);
    } else {
        const demeritPoints = Math.floor((speed - overalSpeed) / killometersPerPoint);
        if (demeritPoints > pointsMaximum) {
            //string interpolation to show speed in km/hr
            console.log(`Your Speed is: ${speed} km - License suspended`);
            //what happens if you exeed the speed
        } else {
            console.log(`Your Speed is: ${speed} km- Points: ${demeritPoints}`);
        }
    }
}

//we call the function 
calculatePoints(100); // the output 
calculatePoints(45); 
calculatePoints(20); 