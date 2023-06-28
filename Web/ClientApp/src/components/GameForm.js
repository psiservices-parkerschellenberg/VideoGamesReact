import React from "react";

const GameForm = ({
    formData,
    setFormData,
    handleFormSubmit,
    setSelectedGame,
    setShowForm,
    selectedGame
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit();
    };

    const handleCancel = () => {
        setSelectedGame(null);
        setFormData({
            title: "",
            releaseDate: "",
            developer: "",
            price: ""
        });
        setShowForm(false);
    };

    return (
        <div className="row">
            <div className="col-sm-12">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="releaseDate">Release Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="releaseDate"
                            value={formData.releaseDate}
                            onChange={(e) =>
                                setFormData({ ...formData, releaseDate: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="developer">Developer</label>
                        <input
                            type="text"
                            className="form-control"
                            id="developer"
                            value={formData.developer}
                            onChange={(e) =>
                                setFormData({ ...formData, developer: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            value={formData.price}
                            onChange={(e) =>
                                setFormData({ ...formData, price: e.target.value })
                            }
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-margin">
                        Submit
                    </button>
                    <button
                        onClick={handleCancel}
                        className="btn btn-secondary btn-margin"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GameForm;
