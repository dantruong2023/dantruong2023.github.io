const debug = false;

function show()
{
    var obj = document.getElementById("buyTicket");
    obj.style.display = "block";
    if(debug) console.log("show click");
}
function toggleBuyTicket()
{
        var obj = document.getElementById("buyTicket");
    if(obj.style.display == "none")
    {
        obj.style.display = "block";
    }
    else{
        obj.style.display = "none";
 
   }
}
function hide()
{
    var obj = document.getElementById("buyTicket");
    obj.style.display = "none";
    if(debug) console.log("hide click");
}
function addevent()
{
    listBtn = document.querySelectorAll(".place-btn-buy");
    for(const btn of listBtn)
    {
        btn.addEventListener('click',show);
    }
    const model = document.querySelector("#buyTicket")
    model.addEventListener('click',hide);
    const model_container = document.querySelector('.formBuyTicket')
    model_container.addEventListener('click',function(e){
        e.stopPropagation()
    })
}

