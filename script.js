import React from 'react';
import ReactDOM from 'react-DOM';

// Criação de componente
class UnderAge extends React.Component{
    //Message
    msg(age){   
        alert('Are you oldest to 18?');
        console.log(this);
    }
    render(){
        return <button>Sim</button> ,<button>Não</button>
    }
};
ReactDOM.render(<UnderAge />, document.getElementById('root'));