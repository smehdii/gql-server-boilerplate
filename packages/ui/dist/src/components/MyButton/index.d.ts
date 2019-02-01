import * as React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "topic" | "form";
}
export declare const MyButton: React.FunctionComponent<Props>;
export {};
