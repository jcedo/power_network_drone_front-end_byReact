import React from 'react';
import './index.css';

import { Layout } from 'antd';
import { Card, Row, Col, Divider } from 'antd';

import { Image } from 'antd';


//布局子组件
const { Header, Footer, Sider, Content } = Layout;

//栅格子组件
const style = { background: '#0092ff', padding: '2px 0' };

// 走马灯-自动切换子组件
const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '27.2rem',
    textAlign: 'center',
    background: '#364d79',
  };


// 路径规划模块分页面
const Path = () => {
    // TODO: 无人机、电塔参数及轨迹图像这些需要调用后端接口的数据进行处理 
    // （PS: 我的设想是添加能放缩/恢复原始图像大小、记录开始时间+到达各电塔飞行时间、用鼠标指定图像中电塔的前后顺序和获取坐标位置的事件函数）
    const axis = [123,456];
    const Height = [20,25];
    return (
        <div className='path'>
            {/* 布局 */}
            <Layout className='path-layout'>
                <Sider className='sider'>
                    {/* 卡片 */}
                    <Card className='card' size="small" title="无人机定位" extra={<a href="#">More</a>} style={{ width: 200 }} headStyle={{ fontWeight: 700 }}>
                        <div id='card1'>
                        <p style={{fontWeight: 700}}>编号1</p>
                        <p>
                            坐标: {axis[0] + ', ' + axis[1]}
                        </p>
                        <p>
                            当前高度:  {Height[0]}m
                        </p>
                        <p>
                            距离下一个电塔:  {}m
                        </p>
                        </div>

                        <div id='card2'>
                        <p style={{fontWeight: 700}}>编号2</p>
                        <p>坐标: {axis[0] + ', ' + axis[1]}</p>
                        <p>当前高度:  {Height[0]}m</p>
                        <p>距离下一个电塔:  {}m</p>
                        </div>
                        
                        <div id='card3'>
                            <p style={{fontWeight: 700}}>编号3</p>
                            <p>坐标: {axis[0] + ', ' + axis[1]}</p>
                            <p>当前高度:  {Height[0]}m</p>
                            <p>距离下一个电塔:  {}m</p>
                        </div>
                        
                        <div id='card4'>
                            <p style={{fontWeight: 700}}>编号4</p>
                            <p>坐标: {axis[0] + ', ' + axis[1]}</p>
                            <p>当前高度:  {Height[0]}m</p>
                            <p>距离下一个电塔:  {}m</p>
                        </div>
                        
                        <div id='card5'>
                            <p style={{fontWeight: 700}}>编号5</p>
                            <p>坐标: {axis[0] + ', ' + axis[1]}</p>
                            <p>当前高度:  {Height[1]}m</p>
                            <p>距离下一个电塔:   {}m</p>
                        </div>
                        
                        <div id='card6'>
                            <p style={{fontWeight: 700}}>编号6</p>
                            <p>坐标: {axis[0] + ', ' + axis[1]}</p>
                            <p>当前高度:{Height[1]}m</p>
                            <p>距离下一个电塔: {}m</p>
                        </div>   
                    </Card>
                </Sider>
                <Layout className='layout'>
                    {/* <Header>Header</Header> */}
                    <Content className='content'>
                        <div className='tower'>
                            {/* 图片预览 */}
                            <Image className='image' width={415} height={305} src="#"/>
                        </div>
                        <div className='route'>
                            {/* 图片预览  */}
                            <Image className='image' width={415} height={305} src="#"/>
                        </div>
                    </Content>
                    <Footer className='footer'>
                        {/* 栅栏 */}
                        <Divider className='divider' orientation="left">电塔定位</Divider>
                        <Row className='row' gutter={5}>
                            <Col className='col' span={5}>
                                <Card title="电塔1" bordered={true}
                                // size='small'
                                headStyle={{height: '1rem', textAlign: 'left',fontSize: 10, fontWeight: 700}} 
                                bodyStyle={{height: '1rem', fontSize: 8}}
                                >
                                {132},  {196}
                                </Card>
                            </Col>
                            <Col className='col' span={5}>
                                <Card title="电塔2" bordered={false}
                                // size='small'
                                headStyle={{height: '1rem', textAlign: 'left',fontSize: '10px', fontWeight: 700}} 
                                bodyStyle={{height: '2rem', fontSize: 8}}
                                >
                                {132},  {196}
                                </Card>
                            </Col>
                            <Col className='col' span={5}>
                                <Card title="电塔3" bordered={false}
                                // size='small'
                                headStyle={{height: 1, textAlign: 'left',fontSize: 10, fontWeight: 700}} 
                                bodyStyle={{height: 2, fontSize: 8}}
                                >
                                {132},  {196}
                                </Card>
                            </Col>
                            <Col className='col' span={5}>
                                <Card title="电塔4" bordered={false}
                                // size='small'
                                headStyle={{height: 1, textAlign: 'left',fontSize: 10, fontWeight: 700}} 
                                bodyStyle={{height: 2, fontSize: 8}}
                                >
                                {132},  {196}
                                </Card>
                            </Col>
                            <Col className='col' span={5}>
                                <Card title="电塔5" bordered={false}
                                // size='small'
                                headStyle={{height: 1, textAlign: 'left',fontSize: 10, fontWeight: 700}} 
                                bodyStyle={{height: 2, fontSize: 8}}
                                >
                                {132},  {196}
                                </Card>
                            </Col>
                            <Col className='col' span={5}>
                                <Card title="电塔6" bordered={false}
                                // size='small'
                                headStyle={{textAlign: 'left', fontSize: 10, fontWeight: 700}} 
                                bodyStyle={{height: 2, fontSize: 8}}
                                >
                                {132},  {196}
                                </Card>
                            </Col>
                        </Row>
                        
                    </Footer>
                </Layout>
            </Layout>
        </div> 
    )
}

export default Path;