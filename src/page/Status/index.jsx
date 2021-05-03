import React, { Component } from 'react';

import './index.css'
import { Divider } from 'antd';
import { Carousel } from 'antd';
import { Descriptions } from 'antd';

// 走马灯
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

// 无人机状态分页面
const Status = () => {
    return (
        <div className='status'>
          <Divider className='divider'>参数面板</Divider>
          {/* 走马灯组件 */}
          <Carousel className='carousel' effect="fade">
              {/* 单个灯 */}
              <div className='page'>
                {/* 描述列表 */}
                <Descriptions className='title' title="当前设备">
                  <Descriptions.Item className='item' label="编号">{1}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数1">{222}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">{333}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">{444}}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">{444}}</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="飞行参数">
                  <Descriptions.Item className='item' label="俯仰(pitch)">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="横滚(roll)">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="航向(yaw)">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="对地高度(Height)">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
              </div>
              <div className='page'>
                {/* 描述列表 */}
                <Descriptions className='title' title="当前设备">
                  <Descriptions.Item className='item' label="编号">{2}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数1">{222}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">{333}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">{444}}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">{444}}</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="飞行参数">
                  <Descriptions.Item className='item' label="俯仰(pitch)">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="横滚(roll)">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="航向(yaw)">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="对地高度(Height)">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
              </div>
              <div className='page'>
                {/* 描述列表 */}
                <Descriptions className='title' title="当前设备">
                  <Descriptions.Item className='item' label="编号">{3}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数1">{222}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">{333}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">{444}}</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">{444}}</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="飞行参数">
                  <Descriptions.Item className='item' label="俯仰(pitch)">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="横滚(roll)">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="航向(yaw)">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="对地高度(Height)">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
                <Descriptions className='title' title="设备型号">
                  <Descriptions.Item className='item' label="参数1">111</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数2">222</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数3">333</Descriptions.Item>
                  <Descriptions.Item className="item" label="参数4">444</Descriptions.Item>
                </Descriptions>
              </div>
              <div className='page'>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          
          {/* 显示状态参数的六个子组件 */}
          {/* <div className='par'>
            <Parameter />
            <Parameter />
            <Parameter />
            <Parameter />
            <Parameter />
            <Parameter />
          </div> */}

        </div>
    )
}

export default Status;