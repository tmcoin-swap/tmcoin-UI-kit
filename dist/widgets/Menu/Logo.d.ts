import React from "react";
interface Props {
    isPushed: boolean;
    isDark: boolean;
    togglePush: () => void;
    href: string;
    lightLogo?: string;
}
declare const Logo: React.FC<Props>;
export default Logo;
