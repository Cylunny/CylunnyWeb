import React from 'react';

import NavbarComponent from '../components/NavbarComponent';
import './About.css';
import da_icon from '../static/da-icon.png'
import th_icon from '../static/toyhouse-icon.jpg'
import pat_icon from '../static/patreon-icon.png'
import insta_icon from '../static/insta-icon.png'
import af_icon from '../static/artfight-icon.png'


export default function About() {
    return (
        <div>
            <NavbarComponent />
            <div className='container-fluid main lilou-bg'>
                <div className='row h-100 fadein'>
                    <div className='col-lg-6'></div>
                    <div className='col-lg-4 my-5'><h1 className='display-2'>HELLO!</h1>
                    <div className='row my-5'>
                            <div className="card bg-dark text-light opacity-75">
                                <div className="card-body">
                                    <h5 className="card-title">My name is Cyl.</h5>
                                    <p className="card-text ">

                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row no-gutters float-end'>
                            <div className='col-lg'>
                                <a href="https://www.deviantart.com/cylunny"><img className="icon" src={da_icon}></img></a>
                                <a href="https://toyhou.se/Cylunny"><img className="icon" src={th_icon}></img></a>
                                <a href="https://www.patreon.com/cylunny"><img className="icon" src={pat_icon}></img></a>
                                <a href="https://www.instagram.com/cylunny/"><img className="icon" src={insta_icon}></img></a>
                                <a href="https://artfight.net/~Cylunny"><img className="icon" src={af_icon}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}