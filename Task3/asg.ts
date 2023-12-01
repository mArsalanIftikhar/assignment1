import promptSync from 'prompt-sync';
const prompt = promptSync();

let fruits: string[] = ["Apple", "Mango", "Banana", "Strawberry", "Orange"];     //initializing array

fruits.push("Grapes");      //Adding elements to the end of the array using the push method
console.log(`Last Fruit Removed = ` + fruits.pop());    //removing elements to the end of the array using the pop method
console.log(`Start Fruit Removed = ` + fruits.shift());     //removing elements to the start of the array using the shift method
fruits.unshift("Water Melon")   // Adding elements to the start of the array using the unshift method

console.log("\t\tRemaining Fruits");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);     //printing remaining fruits by using for loop
}


let original_Array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];     //initializing integer array with number 

let slice_Array: number[] = original_Array.slice(2, 8);     //adding slice array this will use index 2 to 8 from original array but dont change original array 
let splice_Array: number[] = original_Array.slice(3, 7);

console.log("Original Array:");
for (let i = 0; i < original_Array.length; i++) {       //here i am using .length its a best way because some time we dont know array length "initialize i value because array index start from 0" 
    console.log(original_Array[i]);     //printing original array
}

console.log("\nSlice Array:");
for (let i = 0; i < slice_Array.length; i++) {
    console.log(slice_Array[i]);        //printing slice array
}

console.log("\nSplice Array:");
for (let i = 0; i < splice_Array.length; i++) {
    console.log(splice_Array[i]);       //printing splice array
}
