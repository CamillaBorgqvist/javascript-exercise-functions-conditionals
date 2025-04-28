/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
    console.log(`The awesome coders for today is the driver ${driver} and the navigator ${navigator}`)
  }

  theCoders("Jennie", "Alfons");

  /*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */
  const coders = (driver, navigator) => {
    console.log(`The awesome coders for today is the driver ${driver} and the navigator ${navigator}`)
  }

  coders("Jennie");

  /*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */

  const compareName = (driver, navigator) => {

    if (driver.length === navigator.length){
      console.log("The driver and the navigator has equally long names")
    }
    else if (driver.length > navigator.length){
      console.log("The driver has the longest name")
    }
    else if (driver.length < navigator.length){
      console.log("The navigator has the longest name")
    }
  }
  compareName("Jan", "Janne");
  
  /*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */

  const checkUserAge = () => {

    let userInputAge = prompt ("Type your age to see if you can watch the movie.")

    if (userInputAge <= 15){
      alert("You're just a kid. Not this movie!")
    }
    else if (userInputAge > 15 && userInputAge <= 30 ){
      alert("Perfect age, you will like this movie!")
    }
    else if (userInputAge > 30){
      alert("You're a bit older but you can watch the movie aswell.")
    }
  }

  checkUserAge ()

    /*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */
    let firstNumber = 2;
    let secondNumber = 3;

    const calculationTest = () => {
      let userAnswer = Number(prompt (`What is ${firstNumber} + ${secondNumber}?`));

      let sum = firstNumber + secondNumber
      
      if (sum === userAnswer){
        console.log ("Yay, good job with the calculation!")
      }
      else if (sum !== userAnswer){
        console.log(`Sorry. The correct answer is ${sum}`)
      }
        
    }

  calculationTest ()
  
  /*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */
  