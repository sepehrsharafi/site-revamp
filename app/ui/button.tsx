import React from "react";

export default function Button({
  text,
  buttonStyle,
}: {
  text: string;
  buttonStyle: string;
}) {
  return <button className={`${buttonStyle}`}>{text}</button>;
}
