import { SVGAttributes, FC } from "react"

export type SvgProps = {
  className?: string
  viewBox?: SVGAttributes<SVGSVGElement>["viewBox"]
}

export const Svg: FC<SvgProps> = ({
  className,
  children,
  viewBox = "0 0 32 32",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    className={`${className} icon icon-svg`}>
    <g stroke="none" strokeWidth="1" fillRule="evenodd">
      {children}
    </g>
  </svg>
)
