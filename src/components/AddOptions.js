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
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}

        <form onSubmit={this.handleAddOption} className="add-option">
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}
