import SideBar from 'common/Sidebar'
import About from 'components/About'
import AppHome from 'components/Home'
import AppResume from 'components/Resume'
import React from 'react'

const index = () => {
    return (
        <div>
            <SideBar />
            <AppHome />
            <About />
            <AppResume />
        </div>
    )
}

export default index
