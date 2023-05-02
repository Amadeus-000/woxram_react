import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from '@mui/material';
import MenuAppBar from '../components/MenuAppBar';

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
const About = () => {
    return(
        <>
            <ThemeProvider theme={theme}>
                <MenuAppBar />
                <Container maxWidth="lg" sx={{marginTop:"100px"}}>
                    <h1 style={{textDecoration:"underline"}}>このサイトについて</h1>
                    <div>このサイトはボイス・ASMRのサンプルをAIで書き起こしたもの、作品台本の中からセリフを検索することができるサービスです。</div>
                    <br/>
                    <h1 style={{textDecoration:"underline"}}>著作権について</h1>
                        本サービスで掲載している台本及び、付随する画像、等は各権利所有者に帰属します。<br/>
                        本サービスで検索できる台本は著作権者である各サークルに許可を得て掲載しています。 <br/>
                        サンプルはAIで文字起こししています。サンプルを文字起こししたものは著作権法47条の5の所在検索サービスの規定に基づき、弁護士と相談し適法であることを確認して掲載しています。<br/>
                        本サービスに掲載されている台本は作品の内容を保証するものではありません。
                    <br/>
                    <h1 style={{textDecoration:"underline"}}>検索の詳細な説明</h1>
                    <br/>
                    <h4>基本機能</h4>
                    <ul>
                        <li>検索バーに単語や文章を入力すると音声作品の本文を検索し、一致するものを表示します。表示するのはヒットした語句の前後100文字です。このとき作品タイトルは検索されません。</li>
                        <li>2つ以上の語句をスペースで区切って検索すると、その全ての語句が作品本文に含まれる作品が表示されます。つまり片方だけを含むものは表示されません。</li>
                        <li>ひらがな、カタカナを区別しないのでどっちで検索しても同じ結果が表示されます。</li>
                        <li>同一作品で複数箇所ヒットした場合、その内の1つがランダムで表示され、1分ごとに切り替わります。</li>
                    </ul>
                    <br/>
                    <h4 >音声作品に特化した機能</h4>
                    <ul>
                        <li>伏せ字を解除する機能</li>
                    </ul>
                    <br/>
                    <h1 style={{textDecoration:"underline"}}>Woxramに掲載を考えているサークル様へ</h1>
                    <div>当サイトは音声作品の台本を募集中です。以下に基本的な仕様を書いて置きました。何か疑問があればいつもでもお気軽にDM、メールで質問してください。</div>
                    <h4>Woxramに作品を掲載する際の基本的仕様</h4>
                    <ul>
                        <li>公開を停止したいときはDMかメールを私にいただければ公開を即停止します。</li>
                        <li>作品台本の内、表示されるのは検索ワードがヒットした語句の前後100文字までです。100文字が多すぎたり少なすぎる場合は、増やしたり減らすことができます。</li>
                        <li>致命的なネタバレ部分がある場合は、その部分を指定していただければ削除して掲載します。</li>
                    </ul>

                    <hr />
                    <h1 style={{textDecoration:"underline"}}>プライバシーポリシー  (2022/01/27 版)</h1>
                    当サービスは、通信を保護するために「SSL」に対応しています。
                    SSLとは「Secure Socket Layer」の略で、SSLはWebサーバーとWebブラウザーとの間に暗号化し送受信できる通信方法です。
                    セキュリティ機能に対応したブラウザを使用することで、ユーザーが検索のため入力する情報が自動的に暗号化されて送受信されるため、万が一、送受信データが第三者に傍受された場合でも、内容が盗み取られる心配はありません。
                    <br/>
                    ユーザーが当サービスにアクセスされますと、その情報はサーバーにアクセスログという形で記録されます。アクセスログの内容は、アクセス日時、ドメイン名、IPアドレス、使用しているWebブラウザの種類などがありますが、通常は個人を特定できる情報を含むものではありません。これらの情報は当サービスの運用に利用いたします。
                    <br/>
                    <br/>
                    
                    <h3>Google Analytics の利用目的</h3>
                    当社ウェブサイトでは、Google社が提供するウェブ解析サービス「Google Analytics（グーグルアナリティクス）」を利用しています。当社ウェブサイトのご利用状況についての統計や分析の目的で利用するもので、お客様個人を特定するものではありません。
                    Google Analyticsのサービス利用規約、プライバシーポリシーにつきましては、Google社のウェブサイトをご参照ください。なお、当社は、Google Analyticsのサービス利用による損害について一切責任を負うものではありません。
                    
                    <hr />
                    <h1 style={{textDecoration:"underline"}}>利用規約 (2022/01/27 版)</h1>
                    <br/>
                    この利用規約（以下，「本規約」といいます。）は，Woxramがこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さまには，本規約に従って，本サービスをご利用いただきます。
                    <br/>
                    <br/>

                    <h3 id="text_pickup">著作権について</h3>
                    本サービスで掲載している台本及び、付随する画像、等は各権利所有者に帰属します。<br/>
                    本サービスで検索できる台本は著作権者である各サークルに許可を得て掲載しています。 <br/>
                    サンプルはGoogle speech to textで文字起こししています。サンプルを文字起こししたものは著作権法47条の5の所在検索サービスの規定に基づき、弁護士と相談し適法であることを確認して掲載しています。<br/>
                    本サービスに掲載されている台本は作品の内容を保証するものではありません。
                    <br/>
                    <br/>

                    <h3 id="text_pickup">削除要請について</h3>
                    文字起こしサンプル、台本全文いずれの場合も削除要請があった場合は本サービスから削除します。
                    <br/>
                    <br/>

                    <h3 id="text_pickup">禁止事項</h3>
                    本サービスに掲載している台本は転載禁止とします。利用したい場合はその作品の著作権者に許可を取ってください。

                    <hr />
                    <div>version 1.2.0</div>


                </Container>
            </ThemeProvider>
        </>
    );
};

export default About;