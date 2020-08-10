import React from "react";

export default class AddOptions extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (event) => {
    event.preventDefault();

    const newOption = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(newOption);

    this.setState(() => ({ error }));

    // To clear the input
    if (!error) {
      event.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}
