import React, { Component } from 'react';

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
        {this.state.items.map(item => (
          <Item title={item} />
        ))}
        <div className="template">
          <input type="text" onChange={this.changeValue} /><button onClick={this.addItem}>Add</button>
        </div>
      </div>
    );
  }
}

export default Example;
