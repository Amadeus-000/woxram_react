
import styled from "@emotion/styled";
import { useState } from "react";
import {AiOutlineCopy, AiOutlineTwitter} from 'react-icons/ai';
import axios from "axios";

const TweetMemo=(props)=>{
    const Link = styled("a")({
        textDecoration: "none!important",
    });

    const CopyToClipboardButton = () => {
      const handleCopy = async () => {
        try {
          const url="https://woxram.com/django/account/getmemoid/?public_record_id="+props.public_record_id+"&chapter_num="+props.chapter_num+"&start_pos="+props.start_pos+"&end_pos="+props.end_pos+"&color="+props.color;
          console.log(url);
          axios.get(url)
          .then((res)=>{
            navigator.clipboard.writeText("https://woxram.com/?memo="+res.data);
            setMsg("コピー済　");
            setColor("black");
            setShareurl("https://twitter.com/intent/tweet?text=https://woxram.com/?memo="+res.data);
            console.log("Text copied to clipboard");
          });
        } catch (err) {
          console.error("Failed to copy text: ", err);
        }
      };
      return <span  onClick={handleCopy} style={{display: 'flex', alignItems: 'center'}}><AiOutlineCopy color={color} size={20}/>{msg}</span>;
    };

    const [msg, setMsg]=useState("コピー　");
    const [color,setColor]=useState("green");
    // const br="%0A";
    const [shareurl,setShareurl]=useState("");
    // const memo=encodeString( props.public_record_id+"/"+props.chapter_num+"/"+props.start_pos+"/"+props.end_pos+"/"+(props.color==="red"?0:1) );
    // const url="https://woxram.com/?memo="+memo;
    // const shareurl="https://twitter.com/intent/tweet?text="+props.keyword+br+"&url="+url;
    return(
        <>
            {props.color==="red" && <div style={{display:"flex", fontSize:"0.75rem",marginTop:"3px"}}>
                <CopyToClipboardButton/>
                {shareurl ? <Link href={shareurl} style={{display: 'flex', alignItems: 'center',color:"#1da1f2"}} target="_blank" rel="noopener"><AiOutlineTwitter size={20}/>ツイート</Link>:<></>}
            </div>}
        </>
    );
};

export default TweetMemo;