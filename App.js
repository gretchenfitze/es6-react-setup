let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({val: this.state.val + 1})
  }

  componentWillMount() {
    console.log('mounting...');
    this.setState({m: 2});
  }

  render() {
    console.log('rendering...');
    return <InnerComponent update={this.update} {...this.state} {...this.props} />
  }

  componentDidMount() {
    console.log('mounted.');
    console.log(ReactDOM.findDOMNode(this));
    // this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount() {
    console.log('unmounted.');
    // clearInterval(this.inc);
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt="Button" />
        <LabelMixed txt="Label" />
      </div>
    )
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type="range"
        min="0"
        max="255"
        onChange={this.props.update} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <input type="text" onChange={props.update} /><br/>
      <b>{props.txt}</b>
    </div>
  );
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }

  mount() {
    ReactDOM.render(<App />, document.getElementById('wrap'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('wrap'))
  }

  render() {
    return(
      <div>
        <button className="btn btn-success" onClick={this.mount.bind(this)}>Mount</button>
        <button className="btn btn-danger" onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="wrap"></div>
      </div>
    )
  }
}


const Button = (props) => <button
                            onClick={props.update}>
                            {props.txt} - {props.val}
                          </button>

const Label = (props) => <label
                            onMouseMove={props.update}>
                            {props.txt} - {props.val}
                          </label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)


export default Wrapper
