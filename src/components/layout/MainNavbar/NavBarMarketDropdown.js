import React from 'react';
import axios from 'axios';
import { makeStyles  } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
//import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

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
  },root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));



const handleFile =(fileName,e,dispatch)=>{
  if(!fileName.includes('.xlsx')){
    alert('Please upload Excell file');
    //console.log(e.target.file);
    e.target.labelText='Add File'
  }else {
    console.log(e.target.files[0]);
    const data = new FormData();
    data.append('file', e.target.files[0]);
    dispatch({type:'Loaddata',value :true});
    console.log(data);
    axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
  })
  .then(res => { // then print response status
    alert(res.statusText)
    
    
  }).catch(err =>{ alert('Error uploading File ');})
    // alert(fileName);
  }

};

export default function NavBarMarketDropdown() {
 
  

  const dispatch =useDispatch();
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
    dispatch({type:'Affeliate', value:event.target.value});
   
  };
  const handleChangeConfig = event => {
    setCongigType(event.target.value);
    dispatch({type:'Config',value :event.target.value});
  };
  
  return (
    <div>
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
        </div>
        <div style ={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          flexWrap:'wrap',
          alignItems:'center'
        }}>
        <FormControl variant="outlined" className={classes.formControl}>
        <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={option => option.title}
        //defaultValue={[top100Films[13]]}
        Select Tab
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Select Tabs"
            placeholder="Select Tab"
          />
        )}
        
      />
      </FormControl>
      </div>
      <div style ={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          flexWrap:'wrap',
          alignItems:'center'
        }}>

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
onChange={function noRefCheck(e){handleFile(e.target.value,e,dispatch)}}
onClick={function noRefCheck(){}}
role="button"
tabIndex={0}
/>
        </FormControl>
      
     
     
    </div>
    </div>
  );
}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];