CREATE PROCEDURE [dbo].[GetGameById]
    @Id INT
AS
BEGIN
    SELECT *
    FROM dbo.GamesR
    WHERE Id = @Id
END