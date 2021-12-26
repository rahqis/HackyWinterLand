import React from 'react';
import { useNavigate } from 'react-router-dom';
import FunctionClick from './FunctionClickComponent';
import ButtonClick from './ButtonClickComponent';
function Home(){

    return(
        <div>
        <header className="Categories-header">
        <p>
          List of Categories
        </p>
        <ButtonClick/>
      </header>
      </div>
    )
}


export default Home;
