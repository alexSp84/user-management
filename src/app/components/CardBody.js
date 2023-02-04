import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import IconWithLabel from "./IconWithLabel";
import SwitchWithLabel from "./SwitchWithLabel";
import UserInfoFields from "./UserInfoFields";
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useState } from "react";

const CardBodyStyle = styled('div')(({ theme }) => ({
    height: "7rem",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
}));

const LeftBodyStyle = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));

const CardBody = ({ user, editable }) => {
    const [honorific, setHonorific] = useState(user.honorific);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [isAdmin, setIsAdmin] = useState(user.isAdmin);

    useEffect(() => {
        isAdmin && setEmail(user.email);
    }, [user, isAdmin]);

    return (
        <CardBodyStyle>
            <LeftBodyStyle>
                {editable
                    ? <UserInfoFields
                        name={name}
                        honorific={honorific}
                        email={email}
                        isAdmin={isAdmin}
                        onChangeName={(newValue) => setName(newValue)}
                        onChangeHonorific={(newValue) => setHonorific(newValue)}
                        onChangeEmail={(newValue) => setEmail(newValue)}
                    />
                    : <Typography>
                        {`${honorific} ${name}`}
                    </Typography>
                }
                {(!editable || isAdmin) && <Typography mt={2}>
                    {email}
                </Typography>}
            </LeftBodyStyle>
            {editable
                ? <SwitchWithLabel
                    isAdmin={isAdmin}
                    onChangeAdmin={() => setIsAdmin(state => !state)}
                />
                : <>
                    {isAdmin && <IconWithLabel
                        text={"Admin"}
                        icon={<CheckIcon />}
                    />}
                </>
            }
        </CardBodyStyle>
    );
};

export default CardBody;
