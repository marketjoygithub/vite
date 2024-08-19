
import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    }
});

const Servicemodel = model('Service', serviceSchema);

export default Servicemodel;