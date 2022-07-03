import {Box, Modal, Typography} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ErrorModal = (props:{error: string, isOpen: boolean}) => {

    return (
        <Modal
            open={props.isOpen}
            onClose={() => {}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography color={'red'} align={'center'} variant={'h5'}>Problem with network!</Typography>
                {props.error}
            </Box>
        </Modal>
    )
}

export default ErrorModal