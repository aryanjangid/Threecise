import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DanceoffVro from "../components/Models/danceoff"
import CanvasScreen from '../components/CanvasScreen'
import classes from "./dance.module.css"
import Button from "../components/Button";
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import useSound from 'use-sound';
import Link from "next/link";


export default function Dance() {
    const actions = ["idle", "Belly Dance", "Shopping Cart ", "Break Dance1", "Dance Tweark", "Flair", "Gagnam Style", "House Dance", "Silly", "Soul Spin Combo"]
    const colors = ['#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD', '#A500F2', '#FFCF23', '#64D6E2', '#EF9F64', '#9988CD'];

    const [action, setAction] = useState(actions[1]);
    const [index, setIndex] = useState(1);

    const hoverSfx = '/sounds/hover.mp3';
    const [hoverPlay, { hoverStop }] = useSound(hoverSfx);
    const handlePrevious = () => {
        var l = index - 1;
        if (l == -1) {
            setAction(actions[9]);
            setIndex(9);
            hoverPlay();


        }
        else{
            setAction(actions[l]);
            setIndex(l);
            hoverPlay();

        }
    }
    const handleNext = () => {
        var l = index + 1;
        if (l == 10) {
            setAction(actions[0]);
            setIndex(0);
            hoverPlay();

        }
        else{
            setAction(actions[l]);
            setIndex(l);
            hoverPlay();

        }
    }

    return (
        <div>
            <div className={classes.outerDiv}>
                <div>
                    <div className={classes.rightButtonDiv}>
                        <div onClick={handlePrevious}><Button href={"xxx"} icons={faArrowUp} color="#413D3D" iconColor="white" text="previous" direction="right" /></div>
                        <Link href="/journey">
                        <div className={classes.checkCode} style={{color:colors[index]}}>
                            <h1>Our ❤️ Journey</h1>
                        </div>
                        </Link>
                        <div onClick={handleNext}><Button href={"xxx"} icons={faArrowDown} color="#413D3D" iconColor="white" text="next" direction="right" /></div>
                    </div>
                </div>
                <Canvas alpha={true}>
                    <ambientLight intensity={0.5} />
                    <pointLight intensity={2} position={[-1, 1, 3]} color="#A5C9CA" />
                    <pointLight intensity={2} position={[1, 1, 3]} color="#395B64" />
                    <pointLight intensity={2} position={[0, 3, -10]} color="#2C3639" />
                    <OrbitControls enableDamping={true} enableZoom={true} />
                    <Suspense fallback={null}>
                        <DanceoffVro action={action} />
                    </Suspense>
                </Canvas>
            </div>
            <CanvasScreen titleName={actions[index]} index={index+1} backgroundColor={colors[index]} category="Dance" />


        </div>
    )
}
