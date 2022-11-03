import {CreateBetUseCase} from "../../useCase/bet/createrBet/CreateBetUseCase"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function CreateUserController(request: NextApiRequest, response: NextApiResponse){

    function validateDate(bet_time: string){
        if (bet_time.length != 8) return false;
        try {
            var day = parseInt(bet_time.substring(0,2))
            var hour =  parseInt(bet_time.substring(3,5))
            var minute =  parseInt(bet_time.substring(6,8))
            return true
        } catch (error) {
            return false
        }
    }

    async function handle(request: any, response: any){
        var {nickname, bet_time} = request.body

        const minimum_chars = 4

        if (nickname.length < minimum_chars){
            return response.status(203).json({response: 'Nickname too short',nickname})
        }
        
        if(!validateDate(bet_time)){
            return response.status(203).json({response: 'Wrong format bet',nickname})
        }

        const createBetUseCase = new CreateBetUseCase();

        try {
            const create = await createBetUseCase.execute(
                {nickname, bet_time}
            );

            return response.status(201).json({response: create});

        }
        catch(err: any) {
            if (err.message == 'Limit of bets'){
                return response.status(429).json({response: 'Limit of bets'})
            }
            else if (err.message == 'Response already exists'){
                return response.status(400).json({response: 'Response already exists'})
            }
        }
    }
    handle(request, response)
}
