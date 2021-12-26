import React from 'react';
import { useNavigate } from 'react-router-dom';
import FunctionClick from './FunctionClickComponent';
import ButtonClick from './ButtonClickComponent';
function Home(){

    return(
        <div class="headingBanner">
        <div>
        <header className="Categories-header">
        <p>
          Gravity for Charity
        </p>
        <ButtonClick/>
      </header>
      </div>
      </div>
    )
}


export default Home;
