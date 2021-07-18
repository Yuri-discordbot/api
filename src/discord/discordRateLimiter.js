class DiscordRateLimiter {
    constructor(axiosClient) {
        axiosClient.interceptors.request.use(this.handleRequest);
        axiosClient.interceptors.response.use(this.handleResponse);
    }

    async handleRequest(config) {
        return new Promise(resolve => setTimeout(() => resolve(config), 2000));
    }

    handleResponse(config) {
        return config;
    }
}

export {DiscordRateLimiter};