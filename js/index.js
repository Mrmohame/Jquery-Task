

$(".singerButton").on("click", function (e){
    $(e.target).next().slideToggle(500)
$(e.target).parent().siblings().children("p").slideUp(500)
 
})

function closeSideBar(){
    $(".sidebar1").animate({width:"toggle"},1000)
    if($(".sidebar1").css("width")!="0px"){
        $(".open").animate({left:"0px"},1000)
    }else if($(".sidebar1").css("width")>="0px"){
        $(".open").animate({left:x},1000)
    }
}
console.log($(".sidebar").css("left"));

$(".open").on("click", function (e){
let x=$(".sidebar1").css("width")
    
    $(".sidebar1").animate({width:"toggle"},1000)


    if($(".sidebar1").css("width")!="0px"){
        $(".open").animate({left:"0px"},1000)
    }else if($(".sidebar1").css("width")>="0px"){
        $(".open").animate({left:x},1000)
    }




})

let x=document.querySelectorAll(".linkCall")

for (var i = 0;i<x.length;i++){
$(x[i]).on("click", function (e){
let linkInvok=$(e.target).attr("data-call")
let linkCalled=$(`#${linkInvok}`).offset().top

    $("html,body").animate({scrollTop:`${linkCalled}`},2000)


    
})


  
    
}


$(".close").on("click", function (e){
closeSideBar()
})



let y=Number($(".number").text())
$(".textArea").on("input", function(){
let x=$(".textArea").val().length

   $('.number').text(y-x)
   
})


let date1=new Date("Aug 16, 2025 20:50:30").getTime()
let datCount=setInterval(function(){
    let date2=new Date().getTime()

    let dateDiff=date1 - date2
    let days=Math.floor(dateDiff/1000/60/60/24)
    let hours=Math.floor(dateDiff%(1000*60*60*24)/1000/60/60)
    let minutes=Math.floor(dateDiff%(1000*60*60)/1000/60)
    let seconds=Math.floor(dateDiff%(1000*60)/1000)

$(".days").text(days < 10 ?`0${days}`:days)
$(".hours").text(hours < 10 ?`0${hours}`:hours)
$(".minutes").text(minutes < 10 ?`0${minutes}`:minutes)
$(".seconds").text(seconds < 10 ?`0${seconds}`:seconds)  
},1000)
if(new Date().getTime() == date1){
    $("#Duration .row").text("The Event Come !")
}


$(".relod").on("click", function () {

    window.location.href="index.html"
})