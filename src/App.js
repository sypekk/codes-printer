import React, { Component } from 'react';
import './App.css';
import Inputer from './Inputer';


const Item = (props) => (
  // <p>{props.index % 2 ? <span>{props.title}</span> : null}<span className="code">{`*${props.item.toUpperCase()}*`}</span></p>

  <div className='code'>
    {`*${props.title}*`}
    {/* <span>{props.title}</span> */}
    {/* <span className="code">{`*${props.item.toUpperCase()}*`}</span> */}
  </div>
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

    // const codeItem = this.state.list.map(item => {
    //   // this.counter++;
    //   return (<Item key={item.item} item={item.item} serials={item.item} />)
    //   // return (<Item key={item.item} item={item.item} title={this.state.titleTable[item.indx]} />)
    // })

    // const titleItem = this.state.titleTable.map(item => (
    //   <Title key={item.item} title={item.item} />
    // ))


    return (
      <React.Fragment>
        {!this.state.off ? <Inputer {...this.state} changeTextFn={this.handleChangeText} hideFn={this.handleButtonHide} addFn={this.handleButtonAdd} titleFn={this.handleChangeTitle} /> : null}
        <div className='wrapper'>
          {/* <div className='test'>Test</div> */}
          {/* {codeItem} */}
          {/* <Item lista={this.state.list} /> */}
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
