class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    //State
    this.state = {
      count: 0,
    };
  }

  handleAddOne() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleMinusOne() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  handleReset() {
    this.setState(() => ({ count: 0 }));
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem("count"), 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// You can set a default value
//ReactDOM.render(<Counter count={-10} />, document.getElementById("app"));
