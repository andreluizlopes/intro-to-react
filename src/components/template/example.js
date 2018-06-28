import React, { Component } from 'react';
import './example.css';

const Item = ({ title }) => (
  <p>{title}</p>
);

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actualValue: '',
      items: [
        'Olá',
        'Joao',
      ],
    };
  }

  changeValue = (e) => {
    this.setState({
      actualValue: e.target.value,
    });
  }

  addItem = () => {
    // Estados não são alterados, e sim evoluidos
    const newItems = this.state.items;
    newItems.push(this.state.actualValue);

    this.setState({
      items: newItems,
    });
  }

  render() {
    return (
      <div className="example">
        <div className="example-bg">
          <div className="row">
            <div className="col-12">
              <div className="items">
                {this.state.items.map(item => (
                  <Item title={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="example-form">
          <div className="row">
            <div className="col-12">
              <input type="text" onChange={this.changeValue} /><button onClick={this.addItem}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
