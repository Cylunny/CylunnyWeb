import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { Accordion } from 'react-bootstrap';

export default function UnderConstruction() {
    return (
        <div>
            <NavbarComponent />
            <div className='container-fluid main grey-bg'>
                <div className='row pt-5'>
                    <div className="col-lg-4">
                        <img src="https://f2.toyhou.se/file/f2-toyhou-se/images/46808332_ZiwX62kj0hEFDY5.png"></img>
                    </div>
                    <div className='col-lg-7'>
                        <div className='bg-dark text-light p-5 m-5 fadein'>
                            <div className='col'><h1 className='display-2'>Terms of Service</h1></div>
                            <p><i>"Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS and ToU) are rules by which one must agree to abide in order to use a service." - Wikipedia</i></p>
                            <p>If you commission me, buy an adopt/design of me or own a Closed Species I created, you are to follow these terms! <b>All terms are subject to change to protect me as an artist and my buyers.</b></p>

                            <hr></hr>
                            <Accordion className='bg-dark text-dark'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Art / Commission TOS</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>By Commissioning art of me, you agree to follow these terms!</h6>
                                        <hr></hr>
                                        <h3>General</h3>
                                        <ul>
                                            <li>My art is a digital good and doesn't require shipping. You will receive a .png or .jpg file.</li>
                                            <li> I can refuse a commission for any reason, and I do not have to tell you the reason.</li>
                                            <li> If, at any point, I feel like you're being rude/unreasonable with me, I will cancel your commission.</li>
                                            <li> You need to be able to write coherent english, to avoid misunderstandings.</li>
                                            <li> You need to provide me a proper, colored reference of the character you'd like me to draw. It needs to show at least as much of the character as the commission you want to get (fullbody ref for fullbody commission etc).</li>
                                            <li> I do not design outfits in commissions unless I say I will. If your character doesn't have any outfits, they will be naked.</li>
                                            <li> I will make small edits to a finished commission if you ask me to. Be aware that this has to be within reason.</li>
                                        </ul>
                                        <h3>Payment</h3>
                                        <ul>
                                            <li> I take payment after I finish a commission. If someone abuses this fact, I will change this to full upfront payment and they will be blacklisted.</li>
                                            <li> Do not send payment unless I specifically told you to!</li>
                                            <li> Payment through points and paypal only. I will always note down which form of payment I currently accept.</li>
                                            <li> In case of points, payment can be sent via gift option.</li>
                                            <li> In case of paypal, I'll ask for your email and send you an invoice.</li>
                                            <li> If you need more time or something comes up regarding payment, you must discuss this with me.</li>
                                        </ul>
                                        <h3>Refunds</h3>
                                        <ul>
                                            <li> As of right now, I ask for payment after I finish the art- therefore, there are no refunds as you get the watermarked, finished art shown before getting an invoice.</li>
                                            <li> If someone abuses this, I will change this rule and they will be blacklisted.</li>
                                        </ul>
                                        <h3>The Commissioner - You</h3>
                                        <ul>
                                            <li> May not claim the art as their own.</li>
                                            <li> May not trace/copy/steal my art.</li>
                                            <li> May use the art in a private setting. No commercial use is allowed. You may not profit of my art.</li>
                                            <li> May not edit my artwork without asking me.</li>
                                            <li> May never remove my signature.</li>
                                            <li> May not upload/repost the art they receive to Gallery-style art websites like deviantArt, Furaffinity, etc.</li>
                                            <li> May upload the art to toyhouse and the likes, with proper credit given to me (a link back to my deviantArt or toyhouse account, both of which are named cylunny!)</li>
                                            <li> May use my art as profile picture / icon / decoration with proper credit given.</li>
                                            <li> Receives a .jpg or .png file of the finished commission. No .sai or .psd files!</li>
                                            <li> Can ask for sketch progress via note at any time- just don't overdo it!</li>
                                        </ul>
                                        <h3>The Artist - Me</h3>
                                        <ul>
                                            <li> I hold all the rights to my artwork as an artist. Only the commissioner and I may post the art.</li>
                                            <li> I can post the finished piece to my gallery and other art sites if I wish. If you don't want me to, consider noting me and we might work something out.</li>
                                            <li> I do not own the rights to the character depicted, and will credit you as the owner.</li>
                                            <li> Will credit designers/species creators if I'm being correctly informed about them.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Adoptable / Design TOS</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>By adopting a design I made, you agree to follow these terms!</h6>
                                        <hr></hr>
                                        <p><h6>!!! ANYONE ON MY <a href="https://www.deviantart.com/gleamstic/journal/Official-Blacklist-754646010">Official Blacklist</a> MAY NOT RECEIVE/MAKE ANY OF MY DESIGNS/SPECIES ANYMORE WHATSOEVER. !!!</h6> If you trade to someone on my blacklist, I will give you a strike. 3 strikes are a blacklist.</p>
                                        <hr></hr>
                                        <h3>General</h3>
                                        <ul>
                                            <li> My designs are a digital good and do not require shipping. You receive a .png or .jpg file of the adopt.</li>
                                            <li> I can refuse to sell you an adopt for any reason. I do not have to tell you the reason.</li>
                                            <li> If you want to adopt a design from me, you need to speak coherent english or german to avoid misunderstandings.</li>
                                        </ul>
                                        <h3>Payment</h3>
                                        <ul>
                                            <li> Do not send payment unless I specifically told you to.</li>
                                            <li> Payment through points and paypal only. I will always note down which form of payment I currently accept.</li>
                                            <li> In case of points, payment can be sent via gift option.</li>
                                            <li> In case of paypal, I'll ask for your email and send you an invoice.</li>
                                            <li> Payment on pre-made adoptables will have to be made within 24h-48h unless discussed otherwise with me. I usually state that time frame on each adopt sheet.</li>
                                            <li> Payment on custom adopts will be made after I finished the custom.</li>
                                        </ul>
                                        <h3>Refunds</h3>
                                        <ul>
                                            <li> I don't offer refunds on finished, pre-made adoptables. You see what you get, so be sure of it before you buy.</li>
                                            <li> In case of a full custom adoptable, I will provide sketches and wips if you ask me to. I will do my best to match your wishes.</li>
                                            <li> If you don't like the design I made and it's not a CS design, I will sell it to one of my watchers instead.</li>
                                        </ul>
                                        <h3>Trading/Selling/Gifting - Bought Adoptables</h3>
                                        <ul>
                                            <li> I must be notified of any owner change. If you fail to notify me 3 times, I will blacklist you from my designs and species.</li>
                                            <li> Purchased adopts may be sold or traded. This means you must have spent money on it.</li>
                                            <li> You cannot sell any design for more than you spent on it. Your own art does not count into that, commissioned art does.</li>
                                            <li> If you got a design via trade, you may only trade or regift it. No profit can be made of a traded adopt.</li>
                                            <li> Vouchers are fine as long as they are equal to the amount you yourself spent on the design (in art and/or purchase).</li>
                                        </ul>
                                        <h3>Trading/Selling/Gifting - Gifts / Free Designs / Designs I bought for you</h3>
                                        <ul>
                                            <li> Gifts cannot be resold, retraded, regifted or turned into profit without discussing with me.</li>
                                            <li> Gifts may be traded if I gave you written permission to.</li>
                                            <li> I will give you strikes on my personal blacklist if you fail to follow these rules.</li>
                                        </ul>
                                        <h3>Editing</h3>
                                        <ul>
                                            <li> You are free to pick and change gender, unless stated otherwise.</li>
                                            <li> Small edits are fine but keep the design clearly recognizeable.</li>
                                            <li> You may NOT turn my designs into any other species. That means my own CS designs can't be turned into non-cs, and my non-cs designs can't be turned into cs.</li>
                                        </ul>
                                        <h3>The Buyer - You</h3>
                                        <ul>
                                            <li> Must credit me for the design properly on art you make and commissions you get.</li>
                                            <li> May not claim the design as their own.</li>
                                            <li> May not trace/copy/steal/redistribute my designs.</li>
                                            <li> May use the design in a private setting. No commercial use is allowed. You may not profit of my art.</li>
                                            <li> May never remove my signature.</li>
                                            <li> May not upload/repost the design they receive to Gallery-style art websites like deviantArt, Furaffinity, etc. without my written permission.</li>
                                            <li> May upload the design to toyhouse and the likes, with proper credit given to me (a link back to my deviantArt or toyhouse account, both of which are named cylunny!)</li>
                                            <li> May use my art as profile picture / icon / decoration with proper credit given.</li>
                                            <li> Receives a .jpg or .png file of the finished commission. No .sai or .psd files!</li>
                                        </ul>
                                        <h3>The Artist - Me</h3>
                                        <ul>
                                            <li> I hold all the rights to my artwork and the intellectual rights to the design.</li>
                                            <li> I must be credited as the creator of the design, as explained above.</li>
                                            <li> You must put me (cylunny) on toyhouse as the creator.</li>
                                            <li> If I designed you a CS character, I must be credited as it's designer.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Closed Species/Species Concept TOS</Accordion.Header>
                                    <Accordion.Body>
                                        <h6>By adopting a Closed Species / Species concept design I made, you agree to follow these terms!</h6>
                                        <h6>Species Rules will always take priority over this. Refer to this only if there is no rule sheet for a CS or concept of mine!</h6>
                                        <hr></hr>
                                        <p><h6>!!! ANYONE ON MY <a href="https://www.deviantart.com/gleamstic/journal/Official-Blacklist-754646010">Official Blacklist</a> MAY NOT RECEIVE/MAKE ANY OF MY DESIGNS/SPECIES ANYMORE WHATSOEVER. !!!</h6> If you trade to someone on my blacklist, I will give you a strike. 3 strikes are a blacklist.</p>
                                        <hr></hr>
                                        <h3>General</h3>
                                        <ul>
                                            <li> You may NOT create a character of my Closed Species without owning a Make Your Own (MYO) slot.</li>
                                            <li> You may NOT use my species concepts without my written permission, or claim them as your own.</li>
                                            <li> My Closed Species and concepts are my intellectual property.</li>
                                            <li> My designs are a digital good and do not require shipping. You receive a .png or .jpg file of the adopt.</li>
                                            <li> I can refuse to sell you an adopt for any reason. I do not have to tell you the reason.</li>
                                            <li> If you want to adopt a design from me, you need to speak coherent english to avoid misunderstandings.</li>
                                        </ul>
                                        <h3>Payment</h3>
                                        <ul>
                                            <li> Do not send payment unless I specifically told you to.</li>
                                            <li> Payment through points and paypal only. I will always note down which form of payment I currently accept.</li>
                                            <li> In case of points, payment can be sent via gift option.</li>
                                            <li> In case of paypal, I'll ask for your email and send you an invoice.</li>
                                            <li> Payment on pre-made adoptables will have to be made within 24h-48h unless discussed otherwise with me. I usually state that time frame on each adopt sheet.</li>
                                            <li> Payment on custom adopts will be made after I finished the custom.</li>
                                        </ul>
                                        <h3>Refunds</h3>
                                        <ul>
                                            <li> I don't offer refunds on finished, pre-made adoptables. You see what you get, so be sure of it before you buy.</li>
                                            <li> In case of a full custom adoptable, I will provide sketches and wips if you ask me to. I will do my best to match your wishes.</li>
                                            <li> If you don't like the design I made and it's not a CS design, I will sell it to one of my watchers instead.</li>
                                        </ul>
                                        <h3>Credit</h3>
                                        <ul>
                                            <li> You have to always credit me for the species, closed or concept! Even on MYO designs.</li>
                                            <li> You must tell artists you commission that your OC is part of my CS/concept and that I get credit for it.</li>
                                            <li> If you hold a contest, you must let people know that your OC is part of my CS/concept.</li>
                                        </ul>
                                        <h3>The Buyer - You</h3>
                                        <ul>
                                            <li> Must always provide proper species and design credit to me.</li>
                                            <li> May not claim the design/species/concept as their own.</li>
                                            <li> May not trace/copy/steal/redistribute my designs.</li>
                                            <li> May use the design in a private setting. No commercial use is allowed. You may not profit of my art.</li>
                                            <li> May never remove my signature.</li>
                                            <li> May not upload/repost the design they receive to Gallery-style art websites like deviantArt, Furaffinity, etc. without my written permission.</li>
                                            <li> May upload the design to toyhouse and the likes, with proper credit given to me (a link back to my deviantArt or toyhouse account, both of which are named cylunny!)</li>
                                            <li> May use my art as profile picture / icon / decoration with proper credit given.</li>
                                            <li> Receives a .jpg or .png file of the finished commission. No .sai or .psd files!</li>
                                        </ul>
                                        <h3>The Artist - Me</h3>
                                        <ul>
                                            <li> I hold all the rights to my artwork and the intellectual rights to the design.</li>
                                            <li> I must be credited as the creator of the design and/or species/concept, as explained above.</li>
                                            <li> You must put me (cylunny) on toyhouse as the creator, so that I can keep track of my CS designs.</li>
                                        </ul>
                                        <h3>Trading/Selling/Gifting</h3>
                                        <ul>
                                            <li> I must be notified of any owner change. If you fail to notify me 3 times, I will blacklist you from my designs and species.</li>
                                            <li> Gleamstic owner changes need to be sent to the Gleamstic-Masterlist. Simply find the Gleamstic and comment on it.</li>
                                            <li> Gifts cannot be resold or retraded without discussing with me.</li>
                                            <li> Purchased adopts may be sold or traded, unless the species rules state otherwise. This means you must have spent money on it.</li>
                                            <li> You cannot sell any design for more than you spent on it. Your own art does not count into that, commissioned art does.</li>
                                            <li> If you got a design via trade, you may only trade or regift it. No profit can be made of a traded adopt.</li>
                                            <li> Vouchers are fine as long as they are equal to the amount you yourself spent on the design (in art and/or purchase).</li>
                                        </ul>
                                        <h3>Editing</h3>
                                        <ul>
                                            <li> You are free to pick and change gender.</li>
                                            <li> You are free to design new outfits.</li>
                                            <li> Small details in the design may be changed. Make sure the character is recognizeable as the same one you bought at all times!</li>
                                            <li> Big edits on CS adopts need approval! Please feel free to send them in via note to the species group, and if there is no group, to me personally.</li>
                                            <li> Editing a CS design of mine into a non-CS design is not allowed if it's a design I made. If it's a MYO and you made it, you may change it to non-CS, but you need to send it to me so I can check & remove it from the masterlist! If it's a MYO or adopt made by someone else, please ask the original designer if they'd be okay with it being changed to non-CS. If they are, you can edit it and send it in as well! For Gleamstic, send a note to Gleamstic !</li>
                                        </ul>
                                        <h3>MYO Rules</h3>
                                        <ul>
                                            <li> You may never post an unnapproved MYO design for the public to see.</li>
                                            <li> Approved MYOs may be posted to a masterlist, watermarked and with proper credit to the designer.</li>
                                            <li> An approval note must be sent to me, or in case of Gleamstic to the group (Gleamstic) before a design can be official.</li>
                                            <li> For more information on trading/selling/gifting, check the blog linked above.      </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


