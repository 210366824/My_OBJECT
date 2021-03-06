import { Button, Icon, Layout, Menu, Select } from 'antd';
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../App.css';
import Mybiaoge from './biaoge'
import MyContent from "./content";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

class App extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    gocontent() {
        this.props.history.replace({
            pathname: '/detail'
        })
    }
    duogong(path) {
        this.props.history.replace(path)
    }
    zilogo(pathh) {
        this.props.history.replace(pathh)
    }
    render() {
        return (
            <div className="App">
                <Layout style={{ height: '100vh' }}>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        width={'256px'}
                    >
                        <div className="logo">
                            <img src='data:image/jpeg;base64,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' style={{ width: '75%' }} />
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>文档</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>QQ群</span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>组件</span></span>}>
                                <Menu.Item key="5">数字渐变</Menu.Item>
                                <Menu.Item key="6" onClick={this.duogong.bind(this, '/detail/biaoge')}>多功能表格</Menu.Item>
                                <Menu.Item key="7">分割窗口</Menu.Item>
                                <Menu.Item key="8">MarKdown编辑器</Menu.Item>
                                <Menu.Item key="9">富文本编辑器</Menu.Item>
                                <Menu.Item key="10" onClick={this.duogong.bind(this, '/detail/zilogo')}>自定义图标</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>数据上传</span></span>}>
                                <Menu.Item key="11">上传Csv</Menu.Item>
                                <Menu.Item key="12">粘贴表格数据</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="mail" /><span>EXCEL导入导出</span></span>}>
                                <Menu.Item key="13">导入EXCEL</Menu.Item>
                                <Menu.Item key="14">导出EXCEL</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>工具方法</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>指令</span>
                            </Menu.Item>
                            <SubMenu key="sub4" title={<span><Icon type="mail" /><span>多级菜单</span></span>}>
                                <Menu.Item key="16">二级-1</Menu.Item>
                                <Menu.Item key="15">二级-2</Menu.Item>
                                <Menu.Item key="17">二级-3</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, padding: '0 20px', fontSize: '15px', fontWeight: 'bold' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <span style={{ marginLeft: '5%' }} onClick={this.gocontent.bind(this)}>首页</span>
                        </Header>
                        <div>
                            <Button type="primary" style={{ width: '2%', float: "left", borderRadius: '0px', paddingLeft: '2px', background: 'white', color: 'black', border: '1px solid #ccc' }}>
                                <Icon type="left" />
                            </Button>
                            <Select
                                mode="multiple"
                                style={{ width: '96%', float: "left" }}
                                placeholder="Please select"
                                defaultValue={['首页', '工具方法', '数字渐变']}
                                onChange={handleChange}
                            >
                                {children}
                            </Select>
                            <Button type="primary" style={{ width: '2%', float: "left", borderRadius: '0px', paddingLeft: '2px', background: 'white', color: 'black', border: '1px solid #ccc' }}>
                                <Icon type="right" />
                            </Button>
                        </div>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#efefef', minHeight: 280 }}>
                            <Switch>
                                <Route path={"/detail/biaoge"} component={Mybiaoge}></Route>
                                <Route path={"/detail"} component={MyContent}></Route>
                                <Redirect to="/detail"></Redirect>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>


            </div>
        );
    }
}

export default App;
