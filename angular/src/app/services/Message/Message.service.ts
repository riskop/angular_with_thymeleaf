import { Observable } from "rxjs";
import { Injectable, Inject } from "@angular/core";
import { MessageDialog } from "./dialogs/Message.dialog";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Injectable()
export class MessageService {

	constructor(
		private _modalService: BsModalService) {
	}

	public showMessage(message: string): void {
		this._modalService.show(MessageDialog, {
			ignoreBackdropClick: true,
			initialState: {
				message: message
			}
		});
	}

}