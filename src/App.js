import React,{ useState} from 'react';
import BasicLayout from './BasicLayout';
import './App.css';
import Video from './page/video/index.js';

// 将key与页面在此一一对应即可
const pageList = {
  '1': <Video/>
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

  return (
    <div className="App">
      <BasicLayout selectPage={selectPage}>
        Power Grid Drone Project
        {renderPage(pageKey)}
      </BasicLayout>
    </div>
  );
}

export default App;
