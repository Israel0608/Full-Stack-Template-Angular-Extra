import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AudienceModel from '../models/audience-model';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from 'rxjs';
import GiftModel from '../models/gift-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

    public async getAllAudeinces(): Promise<AudienceModel[]> {
        const observable = this.http.get<AudienceModel[]>(appConfig.audiencesUrl)
        const audiences = await firstValueFrom(observable)
        return audiences
    }

    public async getGiftsByAudience(audienceId: number): Promise<GiftModel[]> {
        const observable = this.http.get<GiftModel[]>(appConfig.giftsByAudienceUrl + audienceId)
        const gifts = await firstValueFrom(observable)
        return gifts
    }

    public async addGift(gift: GiftModel): Promise<void> {
        const observable = this.http.post<GiftModel>(appConfig.giftsUrl, gift)
        await firstValueFrom(observable)
    }

    public async getTotalGifts(): Promise<number> {
        const observable = this.http.get<number>(appConfig.totalGiftsUrl)
        const count = await firstValueFrom(observable);
        return count
    }
}
