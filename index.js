var img1num= Math.floor((Math.random()*6)+1);//generate random num

var img1name="images/dice"+img1num+".png"; //select img 1 to 6

document.querySelector(".img1").setAttribute("src",img1name);

var img2num= Math.floor((Math.random()*6)+1);

var img2name="images/dice"+img2num+".png";

document.querySelector(".img2").setAttribute("src",img2name);

if(img1num>img2num)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!!";
}
else if(img1num<img2num)
{
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}