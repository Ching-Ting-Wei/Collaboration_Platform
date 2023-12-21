import React,{useRef, useEffect, useState} from "react";
import styled from "styled-components";
import UserHeader from "../../components/UserHeader2";

const Mask = styled.div`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
`;

const Button = styled.button`
  padding: 10px 40px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 10px;
`;

const GrayButton = styled(Button)`
  color: white;
  background-color: #A5A5A5;
  cursor: pointer;
`;

const NavbarList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Homework = styled.button`
  padding: 4px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  left: 530px;
  top: -30px;
`;

const GrayHomework = styled.button`
  padding: 4px 20px;
  background-color: #A5A5A5;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
`;

const Picture = styled.button`
  padding: 50px 50px;
  background-color: none;
  border-color: black;
  border-radius: 100%;
  cursor: pointer;
  font-size: 16px;
  margin-left: 240px;
  margin-top: 60px;
`;

const Name = styled.button`
    padding: 10px 48px;
    background-color: white;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 225px;
    margin-top: 50px;
`

const Rate = styled.button`
  padding: 14px 11px;
  background-color: ${({ $test }) => ($test ? '#6C8470' : '#D9D9D9')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 30px;
  margin-top: 1px;
  display: inline-block;
`

const P = styled.p`
  color: black;
  margin-top: -70px;
  margin-left: 650px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  border: solid;
  border-color: black;
  height: 600px;
  width: 550px;
  box-shadow: 7px 9px 0px 0px #000;
  background-color: white;
  flex-direction: row;
  padding: 0 25px 0 31px;
  margin-top: -200px;
`;

const Header1 = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  position: absolute;
  top: -230px;
  left: 300px;
`;

const Header2 = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  position: absolute;
  top: -175px;
  left: 640px
`;

const Header3 = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  position: absolute;
  top: -82px;
  left: 300px
`;

const BlackLine = styled.div`
  background-color: black;
  height: 3px;
  width: 500px;
  margin-top: 150px;
  margin-left: -400px
`

const ColorState = styled.button`
  padding: 5px 15px;
  cursor: pointer;
  font-size: 16px;
  
`

const MessageTextArea = styled.textarea`
  display: block;
  position: absolute;
  top: 260px;
  left: 530px;
  height: 120px;
  width: 480px;
  border-color: black;
  border-width: 2px;
