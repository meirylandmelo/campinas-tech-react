import * as S from './styles'
import foto from "../../images/perfil.jpg"

export type AvatarProps = {
    width?: number
}

const Avatar = ({ width = 200 }: AvatarProps) => <S.AvatarWrapper width={width}>
    <S.AvatarImage src={foto} alt="Foto de Meiryland"  />
</S.AvatarWrapper>

export default Avatar