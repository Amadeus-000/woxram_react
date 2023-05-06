
import styled from "@emotion/styled";
import { useState } from "react";
import {AiOutlineCopy, AiOutlineTwitter} from 'react-icons/ai';



const TweetMemo=(props)=>{
    const Link = styled("a")({
        textDecoration: "none!important",
    });
    const encodeString = (str) => {
        return btoa(str);
    }

    const CopyToClipboardButton = ({ text }) => {
        const [msg, setMsg]=useState("コピー　");
        const [color,setColor]=useState("green");
        const handleCopy = async () => {
          try {
            await navigator.clipboard.writeText(text);
            console.log("Text copied to clipboard");
            setMsg("コピー済　");
            setColor("black")
          } catch (err) {
            console.error("Failed to copy text: ", err);
          }
        };
      
        return <span  onClick={handleCopy} style={{display: 'flex', alignItems: 'center'}}><AiOutlineCopy color={color} size={20}/>{msg}</span>;
      };
      
    
    const br="%0A";
    const memo=encodeString( props.public_record_id+"/"+props.chapter_num+"/"+props.start_pos+"/"+props.end_pos+"/"+(props.color==="red"?0:1) );
    const url="https://woxram.com/?memo="+memo;
    const shareurl="https://twitter.com/intent/tweet?text="+props.keyword+br+"&url="+url;
    return(
        <>
            {props.color==="red" && <div style={{display:"flex", fontSize:"75%",marginTop:"3px"}}>
                <CopyToClipboardButton text={url}/>
                <Link href={shareurl} style={{display: 'flex', alignItems: 'center',color:"#1da1f2"}} target="_blank" rel="noopener"><AiOutlineTwitter size={20}/>ツイート</Link>
            </div>}
        </>
    );
};

export default TweetMemo;