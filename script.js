
let humanScore=0;
let computerScore=0;

function getComputerChoice(){

    let computerChoice=Math.floor(Math.random()*3)+1;
    console.log(computerChoice);

    return (computerChoice===1)? 'Rock':(computerChoice===2)? 'paper':(computerChoice===3)?'Scissor':undefined;
   
    
}


function getHumanChoice(){

   let  humanChoice=prompt('Enter your choice from Rock  ,Paper ,Scissor');
   return (humanChoice=='Rock' || humanChoice==='paper' ||  humanChoice==='Scissor')? humanChoice :'Invalide Input';

}



function playRound(humanChoice,computerChoice){

    if(humanChoice==='rock' &&  computerChoice==='paper'){
        console.log('Paper wraps Rock ');
        console.log('You lost');
        computerScore++;
    }
    else if(humanChoice==='paper' &&  computerChoice==='rock'){
        console.log('Paper wraps Rock ');
        console.log('You won');
        humanScore++;
    }
    else if(humanChoice==='paper' &&  computerChoice==='scissor'){
        console.log('Scissor cuts paper ');
        console.log('You lost');
        computerScore++;
    }
    else if(humanChoice==='Scissor' &&  computerChoice==='paper'){
        console.log('Scissor cuts paper  ');
        console.log('You won');
        humanScore++;
    }
    else if(humanChoice==='Rock' && computerChoice==='Scissor'){
        console.log(' Rock hit Scissor ');
        console.log('You won');
        humanScore++;
    }
     else if(humanChoice==='Scissor' && computerChoice==='Rock'){
        console.log('Rock hit Scissor');
        console.log('You lost');
        computerScore++;
    }
    

}


function playGame(){

    for(let i=0;i<5;i++){

        const computerChoice=getComputerChoice().toLowerCase();
        const humanChoice=getHumanChoice().toLowerCase();

       playRound(humanChoice,computerChoice);
    }

    return humanScore > computerScore? 'humanPlayer won':'computerPlayer won';
    


  
}
    console.log(playGame());

