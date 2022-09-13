//  Adding Expenses

var expenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem('expenses')) : []
// console.log(expenses)
function addRecord(){
    var date= document.getElementById("date").value;
    var description= document.getElementById("description").value;
    var category= document.getElementById("category").value;
    var amount=document.getElementById("amount").value;
    
        var expense={
            date:date,
            description: description,
            category:category,
            amount:amount
        }
        console.log(expense)
        console.log(expense.description)
    if(expense.amount != undefined  && expense.description != ""){
        expenses.push(expense)
        localStorage.setItem('expenses',JSON.stringify(expenses))
        window.location.replace('home.html');
    } else {
        // console.log('Please enter a data')
        alert('Please fill in the missing details')
    }
        
    // window.open("history.html");
    // myX = JSON.parse(window.localStorage.getItem('expenses'));
    // for(let key in myX) {
    //     console.log(key + ":", myX[key]);}
    
}