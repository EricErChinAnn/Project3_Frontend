import React, { useState } from "react";

export default function AboutUs() {

    return (
        <React.Fragment>
            <div className="my-4" id="aboutUs">
                <div className="d-flex justify-content-center">
                    <h1 className="fontPSP">About Us</h1>
                </div>
                <div className="mt-3">
                    <div className="px-4">
                    <h3 className="fontPSP">What is TixTaxToe?</h3>
                    <p>
                        TixTaxToe is an online shop that aims to be the definitive source for board game and card game content.
                    </p>
                    </div>
                    <div className="px-4">
                    <h3 className="fontPSP">What kind of games are here?</h3>
                    <p>
                        Here you'll find many types of board games, including thousands you've probably never seen in a store! We cover not only
                        board games but also dice games, card games, tile-laying games, and games of dexterity. We have abstracts, economic games,
                        dungeon crawls, city building, diplomacy and negotiation, trading, puzzle games, strategy games, party games, war games, and many more.
                        We run the gamut from the light and whimsical Carcassonne to the serious and heavy empire-building of Twilight Imperium: Fourth Edition.
                        Well-known games like Monopoly exist in the database as well, although you'll find almost all users prefer modern games that exhibit advancements
                        in game play and component quality since Monopoly was first published.
                    </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary bgColor bgColorBtn">Join Us</button>
                </div>
            </div>
        </React.Fragment>

    )
}