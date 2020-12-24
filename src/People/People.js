import React from 'react'

function People() {
    return (

        <div style={rootContainer}>
            <div style={headerContainer}>
                <h1> this is people header</h1>
            </div >
            <div style={bodyContainer}>
                <h1> this is people body</h1>
            </div >
            <div style={sliderContainer}>
                <h1> this is people sliser</h1>
            </div >
        </div>
    );
}

export default People;
const rootContainer = {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100vh'
}
const headerContainer = {
    position: 'relative',
    backgroundColor: '#ff0000',
    color: '0000ff',
    width: '100%',
    height: '20%'
};
const bodyContainer = {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '50%'
};
const sliderContainer = {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '20%'
};