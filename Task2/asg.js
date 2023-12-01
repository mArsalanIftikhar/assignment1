import promptSync from 'prompt-sync';
const prompt = promptSync();
// Function definition
/* function add(x: number, y: number): number {
    return x + y;
}

// Function call
const result: number = add(5, 10);

// Display the result
console.log("Result:", result); */
/* function checkEvenOrOdd(number: number): string {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
const result: string = checkEvenOrOdd(7);
console.log("Number is:", result);  */
/* function calculateArea(width: number, height: number): number {
    return width * height;
}
const result: number = calculateArea(4, 3);
console.log("Area of Rectangle = ", result); */
/* function reverseString(str: string): string {
    // Split the string into an array of characters
    const characters: string[] = str.split("");

    // Reverse the array of characters
    const reversedCharacters: string[] = characters.reverse();

    // Join the reversed characters back into a string
    const reversedString: string = reversedCharacters.join("");

    return reversedString;
}

const originalString: string = "We Live In Pakistan";
const reversedString: string = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString); */
/* function convertCelsiusToFahrenheit(celsius: number): number {
    const fahrenheit: number = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const celsiusTemperature: number = 20;
const fahrenheitTemperature: number = convertCelsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

 */
function convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5);
    return fahrenheit;
}
const temperatureCelsius = 20;
const fahrenheitTemperature = convertCelsiusToFahrenheit(temperatureCelsius);
console.log(fahrenheitTemperature);
