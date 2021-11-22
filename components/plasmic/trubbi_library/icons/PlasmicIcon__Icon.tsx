// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 87.033 87.037"}
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

      <path
        data-name={"Icon ionic-ios-person"}
        d={
          "M86.99 84.839c-1.632-7.208-10.948-10.721-14.166-11.854-3.536-1.247-8.568-1.541-11.809-2.267-1.859-.408-4.556-1.428-5.463-2.516s-.363-11.174-.363-11.174a33.619 33.619 0 002.584-4.919 63.442 63.442 0 001.9-8.59s1.859 0 2.516-3.264c.7-3.559 1.813-4.941 1.677-7.593-.136-2.607-1.564-2.539-1.564-2.539s1.387-3.785 1.546-11.623C64.048 9.184 56.754 0 43.539 0c-13.396 0-20.54 9.18-20.332 18.5.181 7.842 1.519 11.628 1.519 11.628s-1.428-.068-1.564 2.539c-.136 2.652.975 4.035 1.677 7.593.635 3.264 2.516 3.264 2.516 3.264a63.442 63.442 0 001.9 8.59 33.62 33.62 0 002.584 4.919s.544 10.086-.363 11.174-3.6 2.108-5.463 2.516c-3.241.725-8.273 1.02-11.809 2.267C10.991 74.118 1.675 77.631.043 84.839a1.812 1.812 0 001.791 2.2h83.388a1.808 1.808 0 001.768-2.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
