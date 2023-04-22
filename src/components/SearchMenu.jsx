import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useLocation, useNavigate } from 'react-router-dom';


import { Grid, Container, Checkbox} from '@mui/material';
import {FormControl, Select, MenuItem, InputLabel} from '@mui/material';
import { Tooltip, IconButton } from "@mui/material";
import { AiOutlineSearch, AiOutlinePlus, AiFillQuestionCircle} from 'react-icons/ai';

import './SearchMenu.css';

const RoundedInput = styled("input")({
    borderRadius: "50px",
    padding: "10px",
    paddingLeft: "20px",
    marginBottom: "30px",
    width: "75%",
    fontSize: "18px",
});
const SearchButton = styled(Button)({
    width:"50%",
    borderRadius:"50px",
    margin:"20px"
});

const SearchMenu = (props) => {

    // クエリパラメータを取得
    let firststateSample=true;
    let firststateDlsite=true;
    const search=useLocation().search;
    const query=new URLSearchParams(search);
    if(query.get("keywords")!==null){
        console.log("keywords: "+query.get("keywords"));
        if(query.get("sample")=='on'){
            firststateSample=true;
        }else{
            firststateSample=false;
        }
        if(query.get("dlsite")=='on'){
            firststateDlsite=true;
        }else{
            firststateDlsite=false;
        }
    }
    let order=0;
    if(query.get("order")!==null){
        order=Number(query.get("order"));
        console.log("order: "+order);
    };

    // チェックボックス、セレクトボックスのデフォルト値を設定
    const [isSample, setIsSample] = useState(firststateSample);
    const [isDlsite, setIsDlsite] = useState(firststateDlsite);
    let isXjoin=true;

    // クエリパラメータをURLにセットする関数
    const navigate = useNavigate();
    const setQueryParam = (key,value) => {
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set(key, value);
        navigate({ search: queryParams.toString() });
    };
    const setQueryParams = () => {
        deleteQueryParam();
        if(isSample){setQueryParam("sample","on")}
        if(isDlsite){setQueryParam("dlsite","on")}
        if(order==0){order=1}
        setQueryParam("order",order);
    };
    const deleteQueryParam = () => {
        navigate({ search: '' });
    };


    // Enterキーの押下を検知
    const [composing, setComposition] = useState(false);
    // const startComposition = () => setComposition(true);
    // const endComposition = () => setComposition(false);
    const onKeydown = (key) => {
        switch (key) {
            case "Enter":
                if(composing) break;
                console.log('Enter key pressed');
                setQueryParams();
                getWoxramAPI();
                break;
        }
    };

    // APIの呼び出し
    const getWoxramAPI = () => {
      axios.get('http://133.130.96.237/dnbapi/woxsimulation/')
        .then(function (response) {
            const result = JSON.stringify(response.data);
            props.showResult(result)
        })
    };

    // 詳細検索の開閉
    const [detailOpened, setDetailOpened] = useState(true);
    const toggleDetailOpened = () => setDetailOpened(!detailOpened);

    // 並び順
    const orderMenuItems=[
        {id:1, name:"追加日(昇順)", value:1},
        {id:2, name:"追加日(降順)", value:2},
        {id:3, name:"発売日(昇順)", value:3},
        {id:4, name:"発売日(降順)", value:4},
    ];

    // チェックボックス
    const toggleSample = () => {
        setIsSample(!isSample);
    };
    const toggleDlsite = () => {
        setIsDlsite(!isDlsite);
    };
    const toggleXjoin = () => {isXjoin = !isXjoin};

    // 並び順の選択肢
    const selectItems=orderMenuItems.map((item) => {
        return (
            <MenuItem key={item.id} value={item.value}>{item.name}</MenuItem>
        );
    });
    const [selectedValue, setSelectedValue] = useState(order);
    const handleChange = (e) => {
        console.log(e.target.value)
        setSelectedValue(e.target.value);
    };

    return (
        <>
            <Grid container justifyContent="center">
                <RoundedInput type="text" onKeyDown={(e)=>{onKeydown(e.key)}}/>
                <AiOutlinePlus style={{margin:"7px 10px"}} onClick={toggleDetailOpened} size={30}/>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
                {/* <Button variant="contained" color="primary" size="large" sx={{width:"50%",borderRadius:"50px",margin:"20px"}}><AiOutlineSearch /></Button> */}
                <SearchButton variant="contained" color="primary" size="large" onClick={()=>{onKeydown("Enter")}}><AiOutlineSearch size={20}/></SearchButton>
            </Grid>
            <details open={detailOpened}>
                <summary></summary>
                <hr/>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel className="custom-input-label">並び</InputLabel>
                    <Select labelId="demo-select-small" id="demo-select-small" value={selectedValue} label="Age" onChange={handleChange}>
                        {selectItems}
                    </Select>
                </FormControl>
                <p>
                    <label>サンプルAI書き起こしを含む　<Checkbox defaultChecked={isSample} color="primary" onChange={toggleSample} /></label>
                    <Tooltip title="AIで作品サンプルを書き起こしたものを検索に含む。" arrow><IconButton><AiFillQuestionCircle /></IconButton></Tooltip>
                </p>
                <p>
                    <label>DLsiteの作品ページを検索に含む　<Checkbox defaultChecked={isDlsite} color="primary" onChange={toggleDlsite}/></label>
                    <Tooltip title="DLsiteの作品ページのタイトル、説明を検索の内容に含む" arrow><IconButton><AiFillQuestionCircle /></IconButton></Tooltip>
                </p>
                <p>
                    <label>Xジョイン　<Checkbox defaultChecked={isXjoin} color="primary" onChange={toggleXjoin}/></label>
                    <Tooltip title="Xジョイン" arrow><IconButton><AiFillQuestionCircle /></IconButton></Tooltip>
                </p>
            </details>
        </>
    );
};

export default SearchMenu;