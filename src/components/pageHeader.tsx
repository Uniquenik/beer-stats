import {Box, Button, Typography} from "@mui/material";

const PageHeader = (props:{
    title:string,
    subtitle: string,
    buttonText:string,
    buttonIcon: string,
    onButtonClick: () => void
}) => {

    return (
        <header>
            <Box style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography pt={2} sx={{fontSize: '36px', fontWeight: 700}}>{props.title}</Typography>
                <Button
                    sx={{padding: '16px 32px'}}
                    variant={'contained'}
                    startIcon={<img src={props.buttonIcon} alt={props.buttonText}/>}>
                    <Typography sx={{textTransform: 'none', fontSize: '14px'}}>{props.buttonText}</Typography>
                </Button>
            </Box>
            <Typography sx={{fontSize: '14px', fontWeight: 400, opacity: 0.7}}>{props.subtitle}</Typography>
        </header>
    )
}

export default PageHeader
