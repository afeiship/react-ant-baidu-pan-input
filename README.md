# react-ant-baidu-pan-input
> Baidu pan input for antd.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-baidu-pan-input
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-baidu-pan-input/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-baidu-pan-input/dist/style.scss";

  // customize your styles:
  $react-ant-baidu-pan-input-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntBaiduPanInput from '@jswork/react-ant-baidu-pan-input';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-baidu-pan-input">
          <ReactAntBaiduPanInput
            defaultValue={
              '链接: https://pan.baidu.com/s/18vxz9B43rdAVTQ8QhmJ_ng 提取码: 1goo'
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

  ```

## documentation
- https://afeiship.github.io/react-ant-baidu-pan-input/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-baidu-pan-input/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-baidu-pan-input
[version-url]: https://npmjs.org/package/@jswork/react-ant-baidu-pan-input

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-baidu-pan-input
[license-url]: https://github.com/afeiship/react-ant-baidu-pan-input/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-baidu-pan-input
[size-url]: https://github.com/afeiship/react-ant-baidu-pan-input/blob/master/dist/react-ant-baidu-pan-input.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-baidu-pan-input
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-baidu-pan-input
