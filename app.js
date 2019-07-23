var values = [],
    timer,
    minutes = 0,
    seconds = 0,
    record = Infinity,
    win = 0,
    fail = 0,
    all = 0;

$(document).ready(function(){

    $('.field').eq(0).css('top','230px').css('left','530px');
    $('.field').eq(1).css('top','230px').css('left','680px');
    $('.field').eq(2).css('top','230px').css('left','830px');
    $('.field').eq(3).css('top','380px').css('left','530px');
    $('.field').eq(4).css('top','380px').css('left','680px');
    $('.field').eq(5).css('top','380px').css('left','830px');
    $('.field').eq(6).css('top','530px').css('left','530px');
    $('.field').eq(7).css('top','530px').css('left','680px');
    $('.field').eq(8).css('top','530px').css('left','830px');

    $('.field').css('background-color','rgb(149, 142, 160)');
    $('.field').css('display','block');

});

function Timer(){
    timer = setInterval(function() {
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes > 9){
            $("#min").text(minutes);
            }else{
                $("#min").text('0' + minutes);
            }
          }
          seconds++;
          if (seconds > 9){
          $("#sec").text(seconds);
          }else{
            $("#sec").text('0' + seconds);
          }
        }, 1000);
} 

function cross(){
    if (values[0] == values[1] && values[1] == values[2]){$('#dash').css('display','block').css('background-image','url(images/horison_line_top.png)');}
    if (values[3] == values[4] && values[4] == values[5]){$('#dash').css('display','block').css('background-image','url(images/horison_line_center.png)');}
    if (values[6] == values[7] && values[7] == values[8]){$('#dash').css('display','block').css('background-image','url(images/horison_line_bottom.png)');}
    if (values[0] == values[3] && values[3] == values[6]){$('#dash').css('display','block').css('background-image','url(images/vertical_line_left.png)');}
    if (values[1] == values[4] && values[4] == values[7]){$('#dash').css('display','block').css('background-image','url(images/vertical_line_center.png)');}
    if (values[2] == values[5] && values[5] == values[8]){$('#dash').css('display','block').css('background-image','url(images/vertical_line_right.png)');}
    if (values[0] == values[4] && values[4] == values[8]){$('#dash').css('display','block').css('background-image','url(images/diagonal_line_left.png)');}
    if (values[2] == values[4] && values[4] == values[6]){$('#dash').css('display','block').css('background-image','url(images/diagonal_line_right.png)');}
}

function standoff(){
    $('#message').css('display','block').text("Ничья..   Сыграем еще раз?");
    Percents();
    clearInterval(timer);
}

function Percents(){
    let text;
    switch (all){
    case 1:  
        text = `${all} игра сыграна`;
        break;
    case 2 :
        text = `${all} игры сыграно`;
        break;
    case 3 :
        text = `${all} игры сыграно`;
        break;
    case 4 :
        text = `${all} игры сыграно`;
        break;
    default:
            text = `${all} игр сыграно`;
}
    $('#all').text(text);
    let percent = `${(win/all).toPrecision(2) * 100} % побед`;
    $('#percent').text(percent);
}

function ComputerChoice(){
    var i = Math.floor(Math.random()*9);

    while (values[i] != 2){
        i = Math.floor(Math.random()*9);
    }
   values[i] = 1;  

    $('.field').eq(i)
               .css('background-image','url(images/cross.png)')
               .css('background-size','cover');

    if ((values[0] == values[1] && values[1] == values[2] && values[0] == 1) ||
        (values[3] == values[4] && values[4] == values[5] && values[3] == 1) ||
        (values[6] == values[7] && values[7] == values[8] && values[6] == 1) ||
        (values[0] == values[3] && values[3] == values[6] && values[0] == 1) ||
        (values[1] == values[4] && values[4] == values[7] && values[1] == 1) ||
        (values[2] == values[5] && values[5] == values[8] && values[2] == 1) ||
        (values[0] == values[4] && values[4] == values[8] && values[0] == 1) ||
        (values[2] == values[4] && values[4] == values[6] && values[2] == 1)){
        $('#message').css('display','block').text("Вы проиграли!");

        fail++;
        Percents();
        cross();
        clearInterval(timer);
    }else{
        var flag = 0;
        values.map(function(a){
        if (a == 2){
            flag = 1;
            }
        });
        if (flag == 0){
        standoff();
            }

}
}


$('#start').click(function(){
    values = [2, 2, 2, 2, 2, 2, 2, 2, 2];
    $('.field').css('background-image','');  
    $('.field').css('background-color','aliceblue');
    $('#message').css('display','none');
    $('#dash').css('display','none');
    minutes = 0;
    seconds = 0;
    $("#sec").text("00");
    $("#min").text("00");
    all++;
    Timer();
    
    var finish = 0;
    setTimeout(ComputerChoice,500);
});


//User's choice
$(".field").click(function(e){
    i = parseInt($(this).attr('id'));
    values[i] = 0;
    $('.field').eq(i)
           .css('background-image','url(images/zero.png)')
           .css('background-size','cover');

    if ((values[0] == values[1] && values[1] == values[2] && values[0] == 0) ||
        (values[3] == values[4] && values[4] == values[5] && values[3] == 0) ||
        (values[6] == values[7] && values[7] == values[8] && values[6] == 0) ||
        (values[0] == values[3] && values[3] == values[6] && values[0] == 0) ||
        (values[1] == values[4] && values[4] == values[7] && values[1] == 0) ||
        (values[2] == values[5] && values[5] == values[8] && values[2] == 0) ||
        (values[0] == values[4] && values[4] == values[8] && values[0] == 0) ||
        (values[2] == values[4] && values[4] == values[6] && values[2] == 0)){
            $('#message').css('display','block').text("Вы победили!");
            win++;
            Percents();
            if (minutes*60 + seconds < record){
                record = minutes*60 + seconds;
                let time;
                if (minutes < 10){
                    time = `0${minutes} :`; 
                }else{
                    time = `${minutes} :`;
                }
                if (seconds < 10){
                    time = `${time} 0${seconds}`; 
                }else{
                    time = `${time} ${seconds}`;
                }
                $('#rec').text(time);
            }
            cross();
            clearInterval(timer);
        
        }else{
            var flag = 0;
            values.map(function(a){
            if (a == 2){
                flag = 1;
                    }
                });
            if (flag == 0){
            standoff();
            }else{
            setTimeout(ComputerChoice,1000);
                }
            }
});
    
   