`;

const useColorChanger = ({initialColor, colorOptions, initialCondition, conditionOptions, initialFontColor, fontColorOptions}) => {
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [currentCondition, setCurrentCondition] = useState(initialCondition);
  const [currentFontColor, setCurrentFontColor] = useState(initialFontColor);

  const handleColorChange = () => {
    const getNextIndex = (currentIndex, array) => (currentIndex + 1) % array.length;

    setCurrentColor(prevColor => colorOptions[getNextIndex(colorOptions.indexOf(prevColor), colorOptions)]);
    setCurrentCondition(prevCondition => conditionOptions[getNextIndex(conditionOptions.indexOf(prevCondition), conditionOptions)]);
    setCurrentFontColor(prevFontColor => fontColorOptions[getNextIndex(fontColorOptions.indexOf(prevFontColor), fontColorOptions)]);
  };

  return {
    currentColor,
    currentCondition,
    currentFontColor,
    handleColorChange,
  };
}

export default function UserPage() {
  const [showMask, setShowMask] = useState(false);

  const [isShow, setIsShow] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);  
 
  const handleClick = () => {
    setIsShow(true);
    setShowMask(true);
  };
 
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && !ref1.current.contains(event.target)) {
      setIsShow(false);
      setShowMask(false);
    }
  };

  const InitialOptions = {
    initialColor: '#FFDADA',
    colorOptions: ['#FFDADA', '#A2EE96', '#FFED8F'],
    initialCondition: '● 未完成',
    conditionOptions: ['● 未完成', '● 已完成', '● 不確定'],
    initialFontColor: '#970000',
    fontColorOptions: ['#970000', '#075400', '#693900'],
  };

  const {
    currentColor: currentColor1,
    currentCondition: currentCondition1,
    currentFontColor: currentFontColor1,
    handleColorChange: handleColorChange1,
  } = useColorChanger(InitialOptions);

  const {
    currentColor: currentColor2,
    currentCondition: currentCondition2,
    currentFontColor: currentFontColor2,
    handleColorChange: handleColorChange2,
  } = useColorChanger(InitialOptions);

  const {
    currentColor: currentColor3,
    currentCondition: currentCondition3,
    currentFontColor: currentFontColor3,
    handleColorChange: handleColorChange3,
  } = useColorChanger(InitialOptions);

  const {
    currentColor: currentColor4,
    currentCondition: currentCondition4,
    currentFontColor: currentFontColor4,
    handleColorChange: handleColorChange4,
  } = useColorChanger(InitialOptions);

  const finished = 4
  const check = []
  for(let i = 0; i < 10; i++){
    if(i < finished) check.push(true)
    else check.push(false)
  } 

  const ratesConfig = [
    { margin: "2rem", $test: check[0] },
    { margin: "-40px", $test: check[1] },
    { margin: "44px", $test: check[2] },
    { margin: "-40px", $test: check[3] },
    { margin: "44px", $test: check[4] },
    { margin: "-40px", $test: check[5] },
    { margin: "44px", $test: check[6] },
    { margin: "-40px", $test: check[7] },
    { margin: "44px", $test: check[8] },
    { margin: "-40px", $test: check[9] },
  ]

  const renderRates = () => {
    return ratesConfig.map((config, index) => (
      <Rate key={index} style={{ margin: config.margin }} $test={config.$test} />
    ));
  };

  return (
    <> 
    <UserHeader></UserHeader>
    <div>
      <Button> ALL </Button>
      <GrayButton> DD HW1 </GrayButton>
      <GrayButton> OS HW2 </GrayButton>
      <GrayButton> PROGRAMMING HW3 </GrayButton>
    </div>
    <div>
      <Picture ref = {ref1} onClick={handleClick}> </Picture>
      {renderRates()}
      <P> {finished * 10}% </P>
    </div>
    
    <div>
    <Name style={{ color: 'black'}}> User1 </Name>
    <Mask $show={showMask}>
    <Container>
    {isShow
      ?<div ref={ref}>
        <Content>
          <Header1>
            <Picture > </Picture>
          </Header1>

          <Header2>
            {renderRates()}
          </Header2>

          <Header3>
            <P> {finished * 10}% </P>
          </Header3>

          <div style = {{position: 'absolute', left: "917px"}}>
            <BlackLine></BlackLine>
          </div>

          <NavbarList>
            <Homework> DD HW1 </Homework>
            <GrayHomework style = {{position: 'absolute', left: "650px", top: "-30px"}}> OS HW2 </GrayHomework>
            <GrayHomework style = {{position: 'absolute', left: "770px", top: "-30px"}}> PROGRAMMING HW3 </GrayHomework>
          </NavbarList>

          <NavbarList>
          <ColorState style={{ position: 'absolute', left: "530px", top: "20px", color: currentFontColor1,
                                backgroundColor: currentColor1}} onClick={handleColorChange1}>
            {currentCondition1}
          </ColorState>
          <b style={{color: "black", position: 'absolute', left: "640px", top: "25px"}}> 第一大題 </b>
          <b style={{color: "black", position: 'absolute', left: "640px", top: "65px"}}> 第二大題 </b>
          </NavbarList>

          <NavbarList>
            <ColorState style={{ position: 'absolute', left: "530px", top: "100px", color: currentFontColor2,
                                backgroundColor: currentColor2}} onClick={handleColorChange2}>
              {currentCondition2}
            </ColorState>
            <b style={{color: "black", position: 'absolute', left: "690px", top: "105px"}}> 第A小題 </b>
          </NavbarList>

          <NavbarList>
            <ColorState style={{ position: 'absolute', left: "530px", top: "150px", color: currentFontColor3,
                                backgroundColor: currentColor3}} onClick={handleColorChange3}>
            {currentCondition3}
            </ColorState>
            <b style={{color: "black", position: 'absolute', left: "640px", top: "155px"}}> 第三大題 </b>
          </NavbarList>
          <NavbarList>
            <ColorState style={{ position: 'absolute', left: "530px", top: "200px", color: currentFontColor4,
                                backgroundColor: currentColor4}} onClick={handleColorChange4}>
            {currentCondition4}
            </ColorState>
            <b style={{color: "black", position: 'absolute', left: "640px", top: "205px"}}> 第四大題 </b>
          </NavbarList>

          <MessageTextArea></MessageTextArea>

        </Content>
      </div>
      :<></>
      }
      </Container>
      </Mask>
    </div>
    </>
  );
}