export default {
    expo: {
        name: "your-app-name",
        extra: {
            apiKey: process.env.API_KEY,
            apiUrl: process.env.API_BASE_URL,
            eas: {
                projectId: "your-project-id"
            }
        }
    }
};