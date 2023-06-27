CREATE PROCEDURE [dbo].[UpdateGame]
    @Id INT,
    @Title VARCHAR(50),
    @ReleaseDate DATE,
    @Developer VARCHAR(50),
    @Price DECIMAL(18, 2) = NULL
AS
BEGIN
    UPDATE dbo.GamesR
    SET Title = @Title,
        ReleaseDate = @ReleaseDate,
        Developer = @Developer,
        Price = @Price
        --Price = CASE WHEN @Price IS NULL THEN Price ELSE @Price END
    WHERE Id = @Id
END