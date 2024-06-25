const ProfileInfo = ({info}) => {
    const {nameInfo, ageInfo, emailInfo, passwordInfo} = info;
    return (
        <>
            <ul>
                {!!nameInfo && <li>{nameInfo}</li>}
                {!!ageInfo && <li>{ageInfo}</li>}
                {!!emailInfo && <li>{emailInfo}</li>}
                {!!passwordInfo && <li>{passwordInfo}</li>}
            </ul>
        </>
    );
};
export default ProfileInfo;