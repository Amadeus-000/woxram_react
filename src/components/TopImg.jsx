import topImg from "../assets/images/woxram_logo_regular_400x120.png"
import { Grid } from '@mui/material';

const TopImg = () => {
    return (
        <>
            <Grid container justifyContent="center">
                <img src={topImg} alt="woxram logo" />
            </Grid>
            <Grid container justifyContent="center">
                <p>Woxramはボイス・ASMRの<strong> "セリフ" </strong>を検索することができるサービスです。<br /><br /></p>
            </Grid>
        </>
    );
};

export default TopImg;
