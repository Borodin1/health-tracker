import { Profile } from '../../bus/user/components/profile';
import { Base } from '../../views/base';

export const ProfilePage = () => {
    return (
        <>
            <Base center disabledWidget>
                <Profile  />
            </Base>
        </>
    );
};
