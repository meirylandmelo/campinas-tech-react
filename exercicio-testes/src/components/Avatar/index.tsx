import MaterialAvatar from "@material-ui/core/Avatar";
import perfil from "../../image/perfil.jpg";

const Avatar = () => (
  <MaterialAvatar alt="Eu" src={perfil} data-testid="myAvatar" />
);

export default Avatar;
