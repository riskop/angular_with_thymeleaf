import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { MessageDialog } from "./services/Message/dialogs/Message.dialog";
import { MessageService } from "./services/Message/Message.service";
//import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams, TranslateService} from "@ngx-translate/core";
import { ModalModule } from "ngx-bootstrap/modal";
import { LoggerModule, NgxLoggerLevel, NGXLogger, CustomNGXLoggerService } from "ngx-logger";

import { AppComponent } from './app.component';

class CustomErrorHandler extends ErrorHandler {

	private _messageService: MessageService;
	private _logger: NGXLogger;

	constructor(private _injector: Injector) {
		super();
	}

	public handleError(error: HttpErrorResponse) {
		if (!this._messageService) {
			this._messageService = this._injector.get(MessageService);
		}
		if (!this._logger) {
			this._logger = this._injector.get(NGXLogger);
		}

		if (error) {
			if (error instanceof HttpErrorResponse) {
                                this._messageService.showMessage("http status: " + error.status);
			}
		}
                else {
                     // TODO: what to do if error is undefined?
                }
	}
}

//declare var PROD: boolean;

@NgModule({
  declarations: [
    AppComponent,
		MessageDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,

		LoggerModule.forRoot({
//			level: PROD ? NgxLoggerLevel.WARN : NgxLoggerLevel.DEBUG,
			level: NgxLoggerLevel.DEBUG,
/*			serverLoggingUrl: "api/log",*/
//			serverLogLevel: PROD ? NgxLoggerLevel.ERROR : NgxLoggerLevel.DEBUG,
			serverLogLevel: NgxLoggerLevel.ERROR,
//			disableConsoleLogging: PROD
                        disableConsoleLogging: false
		}),

		ModalModule.forRoot(),

                /*
    		MessageSupportModule.forRoot({
			translate: true,
			defaultTitleText: "SENDING FAILURE",
			confirmation: {
				yesText: "YES",
				noText: "NO"
			}
		}),
                */

    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
             MessageService,
		{
			provide: ErrorHandler,
			useClass: CustomErrorHandler,
			deps: [Injector]
		}
  ],
	entryComponents:	[
		MessageDialog
//		OptionsDialog
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
