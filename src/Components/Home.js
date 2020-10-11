import React, { Component } from 'react';
import Skill from "./Skill";
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import NavBar from './NavBar';
import Profile from './Profile';
import About from './About';

export default class Home extends Component {
    render() {
        return(
            <section>
                <NavBar />
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m4 l3'>
                            <Profile />
                        </div>
                        <div className= 'col s12 m8 l9'>
                            <About />
                            <Skill />
                            <Experience />
                            <Education />
                            <Portfolio />
                        </div>
                    </div>
                </div>
            </section>
        );
            
    }
}