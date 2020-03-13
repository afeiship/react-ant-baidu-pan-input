import ReactAntBaiduPanInput from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactAntBaiduPanInput
          defaultValue={
            '链接:https://pan.baidu.com/s/1iyNPAJ7guBjZqtRZdht2cA  密码:fr1o'
          }
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
