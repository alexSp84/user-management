import { Box, Card, CardContent, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import CardActions from "./CardActions";
import CardBody from "./CardBody";
import CardAvatar from "./CardAvatar"
import { useState } from "react";

const UserCard = ({ user }) => {
    const { name, isAdmin } = user;
    const [editable, setEditable] = useState(false);

    return (
        <Card>
            <CardContent sx={{
                padding: "0",
                ":last-child": { paddingBottom: "0" }
            }}
            >
                <Stack direction="row">
                    <Box sx={{ width: "8%" }}>
                        <CardAvatar
                            name={name}
                        />
                    </Box>
                    <Divider
                        sx={{ bgcolor: "secondary.main" }}
                        orientation="vertical"
                        flexItem
                    />
                    <Box sx={
                        {
                            width: "92%",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0.5rem 1rem"
                        }
                    }>
                        <CardBody user={user} editable={editable} />
                        <CardActions
                            editable={editable}
                            isAdmin={isAdmin}
                            onEdit={() => setEditable(state => !state)}
                        />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default UserCard;
