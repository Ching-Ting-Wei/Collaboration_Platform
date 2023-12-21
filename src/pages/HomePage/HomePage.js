import React from "react";
import styled from "styled-components";
import {HashRouster as  Router, Switch, Route} from "react-router-dom";

import Title_img from "../../images/Title_img.jpg"
import background from "../../images/background.png"
import UserHeader from "../../components/Header";

const Title_back = {
  backgroundSize: '100% 100%',
  background: `url(${Title_img})`,
}

const HomeImage = {
  backgroundSize: '100% 100%',
  background: `url(${background})`,
}

const Text = styled.div`
text-align: center;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
line-height: 30px;
`

const Title = styled.div`
text-align: center;
font-weight: bold;
line-height: 60px;
color: orange;
`

const Back = styled.div`
height: 100%;
width: 100%;
`

export default function HomePage() {
  return (
    <>
    <UserHeader></UserHeader>
    {/* <Back style={HomeImage}>
      <Text style={Title_back}>
        <Title style={Title_back}><font size = "6">1. 全球連接</font></Title>
        「磚注樹成」為您提供一個全球性的協作空間。<br/>
        無論您身在何處，都能與來自世界各地的夥伴一同討論、共同合作。
        <br/>
        <Title style={Title_back}><font size = "6">2. 強大的工具</font></Title>
        <p align = "left">&#x1F7E2;時間追踪器：提供視覺化的報告來展示學習模式和進度<br/>
        &#x1F7E2;學習目標設定：讓使用者設定短期和長期的學習目標<br/>
        &#x1F7E2;家長/教師監督模式：允許家長或教師設置或查看學習目標<br/>
        &#x1F7E2;數據分析：進階分析使用者的學習行為，提供個性化的建議和改進方案<br/>
        &#x1F7E2;互動式提醒：以避免過度勞累並維持高效學習<br/>
        &#x1F7E2;社群互動：提供一個平台讓用戶分享進度，交流技巧，並互相激勵</p><br/>
        <Title style={Title_back}><font size = "6">3. 啟發創意</font></Title>
        在這裡，您可以探索不同領域的創意和想法。<br/>
        與其他用戶交流、得到反饋，激發靈感，使您的項目更加豐富多彩。<br/>
        <p align = "left">&#x1F7E2;任務分配和進度追踪：讓小組成員分配任務，追踪彼此的進展，以確保團隊目標的達成。<br/>
        &#x1F7E2;共享文檔與資源：使用者可以共享學習資料、筆記和其他資源，並可對共享資料進行即時的共同編輯。<br/>
        &#x1F7E2;互動式白板：提供共享的白板功能，使用者可以在上面草擬想法，解決問題，進行圖形化討論。<br/>
        &#x1F7E2;群組學習空間：提供虛擬的學習空間，讓用戶能夠創建或加入學習小組，這樣可以在線協作並共享資料。<br/>
        &#x1F7E2;成就和報酬系統：當團隊達到共同目標時，應用會給予認可和獎勵，這樣既能激勵學習者，也能增強團隊精神。</p><br />
        <Title style={Title_back}><font size="6">4. 團隊製作目標</font></Title>
        <p align="left">&#x1F7E2;實現用戶帳號密碼登錄功能<br/>
        &#x1F7E2;實現用戶資料保存與隱私安全性保護<br/>
        &#x1F7E2;可以將不同作業分類成不同block<br/>
        &#x1F7E2;用戶可以紀錄自己在哪個作業寫了哪題，並轉換成進度條<br/>
        &#x1F7E2;可以看到其他用戶的進度條（百分比），以及寫了哪題<br/>
        &#x1F7E2;各用戶間可以互相討論<br/>
        &#x1F7E2;實現用戶互相督促與一同學習的功能</p>
        <Title style={Title_back}><font size = "6">5. 開始您的冒險</font></Title>
        立即註冊成為「磚注樹成」的一員，開始您的共創之旅。<br/>
        不僅僅是一個網站，而是一個打開未來的大門。
        <br/>
        不要錯過這個機會，加入我們，讓我們一同建設更加卓越的明天！
      </Text>
    </Back> */}
    </>
  );
}

