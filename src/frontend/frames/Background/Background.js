import React from 'react';

import "./Background.scss";

const _cyclusLength = 24;
const _gradientCount = 16;


const rndBlue = ()=>{
    const r = 0;
    const g = Math.floor(Number.jet.rnd(100, 160));
    const b = Math.floor(Number.jet.rnd(g+32, Math.min(g + 128, 255)));
    return `rgb(${r}, ${g}, ${b})`;
}

const rndGradients = (count)=>{
    return Array(count).fill("linear-gradient").map((t, deg)=>{
        return t + `(${deg%8 * 45}deg, #cceeff, ${rndBlue()})`;
    });
}

export const Background = () => {

    const gradients = rndGradients(_gradientCount);

    return (
        <section className="Background">
            {gradients.map((gradient, index) => (
                <div
                    key={index}
                    className="gradient"
                    style={{
                        background: gradient,
                        animation: `fadeAnimation ${_cyclusLength}s linear infinite ${_cyclusLength / _gradientCount * (index)}s`
                    }}
                />
            ))}
        </section>
    )
}

export default Background;
