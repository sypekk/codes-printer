import React, { Component } from 'react';
import './App.css';
import Inputer from './Inputer';


const Item = (props) => (
  <p>{props.index % 2 ? <span>{props.title}</span> : null}<span className="code">{`*${props.item.toUpperCase()}*`}</span></p>
)


class App extends Component {

  counter = 0;
  index = 0;

  state = ({
    text: '',
    list: [],
    off: false,
    title: '',
    titleTable: [],
  })

  handleButtonAdd = () => {
    const lista = this.state.list;
    const text = this.state.text;
    const title = this.state.title;
    const titleTable = this.state.titleTable;
    const index = this.index;
    const split = text.split(' ');
    split.forEach(item => {
      const tmp = item.split('\t');
      tmp.forEach(item => {
        lista.push({
          index,
          item,
        });
      })
    })
    titleTable.push(title);
    this.index++;

    this.setState({
      list: lista,
      text: '',
      title: '',
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
        <div className="codeTable">
          {this.state.list.map(item => {
            this.counter++;
            return (<Item key={item.item} item={item.item} title={this.state.titleTable[item.index]} index={this.counter} />)
          })
          }
        </div>
      </React.Fragment >
    );
  }
}

export default App;
