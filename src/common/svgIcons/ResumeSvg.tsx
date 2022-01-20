import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const ResumeSvg = (props: svgProps): JSX.Element => {
    const { size = 24, color = 'currentColor' } = props

    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={size}
                height={size}
                stroke={color}
                viewBox="0 0 24 24"
            >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
            </svg>
        </>
    )
}

export default ResumeSvg
