$(document).ready(function(){
    setInterval(function(){
        $(".slide-wrapper").animate({"marginTop" : -817},400,function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-top",0)
        })
    },3000)
    
})