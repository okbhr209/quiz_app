import React, { useState ,useEffect } from 'react' ;

import {Progress ,splice,Button,Alert} from 'reactstrap' ;
import DisplayQuestions from './components/DisplayQuestions';
import questions from './questions' ;

function Timer(props) {
 const {time} =props ;
 return (
    <div className='container'>
    <div className='text-center'>
    { time===0 
    ? "Time's up " 
    : time + " seconds left"
    }
    </div>
    <Progress value={time} color=' rgba(255,255,255, 0.2) '/>
    </div>
 );

} ;

function randomShuffle(q){

  for( let i= q.length-1 ;i>0 ;i-- ){
    let ind = Math.floor( Math.random()*(i+1) ) ;
    let temp = q[i] ;
    q[i] =q[ind] ;
    q[ind] =temp ;
  }
 return q ;
};



function Quiz(props) {
const [ time ,setTime] =useState(100);
const [ active ,setActive] =useState(true);
const [problems,setProblems] =useState(null) ;
const [curr,setCurr] =useState(0) ;
const [selected,setSelected] =useState([null,null,null,null,null]) ;

const finishQuiz =()=>{
setActive(false) ;
let score =0 ;
for(let i=0 ;i<problems.length ;i++){
  if(problems[i].correct ===selected[i] ){
    score+=10 ;
  }
}
{
{/* <Alert color='danger' >

<h1> Congrats!!! You Scored + score + out of 50</h1>   
</Alert> */}

}
 alert('Congrats!!! You Scored '+score+ '  out of 50') ;

}

const setUsersChoice= (index,choice)=>{
  let t=selected ;
  selected[index] =choice ;
  setSelected(t) ;
}

useEffect ( ()=>{
  setProblems(randomShuffle(questions).splice(0,5) ) ;

} ,[] );


useEffect(()=> {
if(time === 0){
  finishQuiz();
}

if(active && time!==0){
  setTimeout(()=>{
    setTime(time-1 );
  } ,1000);
  }
  } , [time] );






return (
 <div className='container' > 
  <div className='row'>
    <div className='col-12'>
        <Timer time={time}/>
        <br></br>
        <br></br>

        <DisplayQuestions 
          index={curr} 
          problem ={ !problems? null: problems[curr] }
          active={active} 
          userChoice={selected[curr] }
          setUsersChoice={setUsersChoice}
        />

 {  curr!==0?(
  <>  <Button color="info" 
      onClick={
        ()=>{
          setCurr(curr-1) ;
        }
      }
  >Previous </Button>{' '}  </>
             ): (" " ) 
             }

{  curr!==4?(
  <>  <Button color="info"  
  onClick={
    ()=> {
      setCurr(curr+1) ;
    }
  }  >Next </Button>{' '}  </>
             ): (" " ) 
             }

{
  (active)? 
  (<>
    <Button color='info'
            onClick ={ ()=>{
             finishQuiz() ;
            }     

        } >  Submit   </Button>{' '}

  </> )
  :('') 

}
    </div>
  </div>

 </div>
);

} ;

export default Quiz ;
