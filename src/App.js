import React,{ useState} from 'react';
import BasicLayout from './BasicLayout';
import './App.css';
import Video from './page/Video';
import Status from './page/Status';
import Path from './page/Path';
import Control from './page/Control';
import Log from './page/Log';

// 将key与页面在此一一对应即可
const pageList = {
  '1': <Status/>,
  '2': <Path/>,
  '3': <Video/>,
  '4': <Control/>,
  '5': <Log/>
}


const App = () => {

  const [pageKey, setPageKey] = useState('1');

  // 根据BasicLayout的选择改变显示的页面
  const selectPage = (key = '1') => {
    setPageKey(key);
  }

  const renderPage = (key) => {
    if(key in pageList){
      return pageList[key];
    }
    return <div>No the Page</div>;
  }

  // html
  return (
    <div className="App">
      <BasicLayout selectPage={selectPage}>
        {renderPage(pageKey)}
      </BasicLayout>
    </div>
  );
}

export default App;
