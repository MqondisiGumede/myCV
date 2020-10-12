import React, { Component } from "react";

export default class About extends Component {
    render(){
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom">
                            <strong>ABOUT ME</strong>
                        </h6>
                            <p className="grey-text">
                            I’m a well-composed and disciplined individual who is driven and motivated to work hard to achieve my goals. 
                            I believe in hard work, attentive listening and learning so that the necessary skills and experiences can be gained. 
                            We limit ourselves and anything is possible as long as the mind can conceive it.
                            </p>
                    </div>
                    <div className="card-action">
                    <h6>
                        <strong>PERSONAL INFO</strong>
                    </h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 cl6">
                                <p>
                                    <strong>Address:</strong> 11A Barbet Bow Richardsbaai 3900
                                </p>
                                <p>
                                    <strong>Email:</strong> mqondi.gumede@gmail.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> +2793960764
                                </p>
                            </div>
                                <div className="col s12 m6 l6 cl6">
                                <p>
                                    <strong>Home Language:</strong> IsiZulu
                                </p>
                                <p>
                                    <strong>First Additional Language:</strong> English
                                </p>
                                <p>
                                    <strong>Other Languages:</strong> Afrikaans, Setswana, Sesotho
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}