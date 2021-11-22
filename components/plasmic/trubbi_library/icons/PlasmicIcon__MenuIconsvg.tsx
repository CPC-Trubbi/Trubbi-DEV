// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuIconsvgIcon(props: MenuIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <g data-name={"Layer 1"}>
          <g data-name={"Group 2734"} fill={"none"}>
            <path data-name={"Rectangle 412"} d={"M0 0h32v32H0z"}></path>

            <g
              data-name={"Icon feather-menu"}
              stroke={"currentColor"}
              strokeLinecap={"square"}
              strokeLinejoin={"round"}
              strokeWidth={"2"}
            >
              <path data-name={"Path 5083"} d={"M31 16.91H1"}></path>

              <path data-name={"Path 5084"} d={"M31 6H9.86"}></path>

              <path data-name={"Path 5085"} d={"M31 27.82H6.45"}></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default MenuIconsvgIcon;
/* prettier-ignore-end */
