import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const HamburgerSvg = (props: svgProps): JSX.Element => {
    const { size = 24, color = 'white' } = props

    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={size}
                height={size}
                fill={color}
                viewBox="0 0 100 80"
            >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
        </>
    )
}

export default HamburgerSvg
