import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import About from '../About'
import Inicio from '../Inicio'
import Contato from '../Contato';
import Portifolio from '../Portifolio';
import  Avatar  from '@mui/material/Avatar';
import { Stack } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 750, }}
    >
	
	
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',width: 200, paddingTop: 10, }}
      >
	   
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Sobre" {...a11yProps(1)} />
        <Tab label="Portifolio" {...a11yProps(2)} />
        <Tab label="Contato" {...a11yProps(3)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        {<Inicio />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {<About />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {<Portifolio />}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {<Contato />}
      </TabPanel>
    </Box>
  );
}