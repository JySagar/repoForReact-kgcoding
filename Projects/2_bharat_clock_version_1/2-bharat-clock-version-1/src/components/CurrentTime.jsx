function CurrentTime() {
  let time = new Date();

  return (
    <p className="lead">
      This is the curret time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;

// 9863486790
