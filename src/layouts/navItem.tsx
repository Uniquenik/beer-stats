import {Box, Stack} from "@mui/material";
import {FunctionComponent, SVGProps} from "react";
import {useNavigate} from "react-router-dom";

const NavItem = (props: {
    icon: FunctionComponent<SVGProps<SVGSVGElement>>,
    active: boolean,
    path:string,
    title: string
}) => {
    const Icon = props.icon as FunctionComponent<SVGProps<SVGSVGElement>>;
    const navigate = useNavigate()

    return (
        <Stack onClick={() => navigate(props.path)}
               color={props.active ? 'rgba(83, 130, 231, 1)' : 'rgba(43, 56, 68, 0.4)'}
               sx={{
                   '&:hover': {
                       background: "rgba(83, 130, 231, 0.04)",
                   },
                   borderRight: props.active ? '2px solid #5382E7' : 'none',
                   backgroundColor: props.active ?'rgba(83, 130, 231, 0.04)' : 'white',
               }}
               direction={'row'}
               alignItems={'center'}
               pl={5}
               py={2}
               my={1}
               spacing={2}>
            <Icon/>
            <Box>
                {props.title}
            </Box>
        </Stack>
    )
}
export default NavItem