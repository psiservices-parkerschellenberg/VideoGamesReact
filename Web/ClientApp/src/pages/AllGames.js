import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function AllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get("/api/Games").then((response) => {
            setGames(response.data);
        });
    }, []);

    return (
        <Table striped bordered>
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
                    <tr key={game.id}>
                        <td>{game.id}</td>
                        <td>{game.title}</td>
                        <td>{game.releaseDate}</td>
                        <td>{game.developer}</td>
                        <td>{game.price}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default AllGames;
