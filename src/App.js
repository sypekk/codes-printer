import React, { Component } from 'react';
import './App.css';
import Inputer from './Inputer';


const Item = (props) => (
  // <p>{props.index % 2 ? <span>{props.title}</span> : null}<span className="code">{`*${props.item.toUpperCase()}*`}</span></p>

  <div className='code'>
    {`*${props.item.toUpperCase()}*`}
    {/* <span>{props.title}</span> */}
    {/* <span className="code">{`*${props.item.toUpperCase()}*`}</span> */}
  </div>
)


const Title = (props) => (
  <p>
    <span>{props.title}</span>
  </p>
)

class App extends Component {

  counter = 0;
  indx = 0;

  state = ({
    text: '',
    list: [],
    off: false,
    title: '',
    titleTable: [],
    // colums: 2,
  })

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }))
  }

  handleButtonAdd = () => {
    const lista = this.state.list;
    const text = this.state.text;
    const title = this.state.title;
    const titleTable = this.state.titleTable;
    const indx = this.indx;
    // const colums = this.state.colums;
    const split = text.split(' ');
    console.log(split)
    split.forEach((item, index) => {
      lista.push({
        item: title,
      })
      const tmp = item.split('\t');
      console.log(tmp);
      //to jest kluczem do sukcesu
      tmp.forEach((item, index2) => {
        console.log('pojedyncze cos ' + item);
        // if (index % { colums }) {
        lista.push({
          item,
        });
        // }
        console.log('index:' + index);
        console.log('moj index:' + indx);
        // console.log(index % colums);
      })
    })
    titleTable.push(title);
    this.indx++;

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

    const codeItem = this.state.list.map(item => {
      // this.counter++;
      return (<Item key={item.item} item={item.item} title={this.state.titleTable[item.indx]} />)
    })

    const titleItem = this.state.titleTable.map(item => (
      <Title key={item.item} title={item.item} />
    ))


    return (
      <React.Fragment>
        {!this.state.off ? <Inputer {...this.state} changeTextFn={this.handleChangeText} hideFn={this.handleButtonHide} addFn={this.handleButtonAdd} titleFn={this.handleChangeTitle} /> : null}
        <div className='wrapper'>
          {/* <div className='test'>Test</div> */}
          {codeItem}
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
