var users=[]
if(localStorage.getItem("users")){
    users = JSON.parse(localStorage.getItem('users'))}

console.log(users)
// functin to submit data from registration
function Submit(){
    var username= document.getElementById("lgnUserN").value;
    var emailr=document.getElementById("emailr").value;
    var usrincome=document.getElementById("income").value;
    var passwordr=document.getElementById("lgnPswd").value;
    var pass= document.getElementById("VPswd").value
    // checks if password entered matches the password reconfirmation
    if (passwordr===pass){
        var user={
            username:username,
            email2:emailr,
            income:usrincome,
            password2:passwordr
        }
        users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
    window.open("home.html");
    }
    else{alert("Password/Username do not match")}
   
};
// function for logging in
function Login(){
    var userName=document.getElementById("lgnUserN").value;
    var password=document.getElementById("lgnPswd").value;
    var logUser={
        email1:userName,
        password1:password
    }
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        if( (logUser.email1===users[i].username) && (logUser.password1===users[i].password2)) {
            window.open("home.html");
        }
        else{alert("Password/Username do not match")}
}
};

//  Adding Expenses

var expenses=[]
if(localStorage.getItem("expenses")){
    var expens = JSON.parse(localStorage.getItem('expenses'))}

// data += ` <td>${expens.date}</td>
// <td>${expens.description}</td>
// <td>${expens.category}</td>
// <td>${expens.amount}</td>`
// document.getElementById("demo").innerHTML = data;


// console.log(expenses)
// function to add expenses to local storage
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
        expenses.push(expense)
    localStorage.setItem('expenses',JSON.stringify(expenses))
    window.open("history.html");
}


