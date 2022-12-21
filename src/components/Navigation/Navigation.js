import React, {useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import {Grid, Paper} from '@mui/material';
import './Navigation.css';
import { useGlobalState } from '../../state';

const Navigation = () => { 
  const {navMode, setNavMode, setMode,} =  useGlobalState();
  const history = useHistory();

const handleContinue = () =>{
   if(navMode==="unit_conversion") history.push("/select/field-unit-converter")
   else if(navMode==="additive") history.push("/select/additive")
   else if(navMode==="bump-pressure") history.push("/select/bump-pressure")
   else if(navMode==="primary"){setMode("OTHERS"); history.push("/select/primary")}
   else if(navMode==="1338") {setMode("1338"); history.push("/select/primary")}
   else if(navMode==="958") {setMode("958"); history.push("/select/primary")}
   else if(navMode==="7INCH" ) {setMode("7INCH"); history.push("/select/primary")}
   else if(navMode==="PLUG") {setMode("PLUG"); history.push("/select/primary")}
   else if(navMode==="liner") {setMode("liner"); history.push("/select/primary")}
   else if(navMode==="vol_cap") {setMode("liner"); history.push("/select/volume-capacity")}
   else if(navMode==="liner") history.push("/select/primary")

   else history.push('/select')
} 
useEffect(() => {
   if(navMode) localStorage.setItem('navMode', navMode)
   setNavMode(localStorage.getItem('navMode', navMode))
 }, [navMode, setNavMode])




  return (
    <div className="navigation_div_container">

    <Grid container direction="column" justifyContent="center" alignItems="center" textAlign="center"
    columnSpacing={1} rowSpacing={7} p={5} 
    >

     <Paper elevation={5}  className="tag_p">
      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginBottom: "-2rem"}}>
         <button className={navMode==="unit_conversion"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("unit_conversion")}></button>
         <button className="second_grid_button" onClick={()=> {setNavMode("unit_conversion")}} >
           Unit Conversion
         </button>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center",marginTop: "1rem", marginBottom: "-2rem"}}>
         <button className={navMode==="vol_cap"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("vol_cap")}></button>
         <button className="second_grid_button" onClick={()=> {setNavMode("vol_cap")}} >
           Volume and Capacity
         </button>
      </Grid>

     <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem"}}>
         <button className={navMode==="primary"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("primary")}></button>
         <button className="second_grid_button" onClick={()=> setNavMode("primary")} >
           Primary Cementing
         </button>
    </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="1338"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("1338")}></button>
         <button className="second_grid_button" onClick={()=> setNavMode("1338")} >
           13-3/8 inch Csg Cementing
         </button>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="958"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("958")}></button>
         <button className="second_grid_button" onClick={()=> setNavMode("958")} >
           9-5/8 inch Casing Cementing
         </button>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="7INCH"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("7INCH")}></button>
         <button className="second_grid_button" onClick={()=> setNavMode("7INCH")} >
           7 inch Csg Cementing
       </button>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="bump-pressure"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("bump-pressure")}></button>
         <button className="second_grid_button" onClick={()=> setNavMode("bump-pressure")} >
           Bump Pressure
         </button>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="PLUG"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("PLUG")}></button>
         <button className="second_grid_button" onClick={()=> setNavMode("PLUG")} >
           Plug (Remedial) Cementing
         </button>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "-2rem",}}>
         <button className={navMode==="liner"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("liner")}></button>
        <button className="second_grid_button" onClick={()=> setNavMode("liner")} >
          Liner Cementing
        </button>
      </Grid>

      <Grid item xs={12} sm={12} md={8} sx={{display: "flex", gap:"1rem", textAlign:"center", marginTop: "1rem", marginBottom: "1rem",}}>
         <button className={navMode==="additive"? "green": ""} style={{color: "black", height: "0rem", borderRadius:"50%",
           border: "2px solid gray", padding:"1rem", marginTop: "1.3rem", marginLeft: "1rem" ,}}
           onClick={()=> setNavMode("additive")}></button>
         <button className="second_grid_button" onClick={()=> setNavMode("additive")} >
           Additive Check
         </button>
      </Grid>
      <Grid item xs={12} sm={10} md={3} mt={4} mb={2} sx={{marginLeft:{xs:"1rem", sm:"3rem", md:"10rem"}}} >
        <button className={!navMode? "nav_button" : "nav_button green"} onClick={handleContinue}>CONTINUE</button>
      </Grid> 
    </Paper>


   </Grid >

    </div>
  )
}

export default Navigation;
