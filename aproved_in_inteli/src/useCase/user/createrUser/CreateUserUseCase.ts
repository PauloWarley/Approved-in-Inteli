import {client} from '../../../prisma/client'

interface IUserRequest {
    phone: string;  
}

class CreateUserUseCase {

    async execute({phone}: IUserRequest){

        var phones = await client.phones.findFirst({
            where: {
                phone: phone
            }
        });

        if (phones != null){
            throw Error('Response already exists')
        } 


        try{
            await client.phones.create({
                data: {
                    phone: phone,
                    createdDate: new Date()
                }
            });
            return 'Success'
        }

        catch{
            throw Error('Some Error')

        }
    }
}

export {CreateUserUseCase}