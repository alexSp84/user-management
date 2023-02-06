import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';

const CardActionsStyle = styled('div')(({ theme }) => ({
    height: '2rem',
    display: 'flex',
    justifyContent: 'flex-end'
}));

const CardActions = ({ editable, onEdit, onDelete, onSave }) => {
    const iconSx = { ':nth-of-type(1)': { fontSize: '1rem' } };

    return (
        <CardActionsStyle>
            {editable &&
                <Button
                    variant='text'
                    endIcon={<SaveIcon sx={iconSx} />}
                    color='secondary'
                    sx={{ textTransform: 'uppercase' }}
                    onClick={onSave}
                >
                    Save
                </Button>
            }
            <Button
                variant='text'
                endIcon={<CloseIcon sx={iconSx} />}
                color='secondary'
                sx={{ textTransform: 'uppercase' }}
                onClick={onDelete}
            >
                Delete
            </Button>
            {!editable &&
                <Button
                    variant='text'
                    endIcon={<EditIcon sx={iconSx} />}
                    color='secondary'
                    sx={{ textTransform: 'uppercase' }}
                    onClick={onEdit}
                >
                    Edit
                </Button>
            }
        </CardActionsStyle>
    );
};

export default CardActions;
