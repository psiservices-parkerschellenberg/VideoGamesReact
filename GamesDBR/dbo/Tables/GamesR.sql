CREATE TABLE [dbo].[GamesR]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [Title] VARCHAR(50) NOT NULL, 
    [ReleaseDate] DATE NOT NULL, 
    [Developer] VARCHAR(50) NOT NULL, 
    [Price] DECIMAL(18, 2) NULL
)
