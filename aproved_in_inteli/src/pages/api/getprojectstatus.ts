import {GetProjectStatusUseCase} from "../../useCase/project/getProjectStatus/GetProjectStatusUseCase"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function CreateUserController(request: NextApiRequest, response: NextApiResponse){

    async function handle(request: any, response: any){

        const getProjectStatusUseCase = new GetProjectStatusUseCase();

        try {
            const get = await getProjectStatusUseCase.execute();

            return response.status(201).json({response: get});

        }
        catch(err: any) {
            console.log(err)
            return response.status(400).json({response: 'Response already exists'})
        }
    }
    handle(request, response)
}
