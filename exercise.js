

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

    var min = document.getElementById("min");
    var max = document.getElementById("max");
    var current = document.getElementById("current");
    var strMin = 'min';
    var strMax = 'max';
    var strCurrent = 'current';
    var minWithoutString = strMin.replace(/\D/g, "");
    var maxWithoutString = strMax.replace(/\D/g, "");
    var CurrentWithoutString = strCurrent.replace(/\D/g, "");
    alert(current.value);
    if(min.value != minWithoutString || max.value != maxWithoutString || current.value != currentWithoutString){
        if(min.value > max.value || min.value > current.value){
            alert('Sorry, min is greater than current or max try again');
            
        } 
        if(current.value > max.value || current.value < min.values){
            alert('your current value is not correct, try again');
            
        }
        if(min.value < max.value && current.value > min.value && current.value < max.value){
            alert('Perfect');
        }
    }else {
        alert('Sorry, you must input some number only');
    }  
  }


//   Display all even numbers between 1 and 100.
// Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times.
//  The second one should use for and make a loop that will execute 50 times
  function excercise3() {

    var count = 100;
    var start = 1
    for(var i = start; i <= count; i++){
        if(i % 2 == 0){
            alert(i + " ");
        }    
    }
  
  }


//   Count from 1 to 100. For every even number display the result of their division by 2.
//    For every odd number display the result of their multiplication by 3.
  function excercise4() {

    var count = 100;
    var start = 1
    var countResultBy2 = 0;
    var countResultBy3 = 0;
    for(var i = start; i <= count; i++){
        if(i % 2 == 0){
            countResultBy2 += i /2;
            alert( countResultBy2);
        } else{
            countResultBy3 += i *3;
            alert( countResultBy3);
        }      
    }
    
  }


//   Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. 
//   (This program should never end as long as the user didn't chose 42).
  function excercise5() {
     var number;
    var choosedNumber = document.getElementById("number").value;
    if(choosedNumber == 42){   
        alert('WOW you got it on the first time');
    }else{
        while(choosedNumber != 42){
            var luckOK = prompt("Please guess my luck number");
            if(luckOK == 42){
                alert('WOW you got it');
                choosedNumber = luckOK;
            }  
        }
    }
     
    
  }

//   Make a program that ask the user to enter a number between 1 and 7.
//    Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
  function excercise6() {

    var choosedNumber = document.getElementById("numberWeek").value;
    var dayOfWeek = ['null','monday','tuesday','wednesday','thrusday','friday','saturday','sunday'];
    var i ;
    if(choosedNumber < 1 || choosedNumber > 7 ){   
        alert('Sorry this is not a good number, please put between 1 and 7.');
    }else{
        
        for (i = 0; i < dayOfWeek.length; i++) {
            if(dayOfWeek[choosedNumber] == dayOfWeek[i]){
                alert('today is: '+ dayOfWeek[i]);
                break;
            }
          }
    }
    
    
  }

//   Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. 
//   At the end display the sum of all the numbers collected this way.

// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
  function excercise7() {

    alert('donee');
    
  }