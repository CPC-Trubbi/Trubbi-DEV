// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrubbiMyndmerkiAndhverfasvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function TrubbiMyndmerkiAndhverfasvgIcon(
  props: TrubbiMyndmerkiAndhverfasvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 56.16 58.94"}
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
        <g fill={"currentColor"} data-name={"Layer 1"}>
          <path
            d={
              "M28.16 18.42c-5.4 16.34-8.87 30.6-9.49 36.1a41.36 41.36 0 01-7.06-7.12 52.13 52.13 0 01-8.17-15.09C1.16 25.79 0 21.7 0 14.22c0-3.81 2.59-7.79 6.76-9.88C12.36 1.54 19.93 0 28.08 0S43.8 1.54 49.39 4.34a13.42 13.42 0 014.37 3.43 294.21 294.21 0 00-41 10.77l-.44.14v.82c0 .64 0 1.2.45 1.55s1.36.18 4.5-.9c2.22-.77 6.15-2.2 11.63-3.86z"
            }
          ></path>

          <path
            d={
              "M56.16 14.22c0 7.48-1.16 11.57-3.44 18.09a52.13 52.13 0 01-8.17 15.09c-6.61 8.41-13.61 11.54-16.47 11.54-1.41 0-3.84-.77-6.73-2.56v-.13a17.28 17.28 0 00.65-2.62c.3-1.58.81-4.2 1.91-9.17 1-4.31 3-12.29 7.36-25.82l.23-.64.06-.16a9.49 9.49 0 00.66-2.42c5.27-1.82 15.41-3.57 23.08-4.74h.17a9.68 9.68 0 01.69 3.54z"
            }
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default TrubbiMyndmerkiAndhverfasvgIcon;
/* prettier-ignore-end */
