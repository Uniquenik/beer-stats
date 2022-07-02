import Create from "./images/create.svg";
import PageHeader from "../components/pageHeader";
import {Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../redux/store";
import {useEffect} from "react";
import {loadBeersRequest} from "../redux/beers-state/beers-action-creators";
import {ReactComponent as Edit} from "./images/Edit.svg"
import {ReactComponent as Delete} from "./images/Delete.svg"
import Loader from "../shared/loader";

const tableHeader = ["Title", "Description", "First brewed", "Volume", "Contributed by", "Actions"]


const MyProducts = () => {
    const dispatch = useDispatch()
    const {loading, beers} = useSelector((state: RootReducer) => state.beers)

    useEffect(() => {
        dispatch(loadBeersRequest())

    }, [])

    if (loading) return <Loader/>

    return (
        <>
            <PageHeader
                title={'My product'}
                subtitle={'Product table'}
                buttonText={'Create a product'}
                buttonIcon={Create}
                onButtonClick={() => {
                }}/>
            <TableContainer style={{paddingTop: "48px"}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow style={{padding: 0}}>
                            {tableHeader.map((el, index) => {
                                return (
                                    <TableCell align={'center'} padding={'none'} key={index}
                                               sx={{
                                                   backgroundColor: '#2B3844',
                                                   minWidth: '80px',
                                                   color: 'white',
                                                   padding: '20px 1px'
                                               }}
                                    >
                                        {el}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {beers.map((beer) => (
                            <TableRow
                                key={beer.id}
                                sx={{
                                    '&:nth-of-type(odd)': {
                                        backgroundColor: 'white',
                                    },
                                }}
                            >
                                <TableCell align={'center'} component="th" scope="row">
                                    {beer.name}
                                </TableCell>
                                <TableCell>{beer.description}</TableCell>
                                <TableCell align={'center'}>{beer.first_brewed}</TableCell>
                                <TableCell align={'center'}>{beer.volume.value + " " + beer.volume.unit}</TableCell>
                                <TableCell align={'center'}>{beer.contributed_by}</TableCell>
                                <TableCell align={'center'}>
                                    <Stack direction={'row'} spacing={1}>
                                        <Button
                                            sx={{
                                                fontSize: '12px',
                                                padding: '8px 16px',
                                                textTransform: 'none',
                                                backgroundColor: 'rgba(83, 130, 231, 0.1)'
                                            }}
                                        >
                                            Sell
                                        </Button>
                                        <Button
                                            sx={{
                                                padding: '8px 16px',
                                                textTransform: 'none',
                                                backgroundColor: 'rgba(83, 130, 231, 0.1)'
                                            }}
                                        >
                                            <Edit/>
                                        </Button>
                                        <Button
                                            sx={{padding: '0',}}
                                        >
                                            <Delete/>
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default MyProducts