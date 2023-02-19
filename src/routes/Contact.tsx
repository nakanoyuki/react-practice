import React from "react";

type Props = {
  message: string;
};

const Contact = (props: Props) => {
  return <div>{props.message}</div>;
};

export default Contact;
