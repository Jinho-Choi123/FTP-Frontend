import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const Sidebar: NextPage = () => {
    return (
        <nav className='nav flex-column' id={styles.sidebar}>
            <a className='nav-link' href="/">Home</a>
            <a className='nav-link' href="/fileupload">File Upload</a>
            <a className='nav-link' href='/filedownload'>File Download</a>
            <a className='nav-link' href='/settings'>Settings</a>
        </nav>
    )
}

export default Sidebar