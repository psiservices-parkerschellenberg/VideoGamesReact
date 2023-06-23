IF NOT EXISTS (SELECT 1 FROM [dbo].[GamesR])
BEGIN
    INSERT INTO [dbo].[GamesR] ([Title], [ReleaseDate], [Developer], [Price])
    VALUES
        ('Super Mario Kart', '1992-08-27', 'Nintendo', 8.99),
        ('The Legend of Zelda', '1987-01-15', 'Nintendo', 9.99),
        ('The Need for Speed', '1994-03-01', 'EA', 14.99)
END