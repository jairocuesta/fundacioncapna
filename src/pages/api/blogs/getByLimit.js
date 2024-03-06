import axios from "axios";

export default async function GET(req, res) {
    const { limit, page } = req.query || {};
    if (!limit || !page) {
        return res.status(400).json({ success: false, message: `"limit", "page" param is required` });
    }

    try {
        const { data } = await axios.request({
            method: 'GET',
            url: `${process.env.STRAPI_URI}/api/blogs?populate=*&pagination[pageSize]=${limit}&pagination[page]=${page}`,
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
            }
        });
        const formattedData = data?.data?.map(item => {
            return {
                ...item.attributes,
            };
        })
        return res.status(200).json({
            data: formattedData,
            page: data.meta.pagination.page,
            pageCount: data.meta.pagination.pageCount
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "There was an error getting blog by url" });
    }
}