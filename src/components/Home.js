import React from "react";
import { Button } from "reactstrap";

import {Link} from 'react-router-dom' ;

function Home(){

    return(
        <div className="container">
        <div className="row  text-white ">
      A Platform where you can Play a Quiz made up of random Questions.
           </div>
           <div className="row text-center">
           <a href='/quiz'>
           <Button color='danger' > Play Quiz</Button>
           </a>
           </div> 
        </div>
    )
};

export default Home ;

