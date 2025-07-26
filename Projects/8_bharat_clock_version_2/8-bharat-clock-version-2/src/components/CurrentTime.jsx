import { useEffect, useState } from "react";

function CurrentTime() {
  // let time = new Date();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
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

// Here all the things that are summed up to this much and all the things that can be done is done till now.
