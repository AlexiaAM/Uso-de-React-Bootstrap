import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

import ExampleReactBoostrap from './exampleractboostrap.js'

import 'bootstrap/dist/css/bootstrap.css';

import './miscss.css'
import { Container, Form } from 'react-bootstrap';

const varia = "Perro";

class Timer extends React.Component{

  constructor(props){
    super(props);
    this.state = {seconds: 0};
  }

  tick(){
    this.setState(state => ({ seconds : state.seconds + 1}));   
    
  }

  componentDidMount(){  
    this.interval = 
      setInterval(()=>this.tick(), 1000);

  }

  render(){
    return(
      <div>
        Segundos: {this.state.seconds}
      </div>
    );
  }

}

class HelloMessage extends React.Component {
    
  render() {
    return (
      <div>
        Hola {this.props.name}
        <br/>
        Me siento {this.props.estadoAnimo}
        {varia}
      </div>
    );
  }
}

function Avatar(props){
  return(
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  );
}

function UserInfo(props){
  return(
    <div className="UserInfo">
        <Avatar user={props.user} />
         <div className="UserInfo-name">
          {props.user.name}
        </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}  />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date }
      </div>
    </div>
  );
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  render() {
    return (
      <Container>
         <h3>Tareas pendientes</h3>
        <TodoList items={this.state.items} />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicToDo">
            <Form.Label>
              ??Qu?? se necesita hacer?
            </Form.Label>
            <Form.Control onChange={this.handleChange} value={this.state.text}>

            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            A??adir #{this.state.items.length + 1}
          </Button>
        </Form>
      </Container>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });   
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  
  }
}
class TodoList extends React.Component {
  render() {
    return (
        
      <ul>
      {this.props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>

    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);*/


/*
ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);

const comment = {
  date: "11/11/2022",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
