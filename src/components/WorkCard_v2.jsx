import React from 'react';
import { Grid } from '@mui/material';
import styled from "@emotion/styled";
import TweetMemo from './TweetMemo';


const WorkCard = (props) => {
    const Unit = styled(Grid)({
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingRight: "10px",
        paddingLeft: "10px",
    
        marginTop: "30px",

        boxShadow:"2px 2px 5px 5px rgb(235, 240, 240)",
        /* overflow: hidden; */
        wordBreak:"break-word"
    });
    
    const Link = styled("a")({
        textDecoration: "none!important",
    });

    let key_num=0;
    const keywords=[];
    while( ('keyword'+String(key_num)) in props.workinfo ){
        keywords.push( JSON.parse(props.workinfo['keyword'+String(key_num)]) );
        key_num++;
    }
    console.log(keywords);
    const Maintext=(propsKeyword)=>{
        return(
            <>
            <hr />
            <Grid container justifyContent="space-between">
                <Grid item><div>{propsKeyword.keyword}　一致数 : {propsKeyword.hit_count}　<span style={{color:"gray"}}>{propsKeyword.status}</span></div></Grid>
                <Grid item><div>
                    <TweetMemo 
                        public_record_id={props.workinfo.public_record_id} 
                        start_pos={propsKeyword.start_pos}
                        end_pos={propsKeyword.end_pos}
                        keyword={propsKeyword.keyword}
                        chapter_num={propsKeyword.chapter_num}
                        color={propsKeyword.color}
                    />
                </div></Grid>
            </Grid>
            <Grid container>
                <div style={{whiteSpace: 'pre-line',fontSize:"75%"}}>  
                    {propsKeyword.text_fh}
                    <strong><span style={{color:propsKeyword.color}}>{propsKeyword.keyword}</span></strong>
                    {propsKeyword.text_lh}
                </div>
            </Grid>
            </>
        );
    };
    const MaintextSet=()=>
        keywords.map((keyword)=>{
            return(
                <>
                <Maintext 
                    keyword={keyword.keyword}
                    text_fh={keyword.text_fh}
                    text_lh={keyword.text_lh}
                    hit_count={keyword.hit_count}
                    status={keyword.status}
                    color={keyword.color}
                    start_pos={keyword.start_pos}
                    end_pos={keyword.end_pos}
                    chapter_num={keyword.chapter_num}
                />
                </>
            );
        });
    return (
        <>
            <Unit>
            <Grid container justifyContent="center" sx={{backgroundColor:"rgb(240,240,240)"}}>
                <Link href={props.workinfo.url} target="_blank" rel="noopener">
                    <div><img src={props.workinfo.url_img} style={{width:"100%"}}/></div>
                </Link>
            </Grid>
            <Grid container>
                <div><Link href={props.workinfo.url} target="_blank" rel="noopener">{props.workinfo.title}</Link></div>
            </Grid>
            <Grid container>
                <Grid item><div>{props.workinfo.circle} <span style={{color:"gray"}}>{props.workinfo.cv1}</span> {props.workinfo.scenario}</div></Grid>
            </Grid>
            <MaintextSet />
            </Unit>
        </>
    );
};

export default WorkCard;