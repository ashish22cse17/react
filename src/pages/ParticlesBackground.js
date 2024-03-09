// ParticleBackground.js
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }
        
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    return (
        <div className="particle-background">
            {init && <Particles options={particlesOptions} />}
        </div>
    );
};

export default ParticleBackground;
