import React from 'react';
import '../scss/propertyDescription.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PropertyDescription = () => {
    let params = useParams();
    const [data, setData] = useState({
        propertyId: "",
        propertyImg: "",
        propertyTitle: "",
        propertyDesc: "",
        propertyPrice: "",
        propertyLocation: { streetAddress: "", city: "", state: "", country: "", zip: "" },
        propertyType: "",
        propertyRules: "",
        propertyAmenities: "",
        bestseller: false
    }
    )
    useEffect(() => {
        fetch("http://localhost:5000/property/" + params.id).then(response => response.json()).then(json => {
            setData(json);
        }).catch(err => {
            console.log(err);
        })

    }, [])
    return (

        <div className='property ' >
            <div className='prize'>
                <div className='desc'>
                    <h3>{data.propertyTitle}</h3>
                    <p>{data.propertyLocation.streetAddress}</p>
                    <p className='text-success'>{data.propertyAmenities} </p>
                    {/* <p className='text-success'>free local cuisines breakfast, free wifi, and free parking &#10003; free airport transfer &#10003; free cancellation</p> */}
                </div>
            </div>
            <div className='description'>
                <div className='image'>
                    <img src={data.propertyImg} alt='location' />
                    {/* <Link to='https://drive.google.com/uc?id=12-mFKH8B4PZwqfXXNmHQHALilVtfryRZ'><button>GO GOOGLE</button></Link> */}
                </div>

                <div className='information '>

                    <p>Hotel with indoor salt water pool</p>

                    <b>Amenities:</b>
                    <p className='text-dark'>Continental, Vegetarian, Vegan, Buffet &#10003; <br />
                        Free wifi &#10003; <br /> Free parking available at the hotel &#10003; <br />Free airport transfer &#10003;
                        <br />Free cancellation &#10003;</p>
                </div>
                <div className='desc1'>
                    <span className='price'><b>&nbsp; {data.propertyPrice} &nbsp; &nbsp;</b></span>
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
                        <p>IThe service was good, place was clean. The view from room was spectecular</p>
                        <p id='date'>Jan 07,2022</p>
                        <hr />
                    </div>
                    <div className='rating'>
                        <span className="badge bg-success">8.0</span>
                        <span className='text'>
                            <b>Lovely Interior</b>
                            <p>Verified hotel reviews</p>
                        </span>
                    </div>
                    <div className='customer'>
                        <p>Great hotel with lots of amenities. Very nice outside sitting area and nice large gym with lots of equipment</p>
                        <p id='date'>Dec 25,2021</p>
                        <hr />
                    </div>
                    <a href='#'>See all review</a>
                </div>
            </div>
            <br /> <br />
        </div >


    );
}

export default PropertyDescription;
