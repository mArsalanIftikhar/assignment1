import promptSync from "prompt-sync";

const prompt = promptSync();

var fruits: string, vegetables: string, grocery: string;
let dozen: number,
  bill: number,
  aft_dis_bill: number,
  discount: number,
  payment_method: number,
  Credit_Card: number = 1,
  Dedit_Card: number = 2,
  Cash: number = 3,
  Mobile_Wallet: number = 4;
let userChoice = prompt(`What Do You Want?
Fruits 
Vegetables
Press F for Fruits 
Press V for Vegetables \n`);
//fruit boundry starting
if (userChoice == "F" || userChoice == "f") {
  fruits = prompt(`
-----------------------------------------------------------------------
| Fruit           | Description                | Price (per unit/KG) |
-----------------------------------------------------------------------
| Apple           | Crisp and sweet            | 200           |
-----------------------------------------------------------------------
| Banana          | Creamy and rich            | 150           |
-----------------------------------------------------------------------
| Orange          | Bursting with citrus       | 170           |
-----------------------------------------------------------------------
| Grapes          | Sweet and juicy            | 350           |
-----------------------------------------------------------------------
| Pineapple       | Juicy and tropical         | 250           |
-----------------------------------------------------------------------\n
    Press A for Apple 
    Press B for Banana 
    Press O for Orange 
    Press G for Grapes 
    Press P for Pineapple \n`);
  if (fruits == "A" || fruits == "a") {
    let apple_price = 200; //initialize apple price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * apple_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
      //2
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * apple_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
      //1
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * apple_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
      //0.5
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * apple_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending apple boundry

  //starting banana boundry
  else if (fruits == "B" || fruits == "b") {
    let banana_price = 150; //initialize banana price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * banana_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * banana_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * banana_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * banana_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending banana boundry

  //starting orange boundry
  else if (fruits == "O" || fruits == "o") {
    let orange_price = 170; //initialize orange price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * orange_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * orange_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * orange_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * orange_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending orange boundry

  //starting grapes boundry
  else if (fruits == "G" || fruits == "g") {
    let grapes_price = 350; //initialize grapes price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * grapes_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
            Press 1 For Credit Card
            Press 2 For Debit Card 
            Press 3 For Cash 
            Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * grapes_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
            Press 1 For Credit Card
            Press 2 For Debit Card 
            Press 3 For Cash 
            Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * grapes_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
            Press 1 For Credit Card
            Press 2 For Debit Card 
            Press 3 For Cash 
            Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * grapes_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
            Press 1 For Credit Card
            Press 2 For Debit Card 
            Press 3 For Cash 
            Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending grapes boundry

  //starting pineapple boundry
  else if (fruits == "P" || fruits == "p") {
    let pine_price = 250; //initialize pineapple price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * pine_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * pine_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * pine_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * pine_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending pineapple boundry
  //fruit boundry ending
  else {
    console.log("Invalid Entry Try Again");
  }
}

//starting vegetable boundry
else if (userChoice == "V" || userChoice == "v") {
  fruits = prompt(`
    -----------------------------------------------------------------------
    | Vegetable       | Description                | Price (per unit/KG) |
    -----------------------------------------------------------------------
    | Tomato          | Globular or Ovoid          | 200           |
    -----------------------------------------------------------------------
    | Broccoli        | Flower Heads               | 150           |
    -----------------------------------------------------------------------
    | Carrot          | Biennial                   | 58            |
    -----------------------------------------------------------------------
    | Spinach         | Spinacia Oleracea          | 70            |
    -----------------------------------------------------------------------\n
        Press T for Tomato 
        Press B for Broccoli 
        Press C for Carrot 
        Press S for Spinach \n`);
  //starting tomato boundry
  if (fruits == "T" || fruits == "t") {
    let tomato_price = 200; //initialize tomato price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * tomato_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
      //2
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * tomato_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
      //1
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * tomato_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
      //0.5
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * tomato_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending tomato boundry

  //starting broccoli boundry
  else if (fruits == "B" || fruits == "b") {
    let broccoli_price = 150; //initialize broccoli price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * broccoli_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * broccoli_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * broccoli_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * broccoli_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending broccoli boundry

  //starting carrot boundry
  else if (fruits == "C" || fruits == "c") {
    let carrot_price = 58; //initialize carrot price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * carrot_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * carrot_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * carrot_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * carrot_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                    Press 1 For Credit Card
                    Press 2 For Debit Card 
                    Press 3 For Cash 
                    Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending carrot boundry

  //starting spinach boundry
  else if (fruits == "s" || fruits == "S") {
    let spinach_price = 70; //initialize spinach price
    dozen = parseFloat(prompt(`How Many Dozen You Want To Purchase\n`)); //asking dozen from user
    if (dozen >= 4) {
      //comparing condition
      bill = dozen * spinach_price; //making bill
      console.log(`Total Bill ${bill}`); //displaying bill
      discount = (bill * 2) / 100; //finding discount
      console.log(`Discount ${discount}`); //displaying discount
      aft_dis_bill = bill - discount; //finding amount after discount
      console.log(`Discounted Bill ${aft_dis_bill}`); //displaying amount after discount
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 3 && dozen < 4) {
      bill = dozen * spinach_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 1) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 2 && dozen < 3) {
      bill = dozen * spinach_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0.5) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else if (dozen >= 0 && dozen < 2) {
      bill = dozen * spinach_price;
      console.log(`Total Bill ${bill}`);
      discount = (bill * 0) / 100;
      console.log(`Discount ${discount}`);
      aft_dis_bill = bill - discount;
      console.log(`Discounted Bill ${aft_dis_bill}`);
      for (let i = 1; i <= 3; i++) {
        payment_method = parseInt(
          prompt(`Choose Your Preferred Payment Method:
                Press 1 For Credit Card
                Press 2 For Debit Card 
                Press 3 For Cash 
                Press 4 For Mobile Wallet\n`)
        );
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          if (payment_method == 1) {
            console.log(
              `Thank you! You Have Selected Credit Card For Your Payment.`
            );
          } else if (payment_method == 2) {
            console.log(
              `Thank you! You Have Selected Debit Card For Your Payment.`
            );
          } else if (payment_method == 3) {
            console.log(`Thank you! You Have Selected Cash For Your Payment.`);
          } else if (payment_method == 4) {
            console.log(
              `Thank you! You Have Selected Mobile Wallet For Your Payment.`
            );
          } else {
            console.log("Invalid Payment Method Selected");
          }
        } else {
          console.log("Invalid Payment Method Selected");
        }
        if (
          payment_method == 1 ||
          payment_method == 2 ||
          payment_method == 3 ||
          payment_method == 4
        ) {
          break;
        } else {
          i++;
        }
      }
    } else {
      console.log("Please Enter Dozen You Want To Purchase");
    }
  } //ending spinach boundry
} else {
  console.log("Invalid Entry Try Again");
}
