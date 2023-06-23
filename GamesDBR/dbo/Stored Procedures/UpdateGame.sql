CREATE PROCEDURE [dbo].[UpdateGame]
    @Id INT,
    @Title VARCHAR(50),
    @ReleaseDate DATE,
    @Developer VARCHAR(50),
    @Price DECIMAL(18, 2)
AS
BEGIN
    UPDATE dbo.GamesNew
    SET Title = @Title,
        ReleaseDate = @ReleaseDate,
        Developer = @Developer,
        Price = @Price
    WHERE Id = @Id
END