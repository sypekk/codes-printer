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

const Serial = (props) => (
  <div className='code'>{`*${props.serial}*`}</div>
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

  state = ({
    text: '',
    list: [],
    off: false,
    title: '',
    columns: 3,
  })


  handleButtonAdd = () => {
    const text = this.state.text;
    const title = this.state.title;

    const exceptions = 'CCH ';


    // let count = 0;
    // let position = text.indexOf(exceptions);
    // // let splitt= '';

    // while (position !== -1) {
    //   count++;
    //   position = text.indexOf(exceptions, position + 1);
    //   let splitt = text.split(' ');
    //   splitt.forEach(items => {
    //   const tmp = items.split('\t');
    //   const item = {
    //     title: title,
    //     serials: tmp,
    //   }
    //   this.setState(prevState => ({
    //     list: [...prevState.list, item]
    //   }))
    // })
    // this.setState({
    //   text: '',
    //   title: '',
    // })
    // }

    // console.log(count); // displays 4



    // console.log(text);
    // console.log(text.indexOf(exceptions));
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

  handleChangeColums = (e) => {
    this.setState({
      columns: e.target.value,
    })
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  //dodać liniowo CSS albo styled components zeby zrobić na kilka kolumn!!!!
  render() {

    // const number = this.state.columns;

    return (
      <React.Fragment>
        {!this.state.off ? <Inputer
          {...this.state}
          changeTextFn={this.handleChangeText}
          hideFn={this.handleButtonHide}
          addFn={this.handleButtonAdd}
          titleFn={this.handleChangeTitle}
          columsFn={this.handleChangeColums}
        /> : null}
        <Containter number={this.state.columns}>
          {this.state.list.length > 0 && <Items list={this.state.list} />}
        </Containter>
      </React.Fragment >
    );
  }
}

export default App;
