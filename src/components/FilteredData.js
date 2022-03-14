import React from 'react';
import '../scss/filteredData.scss'
import PropertyContainer from './PropertyContainer';

const FilteredData = (props) => {
    return (
        <div className='filtered'>
            <div className='sort '>
                <h3>Resort Name</h3>
                <div className='sortby'>
                    <p className='para'><b>sort by</b></p>
                    <div className='dropdown'><button className="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" >Featured</button></div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Star Rating
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">abc</a>
                            </div>
                        </button>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Distance
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">abc</a>
                            </div>
                        </button>
                    </div>
                    <div className='dropdown'>  <button className="btn btn-secondary " type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" >Guest Rating</button></div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Price
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">Abc</a>
                                <a className="dropdown-item" href="#">abc</a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='result'>
                {props.data[0].list?.map((element, key) => (
                    <div key={key}>
                        <PropertyContainer element={element} />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default FilteredData;
