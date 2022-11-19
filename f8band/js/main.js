function toggleBuyTicket()
{
    console.log("Buy ticket");
    var obj = document.getElementById("buyTicket");
    console.log(obj.style.display);
    if(obj.style.display == "none")
    {
        obj.style.display = "block";
    }
    else{
        obj.style.display = "none";
 
   }
}
function show()
{
    var obj = document.getElementById("buyTicket");
    obj.style.display = "block";
}