import React from 'react';
import Navbar from './Navbar';
import useConfig from '../hooks/useConfig';

interface ChildrenElement {
    children: React.ReactNode,
    location: string
}

const LayoutMain = ({ children, location }: ChildrenElement) => {
    const { preferences, setPreferences }: any = useConfig();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {

            const preferencesLS = localStorage.getItem('sitePreferences');

            /*
            estructura de la configuracion
                {
                    languaje: {
                        spanish: {},
                        english: {},
                        german: {}
                    },
                    theme: {
                        dark: {
                            value:"#000000" 
                        },
                        light: {
                            value:"#FFFFFF"
                        }
                    },
                    sidebar: {
                        isOpen: true
                    }
                }
            */

            if (!preferencesLS) {
                let data = {
                    languaje: "es",
                    theme: "light"
                }
                localStorage.setItem('sitePreferences', JSON.stringify(data));
            }

            if (!preferences) {
                setPreferences(preferencesLS);
            }



        }

    }, []);

    return <main className="w-full h-screen flex flex-col bg-neutral-900 duration-300 ease-out text-stone-100">
        <div>
            <Navbar location={location} />
        </div>
        <div className='w-full h-full overflow-y-auto'>
            {children}
        </div>

        {/* 
            <div>
                footer
            </div> 
        */}

    </main>
}

export default LayoutMain;