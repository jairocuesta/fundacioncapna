import axios from "axios";

export default async function GET(req, res) {
    const { session, sessionKey } = req.body;

    try {
        const { data } = await axios.request({
            method: 'GET',
            url: `https://lab.cardnet.com.do/sessions/${session}?sk=${sessionKey}`,
            headers: {
                "Content-Type": "application/json",
                "Proxy-Connection": "Keep-Alive",
                "Transfer-Encoding": "chunked"
            }
        });
        return res.status(200).json(data || []);
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json(error.message);
    }
}