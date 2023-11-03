import { type } from "os";
import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLInputElement> & {
  type: string;
  pattern?: string;
};

export function BasicInput({ ...rest }: Props) {
  return <input {...rest} />;
}
