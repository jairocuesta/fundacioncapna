import axios from "axios";

export default async function GET(req, res) {

    console.log(req.query)
    const { url } = req.query || {};
    if(!url) {
        return res.status(400).json({ success: false, message: `url param is required` });
    }

    try {
        const { data } = await axios.request({
            method: 'GET',
            url: `${process.env.NEW_STRAPI_URI}/api/programs?filters[url]=${url}&populate=Images.Image&populate=redirect`,
            headers: {
                Authorization: `Bearer ${process.env.NEW_STRAPI_TOKEN}`
            }
        });
        return res.status(200).json(data?.data || []);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}