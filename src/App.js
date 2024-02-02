import React, { useState, useMemo } from "react";

function App() {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("num ");
    for (let i = 0; i < 100000; i++) { }
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <>
      <div className="">
        <button onClick={getValue} style={{ backgroundColor: "red" }}>Counter</button>
        <p>My New Number is: {checkData}</p> {/* Use checkData here */}
        <button onClick={() => setShow(!show)}>
          {show ? "you clicked me" : "click me plz"}
        </button>
      </div>
    </>
  );
}

export default App;
