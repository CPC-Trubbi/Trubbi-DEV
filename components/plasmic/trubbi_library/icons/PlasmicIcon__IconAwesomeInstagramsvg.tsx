// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAwesomeInstagramsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAwesomeInstagramsvgIcon(
  props: IconAwesomeInstagramsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 28 27.99"}
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
            data-name={"Icon awesome-instagram"}
            d={
              "M14 6.82A7.18 7.18 0 1021.18 14 7.16 7.16 0 0014 6.82zm0 11.84A4.67 4.67 0 1118.67 14 4.68 4.68 0 0114 18.66zm9.15-12.14a1.68 1.68 0 11-1.67-1.67 1.66 1.66 0 011.67 1.66zm4.75 1.7a8.24 8.24 0 00-2.26-5.86A8.33 8.33 0 0019.78.1C17.47 0 10.54 0 8.23.1a8.3 8.3 0 00-5.87 2.25A8.35 8.35 0 00.1 8.22C0 10.53 0 17.46.1 19.77a8.24 8.24 0 002.26 5.86 8.4 8.4 0 005.87 2.27c2.31.13 9.24.13 11.55 0a8.29 8.29 0 005.86-2.27 8.33 8.33 0 002.26-5.86c.13-2.31.13-9.23 0-11.55zm-3 14a4.73 4.73 0 01-2.66 2.66c-1.85.73-6.22.56-8.26.56s-6.41.16-8.25-.56a4.7 4.7 0 01-2.66-2.66C2.36 20.41 2.53 16 2.53 14s-.16-6.42.56-8.26a4.73 4.73 0 012.66-2.66C7.6 2.35 12 2.52 14 2.52s6.42-.16 8.26.56a4.76 4.76 0 012.66 2.66c.73 1.85.56 6.22.56 8.26s.17 6.41-.56 8.25z"
            }
            fill={"currentColor"}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default IconAwesomeInstagramsvgIcon;
/* prettier-ignore-end */
