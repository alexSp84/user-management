import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import SwitchWithLabel from './SwitchWithLabel';
import IconWithLabel from './IconWithLabel';
import UserInfoFields from './UserInfoFields';
import CheckIcon from '@mui/icons-material/Check';

const CardBodyStyle = styled('div')(({
    height: '7rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
}));

const LeftBodyStyle = styled('div')(({
    display: 'flex',
    flexDirection: 'column',
}));

const CardBody = ({
    user,
    editable,
    isNew,
    onChangeName,
    onChangeHonorific,
    onChangeEmail,
    onChangeAdmin
}) => {
    const { honorific, name, email, isAdmin } = user;

    return (
        <CardBodyStyle>
            <LeftBodyStyle>
                {editable
                    ? <UserInfoFields
                        name={name}
                        honorific={honorific}
                        email={email}
                        isNew={isNew}
                        onChangeName={onChangeName}
                        onChangeHonorific={onChangeHonorific}
                        onChangeEmail={onChangeEmail}
                    />
                    : <Typography>
                        {`${honorific} ${name}`}
                    </Typography>
                }
                {(!editable || !isNew) && <Typography mt={2}>
                    {email}
                </Typography>}
            </LeftBodyStyle>
            {editable
                ? <SwitchWithLabel
                    isAdmin={isAdmin}
                    onChangeAdmin={onChangeAdmin}
                />
                : <>
                    {isAdmin && <IconWithLabel
                        text={'Admin'}
                        icon={<CheckIcon />}
                    />}
                </>
            }
        </CardBodyStyle>
    );
};

export default CardBody;
