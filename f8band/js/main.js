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
var height = document.querySelector('#header').clientHeight
function menu_click(){
    if(document.querySelector('#header').clientHeight == height){
        document.querySelector('#header').style.height = 'auto';
    }
    else{
        document.querySelector('#header').style.height = '46px';
    }
}
document.querySelector('.mobile-menu-btn').onclick = menu_click
document.querySelectorAll('#nav li a').forEach((item)=>{
    item.onclick = function(e){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav")
        if(isParentMenu){
            e.preventDefault()
            return
        }else
        document.querySelector('#header').style.height = height+'px';
    }
})
var arr = ['chicago.jpg','la.jpg','ny.jpg']
var content = ['Chicago|Thank you, Chicago - A night we won\'t forget.','Los Angeles|We had the best time playing at Venice Beach!','New York|The atmosphere in New York is lorem ipsum.']
var idx = 1
setInterval(function(){
    var slider = document.querySelector('#slider')
    document.querySelector('.text-content .text-heading').innerText = content[idx].split('|')[0]
    document.querySelector('.text-content .text-body').innerText = content[idx].split('|')[1]
    slider.style.background = `url('./assets/img/${arr[idx++]}')  top / cover no-repeat`
    if(idx==3){
        idx = 0
    }
},5000)