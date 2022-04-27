import React, {memo} from 'react'
import {Box, Grid, Skeleton} from 'components'
import Card from './Card'

function Board({data}) {
    const {cases, todayDeaths, recovered, deaths, todayCases} = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={200} height={100}/>

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card value={getValue(cases)} label="Total de casos" color="#5d78ff"/>
                </Grid>
                <Grid item xs={12}>
                    <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829"/>
                </Grid>
                <Grid item xs={12}>
                    <Card value={getValue(todayCases)} label="Casos hoje" color="#000"/>
                </Grid>
                <Grid item xs={12}>
                    <Card value={getValue(deaths)} label="Total de mortos" color="#E95078"/>
                </Grid>
                <Grid item xs={12}>
                    <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default memo(Board)
