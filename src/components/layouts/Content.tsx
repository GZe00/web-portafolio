import React from 'react';


const Content = ({ children }: ChildComponent) => {
    return <>
        <div className='w-full h-screen overflow-y-auto'>
            <div>
                {children}
            </div>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
    </>
}

export default Content