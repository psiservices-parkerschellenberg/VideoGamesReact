import { useEffect, useState } from "react";

const App = () => {

    //1 create useState
    const [games, setGames] = useState([])

    //2 call api
    useEffect(() => {
        fetch("api/Games", { method: "GET" })
            .then(response => response.json())
            .then(responseJson => {
                setGames(responseJson);
            });
    }, []);

    //3 create div and table
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
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game) => (
                                <tr>
                                    <td>{game.id}</td>
                                    <td>{game.title}</td>
                                    <td>{game.releaseDate}</td>
                                    <td>{game.developer}</td>
                                    <td>{game.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;