import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
    const [mainTime, setMainTime] = useState(props.pomodoroTime);
    const [timeCounting, setTimeCounting] = useState(false);
    const [working, setWorking] = useState(false);

    useEffect(() => {
        if (working) document.body.classList.add('working');
    }, [working]);

    useInterval(
        () => {
            setMainTime(mainTime - 1);
        },
        timeCounting ? 1000 : null,
    );

    const configureWork = () => {
        setTimeCounting(true);
        setWorking(true);
    };

    return (
        <div className="pomodoro">
            <h2>You are: working</h2>
            <Timer mainTime={mainTime} />

            <div className="controls">
                <Button text="Work" onClick={configureWork} />
                <Button text="Text" onClick={() => console.log(1)} />
                <Button
                    text={timeCounting ? 'Pause' : 'Play'}
                    onClick={() => setTimeCounting(!timeCounting)}
                />
            </div>

            <div className="details">
                <p>Testando: asdadas dsasdas sadasda asdasfa</p>
                <p>Testando: asdadas dsasdas sadasda asdasfa</p>
                <p>Testando: asdadas dsasdas sadasda asdasfa</p>
                <p>Testando: asdadas dsasdas sadasda asdasfa</p>
            </div>
        </div>
    );
}
