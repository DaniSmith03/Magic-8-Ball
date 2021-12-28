
let answerBox= document.getElementById('answerBox');


let onShake=()=>{
    let randomNum=Math.floor(Math.random()*11)
    let fortune='';
    switch(randomNum){
        case 1: fortune='It is certain';
            break;
        case 2:fortune='It is decidedly so';
            break;
        case 3: fortune='Seems probable';
            break;
        case 4: fortune='Reply hazy try again';
            break;
        case 5: fortune='Cannot predict now';
            break;
        case 6: fortune='Do not count on it';
            break;
        case 7: fortune='My sources say no';
            break;
        case 8: fortune='Outlook not so good';
            break;
        case 9: fortune='Signs point to yes';
            break;
        case 10: fortune='Sorry, I dont know'
            break;        
    }
    console.log(fortune)
    answerBox.innerHTML=fortune;
}


let ball = document.getElementById('ball');
ball.addEventListener('click', onShake);