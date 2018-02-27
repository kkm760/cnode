import React,{Component} from "react";
import {Card} from "antd";
class PublicCard extends Component{
    render(){
        let {data} = this.props;
        return(
            <div className="warp_one">
                {data.map((item,index)=>(
                <Card
                        title={item.title}
                        loading={false}
                        type="inner"
                        key={index}
                    > 
                        <div
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            >
                        </div>
                    </Card>
                ))}
            </div>
        )
    }
}
export default PublicCard;