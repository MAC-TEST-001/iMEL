import React from 'react'
import MaterialTable from 'material-table';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import {useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));


let changesInData = {
    "added":[],
    "updated":[],
    "deleted":[]
  }
  
  const onSave =()=>{
    console.log(JSON.stringify(changesInData));
  }

export default function CustomGrid() {
   let affeliateName = useSelector((state)=>state.affeliate);
   let configName = useSelector((state)=>state.config);
    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
          { title: 'Id', field: 'id',hidden:'true' },
          { title: 'Name', field: 'name'},
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 'İstanbul': 'İstanbul', 'Şanlıurfa': 'Şanlıurfa' },
          },
        ],
        data: [
          { id:1, name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 'İstanbul' },
          {
            id:2,
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 'İstanbul',
          },
        ],
      });
    return (
        <React.Fragment>
          <div style={{ maxWidth: "100%" }}>
             <MaterialTable
      //editable={props.editable}
      title=""
      columns={state.columns}
      data={state.data}

      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                var {tableData ,...rest} = newData;

                changesInData.added.push({...rest,affeliateName,configName});
                
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  var {tableData ,...rest} = newData;
                  if(changesInData.updated.includes(oldData)){
                     changesInData.updated[changesInData.updated.indexOf(oldData)]={...rest,affeliateName,configName};
                  }else{
                    changesInData.updated.push({...rest,affeliateName,configName});
                  }
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                var {tableData ,...rest} = oldData;
                console.log(affeliateName);
                console.log(configName);
                changesInData.deleted.push({...rest,affeliateName,configName});
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    <br/>
    <div className="gridButtons" style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      flexWrap:'wrap'
    }}>
    {/* <FormControl variant="outlined" className={classes.formControl} style ={{
      padding:'10px'
    }}>
        <Button variant="contained" color="primary">
           Add
        </Button>
        </FormControl> */}

        <FormControl variant="outlined" className={classes.formControl} style ={{
      padding:'10px'
    }}>
        <Button variant="contained" color="primary" onClick={onSave}>
           Save
        </Button>
        </FormControl>

        {/* <FormControl variant="outlined" className={classes.formControl} style ={{
      padding:'10px'
    }}>
        <Button variant="contained" color="primary">
           Cancel
        </Button>
        </FormControl> */}

        <FormControl variant="outlined" className={classes.formControl} style ={{
      padding:'10px'
    }}>
        <Button variant="contained" color="primary">
           Report
        </Button>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl} style ={{
      padding:'10px'
    }}>
        <Button variant="contained" color="primary">
           Verify Data
        </Button>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl} style ={{
      padding:'10px'
    }}>
        <Button variant="contained" color="primary">
           Audit Trail
        </Button>
        </FormControl>

    </div>
    </div>
        </React.Fragment>
    )
}
