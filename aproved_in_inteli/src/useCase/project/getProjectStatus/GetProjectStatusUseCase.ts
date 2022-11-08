import {client} from '../../../prisma/client'


class GetProjectStatusUseCase {
    async execute(){

        const status = await client.$queryRaw`SELECT * FROM clarity.project_status order by 1 desc limit 1`
        return status
    }
}

export  {GetProjectStatusUseCase}
