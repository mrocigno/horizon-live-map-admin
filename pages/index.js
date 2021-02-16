
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const Home = (props) => {
    const MapTopper = dynamic(() => import("../src/widget/map/map"), {
        ssr: false
    });

    return (<MapTopper/>);
}


export default Home;