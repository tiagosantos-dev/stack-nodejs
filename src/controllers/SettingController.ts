import { Response, Request } from 'express';
import { getCustomRepository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingRepository } from '../repositories/SettingRepository';

 class SettingController {
     async  create(request: Request, response: Response) {

        console.log(request.body);
        const { chat, username } = request.body;
        const settingsRepository = getCustomRepository(SettingRepository);

        const settings: Setting = settingsRepository.create({
            chat,
            username
        });

        console.log(settings);

        await settingsRepository.save(settings);

        return response.json(settings);
    }


}

export{ SettingController };