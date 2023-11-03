import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export function BasicButton({ text, ...rest }: Props) {
  return <button {...rest}>{text}</button>;
}
