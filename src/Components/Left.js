import React from 'react'
import {MdLightbulbOutline,MdNotificationsNone} from 'react-icons/md'
import {RiPencilLine,RiInboxArchiveLine} from "react-icons/ri"
import {CgTrash} from 'react-icons/cg'
import '../Styles.css'

function Left() {
    return (
        
            <div className="p-auto pt-1 h-100" style={{ width:'10%',minWidth: '70px' }}>
                    <div>
                        <MdLightbulbOutline className="menu display-block" />
                    </div>
                    <div>
                        <MdNotificationsNone className="menu" />
                    </div>
                    <div>
                        <RiPencilLine className="menu" />
                    </div>
                    <div>
                        <RiInboxArchiveLine className="menu" />
                    </div>
                    <div>
                        <CgTrash className="menu" />
                    </div>
                </div>
        
    )
}

export default Left