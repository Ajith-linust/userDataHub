import ImageWithFallback from "@library/image";
import { useNavigate } from 'react-router-dom';
import * as Styles from './styles';

function UsersList(props: {
  id: number;
  name: string;
  profilepicture: string;
}) {
  const {
    id,
    name,
    profilepicture,
  } = props;

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/profile/${id}`);
  }

  return (
    <Styles.UserList onClick={clickHandler} indexOfElement={id}>
        <ImageWithFallback
          src={profilepicture}
          alt={name}
        />
        <p>{name}</p>
    </Styles.UserList>
  )
}

export default UsersList;
