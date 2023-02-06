import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import styled from "@emotion/styled";


const CardActionsStyle = styled('div')(({ theme }) => ({
    height: "2rem",
    display: "flex",
    justifyContent: "flex-end"
}));

const CardActions = ({ editable, isAdmin, onEdit, onDelete }) => {

    return (
        <CardActionsStyle>
            {editable &&
                <Button
                    variant="text"
                    endIcon={<SaveIcon />}
                    color="secondary"
                    sx={{ textTransform: "uppercase" }}
                >
                    Save
                </Button>
            }
            <Button
                variant="text"
                endIcon={<CloseIcon />}
                color="secondary"
                sx={{ textTransform: "uppercase" }}
                onClick={onDelete}
            >
                Delete
            </Button>
            {!editable &&
                <Button
                    variant="text"
                    endIcon={<EditIcon />}
                    color="secondary"
                    sx={{ textTransform: "uppercase" }}
                    onClick={onEdit}
                >
                    Edit
                </Button>
            }
        </CardActionsStyle>
    );
};

export default CardActions;
