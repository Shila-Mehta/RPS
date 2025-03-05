
let humanScore=0;
let computerScore=0;

function getComputerChoice(){

    let computerChoice=Math.floor(Math.random()*3)+1;
    console.log(computerChoice);

    return (computerChoice===1)? 'rock':(computerChoice===2)? 'paper':(computerChoice===3)?'Scissor':undefined;
   
    
}


// function getHumanChoice(){

//    let  humanChoice=prompt('Enter your choice from Rock  ,Paper ,Scissor');
//    return (humanChoice=='Rock' || humanChoice==='paper' ||  humanChoice==='Scissor')? humanChoice :'Invalide Input';

// }



function playRound(humanChoice,computerChoice){

    winnerPlayer();

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
    else{
        console.log('same');
    }


    const human=document.querySelector('.Human');

    const computer=document.querySelector('.Computer');

    human.textContent=humanScore;
    computer.textContent=computerScore;

    

}



    const computerChoice=getComputerChoice().toLowerCase();
 
    const buttons=document.querySelectorAll('button');

    console.log(buttons);

    buttons.forEach(button => {

        button.addEventListener('click',(e)=>{

            console.log(e.target.id);

            switch(e.target.id){

                case '1':
                playRound('rock',computerChoice);
                break;

                case '2':
                 playRound('paper',computerChoice);
                 break;

                case '3':
                 playRound('Scissor',computerChoice);
                 break;

                default:
                    alert('Invalid choice');



            }

           
    })
        
    });


    function winnerPlayer(){
        const div=document.querySelector('.score');

        const result= (humanScore===5)?'Player1 won':(computerScore===5)?'Player2 won':undefined;

        if(result){
            div.textContent=result;
            humanScore=0;
            computerScore=0;
        }

       
        
    }

    

  
 

