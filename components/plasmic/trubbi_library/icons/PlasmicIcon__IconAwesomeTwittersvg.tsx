// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAwesomeTwittersvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAwesomeTwittersvgIcon(
  props: IconAwesomeTwittersvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 28 22.74"}
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
            data-name={"Icon awesome-twitter"}
            d={
              "M25.12 5.67v.74c0 7.59-5.77 16.33-16.33 16.33A16.21 16.21 0 010 20.16a10.7 10.7 0 001.39.08 11.5 11.5 0 007.12-2.46 5.75 5.75 0 01-5.37-4 6.68 6.68 0 001.09.09 6.44 6.44 0 001.51-.19 5.74 5.74 0 01-4.6-5.63V8a5.74 5.74 0 002.59.74A5.75 5.75 0 012 1.05a16.35 16.35 0 0011.84 6 6.58 6.58 0 01-.14-1.32 5.74 5.74 0 019.93-3.93A11.41 11.41 0 0027.22.43a5.77 5.77 0 01-2.52 3.16A11.54 11.54 0 0028 2.7a12.5 12.5 0 01-2.88 2.97z"
            }
            fill={"currentColor"}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default IconAwesomeTwittersvgIcon;
/* prettier-ignore-end */
