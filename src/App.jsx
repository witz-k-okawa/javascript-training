/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("先頭!");
  const [num, setNum] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFaceFlag = () => {
    setShowFaceFlag(!showFaceFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      showFaceFlag || setShowFaceFlag(true);
    } else {
      showFaceFlag && setShowFaceFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFaceFlag}>On/Off</button>
      <p>{num}</p>
      {showFaceFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

export default App;
