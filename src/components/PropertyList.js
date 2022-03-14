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
    const [data, setData] = useState([{
        "id": 0,
        "name": "",
        "description": "",
        "list": []
    }]);
    //let count = 0;
    useEffect(() => {
        fetch("http://localhost:5000/property_list").then(response => response.json()).then(json => {
            setData(json)
        }).catch(err => {
            console.log(err);
        })
    }, []);
    // let abc = [
    //     { img: img1, name: "condo" },
    //     { img: img1, name: "condo" },
    //     { img: img1, name: "condo" },
    //     { img: img1, name: "condo" },
    //     { img: img1, name: "condo" },
    //     { img: img1, name: "condo" },
    //     { img: img1, name: "condo" },
    //     { img: img1, name: "condo" },
    //     { img: img1, name: "condo" }
    // ]

    return (
        <div className='property'>
            <h3 className='bg-light'>Property Type Section</h3>
            {(
                () => {
                    let count = 0;
                    let x = [];
                    for (let i = 0; i < _rowCount(data); i++) {
                        x.push(<div className='row'>
                            {data.slice(count, count + 5).map((element) => {

                                return (
                                    <Property id={element.id} img={element.img} name={element.name} />
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