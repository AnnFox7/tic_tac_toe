var values = [];

$(document).ready(function(){


    $('.field').eq(0).css('top','230px').css('left','400px');
    $('.field').eq(1).css('top','230px').css('left','550px');
    $('.field').eq(2).css('top','230px').css('left','700px');
    $('.field').eq(3).css('top','380px').css('left','400px');
    $('.field').eq(4).css('top','380px').css('left','550px');
    $('.field').eq(5).css('top','380px').css('left','700px');
    $('.field').eq(6).css('top','530px').css('left','400px');
    $('.field').eq(7).css('top','530px').css('left','550px');
    $('.field').eq(8).css('top','530px').css('left','700px');

});


function MyChoice(){
    var i = Math.floor(Math.random()*9);

    while (values[i] != 2){
        i = Math.floor(Math.random()*9);
    }
   values[i] = 1;

    $('.field').eq(i)
               .css('background-image','url(images/cross.png)')
               .css('background-size','cover');
}

$('#start').click(function(){
    values = [2, 2, 2, 2, 2, 2, 2, 2, 2];
    $('.field').css('background-image','');
    $('.field').css('display','block');
    //increase timer  /* */
    
    var finish = 0;
    setTimeout(MyChoice,500);
});


$(".field").click(function(e){
    i = parseInt($(this).attr('id'));
    values[i] = 0;
    $('.field').eq(i)
           .css('background-image','url(images/zero.png)')
           .css('background-size','cover');
            setTimeout(MyChoice,1000);
});
    
   
   


