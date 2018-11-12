/*ATM*/
/*function atmPin(){
    let cname=  prompt("what is your name?");
    alert ("Welcome " + cname);
  let cpin= prompt("please input your pin")
  alert("pin correct");
  let creply=prompt("would you like to make a deposit?")
      if (creply ==="yes"){
          atmDeposit();
      }else {
          return alert("Try another Transaction");
      }
  
  
  }
  
  function atm(){
  
      let balance = 2000;
      let amount =document.getElementById("amount").value;
          if(amount >= balance){
          alert('Insufficient Funds');
          return false;
      }
      balance = balance - amount;
      alert('Transaction Approved!');
      alert('your new balance is $ '+ balance );
      
  };
  function atmm(){
      let balance = 2000;
      alert(" your available balance is $ " + balance);
  };
  function atmDeposit(){
      let balance = 2000;
     let customer=prompt("how much do you want to deposit?")
     alert("you are making a deposit of " + customer)
     alert("Transaction Successful! Thank you for banking with us");
     alert("your new balance is " + (parseInt(customer) + parseInt(balance)));
  }
  */

/* var balance = 100.0; //set initial balance.
 function get_balance() {
     alert('Your current balance is: '+balance);
     atm();
 }
 function make_deposit() {
     var deposit = parseFloat(prompt('How much would you like to deposit?'));
     if (isNaN(deposit) || deposit === '') {
         alert('Error: please enter a number!');
         make_deposit();
     } else {
         balance += deposit;
         get_balance();
     }
 }
 function make_withdrawal() {
     var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
     if (isNaN(withdrawal) || withdrawal === '') {
         alert('Error: please enter a number!');
         make_withdrawal();
     } else {
         balance -= withdrawal;
         get_balance();
     }
 }
 function error() {
     alert('Error: accepted numbers are 1 through 4.');
     atm();
 }
 function exit() {
     var confirm_leave = confirm('You have selected exit.');
     if (confirm_leave) {
         window.close();
     } else {
         atm();
     }
 }
 function atm() {
     var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
     if (choice === 1) {
         get_balance();
     } else if (choice === 2) {
         make_deposit();
     } else if (choice === 3) {
         make_withdrawal();
     } else if (choice === 4) {
         exit();
     } else {
         error();
     }
 }
 atm();
 */


///////////////////////////////////////////////////////////////////////////////////
let pin = prompt("INPUT YOUR FOUR(4)DIGIT PIN")
if (pin === "1234") {
    alert("WELCOME, KINDLY CHOOSE A TRANSACTION BELOW");
} else {
    alert("incorrect pin")
    exit()

}

//WITHDRAWAL//
//////////////for savings////////////////
function savings() {
    let balance = 2000;
    let amount = prompt("how much do you want to withdraw?")
    if (amount >= balance) {
        alert('Insufficient Funds');
        return false;
    }
    balance = balance - amount;
    alert('Transaction Approved!');
    alert('your new balance is $ ' + balance);
}
//////////////for current////////////////
function current() {
    let balance = 2000;
    let amount = prompt("how much do you want to withdraw?")
    if (amount >= balance) {
        alert('Insufficient Funds');
        return false;
    }
    balance = balance - amount;
    alert('Transaction Approved!');
    alert('your new balance is $ ' + balance);
}

///////////////////////
function atm() {

    let balance = 2000;
    let freply = prompt("SAVINGS || CURRENT")
    if (freply === "savings") {
        savings()

    } else if (freply === "current") {
        current()
    } else {
        return atm()
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////INQUIRY//

function atmm() {
    let balance = 2000;
    alert(" your available balance is $ " + balance);
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////DEPOSIT////
function deposit(){
    let balance = 2000;
    let customer=prompt("How much do you want to deposit?")
    alert("You are making a deposit of " + customer)
    alert("Transaction Successful! Thank you for banking with us");
    alert("Your new balance is " + (parseInt(customer) + parseInt(balance)));
 }
//////////////////////////////////////////////////////////////////////////////
/////RECHARGE////
function recharge(){
    
}









/////////////////////////////////////////////////////////////////
////EXIT////
function exit() {
    let confirm_leave = confirm('click Ok to try again.|| click cancel to end transaction');
    if (confirm_leave) {
        let confirm_leave = prompt("INPUT YOUR FOUR(4)DIGIT PIN")
        if (confirm_leave === "1234") {
            alert("WELCOME, KINDLY CHOOSE A TRANSACTION BELOW");
        } else
            alert("incorrect pin!! your card is blocked!! kindly visit any of our branch")
        window.close();

    } else {
        window.close()
    }
}