import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise);
            setData(actualData.statewise);

        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getCovidData();

    }, []);
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <marquee  behaviour="scroll"width="80%" diresction="right" height="100%"scrollamount="10">
                    <h1>INDIA LIVE COVID-19 STATUS</h1>
                    <h2 text-align="center">STAY HOME STAY SAFE</h2>
                    </marquee>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>state</th>
                                <th>confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>last updated</th>
                            </tr>
                            
                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{curElem.state}</th>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })


                            }


                        </thead>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Covid