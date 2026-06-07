const { RetriveMessage } = require("./Retrive")
exports.GenerateResponse = async (req, res) => {
    try {
        const { Userapikey, message } = req.body;
        const info = await RetriveMessage(Userapikey, message);
        const Apikey = info.apikey;
        const msgToGenerate = info.Message;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${Apikey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "google/gemini-2.5-flash",
                messages: [{ role: "user", content: msgToGenerate }],
                max_tokens: 2000
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.message || "Failed to generate response");
        }

        const Response = data.choices[0].message.content;
        res.json({ Response })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}