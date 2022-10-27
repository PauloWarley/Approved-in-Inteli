import {client} from '../../../prisma/client'

interface IUserRequest {
    nickname: string;
    bet_time: string;
}

class CreateBetUseCase {

    async execute({nickname, bet_time}: IUserRequest){

        var bet_limit = await client.bets_params.findMany({
            where: {
                key: 'bet_limit', 
            }
        });

        try {
            bet_limit = parseInt(bet_limit[0].value)
            
        } catch (error) {
            bet_limit = 3
            console.log(error.message)
        }

        const bet = await client.bets.findMany({
            where: {
                nickname: nickname, 
            }
        });

        if (bet.length > bet_limit){
            throw Error('Limit of bets')
        } 


        try{
            await client.bets.create({
                data: {
                    nickname: nickname, 
                    time: bet_time,
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

export {CreateBetUseCase}