import React,{Component} from "react";
import {Menu,Row,Col,Pagination} from "antd";
import {Link,withRouter} from "react-router-dom";
import IndexList from "./list";
let data = [
    {
        tab:"all",
        txt:"全部"
    },
    {
        tab:"good",
        txt:"精华"
    },
    {
        tab:"ask",
        txt:"问题"
    },
    {
        tab:"share",
        txt:"分享"
    },
    {
        tab:"job",
        txt:"招聘"
    },
    {
        tab:"dev",
        txt:"测试"
    }
];
class Index extends Component{
    constructor(arg){
        super(arg);
        let now = this.getNow(this.props.location);
        this.state = {
            now
        }
    }
    getNow(location){
        let now = location.pathname.split("/")[2];
        return now
    }
    shouldComponentUpdate(nextProps){
        let now = this.getNow(nextProps.location);
        if(now !== this.state.now){
            this.setState({
                now
            })
            return false
        }
        return true
    }
    render(){
        console.log(this.state.now)
        let tab = this.state.now;
        return (
            <Row className="wrap_one">
                <Col md={6} className="cbl">
                    <Menu 
                        id="indexMenu"
                        selectedKeys={[this.state.now]}
                    >
                        {data.map((item)=>{
                            return (<Menu.Item key={item.tab}>
                                    <Link to={"/index/"+item.tab}>{item.txt}</Link>
                                </Menu.Item>)
                        })}
                    </Menu>
                </Col>
                <Col md={18} className="indexList" >
                    <IndexList 
                        tab={tab}
                    />
                    
                </Col>
            </Row>
        )
    }
}

export default withRouter((props)=>{
    let {id,mode,location} = props;
    return <Index 
        mode = {mode}
        id={id}
        location={location}
    />
});