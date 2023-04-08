function f1(){
    if($('#dino').classList != 'jump')
    {
        $('#dino').addClass('jump')
    }
    setTimeout(function(){
        $('#dino').removeClass('jump')
    }, 700)
}

$(document).keydown(f1)

let hiscore = 0

function f2(){
    hiscore +=1
    $('#score').text(hiscore)
    let dinotop = $('#dino').css('top')
    let kaktusleft = $('#cocktus').css('left')
    dinotop = Number(dinotop.slice(0, -2))
    kaktusleft = Number(kaktusleft.slice(0, -2))
    console.log(dinotop + '**' + kaktusleft)
    if (0<kaktusleft && kaktusleft<50 && dinotop>385){
        alert('вы проиграли')
        location.reload()
    }
}

setInterval(f2,10)

