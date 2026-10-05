import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { SeverityLevel } from "../../generated/prisma/browser";
import { envs } from "../../config/plugins/envs.plugin";
import { prisma } from "../../data/postgres";

const severityEnum = {
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH,
}

export class PostgresLogDatasource implements LogDatasource {
    async saveLog(log: LogEntity): Promise<void> {
    
        const level = severityEnum[log.level];
        
        const newLog = await prisma.logModel.create({
            data: {
                ...log,
                level: level,
            }
        });

        console.log('Postgres saved');
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    
        const level = severityEnum[severityLevel];

        const dbLogs = await prisma.logModel.findMany({
            where: { level }
        });
    
        return dbLogs.map( LogEntity.fromObject );
    }
    
}