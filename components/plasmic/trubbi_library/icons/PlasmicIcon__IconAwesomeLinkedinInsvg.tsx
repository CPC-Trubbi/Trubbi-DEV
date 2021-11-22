// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAwesomeLinkedinInsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAwesomeLinkedinInsvgIcon(
  props: IconAwesomeLinkedinInsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 28 27.97"}
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
            data-name={"Icon awesome-linkedin-in"}
            d={
              "M6.29 28H.49V9.3h5.8zM3.39 6.75a3.38 3.38 0 113.36-3.39 3.39 3.39 0 01-3.36 3.39zM28 28h-5.79v-9.12c0-2.17 0-4.94-3-4.94s-3.47 2.35-3.47 4.78V28H9.92V9.3h5.56v2.54h.08a6.11 6.11 0 015.49-3c5.87 0 7 3.86 7 8.88V28z"
            }
            fill={"currentColor"}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default IconAwesomeLinkedinInsvgIcon;
/* prettier-ignore-end */
