import { useParams } from "react-router-dom";
import './Detail.css';
import Amazon from '../components/project/Amazon';

function Detail(){
    const urldata=useParams();
    const getDetail=(data:string)=>{
        switch(data){
            case 'img2' :return <Amazon />
        }
    }
    return(
        <div className="detail">
            <div className="detail_img">
                <img src={process.env.PUBLIC_URL+`/${urldata.url}.jpg`} />
            </div>
            <div className="detail_text">

                {getDetail(urldata.url)}
            </div>
        </div>
        
    )

}

export default Detail;