myX = JSON.parse(window.localStorage.getItem('expenses'));

for(let i = 0; i < myX.length; i++){
    document.getElementById('customers').innerHTML +=
    `
    <tr id="historyD">
    <td id="usrdate">${myX[i].date}</td>
    <td id="usrdes">${myX[i].description}</td>
    <td id="usrcat">${myX[i].category}</td>
    <td id="usrExp">R${myX[i].amount}</td>
    </tr>
    `
}
function totalExpense(){     
    var expen = JSON.parse(window.localStorage.getItem('expenses'));     
    // var inco = JSON.parse(localStorage.getItem('users')); 
    var totexp = 0;    
    var pExp = document.getElementById("pr");     
    // var pinc = document.getElementById("pinc")     
    var total = 0;     
    for (let i = 0; i < expenses.length; i++) {
        total= total + parseInt(expenses[i].amount);    
        // pExp.innerHTML = "R"+total;
        console.log(pExp);}
    
}
    