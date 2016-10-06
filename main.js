import Wrapper from './App';
import AppP from './App2';
import AppSlider from './AppSlider';
import AppDynamic from './AppDynamic';
import AppJSX from './AppJSX';

ReactDOM.render(<Wrapper />, document.getElementById('app'));
ReactDOM.render(<AppP />, document.getElementById('app2'));
ReactDOM.render(<AppSlider />, document.getElementById('app3'));
ReactDOM.render(<AppDynamic />, document.getElementById('app4'));

ReactDOM.render(<AppJSX />, document.getElementById('appjsx'));
