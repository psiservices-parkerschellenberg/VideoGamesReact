CREATE PROCEDURE [dbo].[AddGame]
    @Title varchar(50),
	@ReleaseDate date,
    @Developer varchar(50) = NULL,
    @Price decimal(18, 2)
AS
BEGIN
    INSERT INTO GamesR(Title, ReleaseDate, Developer, Price)
    VALUES (@Title, @ReleaseDate, @Developer, @Price)
END