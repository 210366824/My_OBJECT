import React, { Component } from 'react';
import '../App.css';
import { Button, Menu, Dropdown, Icon, Input, Table } from 'antd';

function handleMenuClick(e) {
    console.log('click', e);
}



const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

<Table dataSource={dataSource} columns={columns} />


class App extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <div className="biaoge">
                <div>
                    <table>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>address</th>
                        </tr>
                        <tr>
                            <td>胡彦斌</td>
                            <td>21</td>
                            <td>西湖区湖底公园1号</td>
                        </tr>
                        <tr>
                            <td>胡彦斌</td>
                            <td>21</td>
                            <td>西湖区湖底公园1号</td>
                        </tr>
                        <tr>
                            <td>胡彦斌</td>
                            <td>21</td>
                            <td>西湖区湖底公园1号</td>
                        </tr>
                    </table>
                </div>
            </div>

        );
    }
}

export default App;
