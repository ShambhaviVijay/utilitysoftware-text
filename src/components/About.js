import React, { useState } from 'react'

export default function About(props) {
        const [myStyle, setMyStyle] = useState({
                color: 'white',
                backgroundColor: 'black'

        })
        const [btnText, setBtnText] = useState('enable dark mode')
        const setDark = () => {
                if (myStyle.color == 'white') {
                        setMyStyle({
                                color: 'black',
                                backgroundColor: 'white'
                        })
                        setBtnText('enable dark mode')
                }
                else {
                        setMyStyle({
                                color: 'white',
                                backgroundColor: 'black',
                                border: '0.5px solid white',
                        })
                        setBtnText('enable light mode')
                }
        }
        return (



                <>
                        <h2 className='h my-4' style={{ color: props.mode === 'light' ? 'black' : 'grey' }}>ABOUT US</h2>
                        <div>
                                <div className="accordion accordion-flush"  >
                                        <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                1
                                                        </button>
                                                </h2>
                                                <div id="flush-collapseOne" style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">  </div>
                                                </div>
                                        </div>
                                        <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingTwo">
                                                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                2
                                                        </button>
                                                </h2>
                                                <div id="flush-collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">  </div>
                                                </div>
                                        </div>
                                        <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingThree">
                                                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                                3
                                                        </button>
                                                </h2>
                                                <div id="flush-collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body"> </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="btn btn-primary my-2" onClick={setDark}>{btnText}</div>
                </>
        )
}
