import React, { Component } from 'react';
import './App.css';
import Inputer from './Inputer';


const Name = (props) => (
  <div className='name'>{props.title}</div>
)

const Serial = (props) => (
  <div className='code'>{props.serial}</div>
)

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

  counter = 0;
  indx = 0;

  state = ({
    text: '',
    list: [],
    off: false,
    title: '',
  })


  handleButtonAdd = () => {
    const text = this.state.text;
    const title = this.state.title;
    const split = text.split(' ');
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

  //dodać liniowo CSS albo styled components zeby zrobić na kilka kolumn!!!!
  render() {
    return (
      <React.Fragment>
        {!this.state.off ? <Inputer {...this.state} changeTextFn={this.handleChangeText} hideFn={this.handleButtonHide} addFn={this.handleButtonAdd} titleFn={this.handleChangeTitle} /> : null}
        <div className='wrapper'>
          {this.state.list.length > 0 && <Items list={this.state.list} />}
        </div>
      </React.Fragment >
    );
  }
}

export default App;
