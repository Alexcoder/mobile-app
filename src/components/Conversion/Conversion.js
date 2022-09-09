import React, {useState, useEffect} from 'react';
import { Grid, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import {Link} from 'react-router-dom';
import './Conversion.css';


const ConversionPage = () => { 
  const [factor, setFactor] = useState()
  const [modeConversion, setModeConversion] = useState("")
  

  const cubicFt = (factor*5.6146).toFixed(2)//Converting from bbl to cuft
  const barrel = (factor/5.6146).toFixed(2)//Converting from cuft to bbl 
  const barrelGal = (factor/42).toFixed(2)//Converting from gal to bbl 
  const gallon = (factor*42).toFixed(2)//Converting from bbl to gal 
  const barrelm3 = (factor*6.28).toFixed(2)//Converting from m3 to bbl 
  const m3 = (factor/6.28).toFixed(2)//Converting from bbl to m3 
  const cuMeter = (factor/(5.6146*6.28)).toFixed(2)//Converting from ft3 to m3 
  const cubicFtM = (factor*6.28*5.6146).toFixed(2)//Converting from m3 to ft3 
  const inches = (factor*12).toFixed(2)//Converting from ft to inches 
  const FeetInch = (factor/12).toFixed(2)//Converting from inches to ft 
  const Pounds = (factor*2.205).toFixed(2)//Converting from kg to pounds 
  const kg = (factor/2.205).toFixed(2)//Converting from pounds to kg 
// 
  const MT = ((factor*94)/2205).toFixed(2) //Converting from sacks to MT
  const sacks = ((factor*2205)/94).toFixed(2) //Converting from MT to sacks
  const m = ((factor/3.28)).toFixed(2) //Converting from ft to m
  const ft = ((factor*3.28)).toFixed(2) //Converting from m to ft
//
const Fahrenheit = ((Number(factor)*1.8)+32).toFixed(1) //Converting from Centigrade to Fahrenheit
const Centigrade = ((Number(factor)-32)*100/180).toFixed(1) //Converting Fahrenheit to Centigrade




  const ResultChanger= modeConversion==="bbl"   ? cubicFt: 
                       modeConversion==="cuft"  ? barrel :
                       modeConversion==="gal"   ? barrelGal :
                       modeConversion==="bbls"  ? gallon :
                       modeConversion==="m3"    ? barrelm3 :
                       modeConversion==="bblss" ? m3 :
                       modeConversion==="ft3"   ? cuMeter :
                       modeConversion==="cuMeter"   ? cubicFtM :
                       modeConversion==="ftt"   ? inches :
                       modeConversion==="inches"   ? FeetInch :
                       modeConversion==="kg"   ? Pounds :
                       modeConversion==="pounds"   ? kg :
                       modeConversion==="sacks" ? MT :
                       modeConversion==="MT"  ? sacks : 
                       modeConversion==="ft"  ? m : 
                       modeConversion==="m"  ? ft :
                       modeConversion==="Centigrade"  ? Fahrenheit :
                       modeConversion==="Fahrenheit"  ? Centigrade : null
                      //  
  const baseUnit =     modeConversion==="bbl"? "bbl" :
                       modeConversion==="sacks" ? "sacks" :
                       modeConversion==="bbls"? "bbl" :
                       modeConversion==="gal"? "gal" :
                       modeConversion==="cuft" ? "cuft":
                       modeConversion==="bblss" ? "bbl":
                       modeConversion==="m3" ? "m3":
                       modeConversion==="ft3" ? "cuft":
                       modeConversion==="cuMeter" ? "m3":
                       modeConversion==="MT"? "MT" : 
                       modeConversion==="ft"? "ft" : 
                       modeConversion==="ftt"? "ft" : 
                       modeConversion==="inches"? "inches" : 
                       modeConversion==="kg"? "kg" : 
                       modeConversion==="pounds"? "lbs" : 
                       modeConversion==="m"? "meter" :
                       modeConversion==="Centigrade"  ? "Celsius" :
                       modeConversion==="Fahrenheit"  ? "Fahrenheit" :
                      null   //NOTE VALUES ARE cuft m bbl sacks mt value={"bbl"} in the options selection
                        //  
 const resultUnit =    modeConversion==="bbl" ? "cuft": 
                       modeConversion==="cuft"  ? "bbl":
                       modeConversion==="sacks" ? "MT":  
                       modeConversion==="MT"  ? "sacks" :
                       modeConversion==="bbls" ? "gal":
                       modeConversion==="gal" ? "bbl":
                       modeConversion==="bblss" ? "m3":
                       modeConversion==="m3" ? "bbl":
                       modeConversion==="ft3" ? "m3":
                       modeConversion==="cuMeter" ? "cuft":
                       modeConversion==="ft"  ? "m" : 
                       modeConversion==="ftt"  ? "inches" : 
                       modeConversion==="inches"  ? "ft" : 
                       modeConversion==="kg"  ? "lbs" : 
                       modeConversion==="pounds"  ? "kg" : 
                       modeConversion==="m"  ? "ft" :
                       modeConversion==="Centigrade"  ? "Fahrenheit" :
                       modeConversion==="Fahrenheit"  ? "Celsius" : null
                       //  
  const data =         modeConversion==="bbl"? "Convert From Bbl to Cuft":
                       modeConversion==="cuft"? "Convert From Cuft to Bbl":
                       modeConversion==="bbls"? "Convert From Bbl to Gal":
                       modeConversion==="gal"? "Convert From gal to Bbl":
                       modeConversion==="bblss"? "Convert From bbl to m3":
                       modeConversion==="m3"? "Convert From m3 to Bbl":
                       modeConversion==="ft3"? "Convert From cuft to m3":
                       modeConversion==="cuMeter"? "Convert From m3 to cuft":
                       modeConversion==="ftt"? "Convert From ft to inches":
                       modeConversion==="inches"? "Convert From inches to ft":
                       modeConversion==="kg"? "Convert From kg to lbs":
                       modeConversion==="pounds"? "Convert From lbs to kg":
                       modeConversion==="sacks"? "Convert From Sacks to MetricTon":
                       modeConversion==="MT"? "Convert From MetricTon to Sacks": 
                       modeConversion==="ft"? "Convert From Feet to Meters": 
                       modeConversion==="m"? "Convert From Meters to Feet": 
                       modeConversion==="Centigrade"? "Convert From Celsius to Fahrenheit": 
                       modeConversion==="Fahrenheit"? "Convert From Fahrenheit to Celsius": 
                       "Conversion Calculator"
useEffect(()=>{
if(modeConversion) localStorage.setItem('modeConversion',modeConversion) ;
setModeConversion((localStorage.getItem('modeConversion', modeConversion)))
},[modeConversion])

const Revert =()=>{
 if(modeConversion==="cuft")   setModeConversion("bbl") ;
 else if(modeConversion==="bbl")  setModeConversion("cuft");

  else if(modeConversion==="bbls")  setModeConversion("gal");
  else if(modeConversion==="gal")  setModeConversion("bbls");

  else if( modeConversion==="bblss") setModeConversion("m3");
  else if( modeConversion==="m3") setModeConversion("bblss");

  else if( modeConversion==="cuMeter")  setModeConversion("ft3") ;
  else if( modeConversion==="ft3")  setModeConversion("cuMeter") ;

  else if(modeConversion==="inches") setModeConversion("ftt");
  else if(modeConversion==="ftt") setModeConversion("inches");

  else if(modeConversion==="pounds") setModeConversion("kg");
  else if(modeConversion==="kg") setModeConversion("pounds");

  else if(modeConversion==="MT") setModeConversion("sacks"); 
  else if(modeConversion==="sacks") setModeConversion("MT"); 

  else if(modeConversion==="m") setModeConversion("ft");
  else if(modeConversion==="ft") setModeConversion("m");

  else if(modeConversion==="Centigrade") setModeConversion("Fahrenheit");
  else if(modeConversion==="Fahrenheit") setModeConversion("Centigrade");

  else return
}

  return (
  <div  className="conversion_container_div" >

<Grid container  className="border_div" direction="column"  p={2} alignItems="center" textAlign="center" justifyContent="center">
     <FormControl Fullwidth>
     <InputLabel id="input-select-label">SELECT</InputLabel>
    <Select   value={modeConversion} onChange={(e)=> setModeConversion(e.target.value)}
     className="select" label="select"
     id="select"  labelId="simple-select-label"
     > 
         <MenuItem disabled={modeConversion}>SELECT</MenuItem>
         <MenuItem className={modeConversion==="bbl"?  "green" : null} value={"bbl"}>Barrel To CubicFt</MenuItem>
         <MenuItem className={modeConversion==="cuft"?  "green" : null} value={"cuft"}>CubicFt To Barrel</MenuItem>
         <MenuItem className={modeConversion==="gal"?   "green" : null} value={"gal"}>Gallons To Barrel</MenuItem>
         <MenuItem className={modeConversion==="bbls"?  "green" : null} value={"bbls"}>Barrel To Gallons</MenuItem>
         <MenuItem className={modeConversion==="m3"?    "green" : null} value={"m3"}>CubicMeter To Barrel</MenuItem>
         <MenuItem className={modeConversion==="bblss"? "green" : null} value={"bblss"}>Barrel To CubicMeter</MenuItem>
         <MenuItem className={modeConversion==="ft3"?   "green" : null} value={"ft3"}>CubicFt To CubicMeter</MenuItem>
         <MenuItem className={modeConversion==="cuMeter"? "green" : null} value={"cuMeter"}>CubicMeter To CubicFt</MenuItem>
         <MenuItem className={modeConversion==="ftt" ? "green" : null} value={"ftt"}>Feet To Inches</MenuItem>
         <MenuItem className={modeConversion==="inches" ? "green" : null} value={"inches"}>Inches To Feet</MenuItem>
         <MenuItem className={modeConversion==="kg"?    "green" : null} value={"kg"}>Kilogram To Pounds</MenuItem>
         <MenuItem className={modeConversion==="pounds"? "green": null} value={"pounds"}>Pounds To Kilogram</MenuItem>
         <MenuItem className={modeConversion==="sacks" ?   "green" : null} value={"sacks"}>Cement Sacks To MetricTon</MenuItem>
         <MenuItem className={modeConversion==="MT"    ?   "green" : null} value={"MT"}>Cement MetricTon To Sacks</MenuItem>
         <MenuItem className={modeConversion==="ft"    ?   "green" : null} value={"ft"}>Feet To Meter</MenuItem>
         <MenuItem className={modeConversion==="m"     ?   "green" : null} value={"m"}>Meter To Feet</MenuItem>
         <MenuItem className={modeConversion==="Centigrade" ?   "green" : null} value={"Centigrade"}>Celsius To Fahrenheit</MenuItem>
         <MenuItem className={modeConversion==="Fahrenheit" ?   "green" : null} value={"Fahrenheit"}>Fahrenheit To Celsius</MenuItem>
         </Select>
         </FormControl>

    <Grid item xs={12} sm={12} md={8} lg={3} xl={3}>
      <h1 className="h1_data"> {data} </h1>
    </Grid>
    <Grid item xs={12} sm={12} md={8} lg={3} xl={3} sx={{display: "flex"}} mt={2} mb={2}>
      <TextField style={{textAlign: "center", height: "3.1rem", border: "1px solid transparent" }} id="outlined-basic" type='number' variant="outlined"
       value={factor} label={`${baseUnit}`} 
       onChange={(e)=> {modeConversion && setFactor(e.target.value)}}
       className='stextField'
       />
      <button style={{height:"3.58rem"}} onClick={Revert}><SyncAltIcon/></button>
      </Grid>


       {
          !factor & !modeConversion ?
         <div className='text'> Select To Continue !</div>
      : !factor ?
         <div className='text'> Input <span style={{color: "red"}}>{baseUnit}</span> Value To Continue !</div>
      :factor<0 ?  <div style={{color: "red",fontStyle:"italics", marginTop:"2rem"}} className='div'> Error: Negative Input !</div>
       :<div className='text' > {factor} <span style={{color:"red"}}>{baseUnit}</span> equals  {ResultChanger} <span style={{color: "blue"}}>{resultUnit}</span></div>
       }

      <Grid item xs={12} sm={12} md={8} lg={3} xl={3}
      >
       <button style={{marginTop:"1rem"}} className= "button red" 
       onClick={()=> {setFactor(""); 
       localStorage.setItem('factor', null); 
        setModeConversion(modeConversion)}}>CLEAR
        </button> 
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={3} xl={3}
        >
        <Link to='/'>Back</Link>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={3} xl={3}
        >
          <div className="lexwares">Lexwares @2022</div>
      </Grid>
    </Grid>
    {/* </Grid> */}
    {/* <Additive /> */}
  </div>
  )
}

export default ConversionPage;
