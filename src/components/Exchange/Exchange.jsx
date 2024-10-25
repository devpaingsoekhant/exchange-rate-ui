import React from 'react'
import "./Exchange.css";
import {exchangeRateData, exchangeRateData_2} from "../../data/exchangeRateData";
import { Button, Card, CardActions, CardContent, Divider, Grid2 } from '@mui/material';

const Exchange = () => {
  return (
    <div className='Exchange' id="exchange">
      {/* header */}
      <div className="exchange-header">
        <span className='stroke-text'>Currency</span><span>Exchange</span>
      </div>
      
      {/* exchange */}
      <div className='rate'>
        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                exchangeRateData.map((data) => {
                    return (
                        <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                            <Card variant="outlined">
                                <CardContent>
                                    <div className='exchange-card-header'>
                                        {data.flag}
                                        <span className='medium-text-label'>{data.currency}</span>
                                    </div>
                                </CardContent>
                                <Divider/>
                                <CardContent>                                    
                                    <div className='exchange-card-body'>
                                        <div className='exchange-card-body-left'>
                                            <center>
                                                <span className='text-label'>Buying</span>
                                                <div style={{ paddingTop : "3px"}}>
                                                    <span>{data.buying_price}</span>
                                                    <span className='small-text-label'>MMK</span>
                                                </div>
                                            </center>
                                        </div>
                                        <Divider orientation="vertical" flexItem>
                                            <span className='text-label'>{data.unit}</span>
                                        </Divider>
                                        <div className='exchange-card-body-right'>
                                            <center>
                                                <span className='text-label'>Buying</span>
                                                <div style={{ paddingTop : "3px"}}>
                                                    <span>{data.selling_price}</span>
                                                    <span className='small-text-label'>MMK</span>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                                <Divider/>
                                <CardContent>
                                    
                                </CardContent>
                            </Card> 
                        </Grid2>
                    )
                })
            }
        </Grid2>
      </div>    
    </div>
  )
}

export default Exchange;
