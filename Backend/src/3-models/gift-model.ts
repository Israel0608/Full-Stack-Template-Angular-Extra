class GiftModel {

    public giftId: number;
    public audienceId: number;
    public name: string;
    public description: string;
    public price: number;
    public discount: number;

    public constructor(gift: GiftModel) {
        this.giftId = gift.giftId;
        this.audienceId = gift.audienceId;
        this.name = gift.name;
        this.description = gift.description;
        this.price = gift.price;
        this.discount = gift.discount;
    }
    
}

export default GiftModel;
