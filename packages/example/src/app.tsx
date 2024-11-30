import ReactAntBaiduPanInput from '@jswork/react-ant-baidu-pan-input/src/main';
import '@jswork/react-ant-baidu-pan-input/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">Build Time: {BUILD_TIME}</div>
      <ReactAntBaiduPanInput
        defaultValue={'链接: https://pan.baidu.com/s/18vxz9B43rdAVTQ8QhmJ_ng 提取码: 1goo'}
        onChange={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
}

export default App;
