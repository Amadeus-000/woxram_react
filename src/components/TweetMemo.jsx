
import styled from "@emotion/styled";
import {BiMemoryCard} from 'react-icons/bi';

const TweetMemo=(props)=>{
    const Link = styled("a")({
        textDecoration: "none!important",
    });
    const encodeString = (str) => {
        return btoa(str);
    }
    
    const br="%0A";
    const memo=encodeString( props.public_record_id+"/"+props.chapter_num+"/"+props.start_pos+"/"+props.end_pos+"/"+(props.color==="red"?0:1) );
    const url="https://woxram.com/?memo="+memo;
    const shareurl="https://twitter.com/intent/tweet?text="+props.keyword+br+"&url="+url;
    return(
        <div>
            {props.color==="red" &&<Link href={shareurl} style={{display: 'flex', alignItems: 'center'}} target="_blank" rel="noopener"><BiMemoryCard color='blue' size={20}/>メモ</Link>}
        </div>
    );
};

export default TweetMemo;