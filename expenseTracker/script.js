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
            inc = JSON.parse(window.localStorage.getItem("users"))
            document.getElementById("").innerHTML = inc[i].income;
        }
        else{alert("Password/Username do not match")}
}
};

//  Adding Expenses

var expenses=[]
if(localStorage.getItem("expenses")){
    var expens = JSON.parse(localStorage.getItem('expenses'))}
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
        console.log(expenses)
    localStorage.setItem('expenses',JSON.stringify(expenses))
    // window.open("home.html");
    // var inc = document.getElementById("income").value
    // document.getElementById("incomeD").innerHTML = inc;
    
    myX = JSON.parse(window.localStorage.getItem('expenses'));
    // console.log(expense.date)
    for(let key in expenses) {
        console.log(key + ":", expenses[key]);
    document.getElementById("demo").innerHTML = myX[0].amount;}
    // tm = myX.date
    // console.log(myX)
}

function homeFunc(){
    myuser = JSON.parse(window.localStorage.getItem('users'));
    console.log(users.usrincome)
}


