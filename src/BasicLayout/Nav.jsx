import React from 'react';
import './index.css';

import { Menu, Switch } from 'antd';
// import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
import { 
    VideoCameraTwoTone, 
    PieChartTwoTone, 
    FundTwoTone, 
    ProjectTwoTone, 
    ToolTwoTone } 
from '@ant-design/icons';

const Nav = () => {
    const { SubMenu } = Menu;

    class App extends React.Component {
        state = {
            theme: 'dark',
            current: '1',
        };

        changeTheme = value => {
            this.setState({
            theme: value ? 'dark' : 'light',
            });
        };

        handleClick = e => {
            console.log('click ', e);
            this.setState({
            current: e.key,
            });
        };

        render() {
            return (
            <>
                {/* <Switch
                checked={this.state.theme === 'dark'}
                onChange={this.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
                />
                {/* <br />
                <br /> */} 
                <Menu
                className='menu'
                // theme={this.state.theme}
                theme='light'
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                >

                    <SubMenu className='submenu' key="sub1" icon={<PieChartTwoTone />} title="无人机操作区">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu className='submenu' key="sub2" icon={<VideoCameraTwoTone />} title="实 时 视 频">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        {/* <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu> */}
                    </SubMenu>
                    <SubMenu className='submenu'  key="sub3" icon={<FundTwoTone />} title="路 径 轨 迹">
                        <Menu.Item key="9">Option 5</Menu.Item>
                        <Menu.Item key="10">Option 6</Menu.Item>
                        <Menu.Item key="11">Option 7</Menu.Item>
                        <Menu.Item key="12">Option 8</Menu.Item>
                        {/* <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 7</Menu.Item>
                            <Menu.Item key="12">Option 8</Menu.Item>
                        </SubMenu> */}
                    </SubMenu>
                    <SubMenu className='submenu' key="sub4" icon={<ProjectTwoTone />} title="状态及参数">
                        <Menu.Item key="13">Option 5</Menu.Item>
                        <Menu.Item key="14">Option 6</Menu.Item>
                        <Menu.Item key="15">Option 7</Menu.Item>
                        <Menu.Item key="16">Option 8</Menu.Item>
                        {/* <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="15">Option 7</Menu.Item>
                            <Menu.Item key="16">Option 8</Menu.Item>
                        </SubMenu> */}
                    </SubMenu>
                    <SubMenu className='submenu' key="sub5" icon={<ToolTwoTone />} title="故 障 信 息">
                        <Menu.Item key="17">Option 5</Menu.Item>
                        <Menu.Item key="18">Option 6</Menu.Item>
                        <Menu.Item key="19">Option 7</Menu.Item>
                        <Menu.Item key="20">Option 8</Menu.Item>
                        {/* <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="19">Option 7</Menu.Item>
                            <Menu.Item key="20">Option 8</Menu.Item>
                        </SubMenu> */}
                    </SubMenu>
                </Menu>
            </>
            );
        }
    }
    return (<App />);
}

export default Nav;