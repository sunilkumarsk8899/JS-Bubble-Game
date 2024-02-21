var timer = 60;
var hit = 0;
var score = 0;

function bubbleMake() {
    var bubbleCount = '';
    for (let index = 1; index < 133; index++) {
            bubbleCount += `<div class="bubble">${Math.floor(Math.random()*20)}</div>`;
    }
    document.querySelector('#panelBottom').innerHTML = bubbleCount;
}

function bubbleTimer(){
    var bubbletime = setInterval(() => {
        /*timer++;
        if(timer > 6){
            document.querySelector('#bubble-timer').innerHTML = 0;
            clearInterval(bubbletime);
        }else if(timer >= 0){
            document.querySelector('#bubble-timer').innerHTML = timer;
        }*/
        timer--;
        if(timer >= 0){
            document.querySelector('#bubble-timer').textContent = timer;
        }else{
            clearInterval(bubbletime);
            document.querySelector('#panelBottom').innerHTML = "<h1>Game Over</h1>";
        }
    }, 1000);
}

function bubbleHit() {
    hit = Math.floor(Math.random()*20);
    document.querySelector('#bubble-hit').innerHTML = hit;
}

function bubbleScore() {
    score += Number(10);
    document.querySelector('#bubble-score').textContent = score;

}

document.querySelector('#panelBottom').addEventListener('click',function(e){
    let elementId = e.target.textContent;
    console.log(Number(elementId));
    if(Number(hit) === Number(elementId)){
        bubbleScore();
        bubbleHit();
        bubbleMake();
    }else{
        alert('Invalid select number :(')
    }
});


bubbleTimer();
bubbleMake();
bubbleHit();