import React from "react";

import { render, screen, userEvent } from "../../tests";

describe( "component App - principal page", () => {
    it( "should play music when click 'Play' button", async () => {
        const handlePlay = jest.fn();

        render(
            <button onClick={ () => handlePlay() } >
                Play
            </button>
        );

        const buttonPlayControl = screen.getByRole( "button", { name: "Play" } );

        await userEvent.click( buttonPlayControl );
        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();

        expect( handlePlay ).toHaveBeenCalledTimes( 1 );
    } );

    it( "should pause music when click 'Pause' button", () => {
        const handlePause = jest.fn();

        render(
            <button onClick={ () => handlePause() } >
                Pause
            </button>
        );

        const buttonPauseControl = screen.getByRole( "button", { name: "Pause" } );

        userEvent.click( buttonPauseControl );
        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();

        expect( handlePause ).toHaveBeenCalledTimes( 1 );
    } );

    it( "should stop music when click 'Stop' button", async () => {
        const handleStop = jest.fn();

        render(
            <button onClick={ () => handleStop() } >
                Stop
            </button>
        );

        const buttonStopControl = screen.getByRole( "button", { name: "Stop" } );

        await userEvent.click( buttonStopControl );
        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();

        expect( handleStop ).toHaveBeenCalledTimes( 1 );
    } );    
} );
