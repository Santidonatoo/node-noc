import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";


const fslogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

const mongologRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
);

const postgreslogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource()
);

const emailService = new EmailService();

export class Server {

    public static async start() {

        console.log('Server started...');

        //todo: Mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     ['santinodonato1@gmail.com', 'santinodonato1@gmail.com']
        // )
        // emailService.sendEmailWithFileSystemLogs(
        //     ['santinodonato1@gmail.com', 'santinodonato1@gmail.com']
        // );

        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs);

        
        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://google.com';
                
        //         new CheckServiceMultiple(
        //             [ fslogRepository, mongologRepository, postgreslogRepository ],
        //             () => console.log(`${ url } is ok`),
        //             ( error ) => console.log( error ),
        //         ).execute( url );
        //     }
        // );

    }

}