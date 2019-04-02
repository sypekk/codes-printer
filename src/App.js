import React, { Component } from 'react';
import './App.css';
import Inputer from './Inputer';


const Item = (props) => <p><span>{props.item}</span><span className="code">{` `}{`*${props.item.toUpperCase()}*`}</span></p>

class App extends Component {
  state = ({
    text: '',
    list: [],
    off: false,
    title: '',
  })

  handleButtonAdd = () => {
    const lista = this.state.list;
    const text = this.state.text;
    const split = text.split(' ');

    split.forEach(item => {
      const tmp = item.split('\t');
      tmp.forEach(item => {
        lista.push(item)
      })
    })

    this.setState({
      list: lista,
    })
  }

  handleButtonHide = () => {
    this.setState({
      off: true,
    })
  }

  handleChangeText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.off ? <Inputer {...this.state} changeTextFn={this.handleChangeText} hideFn={this.handleButtonHide} addFn={this.handleButtonAdd} titleFn={this.handleChangeTitle} /> : null}
        {this.state.title.length > 0 ? <h2 className='App'>{this.state.title}</h2> : null}
        <div className="table">
          {this.state.list.map(item => <Item key={item} item={item} />)}
        </div>
      </React.Fragment >
    );
  }
}

export default App;
