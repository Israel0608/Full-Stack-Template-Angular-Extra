import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import AudienceModel from "../3-models/audience-model";
import GiftModel from "../3-models/gift-model";

class DataService {

    public async getAllAudiences(): Promise<AudienceModel[]> {
        const sql = "SELECT * FROM audiences";
        const audiences = dal.execute(sql);
        return audiences;
    }

    public async getGiftsByAudience(audienceId: number): Promise<GiftModel[]> {

        const sql = "SELECT * FROM gifts WHERE audienceId = ?";

        const gifts = await dal.execute(sql, [audienceId]);

        return gifts;
    }

    public async addGift(gift: GiftModel): Promise<GiftModel> {

        const sql = "INSERT INTO gifts VALUES(DEFAULT, ?, ?, ?, ?, ?)";

        const info: OkPacket = await dal.execute(sql, [gift.audienceId, gift.name, gift.description, gift.price, gift.discount]);

        gift.giftId = info.insertId;

        return gift;
    }

    public async getTotalGifts(): Promise<number>{
        const sql = "SELECT Count(*) as totalGifts FROM gifts";
        const result = await dal.execute(sql);
        const count = result[0].totalGifts;
        return count
    }
    
}

const dataService = new DataService();

export default dataService;
