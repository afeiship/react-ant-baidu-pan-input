# react-ant-baidu-pan-input
> Baidu pan input for antd.

## installation
```shell
npm install -S @feizheng/react-ant-baidu-pan-input
```

## update
```shell
npm update @feizheng/react-ant-baidu-pan-input
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| onChange  | func   | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-baidu-pan-input/dist/style.scss";

  // customize your styles:
  $react-ant-baidu-pan-input-options: ()
  ```
2. import js
  ```js
  import ReactAntBaiduPanInput from '@feizheng/react-ant-baidu-pan-input';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-baidu-pan-input/

## resources
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

## todos
- [ ] Add: semver number for every build files.
- [ ] Add: need output css files.
- [ ] Add: PWA support for docs.
- [ ] Add: source.map file for dist(`you can upload for production debug`).
- [ ] BUG: npm run dev will clean dist.
