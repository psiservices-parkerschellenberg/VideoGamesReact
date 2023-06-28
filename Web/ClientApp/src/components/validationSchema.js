import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string().max(50, 'Title must be less than 50 characters').required('Title is required'),
    releaseDate: yup.date().required('Release date is required'),
    developer: yup.string().max(50, 'Developer must be less than 50 characters').required('Developer is required'),
    price: yup
        .number()
        .typeError('Price must be a number')
        .positive('Price must be a positive number')
        .required('Price is required'),
});

export default validationSchema;
