import express, { NextFunction, Request, Response } from "express";
import GiftModel from "../3-models/gift-model";
import StatusCode from "../3-models/status-codes";
import dataService from "../5-services/data-service";

const router = express.Router();

router.get("/audiences", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const audiences = await dataService.getAllAudiences();
        response.json(audiences);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/gifts-by-audience/:audienceId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const audienceId = +request.params.audienceId;
        const gifts = await dataService.getGiftsByAudience(audienceId);
        response.json(gifts);
    }
    catch(err: any) {
        next(err);
    }
});

router.post("/gifts", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gift = new GiftModel(request.body);
        const addedGift = await dataService.addGift(gift);
        response.status(StatusCode.Created).json(addedGift);
    }
    catch(err: any) {
        next(err);
    }
});

router.get("/total-gifts", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const count = await dataService.getTotalGifts();
        response.json(count);
    }
    catch(err: any) {
        next(err);
    }
});

export default router;
