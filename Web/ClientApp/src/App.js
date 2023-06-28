import React, { useEffect, useState } from "react";
import GameForm from "./components/GameForm";
import GameTable from "./components/GameTable";

const App = () => {
    const [games, setGames] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        releaseDate: "",
        developer: "",
        price: ""
    });
    const [selectedGame, setSelectedGame] = useState(null);

    // Fetch games from the server
    const fetchGames = () => {
        fetch("api/Games")
            .then((response) => response.json())
            .then((responseJson) => {
                setGames(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchGames();
    }, []);

    // Handle form submission
    const handleFormSubmit = () => {
        // Handle update
        if (selectedGame) {
            fetch(`api/Games/${selectedGame.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(() => {
                    setSelectedGame(null);
                    setFormData({
                        title: "",
                        releaseDate: "",
                        developer: "",
                        price: ""
                    });
                    fetchGames();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        // Handle create
        else {
            fetch("api/Games", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(() => {
                    setFormData({
                        title: "",
                        releaseDate: "",
                        developer: "",
                        price: ""
                    });
                    fetchGames();
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        setShowForm(false);
    };

    // Handle game update
    const handleGameUpdate = (game) => {
        setSelectedGame(game);
        setFormData({
            title: game.title,
            releaseDate: game.releaseDate.split("T")[0],
            developer: game.developer,
            price: game.price
        });
        setShowForm(true);
    };

    // Handle game delete
    const handleGameDelete = (id) => {
        fetch(`api/Games/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                fetchGames();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container">
            <h1>Games</h1>
            <GameTable
                games={games}
                handleGameUpdate={handleGameUpdate}
                handleGameDelete={handleGameDelete}
            />
            <button
                onClick={() => setShowForm(true)}
                className="btn btn-success btn-margin"
            >
                Add Game
            </button>
            {showForm && (
                <GameForm
                    formData={formData}
                    setFormData={setFormData}
                    handleFormSubmit={handleFormSubmit}
                    setSelectedGame={setSelectedGame}
                    setShowForm={setShowForm}
                    selectedGame={selectedGame}
                />
            )}
        </div>
    );
};

export default App;