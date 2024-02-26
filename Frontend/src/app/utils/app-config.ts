class AppConfig {
    public readonly audiencesUrl = "http://localhost:4000/api/audiences/";
    public readonly giftsByAudienceUrl = "http://localhost:4000/api/gifts-by-audience/";
    public readonly giftsUrl = "http://localhost:4000/api/gifts/";
    public readonly totalGiftsUrl = "http://localhost:4000/api/total-gifts/";
}

export const appConfig = new AppConfig();
