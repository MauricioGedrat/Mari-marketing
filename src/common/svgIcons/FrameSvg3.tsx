import React from 'react'
import { svgProps, defaultProps } from './svgBase'

const Frame3Svg = (props: svgProps): JSX.Element => {
    return (
        <>
            <svg
                {...defaultProps}
                {...props}
                width={40}
                height={300}
                viewBox="0 0 40 474"
            >
                <rect x="18" y="40" width="4" height="394" fill="#95B89F" />
                <circle
                    cx="20"
                    cy="454"
                    r="18"
                    stroke="#95B89F"
                    strokeWidth="4"
                />
            </svg>
        </>
    )
}

export default Frame3Svg
