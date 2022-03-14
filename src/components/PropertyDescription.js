import React from 'react';
import '../scss/propertyDescription.scss'
//import img1 from 'https://drive.google.com/uc?id=10EybcSiIduUjqQ8LznD5Hv5aEhfhP9Zt';
//import img1 from '../assets/images/3.jpg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PropertyDescription = () => {
    let params = useParams();
    const [data, setData] = useState([{
        "id": 0,
        name: "",
        description: ""
    }
    ])
    useEffect(() => {
        fetch("http://localhost:5000/property_description").then(response => response.json()).then(json => {
            let abc = json.filter((element) => element.id == parseInt(params.id))
            setData(abc);
        }).catch(err => {
            console.log(err);
        })

    }, [])
    return (

        <div className='property ' >
            <div className='prize'>
                <div className='desc'>
                    <h3>{data[0].name}</h3>
                    <p>3-star Hotel with outdoor pool, near pigeon point beach</p>
                    <p className='text-success'>free local cuisines breakfast, free wifi, and free parking &#10003; free airport transfer &#10003; free cancellation</p>
                </div>
            </div>
            <div className='description'>
                <div className='image'>
                    <img src={data[0].img} alt='location' />
                    {/* <Link to='https://drive.google.com/uc?id=12-mFKH8B4PZwqfXXNmHQHALilVtfryRZ'><button>GO GOOGLE</button></Link> */}
                </div>

                <div className='information '>

                    <p>3-star Hotel with outdoor pool, near pigeon point beach</p>
                    <b>Amenities:</b>
                    <p className='text-dark'>free local cuisines breakfast &#10003; <br />
                        free wifi &#10003; <br /> free parking &#10003; <br />free airport transfer &#10003;
                        <br />free cancellation &#10003;</p>
                </div>
                <div className='desc1'>
                    <span className='price'><b>&nbsp; {data[0].Price} &nbsp; &nbsp;</b></span>
                    <a href="#" className="btn btn-primary rounded-pill"> Book Now </a>
                </div>

            </div>



            <div className='review'>
                <b className='rv'>Reviews</b>
                <br /> <br />
                <div className='rating'>
                    <span className="badge bg-success">8.6</span>
                    <span className='text'>
                        <b>Great place to stay</b>
                        <p>verified hotel reviews</p>
                    </span>
                </div>
                <div className='customerreview'>
                    <div className='customer'>
                        <p>I and my family enjoyed alot. The staff was very polite and helpful</p>
                        <p id='date'>jul,8,2020</p>
                        <hr />
                    </div>
                    <div className='rating'>
                        <span className="badge bg-success">8.0</span>
                        <span className='text'>
                            <b>Fabulous</b>
                            <p>77 verified hotel.com reviews</p>
                        </span>
                    </div>
                    <div className='customer'>
                        <p>I and my family enjoyed alot. The staff was very polite and helpful</p>
                        <p id='date'>jul,8,2020</p>
                        <hr />
                    </div>
                    <a href='#'>see all review</a>
                </div>
            </div>
            <br /> <br />
        </div >


    );
}

export default PropertyDescription;
