import React, { useState } from 'react';
import 'bootstrap';

import mainImage from '../images/background.jpg'

// Background image for main part of page.
const mainStyle = {
  backgroundImage: `url(${mainImage})`,
  height: 1500,
}

const Main = () => {


    return (
        <main style={ mainStyle }>

        </main>
    )
}

export default Main;