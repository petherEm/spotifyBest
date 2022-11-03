import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';


const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);

    const { activeSong, isPlaying } = useSelector((state) => state.player);

    return (
        <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold text-red-600">Work in Progress</h1>
        </div>
    )
}

export default AroundYou;
