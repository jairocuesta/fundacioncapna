import axios from "axios";

export default async function GET(req, res) {
    const { blog } = req.query || {};
    if(!blog) {
        return res.status(400).json({ success: false, message: `"blog" param is required` });
    }

    try {
        const { data } = await axios.request({
            method: 'GET',
            url: `${process.env.STRAPI_URI}/api/blogs?filters[alias]=${blog}&populate=*`,
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
            }
        });
        return res.status(200).json(data?.data[0]?.attributes || {});
    } catch (error) {
        return res.status(500).json({ success: false, message: "There was an error getting blog by url" });
    }
}