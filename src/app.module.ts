import { Module } from "@nestjs/common";
import { ClientModule } from "./client/client.module";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			name: "postgres",
			host: "localhost",
			port: 5432,
			username: "rocket_bank",
			password: "kl1jh2h3k1",
			database: "rocket_bank",
		}),
		ClientModule,
		UserModule,
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
