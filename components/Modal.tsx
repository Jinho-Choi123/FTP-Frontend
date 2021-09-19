import type { NextPage} from 'next'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

interface ModalProps {
    isModalVisible: boolean;
    onCloseClick: () => void;
    gid: string;
    expiredtime: string;
}

const Modal:NextPage<ModalProps> = ({isModalVisible, onCloseClick, gid, expiredtime}) => {
    if(!isModalVisible) {
        return null
    }
    return (
        <div>
            <p>
                Helllo world. you are seeing the Modal i created.
                the gid is {gid}
                the gid will be disabled at {expiredtime}
            </p>
            <button onClick={onCloseClick}>Close</button>
        </div>
    )
}

export default Modal