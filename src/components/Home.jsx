import React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Container } from '@mui/material';

import MenuAppBar from './MenuAppBar';
import TopImg from './TopImg';
import SearchMenu from './SearchMenu';
import WorkCard from './WorkCard';
import topImg from "../assets/images/woxram_logo_regular_400x120.png"


const theme = createTheme({
    palette: {
      primary: {
        main: "#282c34", // この色は任意のカラーコードに置き換えることができます。
      },
    },
    components: {
          MuiDrawer: {
              styleOverrides: {
                  paper: {
                      width: 300,
                      backgroundColor: "#282c34", // Drawerの背景色を変更
                      color: "#FFFFFF", // Drawer内のテキストの色を変更
                  },
              },
          },
      },
  });

  const keywords=[
    {
        "keyword": "おちんちんえっと",
        "text_fh": "ほげほげ\nwwww",
        "text_lh": "もじもじaaaaaa\nええええええええええ",
        "hit_count": "2",
        "color": "red",
        "status": "台本 ... より"
    },
    {
        "keyword": "おまんこ",
        "text_fh": "aaaaaa",
        "text_lh": "zzzzzzz",
        "hit_count": "1",
        "color": "blue",
        "status": "台本 ... より"
    }
  ]

const Home = () => {
    const [resultList, setResultList] = useState();

    const showResult = (data) => {
      let data_obj=JSON.parse(data);
      setResultList(data_obj.map((item)=><WorkCard title={item.title} url_img={item.url_img} url={item.url} circle={item.circle} cv={item.cv} scenario={item.scenario} keywords={item.keywords} />));
    };
  
    return (
		<ThemeProvider theme={theme}>
            <div className="App">
                <MenuAppBar />
                <Container maxWidth="xl" sx={{marginTop:"100px"}}>
                    <TopImg />
                    <SearchMenu showResult={showResult}/>
                    {resultList}
                    <WorkCard 
                    title="10%OFF】【VR】ムラムラ フィットネス [VRゲーム屋さん] | DLsite 同人 - R18" 
                    url_img="https://img.dlsite.jp/modpub/images2/work/doujin/RJ01041000/RJ01040047_img_main.webp" 
                    url="https://www.dlsite.com/maniax/work/=/product_id/RJ01040047.html" 
                    circle="VRゲーム屋さん"
                    cv="星月るな"
                    scenario="冬月"
                    keywords={keywords}
                    />
                    <p>@@@@@@@@</p>
                    <button>Check</button>
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default Home;

