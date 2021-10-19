import {auth} from '../../firebase'
import { NextPage } from "next";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {}
const Profile: NextPage = ({}: Props) => {
  const [user, userLoading] = useAuthState(auth);

  return (
    <Container>
      <label htmlFor="">{user?.uid}</label>
      <p>{user?.displayName}</p>
      <p>{user?.metadata.creationTime}</p>
      <p>{user?.metadata.lastSignInTime}</p>
    </Container>
  );
};

export default Profile;
