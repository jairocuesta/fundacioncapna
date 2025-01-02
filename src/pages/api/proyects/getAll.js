import axios from "axios";

export default async function GET(req, res) {
    try {
        const { data } = await axios.request({
            method: 'GET',
            url: `${process.env.NEW_STRAPI_URI}/api/programs?populate=Images.Image`,
            headers: {
                Authorization: `Bearer ${process.env.NEW_STRAPI_TOKEN}`
            }
        });
        return res.status(200).json(data?.data || []);
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json(error.message);
    }
}