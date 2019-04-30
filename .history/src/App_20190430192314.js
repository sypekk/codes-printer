import React, { Component } from 'react';
import './App.css';
import Inputer from './Inputer';


const Name = (props) => (
  <div>{props.title}</div>
)

const Serial = (props) => (
  <div className='code'>{props.serial}</div>
)

const Items = (props) => (
  <>
    {props.lista.serials.map(item => (<Serial key={item.item} {...item} />))}

  </>
)





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


  render() {

    // const codeItem = this.state.list.map(item => (
    //   <>
    //     <div>{item.title}</div>
    //     {item.serials.map(item => <Serial serial={item} />)}
    //   </>
    // ))

    // const titleItem = this.state.titleTable.map(item => (
    //   <Title key={item.item} title={item.item} />
    // ))


    return (
      <React.Fragment>
        {!this.state.off ? <Inputer {...this.state} changeTextFn={this.handleChangeText} hideFn={this.handleButtonHide} addFn={this.handleButtonAdd} titleFn={this.handleChangeTitle} /> : null}
        <div className='wrapper'>
          {/* <div className='test'>Test</div> */}
          {/* {codeItem} */}
          {this.state.list.length > 0 && <Items lista={this.state.list} />}
          {/* <div className='itemName'>
            {titleItem}
          </div> */}
          {/* <div className="codeTable">
            {codeItem}
          </div> */}
        </div>
      </React.Fragment >
    );
  }
}

export default App;
