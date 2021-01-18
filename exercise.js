

// Ask the user to enter its age. If its age is at least 18 display "You are an adult". 
// If it's not the case display "You are not yet an adult".

function excercise1() {
    var age = document.getElementById("age");
    var str = 'age';
    var ageWithoutString = str.replace(/\D/g, "");
    if(age.value >0 ){
        if(age.value < 18){
            alert('You are not yet an adult');
        }else{
            alert('You are an adult');
        }
    }else
        alert('You should put you age please');
    
  }


//   Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

// Bonus: if min is greater than max, 
// display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

// Bonus 2: be polite in the error messages. (facultative)
  function excercise2() {

    alert('donee');
    
  }


//   Display all even numbers between 1 and 100.
// Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times.
//  The second one should use for and make a loop that will execute 50 times
  function excercise3() {

    alert('donee');
    
  }


//   Count from 1 to 100. For every even number display the result of their division by 2.
//    For every odd number display the result of their multiplication by 3.
  function excercise4() {

    alert('donee');
    
  }


//   Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. 
//   (This program should never end as long as the user didn't chose 42).
  function excercise5() {

    alert('donee');
    
  }

//   Make a program that ask the user to enter a number between 1 and 7.
//    Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
  function excercise6() {

    alert('donee');
    
  }

//   Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. 
//   At the end display the sum of all the numbers collected this way.

// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
  function excercise7() {

    alert('donee');
    
  }