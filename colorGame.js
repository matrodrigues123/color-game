//Load the audio file
var winSound = new Audio('winSound.mp3');


//Interaction bar
var actions = document.querySelectorAll(".state");
actions[0].addEventListener("mouseover",function()
{
    actions[0].classList.add("gameActionsHover");
});
actions[0].addEventListener("mouseout",function()
{
    actions[0].classList.remove("gameActionsHover");
});
actions[0].addEventListener("click",function()
{
    location.reload();
});


//Function that generates random colors
function randomRGB()
{
    var r = Math.floor(Math.random()*256).toString();
    var g = Math.floor(Math.random()*256).toString();
    var b = Math.floor(Math.random()*256).toString();

    return `rgb(${r}, ${g}, ${b})`;
}

//Apply random colors to every button
var buttons = document.querySelectorAll("button")
for (var i = 0;i < buttons.length;i++)
{
    buttons[i].style.backgroundColor = randomRGB ();
}

//Set one of the random colors as answer
var answerColor = buttons[Math.floor(Math.random()*buttons.length)].style.backgroundColor;
document.querySelector("#rgbDisplay").textContent = answerColor;

//Check if the answer is correct(Had to use let, dont know why.Something to do with function scopes)
for (let j = 0;j < buttons.length;j++)
{
    buttons[j].addEventListener("click",function()
    {
        if (buttons[j].style.backgroundColor == answerColor)
        {
           buttons.forEach(function(item)
           {
               item.style.backgroundColor = answerColor;
           })

           document.querySelector(".jumbotron-fluid").style.backgroundColor = answerColor;

           actions[0].textContent = "PLAY AGAIN?";
           actions[1].textContent = "CORRECT!";
           
           winSound.play();

        }
        else
        {
            buttons[j].style.backgroundColor = "#232323";
            actions[1].textContent = "TRY AGAIN";
        }
    })
}





