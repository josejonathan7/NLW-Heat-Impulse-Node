import { Request, Response } from 'express';
import { CreateMessageService } from '../service/CreateMessageService';

class CreateMessageController {

    async handle(request: Request, response: Response) {
        const { message } = request.body;
        const { user_id } = request;

        const service = new CreateMessageService();

        try {
            const result = await service.execute(message, user_id);

            return response.json(result);
            
        } catch (error) {
            return response.status(404).json({ errorCode: error.message })
        }

    }
}

export { CreateMessageController }