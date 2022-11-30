import React from 'react';

const ConfigContext = React.createContext({
    preferences: undefined,
    setPreferences: (value: any) => { }
});

export default ConfigContext;