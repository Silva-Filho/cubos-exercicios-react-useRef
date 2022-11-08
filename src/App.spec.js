import React from "react";

import { render, screen, userEvent } from "./tests";

import { App } from "./App";

describe( "component App - principal page", () => {
    it( "should has tag HTML audio", () => {
        render( <App /> );

        expect( screen.getByLabelText( "audio source" ) ).toBeInTheDocument();
    } );

    it( "should has audio controls", () => {
        render( <App /> );

        const buttonPlayControl = screen.getByRole( "button", { name: "Play" } );
        const buttonPauseControl = screen.getByRole( "button", { name: "Pause" } );
        const buttonStopControl = screen.getByRole( "button", { name: "Stop" } );

        expect( buttonPlayControl ).toBeInTheDocument();
        expect( buttonPauseControl ).toBeInTheDocument();
        expect( buttonStopControl ).toBeInTheDocument();
    } );

    it.skip( "should pass ref from App to Controls", () => {
        render( <App /> );

        const buttonPlayControl = screen.getByRole( "button", { name: "Play" } );

        userEvent.click( buttonPlayControl );
        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();
        console.log( { Botao_Play: buttonPlayControl } );

        // expect( buttonPlayControl ).();
    } );
} );
