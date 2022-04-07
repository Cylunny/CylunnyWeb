import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { Accordion, Card, Tab, Tabs } from 'react-bootstrap';

export default function Commission() {
    return (
        <div>
            <NavbarComponent />
            <div className='container-fluid main grey-bg'>
                <div className='row text-center p-150 comm-bg'>
                    <h1 className='text-light text-uppercase display-1'>Commissions</h1>
                </div>
                <div className="row bg-dark p-4">
                    <div className='col'>
                        <div className='bg-dark text-light p-5 m-5 mt-0 fadein'>
                            <div className='col'><h3 className='display-4'>How to Commission</h3></div>
                            <h4>Check my <a href="https://www.deviantart.com/cylunny/journal/Cylunny-s-Commissions-2020-CLOSED-798266698">Commission Status</a> to see if they are open and what types are available first!</h4>
                            <ul>
                                <li>You agree to my Rules / TOS. Please state that somewhere in your message when commissioning me.</li>
                                <li>Send me a note with the form beside this! Do not comment below unless you have a question!</li>
                                <li>Make sure to check the examples below and fill out the form on the right as soon as you can & edit it in!</li>
                                <li>If your character is part of a CS, I highly recommend giving me a second non-cs OC to work with! Otherwise I might decline.</li>
                                <li>I'll let you know if I accept your commission & put you on my list if I did!</li>
                                <li> For each commission you buy, you earn 20% of the price in CylCoins! So for a 15EUR Commission, you earn 3 CylCoins. These can be used to purchase FREE bonus commissions <a href="https://www.deviantart.com/cylunny/journal/Cylunny-s-BONUS-Commissions-2020-810244541">here</a>! <b>PLEASE keep proof of your order so that if I mess up, you can show me and I can fix your balance!</b></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col m-auto'>
                        <Card border="light" className="bg-dark text-light p-2 m-4 fadein">

                            <Card.Body>
                                <Card.Text>
                                    Type of Commission: <i>(check below; only if marked as available!)</i><br></br>
                                    Name of character: <br></br>
                                    Gender of character: <br></br>
                                    Character ref: <i>(at least showing as much as what you commission)</i><br></br>
                                    Background kind: <i>if specified below)</i><br></br>
                                    Pose/expression?: <i>(can be left empty)</i><br></br>
                                    Anything else?: <i>(can be left empty)</i><br></br>
                                    Payment via?: <i>(paypal)</i><br></br>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row justify-content'>
                    <div className='col m-auto mt-5 mb-5'>
                        <Tabs defaultActiveKey="bust" id="uncontrolled-tab-example" className="mb-5 justify-content-center">
                            <Tab eventKey="bust" title="Bust Commissions" className='pb-5 bg-dark'>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <h3>Bust Commissions</h3>
                                    <hr></hr>
                                    <h5>Detailed Bust</h5>
                                    <h4>25€</h4>
                                    <p>This style result may depend on the character I'm given, so if for some reason I can't manage to do well on your OC I will count it as a normal bust for you and lower the price. Will add flowers/plant patterns if you'd like.</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto " src="https://f2.toyhou.se/file/f2-toyhou-se/images/41157005_z955xPVQ4UD3d8r.png?1635064751"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/45285752_C5TBJ0ShQgLlM6f.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/43802355_dRdGDFF87Vn0UrN.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/44468805_pudnPPMWEfTjL3P.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/28967428_gho1vGnZoAmkIc2.png?1628328133"></img></div>
                                </div>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <hr></hr>
                                    <h5>Simple Bust</h5>
                                    <h4>13€</h4>
                                    <p> Will come with a very simple background or transparent/white,
                                        If I do a bg I will make the choice because it depends on the designs a lot ;U;</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto " src="https://f2.toyhou.se/file/f2-toyhou-se/images/46724929_hxZOVNkj5N45cdb.jpg?1647420176"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/39288631_IZBmL0Qs9uXy4aA.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/29294844_MUHiJqUJgJLDvn3.png?1628328185"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/32411413_9gD3lZf6TFCjddR.png?1628327971"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/14010882_4u1VokmT1HcTpbS.png?1628328864"></img></div>
                                </div>
                            </Tab>
                            <Tab eventKey="halfbody" title="Halfbody Commissions" className='pb-5 bg-dark'>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <h3>Halfbody Commissions</h3>
                                    <hr></hr>
                                    <h5>Detailed Halfbody</h5>
                                    <h4>35€</h4>
                                    <p>Results may vary as my use of lines changes at times! BGs are transparent or very simple, I will decide spontaneously!
                                        Let me know if you prefer a gradient or transparent background.</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto " src="https://f2.toyhou.se/file/f2-toyhou-se/images/35096533_kE0fwDSUj88pmGQ.png?1628327936"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/35357882_c3K0rEiTY3RA9BX.png?1628327969"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/22322138_VEnypmMFH1jAFEE.png?1628328435"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/45452900_zr9La8bWjpRazvW.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/45569443_6EFk6sLSBAvql00.png"></img></div>
                                </div>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <hr></hr>
                                    <h5>Simple Halfbody</h5>
                                    <h4>18€</h4>
                                    <p> Poses will be pretty standard/simple because I don't sketch beforehand! Usually only one char per picture.</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto " src="https://f2.toyhou.se/file/f2-toyhou-se/images/16859523_MzmTOSriM07Vvkj.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/19081723_e6KW0KqVYYDq7cK.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://file.toyhou.se/images/7573254_zAkwKkmXVFjtZ0o.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/26616283_dKm0E64hvWzsgGX.png?1628328255"></img></div>
                                </div>
                            </Tab>
                            <Tab eventKey="fullbody" title="Fullbody Commissions" className='pb-5 bg-dark'>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <h3>Fullbody Commissions</h3>
                                    <hr></hr>
                                    <h5>Detailed Fullbody</h5>
                                    <h4>40€</h4>
                                    <p>I will always do a semi-transparent background as seen below.</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto " src="https://f2.toyhou.se/file/f2-toyhou-se/images/31476528_CQVVpD4TGNVme0y.png?1642684853"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/32038913_XakXUlHxLtRtHBs.png?1628327971"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/45993972_1rWhybexqIAkei7.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/40381221_NVb13YwebZwmaHb.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/45871002_g4HeWe0VDDWG9lT.png"></img></div>
                                </div>
                            </Tab>
                            <Tab eventKey="chibi" title="Chibi Commissions" className='pb-5 bg-dark'>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <h3>Chibi Commissions</h3>
                                    <hr></hr>
                                    <h5>Detailed Chibi</h5>
                                    <h4>12€</h4>
                                    <p>They will either be fully transparent or with a circular semi-transparent background.</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto " src="https://f2.toyhou.se/file/f2-toyhou-se/images/42155053_ILQsrA1ZpgKDJRt.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/41770363_bUf3duLbEVBxzMj.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/40422986_iXTBlfg0kcDR10z.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/46808332_ZiwX62kj0hEFDY5.png"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/19383389_sehYXp8EB9vnECR.png?1628328517"></img></div>
                                </div>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <hr></hr>
                                    <h5>Chibi Headshot</h5>
                                    <h4>7€</h4>
                                    <p>Up to 2 per slot!</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto " src="https://f2.toyhou.se/file/f2-toyhou-se/images/23314422_WI74R0GG8sTikTq.png?1628328407"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/16740126_8el5hIIAgqJHLIs.png?1628328674"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://f2.toyhou.se/file/f2-toyhou-se/images/23409389_DoQptEutMYid0K6.png?1628328407"></img></div>
                                </div>
                            </Tab>
                            <Tab eventKey="icon" title="Icon Commissions" className='pb-5 bg-dark'>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <h3>Icon Commissions</h3>
                                    <hr></hr>
                                    <h5>Detailed Icon</h5>
                                    <h4>5€</h4>
                                    <p>Drawn on a base! Up to 2 per Slot.</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/ddfie5m-7f02e6c8-4629-4ad3-80d5-b0a79be66152.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGRmaWU1bS03ZjAyZTZjOC00NjI5LTRhZDMtODBkNS1iMGE3OWJlNjYxNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1yBUbDrfYhjmEl8sHOzGMvrBCXPxOyemz8lB5jDrjg8"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/des16dk-428af015-c4d6-4ad8-8377-ae14f001dd2a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGVzMTZkay00MjhhZjAxNS1jNGQ2LTRhZDgtODM3Ny1hZTE0ZjAwMWRkMmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._vRPnT2dkcvhyv0OqgXq7DKjg_njeeXRivWKExItLjI"></img></div>
                                    <div className='col-lg-2 bigonhover'><img className="w-100 h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/des16dy-4e035834-5dbd-4a2e-8943-cb2eed87b7bc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGVzMTZkeS00ZTAzNTgzNC01ZGJkLTRhMmUtODk0My1jYjJlZWQ4N2I3YmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4qUkwMLMTe96uWCaURV2O5hWNaZkzsXI4L5RrXqdbJA"></img></div>
                                </div>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <hr></hr>
                                    <h5>50x50px Icon</h5>
                                    <h4>5€</h4>
                                    <p>Up to 2 per slot!</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 text-center bigonhover'><img className="h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/deii8ch-c578daf6-3317-4f5d-a6ab-30825406589c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGVpaThjaC1jNTc4ZGFmNi0zMzE3LTRmNWQtYTZhYi0zMDgyNTQwNjU4OWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Sz0O4ZWsUfGN1zean5i1OPTu2-WgTa4v6dhyERwxhSg"></img></div>
                                    <div className='col-lg-2 text-center bigonhover'><img className="h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/ddv7hhu-cb06b387-9be7-4829-8400-7961f040b858.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGR2N2hodS1jYjA2YjM4Ny05YmU3LTQ4MjktODQwMC03OTYxZjA0MGI4NTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iJ2lSfxGaMZGbaD8fj6WlcT3plwiGczhRvnwbQqWU_s"></img></div>
                                    <div className='col-lg-2 text-center bigonhover'><img className="h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/ddv7hg9-50981956-b949-4113-9c12-91595b894d94.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGR2N2hnOS01MDk4MTk1Ni1iOTQ5LTQxMTMtOWMxMi05MTU5NWI4OTRkOTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RATDNT-GzugeM7FuFKuS6Jdq7dSi33Oqsy5UUlk1BN8"></img></div>
                                    <div className='col-lg-2 text-center bigonhover'><img className="h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/ddv7hi5-8792f248-d1a0-4587-b671-08f6733a6ac7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGR2N2hpNS04NzkyZjI0OC1kMWEwLTQ1ODctYjY3MS0wOGY2NzMzYTZhYzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3Lt3ySsLRV59DROoBDM9OCLjqAVnbVtb_8Z1uYtOL1I"></img></div>
                                    <div className='col-lg-2 text-center bigonhover'><img className="h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/ddv7hk3-481730f3-dc41-4d9c-893e-560eba3be372.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGR2N2hrMy00ODE3MzBmMy1kYzQxLTRkOWMtODkzZS01NjBlYmEzYmUzNzIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tumo2Z3D7QzJLPNTObJALtqJCOd2N9MDDSwCrhXFIFo"></img></div>
                                </div>
                                <div className='row justify-content-center text-center text-light pt-5'>
                                    <hr></hr>
                                    <h5>100x100px Icon</h5>
                                    <h4>7€</h4>
                                    <p>Freehand! Up to 2 per slot!</p>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-2 text-center bigonhover'><img className="h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/devp8yk-a6e9c5c7-7383-4602-803f-fcfbfb1b5f44.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGV2cDh5ay1hNmU5YzVjNy03MzgzLTQ2MDItODAzZi1mY2ZiZmIxYjVmNDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N1WTMVHpEJLBVAsJedMTcimGoZY28lOvpp1NSfS3QPM"></img></div>
                                    <div className='col-lg-2 text-center bigonhover'><img className="h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/devp8yb-1ef9ef7e-6f71-4aad-9715-35cb2e2105fa.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGV2cDh5Yi0xZWY5ZWY3ZS02ZjcxLTRhYWQtOTcxNS0zNWNiMmUyMTA1ZmEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6DcNi2aVd6R3exurr7InDYE9uZEgHt7AiH2zRju0YoU"></img></div>
                                    <div className='col-lg-2 text-center bigonhover'><img className="h-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cdaf6337-762b-46d0-8b0e-eb3ecf0a0e19/devp8xr-cea74d8d-52b0-4a19-ab83-21886ff816c5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NkYWY2MzM3LTc2MmItNDZkMC04YjBlLWViM2VjZjBhMGUxOVwvZGV2cDh4ci1jZWE3NGQ4ZC01MmIwLTRhMTktYWI4My0yMTg4NmZmODE2YzUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jzJe6lxK_ivf0F_OeZvq-SaCkXKW2qZQxHiH-jrt9oY"></img></div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}


