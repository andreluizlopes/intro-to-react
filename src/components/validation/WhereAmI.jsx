import React, { Component } from 'react';
import './validation.css';

class WhereAmI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  changeInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  componentWillMount() {
    console.log('Se prepare, esse componente foda será montado');
    window.alert('Oiii');
  }

  componentDidMount() {
    console.log('Esse componente foda acabou de ser montado');
  }

  render() {
    console.log('Esse componente foi renderizado em: ' + Date.now());
    return (
      <div className="validationContainer">
        <p className="bigText">{this.state.inputValue}</p>
        <p>Onde eu estou?</p>
        <input type="text" onChange={this.changeInput} value={this.state.inputValue} />
        <p className="answer">Resposta: {this.state.inputValue}</p>
        {this.state.inputValue === 'Escale' && (
          <p className="result">Sim!! Você está na <strong>Escale</strong></p>
        )}
      </div>
    );
  }
}

export default WhereAmI;

// jQuery('input').on('change', function(e) {
//   var value = e.value;
//   jQuery('.bigText').html(e);
//   jQuery('.answer').html(e);
//   if (value === 'Escale') {
//     jQuery('.result').show();
//   } else {
//     jQuery('.result').hide();
//   }
// });
