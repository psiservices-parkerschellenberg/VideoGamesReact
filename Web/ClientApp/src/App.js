import React, { useEffect, useState } from "react";

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

    const fetchGames = () => {
        fetch("api/Games", { method: "GET" })
            .then(response => response.json())
            .then(responseJson => {
                setGames(responseJson);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchGames();
    }, []);

    const handleFormSubmit = () => {
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
                .catch(error => {
                    console.error(error);
                });
        } else {
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
                .catch(error => {
                    console.error(error);
                });
        }

        setShowForm(false);
    };

    const handleGameUpdate = game => {
        setSelectedGame(game);
        setFormData({
            title: game.title,
            releaseDate: game.releaseDate.split('T')[0],
            developer: game.developer,
            price: game.price
        });
        setShowForm(true);
    };

    const handleGameDelete = id => {
        fetch(`api/Games/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                fetchGames();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container">
            <h1>Games</h1>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Release Date</th>
                                <th>Developer</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game) => {
                                const date = new Date(game.releaseDate);
                                const month = String(date.getMonth() + 1).padStart(2, '0');
                                const day = String(date.getDate()).padStart(2, '0');
                                const year = date.getFullYear();
                                const formattedDate = `${month}/${day}/${year}`;

                                return (
                                    <tr key={game.id}>
                                        <td>{game.id}</td>
                                        <td>{game.title}</td>
                                        <td>{formattedDate}</td>
                                        <td>{game.developer}</td>
                                        <td>${game.price.toFixed(2)}</td>
                                        <td>
                                            <button onClick={() => handleGameUpdate(game)} className="btn btn-primary">
                                                Update
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleGameDelete(game.id)} className="btn btn-danger">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <button onClick={() => setShowForm(true)} className="btn btn-success btn-margin">
                        Add Game
                    </button>

                    {showForm && (
                        <div className="row">
                            <div className="col-sm-12">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="releaseDate">Release Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="releaseDate"
                                            value={formData.releaseDate}
                                            onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="developer">Developer</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="developer"
                                            value={formData.developer}
                                            onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="price"
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-margin">
                                        Submit
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedGame(null);
                                            setFormData({
                                                title: "",
                                                releaseDate: "",
                                                developer: "",
                                                price: ""
                                            });
                                            setShowForm(false);
                                        }}
                                        className="btn btn-secondary btn-margin">
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default App;