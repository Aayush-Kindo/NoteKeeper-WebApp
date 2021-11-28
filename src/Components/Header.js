import React from 'react'
// import { InputGroup, FormControl} from 'react-bootstrap'
import '../Styles.css'

function Header() {
    return (
        
            <div className="header">
                <div className="header-content">
                    <div className="m-0 p-0" style={{ display: 'flex',minWidth:'218px'}}>
                        <div className="menu">
                            <img className="img-menu" src="https://img.icons8.com/material-outlined/50/000000/menu--v1.png" alt="menu" />
                        </div>
                        <div className="" style={{ display: 'flex' }}>
                            <img className="img-logo mt-1" src="https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png" alt="menu" />
                            <h1 className="app-name m-1 p-2">NoteKeeper</h1>
                        </div>
                        {/* search */}
                        {/* <InputGroup className="search p-1">
                            <InputGroup.Text id="search-icon">
                                <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" alt="search" />
                            </InputGroup.Text>
                            <FormControl                               
                                id="search-input"
                                placeholder="Search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup> */}
                        {/* end of search */}
                        
                        {/* menu on the right side of header  */}
                        {/* <div className="rightDiv" style={{ display: 'flex', backgroundColor: '', position: 'absolute', right: '0px' }}>
                            <div className="menu" style={{ marginLeft: '' }}>
                                <img className="img-menu reload" src="https://cdn1.iconfinder.com/data/icons/file-management-system-glyph/32/Filemanager-glyph-svg-53-256.png" alt="reload" />
                            </div>
                            <div className="menu listStyle">
                                <img className="img-menu" src="https://cdn2.iconfinder.com/data/icons/generel-ui-set/48/list_view-128.png" alt="list style" />
                            </div>
                            <div className="menu settings">
                                <img className="img-menu" src="https://cdn-icons-png.flaticon.com/512/503/503822.png" alt="settings" />
                            </div>
                            <div className="menu apps">
                                <img className="img-menu" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_apps_48px-128.png" alt="apps" />
                            </div>
                            <div className="py-2 p-1 profile">
                                <img className="img-logo " src="https://th.bing.com/th/id/R.17e9019c0eaf8a4fb3a9a42cd00ae2a9?rik=cuFEDKCT4tiZ0Q&riu=http%3a%2f%2fcim.jlj.co.id%2fassets%2fimg%2fA.png&ehk=XymtuJwvk%2fbpMgS%2faTtlEQRkBgTje1q%2fRdrWuUzUsJ8%3d&risl=&pid=ImgRaw&r=0" alt="profile" />
                            </div>
                        </div> */}
                        {/* ************ */}
                    </div>
                </div>
            </div>
        
    )
}

export default Header
