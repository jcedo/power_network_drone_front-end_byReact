import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeFilled,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import Nav from './Nav';
import './index.css';


//主布局
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuKey, setMenuKey] = useState('1');

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onSelect = ({ key }) => {
    const { selectPage } = props;
    setMenuKey(key);
    selectPage(key);
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
        <div className="logo">
          无人机平台
        </div>
        <Menu theme="dark" defaultSelectedKeys={[menuKey]} mode="inline" onSelect={onSelect}>
        <Menu.Item key="1" icon={<HomeFilled />}>
            主界大屏
          </Menu.Item>
          {/* <Menu.Item key="2" icon={<PieChartOutlined />}>
            操作界面
          </Menu.Item> */}
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            视频监控
          </Menu.Item>
          <Menu.Item key="4" icon={<FileOutlined />}>
            路径规划
          </Menu.Item>
          <Menu.Item key="5" icon={<TeamOutlined />}>
            无人机状态
          </Menu.Item>
          <Menu.Item key="6" icon={<UserOutlined />}>
            故障检测
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu> */}
        </Menu>
      </Sider>
      
      <Layout className='layout'>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {/* TODO: 我的预想是把五个模块分页的头部单独设计成可以拉取其他分页的一部分内容共同展示，
                    比如视频监控可以显示轨迹图和无人机、电塔的参数； *另外留出一块地方用作登录注册* */}
          <div className='menu'>主菜单导航</div>
          <Nav className='nav'/>
          {/* <div className='more'>了解更多 &gt;&gt;</div> */}
        </Header>

        <Content className="layout-content">
          {props.children}
        </Content>

        <Footer className="layout-footer">Power Grid Drone ©2021 Created by The Big data Research Group, Guangdong University Of Technology.</Footer>
      </Layout>
    </Layout>
  )
}

export default BasicLayout;
