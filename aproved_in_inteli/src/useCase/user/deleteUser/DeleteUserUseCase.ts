import {client} from '../../../prisma/client'

interface IUserRequest {
    phone: string;  
}

class DeleteUserUseCase {

    async execute({phone}: IUserRequest){

        try {
            const deleteUser = await client.phones.deleteMany({
                where: {
                    phone
                },
            })
            return 'Success'
        } catch (error) {
            throw Error('Some Error on Delete')
        }
        

    }
}

export {DeleteUserUseCase}