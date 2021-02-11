import styled from 'styled-components'
import { NavLink, NavLinkProps } from "react-router-dom"


type LinkStyleProps = {
    color: string
} & NavLinkProps

export const Link = styled(NavLink)<LinkStyleProps>`
    width: 100px;
    height: 100px;
    display: flex;
    border-radius: 50px;
    align-items: center;
    text-align: center;
    justify-content: center;

    ${({color}) => `
        background-color: ${color};
    `} 

`
