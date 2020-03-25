import React from 'react';
import axios from 'axios';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
//import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';

import { FileUploaderButton ,Button } from 'carbon-components-react';

import 'carbon-components/scss/globals/scss/styles.scss';

import {useDispatch} from 'react-redux';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  }
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


const handleFile =(fileName,e)=>{
  if(!fileName.includes('.xlsx')){
    alert('Please upload Excell file');
    //console.log(e.target.file);
    e.target.labelText='Add File'
  }else {
    console.log(e.target.files[0]);
    const data = new FormData();
    data.append('file', e.target.files[0]);
    console.log(data);
    axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
  })
  .then(res => { // then print response status
    alert(res.statusText)
  }).catch(err =>{ alert('Error uploading File ')})
    // alert(fileName);
  }

};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function NavBarMarketDropdown() {
 
  
  const dispatch =useDispatch();
  
  const classes = useStyles();
  const theme = useTheme();
  const [affeliate, setAffeliate] = React.useState('');
  const [configtype, setCongigType] = React.useState('');
  const [personName, setPersonName] = React.useState([]);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const handleChangeAffeliate = event => {
    setAffeliate(event.target.value);
    dispatch({type:'Affeliate', value:event.target.value});
   
  };
  const handleChangeConfig = event => {
    setCongigType(event.target.value);
    dispatch({type:'Config',value :event.target.value});
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
        <InputLabel id="demo-simple-select-chip-label">Tab</InputLabel>
        <Select
          labelId="demo-simple-select-chip-label"
          id="demo-simple-select-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
        <Button variant="contained" color="primary">
           Load Data
        </Button>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
        {/* <Button variant="contained" color="primary">
           Initial Load
        </Button> */}
        {/* <FileUploader
    accept={[
      '.jpg',
      '.png'
    ]}
    buttonKind="primary"
    buttonLabel="Add files"
    filenameStatus="edit"
    iconDescription="Clear file"
    // labelDescription="only .jpg files at 500mb or less"
    // labelTitle="Upload"
  /> */}
   <FileUploaderButton
accept={['.xlxn']}
buttonKind="primary"
className="bob"
disableLabelChanges={true}
disabled={false}
labelText="Add file"
multiple
name=""
onChange={function noRefCheck(e){handleFile(e.target.value,e)}}
onClick={function noRefCheck(){}}
role="button"
tabIndex={0}
/>
        </FormControl>
      
     
     
    </div>
  );
}
