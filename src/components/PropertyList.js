import React from 'react';
import Property from './Property';
//import img1 from '../assets/images/1.jpg'
import '../scss/propertyList.scss';
import { useState, useEffect } from 'react';


const _rowCount = (variable) => {
    let count = 4
    let row = 1;
    for (let i = 0; i < variable.length - 1; i++) {
        if (count === i) {
            count += 5;
            row++;
        }
    }
    return row;
}

const PropertyList = () => {
    let c = 0;
    const [data, setData] = useState([{
        "id": 0,
        "name": "",
        "description": "",
        "list": []
    }]);
    useEffect(() => {
        fetch("https://restinn-hotel-booking.herokuapp.com/propertiesTypeSection").then(response => response.json()).then(json => {

            setData(json)
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className='property' >
            <h3 className='bg-light'>Property Category Section</h3>
            {(
                () => {
                    let count = 0;
                    let x = [];
                    for (let i = 0; i < _rowCount(data); i++) {
                        x.push(<div className='row' key={i}>
                            {data.slice(count, count + 5).map((element) => {
                                return (
                                    <Property id={element.propertyId} img={element.propertyImg}
                                        name={element.propertyType} type={element.propertyType} description={element.propertyDesc} key={(c++).toString()} />
                                )
                            })
                            }
                        </div>)
                        count = count + 4;
                    }
                    return x;
                }
            )()
            }

        </div>
    );
}

export default PropertyList;