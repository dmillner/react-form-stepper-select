import React from 'react';
import { FormContextProvider } from './FormContext';
import Stepper from './Stepper';

/**
 * Form Context Store
 */
function SelectStepper() {	
    return (
        <FormContextProvider>              
            <Stepper />
        </FormContextProvider>
    );
}

export default SelectStepper;

