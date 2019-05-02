import React, { Component } from 'react';
import './App.css';
import Inputer from './Inputer';
import styled from 'styled-components';



const Containter = styled('div')`
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 1fr);
    grid-template-rows: repeat(auto - fill, 1fr);
`

const Name = (props) => (
  <div className='name'>{props.title}</div>
)


const Serial = (props) => {
  const seriall = props.serial.replace('ZONKZONKZONK', ' ');
  return (
    <div className='code'>{`*${seriall}*`}</div>
  )
}

const Items = (props) => {

  return (
    <>
      {props.list.map(items => (
        <>
          <Name key={items.item} title={items.title} />
          {items.serials.map(item => (
            < Serial key={item} serial={item} />
          )
          )}
        </>
      )
      )}
    </>
  )
}

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
    if (exceptions.length > 0) {
      const zonk = exceptions.slice(0, exceptions.length - 1);
      newString = text.replace(new RegExp(exceptions, 'gi'), `${zonk}ZONKZONKZONK`);
    } else {
      newString = text;
    }
    const split = newString.split(' ');
    split.forEach(items => {
      const tmp = items.split('\t');
      const item = {
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
      [e.target.name] : e.target.value,
    })
  }

  render() {

    return (
      <React.Fragment>
        {!this.state.off ? <Inputer
          {...this.state}
          changeFn={this.handleChange}
          hideFn={this.handleButtonHide}
          addFn={this.handleButtonAdd}
        /> : null}
        <Containter number={this.state.columns}>
          {this.state.list.length > 0 && <Items list={this.state.list} />}
        </Containter>
      </React.Fragment >
    );
  }
}

export default App;
