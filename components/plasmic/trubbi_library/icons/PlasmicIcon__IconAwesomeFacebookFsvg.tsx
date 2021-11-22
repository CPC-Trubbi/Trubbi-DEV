// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAwesomeFacebookFsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAwesomeFacebookFsvgIcon(
  props: IconAwesomeFacebookFsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 15 28"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <g data-name={"Layer 1"}>
          <path
            data-name={"Icon awesome-facebook-f"}
            d={
              "M14 15.75l.78-5.07H9.93V7.39a2.54 2.54 0 012.3-2.75 2.63 2.63 0 01.56 0H15V.34A27.19 27.19 0 0011.07 0c-4 0-6.62 2.43-6.62 6.82v3.86H0v5.07h4.45V28h5.48V15.75z"
            }
            fill={"currentColor"}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default IconAwesomeFacebookFsvgIcon;
/* prettier-ignore-end */
