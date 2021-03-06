import type { NextPage } from 'next'
import Head from 'next/head'
import Uploadbox from '../components/Uploadbox'
import styles from '../styles/FileUploadPage.module.css'


const FileUploadPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>FileUpload Page</title>
                <meta name='fileupload' content='file upload'/>
            </Head>
            <div id={styles.container}>
                <Uploadbox/>
            </div>
        </div>
    )
}

export default FileUploadPage