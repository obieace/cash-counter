/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Calc = document.getElementById("Calc");
var Clear = document.getElementById("Clear");

Calc.onclick = function()
{
    var hundred = (document.getElementById("hundred").value) * 100 ;
    var fifty = (document.getElementById("fifty").value) * 50;
    var twenty = (document.getElementById("twenty").value) * 20;
    var ten = (document.getElementById("ten").value) * 10;
    var five = (document.getElementById("five").value) * 5;
    
    var loonie = (document.getElementById("loonie").value) * 1;
    var quarter = (document.getElementById("quarter").value) * 0.25;
    var dime = (document.getElementById("dime").value) * 0.10;
    var nickle = (document.getElementById("nickle").value) * 0.05;
    var penny = (document.getElementById("penny").value) * 0.01;
    
    
    var sum = hundred + fifty + twenty + ten + five + loonie + quarter + dime + nickle + penny;
    
    totalmoney.innerHTML = "$ " + sum.toFixed(2);
};

Clear.onclick = function() {
    document.getElementById("hundred").value = " ";
    document.getElementById("fifty").value = " ";
    document.getElementById("twenty").value = " ";
    document.getElementById("ten").value = " ";
    document.getElementById("five").value = " ";
    document.getElementById("loonie").value = " ";
    document.getElementById("quarter").value = " ";
    document.getElementById("dime").value = " ";
    document.getElementById("nickle").value = " ";
    document.getElementById("penny").value = " ";
    totalmoney.innerHTML = " ";
};