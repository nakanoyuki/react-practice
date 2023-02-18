const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">StyledJsx</p>
        <button className="button">fight!</button>
      </div>
      <style>
        {`
          .container {
            border: solid 1px #000;
            padding: 8px;
            margin: 20px;
            display: flex;
            justify-content: space-around;
          }
          .title {
            color: pink;
          }
          .button {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default StyledJsx;
