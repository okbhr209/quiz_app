import React ,{useState,useEffect} from 'react' ;
import { Form,FormGroup,Button ,Spinner, Alert ,Label,Input } from 'reactstrap' ;
import './displayquestion.css'
function DisplayQuestions (props) {
    const {index,problem,active ,setUsersChoice,userChoice} =props ;
    if(!problem){
        return  <Spinner color='primary' /> ;
    }
    const {question,correct ,choices,image,desc}= problem ;
    console.log(index) ;

    return (
        <div className='question-displayer'>
      
        
        <div className='row' >
            <div className='col-12' text-center >
             <h5>
                {index+1 +'.'+question} 
             </h5>
            </div>
        </div>
  {
    choices.map( (option,i) =>(
        <Form key={i.toString() } > 
 <FormGroup check>
    <Label check>
        <Input type="radio" name= {"radio" +i} 
            checked={userChoice ===(i+1)}
            onChange={()=>{
                setUsersChoice(index,i+1)
            }}
        />{option}
        
    </Label>
 </FormGroup>
</Form>
    )
    )
  }
  {
    (!active)?(
   <Alert color='info' >
   <b> Correct Answer : </b> {correct} 
   <br></br>
   <b>Description :</b>{desc} 

  </Alert>
    ):
    ("")

  }

</div>
    );
}


export default DisplayQuestions ;
