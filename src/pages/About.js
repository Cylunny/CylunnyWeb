import React from 'react';

import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';


export default function About() {
    return (
        <div>
            <NavbarComponent/>
            <nav>
                <Button variant="primary">
                    <Link to="/Lopilu">Lopilu</Link>
                </Button>
            </nav>
        </div>
    );
}