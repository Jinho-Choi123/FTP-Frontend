import type { NextPage } from 'next'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import axios, {AxiosResponse} from 'axios'
const FileSaver = require('file-saver')

const FileDownloadPage: NextPage = () => {

    const [gid, setGid] = useState("")

    const enterGid = async (event: any) => {
        event.preventDefault()
        const gid = event.target.value 
        await setGid(gid)
    }

    const submit = async (event: any) => {
        event.preventDefault()
        axios({
            method: 'get',
            url: 'http://localhost:8000/filedownload/list/',
            params: {
                gid: gid
            }
        })
            .then((res: AxiosResponse) => {
                const fileList = res.data
                const fileNum = res.data.length
                let fileuid:string = ""
                let requrl:string = ""
                let filename:string = ""
                // iterate through all file list
                for(let i:number = 0; i < fileNum; i++) {
                    fileuid = fileList[i].uid
                    filename = fileList[i].filename
                    requrl = `http://localhost:8000/filedownload?gid=${gid}&uid=${fileuid}`
                    FileSaver.saveAs(requrl, filename)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="groupid">Group Id</label>
                <input type="string" className="form-control" onChange={enterGid} id="groupid" aria-describedby="groupidHelp" placeholder="Enter Group Id"/>
                <small id="groupidHelp" className="form-text text-muted">Do not expose the groupid</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default FileDownloadPage