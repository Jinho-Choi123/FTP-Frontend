import type { NextPage, NextApiResponse} from 'next'
import React, { useState } from 'react';
import styles from '../styles/Uploadbox.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios, { AxiosResponse } from 'axios'
import Modal from '../components/Modal'

const Uploadbox: NextPage = () => {

    const [gid, setGid] = useState("")
    const [expiredtime, setExpiredtime] = useState("")
    const [filelist, setFilelist] = useState({
        uploadfile: ''
    })
    const [isModalVisible, setIsModalVisible] = useState(false)

    //Close the Modal window
    const closeModal = () => {
        setIsModalVisible(false)
    }

    const selectFile = async (event: any) => {
        event.preventDefault()
        const filelist = event.target.files
        await setFilelist({uploadfile: filelist})
    }

    const submit = async (event:any) => {
        event.preventDefault()
        const req = new FormData()
        await Array.from(filelist.uploadfile).forEach((item: any) => {
            req.append('uploadfile', item)
        })
        await axios({
            method: 'post',
            url:'http://localhost:8000/fileupload/',
            data: req,
        })
        .then((res)=> {
            console.log(res.data.gid)
            setGid(res.data.gid)
            setExpiredtime(res.data.expiredtime)
        })
        .then(() => {
            setIsModalVisible(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <form className='input-group mb-3' onSubmit={submit}>
                <input type='file' className='form-control' id='inputGroupFile01' onChange={selectFile} multiple required/>
                <button type='submit'>Upload</button>
            </form>
            <Modal isModalVisible={isModalVisible} onCloseClick={closeModal} gid={gid} expiredtime={expiredtime}/>
        </div>

    )
}

export default Uploadbox