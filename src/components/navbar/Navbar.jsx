import React, { useContext } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search... ' />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>

                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />

                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon' />

                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className="counter">1</div>

                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className="counter">2</div>

                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <img src="https://lh3.googleusercontent.com/ofgMjiJor0X15Eu0o88WVX0XRSKXueKq6OYg62PG2Tt1SGwcKPfFF0bbbO-d-_gcCN92Y7iZ2P-4o09mFdtZCFoBt7-nitqfhlvPAzGI3CblPwnsuRlW9X8kf1iB2uT50eNUuqzqU8pFwXJdwx6Lom7lQGsPtg53xq0s8KJp9pXKkzsw6WlApCysuEOctLLBREaY9sh3GAZ9y_yrAe5zAV-Zc8sYVXd6wTU5jj7MP284v4TRAapcHC2-DFeVRwuGhN8G8W48Iv29_qZ8OWZYy6-uJsiBCrkCEAJ3Umj3lnNoevFxlLU6fJLG8-eElrhYTx9K0QMHkBHTclhp2HVTE_G_cB6JWS9D_zis1npA9QRoPhRNFEPjGBeYlPP1u9hg6UZ_XeSrMLb-Z-xxFDiuKCRACkO8_urqBtJF2vH1YFCOKZSESy2jAzWDs-xcNeZuvzOZoNxtG16Z24HDiMHlhWzkIHs5ko0rJlIXHZvshOu6r_j3GiSlDKZh1xsZACdzdghc5Hq8EI0ue8M_KLmugmZfR6VPV1H5kSEhSTggLreHUyA9iUEj4gS-_EQnYwFvNazospjCOKtNa-kozO2rVVc1_jxjeshXfeMbagqOXtbjJPMbV6_hqAMl-SLrnWIbsBAYgNKMYdtZAy9nmtFUjJoJEx5uif-OUeixUw0g5fYIsSMgcBFNd9D-YPsU0-fX6ZD9VIOkIYMS1xZwHvm3sMbBl7vPAPzScR3ASbWWejKpJDxFwPM=s327-no?authuser=0"
                            alt=""
                            className='avatar'
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar