import Servicemodel from "../models/serviceModels.js";

export const getServices = async (req, res) => {
    try {
        const services = await Servicemodel.find();
        res.status(200).json(services);
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error);
    }
};
