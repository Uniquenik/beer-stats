import PageHeader from "../components/pageHeader";
import Create from "./images/create.svg"
import {useEffect, useRef, useState} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {Box, Divider, Grid, Paper, Typography} from "@mui/material";
import {optionsColumn, optionsPie, ChartData, optionsLine} from "./chartsOptions";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../redux/store";
import {loadBeersRequest} from "../redux/beers-state/beers-action-creators";
import Loader from "../shared/loader";
import {Beer} from "../shared/data-types";


const Statistics = () => {
    const [pieData, setPieData] = useState<ChartData[]>([])
    const [columnData, setColumnData] = useState<ChartData[]>([])
    const [lineData, setLineData] = useState<ChartData[]>([])

    const chartComponentRef = useRef<HighchartsReact.RefObject>(null)

    const dispatch = useDispatch()
    const {loading, beers} = useSelector((state:RootReducer) => state.beers)

    useEffect(() => {
        dispatch(loadBeersRequest())
    },[])

    useEffect(()=> {
        if (beers) {
            let ingredientsArray:number[] = []
            let dataForPie:ChartData[] = []
            beers.map((obj) =>
                obj.ingredients.malt.map((el:any) =>
                    ingredientsArray[el.name] = (ingredientsArray[el.name] || 0) + 1
                ))
            Object.entries(ingredientsArray).forEach((el) =>
                dataForPie.push({name:el[0], y: el[1]})
            )
            dataForPie.sort(function (a,b) {return b.y - a.y})

            let dataForColumn: ChartData[] = []
            beers.map((el) =>
                dataForColumn.push({name:el.name, y: el.abv})
            )

            let yearsArray:number[] = []
            let dataForLine:ChartData[] = []
            beers.map((obj:Beer) => {
                let year = Number(obj.first_brewed.split('/')[1])
                yearsArray[year] = (yearsArray[year] || 0) + 1
            })
            Object.entries(yearsArray).forEach((el) =>
                dataForLine.push({name:el[0], y: el[1]})
            )


            setPieData(dataForPie.slice(0,10))
            setColumnData(dataForColumn)
            setLineData(dataForLine)
        }


    },[beers])

    if (loading) return <Loader />

    return(
        <Box>
            <PageHeader
                title={'Sales statistics'}
                subtitle={'Welcome to CRM dashboard'}
                buttonText={'Create a product'}
                buttonIcon={Create}
                onButtonClick={() => {}}/>
            <Divider style={{padding: '16px 0px'}}/>
            <Grid pt={5} container direction="row" spacing={3}>
                <Grid item xs={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper style={{padding: '32px', boxSizing: 'border-box', height: "325px"}}>
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    containerProps={{ style: { height: "250px" } }}
                                    options={{ ...optionsPie, series: [{
                                            type: 'pie',
                                            color: '#5B6ACD',
                                            name: 'Melt',
                                            data: [...pieData]}]}}
                                    ref={chartComponentRef}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper style={{padding: '32px', boxSizing: 'border-box', height: "220px"}}>
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    containerProps={{ style: { height: "130px" } }}
                                    options={{ ...optionsLine, series: [{
                                            type: 'line',
                                            color: '#1CAF7F',
                                            name: 'New sort by year',
                                            data: [...lineData]}]}}
                                    ref={chartComponentRef}
                                />
                                <Typography sx={{fontSize:'24px', fontWeight: 600}}
                                            align={'center'}>
                                    {beers.length || '...'}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={7}>
                    <Grid sx={{height: '100%'}}>
                        <Paper style={{padding: '32px', boxSizing: 'border-box', height: '100%'}}>
                            <HighchartsReact
                                highcharts={Highcharts}
                                containerProps={{ style: { height: "100%" } }}
                                options={{ ...optionsColumn, series: [{
                                        type: 'column',
                                        color: '#5B6ACD',
                                        name: 'Alcohol by volume',
                                        data: [...columnData]}]}}
                                ref={chartComponentRef}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Statistics