import React, {Component} from 'react';
// Importing Module
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";


// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//     //   alert('A name was submitted: ' + this.state.value);
        
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <div>
//         <form class="form" onSubmit={this.handleSubmit}>
//           <label class="label">
//             Please enter your zipCode or a name of a Charity:    
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit=" value="Submit" />
//         </form>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
//   );
 
// export default NameForm;

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FunctionClick
  from './FunctionClickComponent';
const Create = () => {
  const [entry, setEntry] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {entry};
    navigate('/Category');
    const zip = 0;
    if (!isNaN(entry)) {
      zip = entry;
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          zip: '&zip='.concat(entry)
        }),
      };
      fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=292eca76&app_key=b76212ae948177fb114c287cbd15d46d'.concat(zip), requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
      
    console.log(blog);
  }

  return (
    <div className="create">
      <FunctionClick/>
      <h2>Enter your zipCode or a name of a Charity</h2>
      <form onSubmit={handleSubmit}>
        <label>Search:</label>
        <input 
          type="text" 
          required 
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button>Enter</button>
      </form>
    </div>
  );
}
 
export default Create;