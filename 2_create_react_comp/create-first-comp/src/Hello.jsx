function Hello(){

  let myName = 'SagarVariable';

  let fullName = () => {
    return 'SagarFunction';
  }

  return(
    <div>
      Using {}, we can embed any JS expression directly with JSX.
      <br></br>
      {myName} is my name from variable
      <br></br>
      {fullName()} is my name from function
    </div>
  )
}

export default Hello;