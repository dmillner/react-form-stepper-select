/***
 * Stepper Data
 */
export const steps = [
    'Choose your country and guess it\'s capital', 
    'Show what you know about countries', 
    'What do ya know about US cities?'
];

/***
 * Form Data
 */
export const countryOptions = [
	{ value: 1, label: 'US'  },
	{ value: 2, label: 'China' },
	{ value: 3, label: 'Russia' }
];

export const capitalOptions = {
    US: [
        { value: 1, label: 'New York'  },
        { value: 2, label: 'Washington DC' },
        { value: 3, label: 'Boston'  },
        { value: 4, label: 'Salt Lake City'  }
    ],
    China: [
        { value: 1, label: 'Nanjing'  },
        { value: 2, label: 'Shanghai' },
        { value: 3, label: 'Beijing'  },
        { value: 4, label: 'Chengdu'  }
    ],
    Russia: [
        { value: 1, label: 'Moscow'  },
        { value: 2, label: 'St Petersburg' },
        { value: 3, label: 'Kazan'  },
        { value: 4, label: 'Minsk'  }
    ]
}

/***
 * Solutions
 */
export const countryToCapital = [
    { country: 1, capital: 2},
    { country: 2, capital: 3 },
    { country: 3, capital: 1}   
];

export const countryQuiz = {
    citizens: 2, // citizens
    surface: 3, // surface
    languages: 2, // languages
}

export const citiesQuiz = {
    citizens: 1, // citizens
    age: 1, // age   
}