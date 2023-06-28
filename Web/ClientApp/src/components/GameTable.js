import React from "react";

const GameTable = ({ games, handleGameUpdate, handleGameDelete }) => {
    return (
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
                            const month = String(date.getMonth() + 1).padStart(2, "0");
                            const day = String(date.getDate()).padStart(2, "0");
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
                                        <button
                                            onClick={() => handleGameUpdate(game)}
                                            className="btn btn-primary"
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleGameDelete(game.id)}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GameTable;