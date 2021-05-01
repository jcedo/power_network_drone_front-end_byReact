import { render } from '@testing-library/react';
import React, { useState } from 'react';

const logList = [
  "Expected an assignment or function call and instead saw an expression  no-unused-expressions\n",
  "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid\n",
  "Compiled with warnings.\n"
]

var myInterval;

const Log = () => {
  
  clearInterval(myInterval);

  const [logText, setLogText] = useState('');

  myInterval = setInterval(() => {
    Math.random()
    setLogText(logText + logList[Math.trunc((Math.random()*10)%3)]);
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