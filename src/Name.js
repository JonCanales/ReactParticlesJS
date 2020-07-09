import React, { Component } from 'react';
import Typical from 'react-typical'
class Name extends Component{
    render(){
        return(
            <div>
                <h1>Jonathan Canales: {'  '} 
<Typical
  loop={Infinity}
  wrapper="a"
  steps={[
    'Developer 💻',
    1000,
    'Engineer 🛠',
    1000,
    'Creator 💡',
    1000
  ]}
  />
</h1>
<h2> {'<'} Welcome To My Portfolio {'/>'} </h2>



            </div>
        )
    }
}


export default Name 