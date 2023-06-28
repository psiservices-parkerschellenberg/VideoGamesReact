import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';

const GameForm = ({
    formData,
    setFormData,
    handleFormSubmit,
    setSelectedGame,
    setShowForm,
    selectedGame,
}) => {
    const formik = useFormik({
        initialValues: {
            title: formData.title,
            releaseDate: formData.releaseDate,
            developer: formData.developer,
            price: formData.price,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleFormSubmit(values);
        },
    });

    const handleCancel = () => {
        setSelectedGame(null);
        setFormData({
            title: '',
            releaseDate: '',
            developer: '',
            price: '',
        });
        setShowForm(false);
    };

    const handleChange = (e) => {
        formik.handleChange(e);
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="row">
            <div className="col-sm-12">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={formik.values.title}
                            onChange={handleChange}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <div className="error">{formik.errors.title}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="releaseDate">Release Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="releaseDate"
                            value={formik.values.releaseDate}
                            onChange={handleChange}
                        />
                        {formik.touched.releaseDate && formik.errors.releaseDate && (
                            <div className="error">{formik.errors.releaseDate}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="developer">Developer</label>
                        <input
                            type="text"
                            className="form-control"
                            id="developer"
                            value={formik.values.developer}
                            onChange={handleChange}
                        />
                        {formik.touched.developer && formik.errors.developer && (
                            <div className="error">{formik.errors.developer}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            value={formik.values.price}
                            onChange={handleChange}
                        />
                        {formik.touched.price && formik.errors.price && (
                            <div className="error">{formik.errors.price}</div>
                        )}
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