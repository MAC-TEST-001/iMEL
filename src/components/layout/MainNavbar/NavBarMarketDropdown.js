import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NavBarMarketDropdown() {
  const classes = useStyles();
  const [affeliate, setAffeliate] = React.useState('');
  const [configtype, setCongigType] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChangeAffeliate = event => {
    setAffeliate(event.target.value);
  };
  const handleChangeConfig = event => {
    setCongigType(event.target.value);
  };

  return (
    <div style ={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      flexWrap:'wrap',
      alignItems:'center'
    }}>
    
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label" >
          Affeliate
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={affeliate}
          onChange={handleChangeAffeliate}
          labelWidth={labelWidth}
          // style={{
          //     height:'45px'
          // }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"ITGF"}>ITGF</MenuItem>
          <MenuItem value={"PMH"}>PMH</MenuItem>
          <MenuItem value={"ITTC"}>ITTC</MenuItem>
        </Select>
      </FormControl>


      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Config Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={configtype}
          onChange={handleChangeConfig}
          labelWidth={labelWidth}
        //   style={{
        //     height:'45px'
        // }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Core"}>Core</MenuItem>
          <MenuItem value={"Central"}>Central</MenuItem>
          {/* <MenuItem value={"ITTC"}>ITTC</MenuItem> */}
        </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
        <Button variant="contained" color="primary">
           Load Data
        </Button>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
        <Button variant="contained" color="primary">
           Initial Load
        </Button>
        </FormControl>
      
     
     
    </div>
  );
}
