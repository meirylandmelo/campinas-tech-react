import * as S from './styles'

interface LinkProps {
    children: React.ReactNode
    color?: string 
    to: string
}

const Link = ({children, color='white', to}: LinkProps) => <S.Link to={to} color={color}>
    {children}
</S.Link>

export default Link