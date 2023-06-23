CREATE PROCEDURE [dbo].[DeleteGameById]
    @Id INT
AS
BEGIN
    DELETE FROM GamesR
    WHERE Id = @Id;
END;