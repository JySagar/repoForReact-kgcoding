import { useEffect, useState } from "react";

function CurrentTime() {
  // let time = new Date();

  const [time, setTime] = useState(new Date());
  console.log("Current time painted");

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval has been setup");
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the interval");
    };
  }, []);

  return (
    <p className="lead">
      This is the curret time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;

// 9863486790
