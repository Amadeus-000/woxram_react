// import './SearchMenu.css';
import { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import axios from 'axios';


const SearchExamples = () => {
    const DivSE=styled("div")({
        display:"flex",
        flexWrap: "wrap",
        paddingRight:"0.5rem",
        paddingLeft:"0.5rem",
        fontSize:"0.8rem"
    });

    const [examples, setExamples] = useState([]);
    const [isOpened, setIsOpened] = useState(false);
    // let result=[];
    useEffect(() => {
        axios.get('https://woxram.com/django/api/randsearchexample/'
        )
        .then(function (response) {
            console.log(response.data);
            // const result=response.data;
            setExamples(response.data);
            console.log(examples)
        })
        .catch(function (error) {
                console.log(error);
        });
    }, []);
    const toggleOpend=()=>{
        setIsOpened(!isOpened);
    };
    const Examples=()=>
        examples.map((example)=>{
            return (
                <>
                <div style={{marginRight:"1rem"}}><a href={example[1]}>{example[0]}</a></div>
                </>
            );
        });
    return (
        <>
            <div onClick={toggleOpend} style={{textAlign:"center",fontSize:"1.2rem",textDecoration:"underline",color:"blue"}}>検索例</div>
            <div>
            <details open={isOpened}>
                <summary></summary>
                <hr/>
                <DivSE><Examples /></DivSE>
                <hr/>
            </details>
            </div>
        </>
    );
};

export default SearchExamples;