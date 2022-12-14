import {useGlobalState} from '../../../state';
import {useHistory} from 'react-router-dom';


const useBumpPressure =()=>{
  const history = useHistory();
  const {wellData, setWellData,} = useGlobalState()
  const {
        tvd, 
        unit, 
        mudWeight, 
        topOfLeadTvd, 
        topOfTailTvd, 
        topOfFloatTvd, 
        weightOfLeadSlurry, 
        weightOfTailSlurry, 
        weightOfDisplacementFluid,
        presentCsgTvd} = wellData;

        function handleChange(e){
            setWellData({...wellData, [e.target.name]: e.target.value})
          }
          function handleClick(){
            if(mudWeight>="0" 
               & weightOfLeadSlurry>="0"
               & weightOfTailSlurry>="0"
               & weightOfDisplacementFluid>="0" 
               & topOfLeadTvd>="0"
               & topOfTailTvd>="0"  
               & topOfFloatTvd>="0" 
               & tvd>="0"
               & presentCsgTvd>="0")
              history.push("/select/result-primary")
              else alert("Empty field not allowed")
          }
          function handleVariant(selectedUnit){
            if(unit==="ft" & selectedUnit==="ft"){return "contained"}
            else if(unit==="m" & selectedUnit==="m") {return "contained"}
            else {return "outlined"}
          }

    return { handleChange, handleClick, handleVariant }
        
}

export default useBumpPressure;