import React from 'react';

export function Controls( { audioRef } ) {
    function handlePause() {
        audioRef.current.pause();
    }

    function handlePlay() {
        audioRef.current.play();
    }

    function handleStop() {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

    return (
        <div>
            <button onClick={ () => handlePlay() }>
                Play
            </button>

            <button onClick={ () => handlePause() }>
                Pause
            </button>

            <button onClick={ () => handleStop() }>
                Stop
            </button>
        </div>
    );
}
