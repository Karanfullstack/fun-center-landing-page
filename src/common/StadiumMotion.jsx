import Particles from "react-tsparticles";

export default function StadiumMotion() {
    return (
        <Particles
            options={{
                fullScreen: { enable: true },
                background: { color: "#000" },
                particles: {
                    number: { value: 60 },
                    color: { value: "#ffffff" },
                    links: { enable: true, color: "#ffffff", distance: 100 },
                    move: { enable: true, speed: 2 },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                    },
                },
            }}
        />
    );
}
