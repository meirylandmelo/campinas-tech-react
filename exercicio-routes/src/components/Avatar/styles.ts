import styled from 'styled-components'
import {AvatarProps} from '.'

export const AvatarImage = styled.img`
    width: 100%;
    height: auto;
`

export const AvatarWrapper = styled.div<AvatarProps>`
    ${({width}) => `
        width: ${width}px;
    `}

    a { 
        
    }
`