import React from 'react';

import NavbarComponent from '../components/NavbarComponent';
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
                            <div className="card bg-dark text-light opacity-75 text-justify">
                                <div className="card-body">
                                    <h5 className="card-title">My name is Cyl.</h5>
                                    <p>
                                        I am a self-taught artist! I've been drawing since forever, from the humble beginnings of making my own pokemon or dragon trading cards, to eventually getting into manga and anime, as well as Visual Kei later on. I believe that all of these interests shaped my style and the things I enjoy creating most! </p>
                                    <p> If I had to pick my favorite things to draw, it would be Original Characters above all - I am not really a fanart kind of artist. But my passion is also to design many new characters, both for myself and to sell as adoptables via deviantArt or Patreon. My strengths lie in all things fantasy, be it Kemonomimis (preferably, cats and bunnies) or mythical creatures such as Demons, Faun, Centaurs, Aliens and of course my own Species! </p>
                                    <p>On this website, you will be able to find examples and prices of both my commissions, customs and adoptables, as well as hopefully some info on the worlds and/or species that I came up with. If you'd like to contact me, feel free to on any of my socials below! I am most active on deviantArt, however. </p>
                                    <p>Thank you for reading! 💗</p>

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