using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Insight.Database;
using Web.Models;
using System.Data.SqlClient;
using System.Data;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IDbConnection _dbConnection;

        public GamesController(IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");
            _dbConnection = new SqlConnection(connectionString);
        }

        // GET: api/Games
        [HttpGet]
        public IActionResult Get()
        {
            var games = _dbConnection.Query<Game>("GetAllGames");
            return Ok(games);
        }

        // GET api/Games/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var game = _dbConnection.Query<Game>("GetGameById", new { Id = id });
            if (game == null || game.Count == 0)
            {
                return NotFound($"A game with ID {id} was not found.");
            }
            return Ok(game);
        }

        // POST api/Games
        [HttpPost]
        public IActionResult Post([FromBody] GameNoID newGame)
        {
            _dbConnection.Execute("AddGame", newGame);
            return Ok();
        }

        // PUT api/Games/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] GameNoID request)
        {
            var game = _dbConnection.Query<Game>("GetGameById", new { Id = id });
            if (game == null || game.Count == 0)
            {
                return NotFound($"A game with ID {id} was not found.");
            }

            var updatedGame = new Game
            {
                Id = id,
                Title = request.Title,
                ReleaseDate = request.ReleaseDate,
                Developer = request.Developer,
                Price = request.Price
            };
            _dbConnection.Execute("UpdateGame", updatedGame);
            return Ok();
        }

        // DELETE api/Games/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var game = _dbConnection.Query<Game>("GetGameById", new { Id = id });
            if (game == null || game.Count == 0)
            {
                return NotFound($"A game with ID {id} was not found.");
            }

            _dbConnection.Execute("DeleteGameById", new { Id = id });
            return Ok();
        }
    }
}
