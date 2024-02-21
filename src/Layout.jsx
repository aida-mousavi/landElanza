import React from 'react';


function Layout({children}) {
    return (
        <section className='w-full h-[100vh] flex justify-center items-center'>

            {children}

        </section>
    );
}

export default Layout;