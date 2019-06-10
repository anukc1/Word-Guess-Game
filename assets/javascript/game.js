var $ = function (id) {

    return document.getElementById(id)
}

//variables, array

var game = ["POOL", "BAHAMAS", "BEACH", "CUBA", "TOUR", "EUROPE","SINGAPOR", "TAN"]

var choice = Math.floor(Math.random()*4);

var answer = game[choice];

var myLength = answer.length;

var display =[myLength];

var win = myLength;

var letters = answer.split('');

var attemptsLeft= 10;

var output="";

var userLetter="";



var setup = function()

{
for (var i=0; i< myLength; i++)
    {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("showme").innerHTML = output;
    output ="";

}

var submit = function()
{

    output ="";
    userLetter=$("choice").value;
    $("choice").value ="";

    for (var c= 0; c< answer.length; c++)
    {

    
        if (userLetter.toUpperCase() == letters[c])
        {
            display[c] = userLetter.toUpperCase();
            win--;
        }
        output = output + display[c] + "";
    }
    
    document.getElementById("showme").innerHTML = output;
    output= "";
    attemptsLeft--;
    

    if (win < 1)
    {
        document.getElementById("turns").innerHTML ="you win!";
    }
    else if (attemptsLeft<1)
    {
        document.getElementById("turns").innerHTML = "You loose!";
    }
    else 
    {
        document.getElementById("turns").innerHTML = "You have " + attemptsLeft + "guesses left";
    }

}

window.onload =function()
{
    setup();
    $("submit").onclick = submit;
}
