import React from 'react'
import { Bestseller } from './Bestseller';
import img1 from '../assets/images/3.jpg';
import '../scss/bestsellerList.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

const BestsellerList = () => {
    const [data, setData] = useState([{ id: 0, name: "", address: "" }])
    useEffect(() => {
        fetch("http://localhost:5000/propertiesBestseller?bestseller=true").then(response => response.json()).then(json => {
            setData(json);
        }).catch(err => {
            console.log(err);
        })

    }, [])

    return (
        <div className='bestseller'>
            <h3 className='bg-light'>Bestseller Section</h3>
            {(
                () => {
                    let count = 0;
                    let x = [];
                    for (let i = 0; i < _rowCount(data); i++) {
                        x.push(<div className='row'>
                            {data.slice(count, count + 5).map((element) => {

                                return (
                                    // <Bestseller id={element.id} img={element.img} name={element.name} key={element.id} />
                                    <Bestseller id={element.propertyId} img={element.propertyImg}
                                        name={element.propertyTitle} type={element.propertyType} />
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

export default BestsellerList;
