class AppP extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {increasing: false};
  }

  update() {
    ReactDOM.render(
      <AppP val={this.props.val+1} />,
      document.getElementById('app2')
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  render() {
    console.log(this.state.increasing);
    return (
      <button className="btn btn-primary" onClick={this.update}>{this.props.val}</button>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }
}

AppP.propTypes = {
  txt: React.PropTypes.string,
  valP: React.PropTypes.number
}

AppP.defaultProps = {
  val: 0
}

export default AppP
