import {CreateUserUseCase} from "../../useCase/user/createrUser/CreateUserUseCase"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function CreateUserController(request: NextApiRequest, response: NextApiResponse){

    async function handle(request: any, response: any){
        var phone = request.body.number
        phone = '55' + phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '').replace(/_/g, '')
      

        if (phone.length != 13){
            return response.status(203).json({response: phone})
        }

        const createUserUseCase = new CreateUserUseCase();

        try {
            const create = await createUserUseCase.execute(
            {
                phone
            });

            return response.status(201).json(create);

        }
        catch(err: any) {

            if (err.message == 'Some Error'){
                return response.status(203).json({response: phone})
            }
            else if (err.message == 'Response already exists'){
                return response.status(200).json({response: phone})
            }
        }
    }

    handle(request, response)

}
