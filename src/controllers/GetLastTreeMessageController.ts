import { Request, Response } from 'express';
import { GetLastTreeMessagesService } from '../service/GetLastTreeMessagesService';

class GetLastTreeMessageController {

    async handle(request: Request, response: Response) {
        const service = new GetLastTreeMessagesService();

        try {
            const result = await service.execute();

            return response.json(result);
            
        } catch (error) {
            return response.status(404).json({ errorCode: error.message })
        }

    }
}

export { GetLastTreeMessageController }