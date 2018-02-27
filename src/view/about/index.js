import React,{Component} from "react";
import data from "./data";
import PublicCard from "../publicCard";

class About extends Component{
    render(){
        return (<PublicCard 
                data = {data}
            />)
    }
}

export default About;