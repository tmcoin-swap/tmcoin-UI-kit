import React from "react";
import { PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
    isPushed?: boolean;
}
declare const PanelBody: React.FC<Props>;
export default PanelBody;
