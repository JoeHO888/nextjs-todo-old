export default async (req, res) => {
    const token = process.env.UPSTASH_TOKEN;
    const url = `https://${process.env.UPSTASH_DOMAIN}/lrange/todo/0/100?_token=` + token;

    return fetch(url)
        .then(r => r.json())
        .then(data => {
            let result = JSON.stringify(data.result)
            return res.status(200).json(result)
        })
}
