import React from 'react'
import styled from 'styled-components'

import { inject, observer } from 'mobx-react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link'
const { Header, Content, Footer } = Layout;

const Title = styled.h1`
  color: red;
  font-size: 25px;
`
@inject('store') @observer
class Index extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Link href="/about">
                            <a>Content</a>

                        </Link>
                        {this.props.store.a}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout >
        )
    }
}
// const Index = (props) => {
//     console.log(props)
//     return (<Layout className="layout">
//         <Header>
//             <div className="logo" />
//             <Menu
//                 theme="dark"
//                 mode="horizontal"
//                 defaultSelectedKeys={['2']}
//                 style={{ lineHeight: '64px' }}
//             >
//                 <Menu.Item key="1">nav 1</Menu.Item>
//                 <Menu.Item key="2">nav 2</Menu.Item>
//                 <Menu.Item key="3">nav 3</Menu.Item>
//             </Menu>
//         </Header>
//         <Content style={{ padding: '0 50px' }}>
//             <Breadcrumb style={{ margin: '16px 0' }}>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>List</Breadcrumb.Item>
//                 <Breadcrumb.Item>App</Breadcrumb.Item>
//             </Breadcrumb>
//             <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>
//             Ant Design ©2018 Created by Ant UED
//     </Footer>
//     </Layout>)
// }


export default Index