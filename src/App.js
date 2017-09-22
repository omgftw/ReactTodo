import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './todoReducer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ConnectedTodoContainer />
      </div>
    );
  }
}

class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    };
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  addTodo = () => {
    if (this.state.input === '') return;
    this.props.addTodo(this.state.input);
    this.setState({
      input: ''
    });
  };

  render() {
    const todos = this.props.todos.map((todo, key) => {
      return <div className="col-xs-12 col-md-6 mb-3" key={key}>
        <div className="card">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">{todo}</div>
              <div className="col-auto ml-auto">
                <button type="button" className="btn btn-danger" onClick={() => this.props.removeTodo(key)}>X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    });
    return <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row justify-content-center mb-3 mt-3">
          <div className="input-group col col-md-6">
            <input className="form-control" onChange={this.handleInput} value={this.state.input} />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.addTodo}>Add Item</button>
            </span>
          </div>
        </div>
        <div className="row">
          {todos}
        </div>
      </form>
    </div>;
  }
}

const ConnectedTodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

export default App;
