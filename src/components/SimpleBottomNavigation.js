import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Instagram';
import CopyrightOutlined from '@mui/icons-material/CopyrightOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { alpha } from '@mui/system'; // Import alpha function




export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
      <Box  sx={{ backgroundColor: alpha('#ffa500', 1) }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}

          sx={{  backgroundColor: alpha('#ffa500', 0.5) , padding: '15px'}}
        >
          <BottomNavigationAction label="©️ Sign Language Converter 2024"  />
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
        {/* </ThemeProvider> */}
      </Box>

  );
}
