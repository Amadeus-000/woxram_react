
import styled from "@emotion/styled";
import { useState } from "react";
import {AiOutlineCopy, AiOutlineTwitter} from 'react-icons/ai';
import axios from "axios";

import clipboardCopy from 'clipboard-copy';

const TweetMemo=(props)=>{
    const Link = styled("a")({
        textDecoration: "none!important",
    });

    const CopyToClipboardButton = () => {
      const handleCopy = async () => {
        // const copyClipboard=async (text)=>{
        //   await clipboardCopy(text);
        // };
        try {
          const data={
            public_record_id:props.public_record_id,
            chapter_name:props.chapter_name,
            text_fh:props.text_fh,
            keyword:props.keyword,
            text_lh:props.text_lh,
            color:props.color
          }
          console.log(data)
          const url="https://woxram.com/django/account/getmemoid/";
          axios.get(url,{params:data})
          .then((res)=>{
            // navigator.clipboard.writeText("https://woxram.com/?memo="+res.data);
            clipboardCopy("https://woxram.com/?memo="+res.data);
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