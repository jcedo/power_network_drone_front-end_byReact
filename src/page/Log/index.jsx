import { render } from '@testing-library/react';
import React, { useState } from 'react';

const logList = [
  "Expected an assignment or function call and instead saw an expression  no-unused-expressions\n",
  "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid\n",
  "Compiled with warnings.\n",
  "-------------------------------------------------------\n"
]

var myInterval;

const Log = () => {

  // TODO: 布局分为三块，目前写好的部分放左上侧，该部分显示故障图片(可进行放缩和恢复)和文字，右上侧标注各故障类型，底侧判断故障类型
  
  clearInterval(myInterval);

  const [logText, setLogText] = useState('');

  myInterval = setInterval(() => {
    Math.random()
    setLogText(logText + logList[Math.trunc((Math.random()*10)%4)]);
  }, 2000)

  const renderLog = (value) => {
    const logTextList = value.split('\n');
    return logTextList.map((val) => <p>{val}</p>)
  }

  return (
    <div
      style={{textAlign: 'left'}}
    >{renderLog(logText)}</div>
  )
}

export default Log;