import { Grid } from '@mui/material';
import topImg from "../assets/images/woxram_logo_regular_400x120.png"
import styled from "@emotion/styled";


const TopImg = () => {
    const urls=[
        'https://woxram.com/?keyword=%E3%81%8A%E3%81%A1%E3%82%93%E3%81%A1%E3%82%93+%E7%A8%AE%E4%BB%98%E3%81%91&order=2&sample=on&dlsite=on',
        'https://woxram.com/?keyword=%E3%83%94%E3%83%A5%E3%83%83%E3%83%94%E3%83%A5+%E5%B0%84%E7%B2%BE&order=2&sample=on',
        'https://woxram.com/?keyword=%E3%83%98%E3%82%B3%E3%83%98%E3%82%B3%20%E3%82%BB%E3%83%83%E3%82%AF%E3%82%B9&order=2&sample=on&dlsite=on',
        'https://woxram.com/?keyword=%E3%81%AE%E3%82%BB%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E7%9B%B8%E6%89%8B&order=2&sample=on&dlsite=on',
        'https://woxram.com/?keyword=%E3%81%8A%E3%81%A1%E3%82%93%E3%81%A1%E3%82%93%E3%82%BB%E3%83%83%E3%82%AF%E3%82%B9&order=4&sample=on&dlsite=on',
        'https://woxram.com/?keyword=%E7%A7%81%E3%81%A8%E3%82%BB%E3%83%83%E3%82%AF%E3%82%B9%E3%81%97%E3%81%9F%E3%81%84&order=2&sample=on&dlsite=on',
        'https://woxram.com/?keyword=%E3%81%88%E3%81%A3%E3%81%A1%E3%81%AE%E7%B7%B4%E7%BF%92&order=2&sample=on',
        'https://woxram.com/?keyword=%E3%83%9E%E3%83%9E%E3%81%AB%E3%81%95%E3%82%8C%E3%81%A1%E3%82%83%E3%81%86&order=2&sample=on&dlsite=on',
        'https://woxram.com/?keyword=%E3%82%BB%E3%83%83%E3%82%AF%E3%82%B9%E3%83%89%E3%83%BC%E3%83%AB&order=2&sample=on&dlsite=on',
        'https://woxram.com/?keyword=%E5%B0%84%E7%B2%BE%E7%94%A8&order=2&sample=on',
        'https://woxram.com/?keyword=%E8%87%AA%E5%88%86%E3%82%88%E3%82%8A%E5%BC%B1%E3%81%84&order=2&sample=on',
        'https://woxram.com/?keyword=%E3%82%B4%E3%83%A0%E3%81%A0%E3%81%91%E3%81%AF&order=2&sample=on',
        'https://woxram.com/?keyword=%E8%B5%A4%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E3%81%8A%E9%83%A8%E5%B1%8B&order=2&sample=on',
        'https://woxram.com/?keyword=%E8%B2%A0%E3%81%91%E3%81%A1%E3%82%83%E3%81%88&order=2&sample=on',
        'https://woxram.com/?keyword=%E9%A1%94%E3%81%AB%E3%81%8B%E3%81%91%E3%81%A6&order=2&sample=on',
        'https://woxram.com/?keyword=%E3%81%A1%E3%82%93%E3%81%BD%E7%A9%B4&order=2&sample=on',
        'https://woxram.com/?keyword=%E3%81%BB%E3%82%89%E3%82%A4%E3%82%B1&order=2&sample=on',
        'https://woxram.com/?keyword=%E5%B0%84%E7%B2%BE%E3%81%97%E3%81%9F%E3%82%89%E3%83%80%E3%83%A1&order=2&sample=on',
        'https://woxram.com/?keyword=%E3%82%A4%E3%81%A3%E3%81%A1%E3%82%83%E3%81%88&order=2&sample=on',
        'https://woxram.com/?keyword=%E7%99%BD%E3%81%84%E3%81%8A%E3%81%97%E3%81%A3%E3%81%93&order=2&sample=on'
    ];
    const randSample = urls[Math.floor(Math.random() * urls.length)];
    
    const HomeImg = styled.img`
        width: 30%;
        
        @media (max-width: 768px) {
            width: 50%;
        }
    `;

    return (
        <>
            <Grid container justifyContent="center">
                <HomeImg src={topImg} alt="woxram logo"/>
            </Grid>
            <Grid container justifyContent="center">
                <div style={{marginBottom:"0.5rem"}}>Woxramはボイス・ASMRの<strong> "セリフ" </strong>を検索することができるサービスです。</div>
            </Grid>
            <Grid container justifyContent="center">
                <div style={{marginBottom:"0.5rem"}}><a href={randSample}>ランダム検索例</a></div>
            </Grid>
        </>
    );
};

export default TopImg;
