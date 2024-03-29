import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastTreeMessageController } from './controllers/GetLastTreeMessageController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle );

router.get("/messages/last3", new GetLastTreeMessageController().handle);

router.get("/profile", ensureAuthenticated ,new ProfileUserController().execute);

export { router }