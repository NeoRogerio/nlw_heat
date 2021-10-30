import { Request, Response } from "express";
import { CreateServiceMessage } from "../services/CreateServiceMessage";

class CreateMessageController {
    async handle(request: Request, response: Response) {
        const { message } = request.body;
        const { user_id } = request;

        const service = new CreateServiceMessage();
        const result = await service.execute(message, user_id);

        return response.json(result);
    }
}

export { CreateMessageController }