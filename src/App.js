import React, { Component } from 'react';
import Inputer from './components/Inputer/Inputer';
import styled, { createGlobalStyle } from 'styled-components';
import Table from './components/Table/Table';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text');
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;

let i = 0;

class App extends Component {
  state = ({
    text: '',
    list: [],
    off: false,
    title: '',
    columns: 3,
    exceptions: '',
  })

  handleButtonAdd = () => {
    const text = this.state.text;
    const title = this.state.title;

    const exceptions = this.state.exceptions;
    let newString = '';
    if (exceptions.length > 1) {
      const zonk = exceptions.slice(0, exceptions.length - 1);
      newString = text.replace(new RegExp(exceptions, 'gi'), `${zonk}ZONKZONKZONK`);
    } else {
      newString = text;
    }

    const split = newString.split(' ');
    split.forEach(items => {
      i++;
      const tmp = items.split('\t');
      const item = {
        index: i,
        title: title,
        serials: tmp,
      }
      this.setState(prevState => ({
        list: [...prevState.list, item]
      }))
    })
    this.setState({
      text: '',
      title: '',
    })
  }

  handleButtonHide = () => {
    this.setState({
      off: true,
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        {!this.state.off ? <Inputer
          {...this.state}
          changeFn={this.handleChange}
          hideFn={this.handleButtonHide}
          addFn={this.handleButtonAdd}
        /> : null}
        <div>
          {this.state.list.length > 0 && <Table list={this.state.list} columns={this.state.columns} />}
        </div>
      </>
    );
  }
}

export default App;
