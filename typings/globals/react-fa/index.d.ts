// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/b6f6ba5f89cf1eaf295ca78a0ad74c4dab2457c1/react-fa/react-fa.d.ts
declare module "react-fa" {
    import { Component, ClassAttributes } from "react";

    type IconSize = "lg" | "2x" | "3x" | "4x" | "5x"

    interface IconProps extends ClassAttributes<Icon> {
        name: string
        className?: string
        size?: IconSize
        rotate?: "45" | "90" | "135" | "180" | "225" | "270" | "315"
        flip?: "horizontal" | "vertical"
        fixedWidth?: boolean
        spin?: boolean
        pulse?: boolean
        stack?: "1x" | "2x"
        inverse?: boolean
        Component?: string | Function
    }
    export class Icon extends Component<IconProps, {}> {}

    interface IconStackProps extends ClassAttributes<IconStack> {
        className?: string
        size?: IconSize
    }
    export class IconStack extends Component<IconStackProps, {}> {}

    export default Icon
}