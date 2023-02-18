import React, { memo } from "react";

type Props = {
  open: boolean;
  onClickClose: () => void;
};

const ChildArea = memo((props: Props) => {
  const { open, onClickClose } = props;
  console.log("再レンダリングされた");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("aaa");
  });
  return (
    <>
      {open ? (
        <>
          <div>ChildArea</div>
          <button onClick={onClickClose}>閉じる</button>
        </>
      ) : null}
    </>
  );
});

export default ChildArea;
