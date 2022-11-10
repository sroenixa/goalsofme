import { Controller, Get, Post, Request,UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './utils/guard/jwt-guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
