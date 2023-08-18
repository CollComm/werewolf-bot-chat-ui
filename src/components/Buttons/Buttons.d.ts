import type {ReactElement, ReactNode} from "react";
import type {ChatComponentPropsChildren} from "../../types";

export interface ButtonProps {
    icon?:ReactNode;
    labelPosition?: "left" | "right";
    border?: boolean;
}


export interface ArrowButtonProps extends Omit<ButtonProps,"icon"> {
    direction?: "up" | "right" | "down" | "left"
}

export declare const ArrowButton: (props:ChatComponentPropsChildren<ArrowButtonProps, "button">) => ReactElement;


export type SendButtonProps = Omit<ButtonProps,"icon">;

export declare const SendButton: (props:ChatComponentPropsChildren<SendButtonProps, "button">) => ReactElement;

export type StarButtonProps = Omit<ButtonProps,"icon">;