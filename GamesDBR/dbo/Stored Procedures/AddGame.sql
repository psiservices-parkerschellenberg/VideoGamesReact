CREATE PROCEDURE [dbo].[AddGame]
    @Title VARCHAR(50),
    @ReleaseDate DATE,
    @Developer VARCHAR(50),
    @Price DECIMAL(18, 2) = NULL
AS
BEGIN
    INSERT INTO GamesR(Title, ReleaseDate, Developer, Price)
    VALUES (@Title, @ReleaseDate, @Developer, @Price)
END