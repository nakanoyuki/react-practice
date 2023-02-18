import React from "react";

type Props = {
  open: boolean;
};

const ChildArea = (props: Props) => {
  const { open } = props;
  return <>{open ? <div>ChildArea</div> : null}</>;
};

export default ChildArea;
