import {
  Routes, Route, BrowserRouter
} from "react-router-dom";
import { Toaster  } from 'react-hot-toast';
import Home from './components/Home/';
import SelectStepper from './components/SelectStepper';
import NoMatch from './components/NoMatch';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({    
});

export default function App() {        
    return ( <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />               
                <Route exact path="select_stepper" element={<  SelectStepper />} />
                <Route path="*" element={<NoMatch  />} />                                                                  
            </Routes>      
        </BrowserRouter>
        <Toaster
            containerStyle={{              
                top: 20,               
            }}
         />
    </ThemeProvider>);
}




