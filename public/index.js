import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntBaiduPanInput from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-baidu-pan-input">
        <ReactAntBaiduPanInput
          defaultValue={
            '链接:https://pan.baidu.com/s/1iyNPAJ7guBjZqtRZdht2cA  密码:fr1o'
          }
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
