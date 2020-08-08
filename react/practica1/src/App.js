import React from 'react';
import logo from './logo.svg';
import './App.css';

function Tasks({
  tasks
}){
  
  
  
  return tasks.map((task)=> {

    return (
      <div>
        <h1>{task.title || "Titulo no esta"}</h1>
        <p>{"Hola2" || "Descriptcion no esta"}</p>
        <p>{"Hola3" ? "Congrats" : "In Progress..." || "Done no est"}</p>
      </div>
    );

  });
}
  


class Form extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
        title: '',
        description: '',
        done: false
    }

  }

 /*  changeTitle = (event) =>{
        console.dir(event.target.value)
        this.setState({title:event.target.value})       
  }

  changeDescription = (event) =>{
        console.dir(event.target.value)
        this.setState({description:event.target.value})       
  }

  changeDone = (event) =>{
        console.dir(event.target.checked)
        this.setState({done:event.target.checked})       
  }
 */
  handleChange = (event) =>{
    
    let {value, name, checked } = event.target;
    let newValue = name === "done" ? checked : value;
    this.setState({[name]: newValue});

}


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createTasks(this.state)


    /* event.preventDefault();
    console.dir(event.target);
    console.dir(event.target.[1].value);
    console.log(typeof(event.target.[1].value));
    console.dir(event.target.[3].value);
    console.dir(event.target.[5].checked);

    let titulo = event.target.[1].value;
    let descripcion = event.target.[3].value;
    let hecho = event.target.[5].checked;

    console.log(titulo,descripcion,hecho);
    

    this.setState({
      title: titulo,
      description: descripcion,
      done: hecho});

    //this.setState({ title: '', description: '', done: false });

    console.log(this.state.title);
    console.log(this.state.description);
    console.log(this.state.done);

    this.props.createTasks(this.state)

    alert("Submited") */
  }

  render() {
    return(
      <form onSubmit = {this.handleSubmit} >
        <fieldset>
          <label htmlFor="title" > Title </label>
          <input id="title" 
                 type="text"
                 name= "title"
                 onChange = {this.handleChange}
                 
                 />
        </fieldset>

        <fieldset>
          <label htmlFor="description"> Description </label>
          <textarea id="description" 
                    type="text"
                    name= "description"
                    onChange = {this.handleChange}
          />
        </fieldset>

        <fieldset>
          <label> done </label>
          <input type="checkbox"
                 id="done"
                 name= "done"
                 onChange = {this.handleChange}
          />
        
        </fieldset>

        <button>ENVIAR</button>

      </form>

      
    );
  }

}

class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      tasks : []  
    }
  }

  createTasks=(task)=>{
    let newTasks = this.state.tasks.concat(task)
    this.setState({tasks : newTasks})
  }

  
  render() {
    return(
      <div> 
        <h1> HOLA </h1>
        <Form createTasks={this.createTasks}/>
        <Tasks tasks = {this.state.tasks}/>
      </div>
    ) 
  }

  
    
}

export default App
