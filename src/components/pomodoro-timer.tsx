import React, { useState } from 'react';
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

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);

    return (
        <div className="pomodoro">
            <h2>You are: working</h2>
            <Timer mainTime={mainTime} />

            <div className="controls">
                <Button
                    text="Text Button"
                    onClick={() => console.log('Boão clicakdo')}
                />
                <Button
                    text="Text Button"
                    onClick={() => console.log('Boão clicakdo')}
                />
                <Button
                    text="Text Button"
                    onClick={() => console.log('Boão clicakdo')}
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
