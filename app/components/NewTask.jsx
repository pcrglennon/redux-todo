import React from 'react';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  initialState() {
    return {
      description: ''
    };
  }

  onInputChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  onSubmit(event) {
    this.props.onSubmit(this.state.description);
    this.setState(this.initialState());
  }

  render() {
    return (
      <div>
        <input type="text"
               placeholder="New Task"
               value={this.state.description}
               onChange={this.onInputChange} />

        <button onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default NewTask;
