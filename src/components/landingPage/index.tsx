import { useAppSelector } from '@reduxStore/store';
import UsersList from './usersList';
import * as Styles from './styles';

function LandingPage() {
    /**
     * We can directly read this from store.
     */
    const { users } = useAppSelector(state => state.usersDataHub);

    return (
        <Styles.LandingPageWrapper>
            <Styles.UsersListContainer>
                <h1>Select an account</h1>
                <Styles.UsersListWrapper>
                {users.map((user) => (
                    // Use key to avoid the re-creation of the component in Virtual DOM.
                    <UsersList key={user.id} {...user} />
                ))}
                </Styles.UsersListWrapper>
            </Styles.UsersListContainer>
        </Styles.LandingPageWrapper>
    );
};

export default LandingPage;
