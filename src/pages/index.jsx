import SideBar from 'common/Sidebar'
import About from 'components/About'
import AppHome from 'components/Home'
import Results from 'components/Results'
import AppResume from 'components/Resume'
import React from 'react'

const index = () => {
    return (
        <div className="relative">
            <SideBar />
            <AppHome />
            <About />
            <AppResume />
            <Results />
        </div>
    )
}

export default index
