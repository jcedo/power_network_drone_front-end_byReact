import React,{ useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './index.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [menuKey, setMenuKey] = useState('1');

    const onCollapse = (collapsed) => {
      setCollapsed(collapsed);
    };

    const onSelect = ({key}) => {
      const { selectPage } = props;
      setMenuKey(key);
      selectPage(key);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={[menuKey]} mode="inline" onSelect={onSelect}>
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                视频监控
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <Menu.Item key="3" icon={<DesktopOutlined />}>
                Option 3
              </Menu.Item>
              {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                {props.children}
              </Content>
            <Footer style={{ textAlign: 'center' }}>Power Grid Drone ©2021 Created by </Footer>
          </Layout>
      </Layout>
    )
}

export default BasicLayout;


