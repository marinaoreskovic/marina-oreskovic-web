"use client"

import Image from 'next/image';

import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
            <div></div>
        </MotionTransition>
    );
}

export default AvatarPortfolio;