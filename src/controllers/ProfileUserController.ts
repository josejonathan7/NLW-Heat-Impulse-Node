import { Request, Response } from 'express';
import { ProfileUserService } from '../service/ProfileUserService';

class ProfileUserController {

    async execute(request: Request, response: Response){
        const { user_id } = request;

        const service = new ProfileUserService();

        try {
            const result = await service.execute(user_id);

            return response.json(result);
            
        } catch (error) {
            return response.status(401).json({
                errorCode: error.message
            })
        }
        
    }
}

export { ProfileUserController }