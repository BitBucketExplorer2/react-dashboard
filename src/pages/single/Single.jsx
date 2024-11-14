import React from 'react'
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/10673160/pexels-photo-10673160.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Johan Smith </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email :</span>
                                    <span className="itemValue">johan@gmail.com </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone :</span>
                                    <span className="itemValue">+1 99875 578 357 </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address :</span>
                                    <span className="itemValue">Elton St. 234 Garden Yd. NewYark </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country :</span>
                                    <span className="itemValue">USA </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending  (Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transaction</h1>
                    <Table />

                </div>
            </div>
        </div>
    )
}

export default Single