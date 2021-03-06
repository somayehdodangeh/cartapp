import React, {useState} from "react"
import {Layout,Space,Divider} from "antd";
import Panel from "../Panel/Panel";
import ListContainer from "../ListContainer/ListContainer"
import TotalPrice from "../TotalPrice/TotalPrice";

const {Content,Sider} = Layout
const Main = () =>{
    const [formData,setFormData] = useState([])
    return(
        <Layout className={`layout-container`}>
                <Sider width={500} className={`side-container`} >
                    <Panel setFormData={setFormData}/>
                </Sider>
                <Content>
                    <ListContainer data={formData}/>
                    <Divider />
                    <TotalPrice data={formData}/>
                </Content>
        </Layout>
    )
}

export default Main
