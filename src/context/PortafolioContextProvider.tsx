import React from 'react'
import ConfigContext from './ConfigContext'

interface AuxProps {
    children: JSX.Element
}

const PortafolioContextProvider = ({ children }: AuxProps) => {
    const [preferences, setPreferences] = React.useState();
    return <ConfigContext.Provider
        value={
            {
                preferences,
                setPreferences
            }
        }>
        {children}
    </ConfigContext.Provider >
}

export default PortafolioContextProvider