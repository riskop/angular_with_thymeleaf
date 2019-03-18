import { Component } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
	templateUrl: "Message.dialog.html"
})
export class MessageDialog {

	constructor(private _ref: BsModalRef) {	}

        /*
	public get iconClass(): string {
		const classes: Array<string> = ["fas fa-lg"];
		switch (this.message.severity) {
			case Severity.INFO:
				classes.push("fa-exclamation-circle", "text-info");
			break;
			case Severity.WARNING:
				classes.push("fa-exclamation-circle", "text-warning");
			break;
			case Severity.ERROR:
				classes.push("fa-exclamation-circle", "text-danger");
			break;
			case Severity.SUCCESS:
				classes.push("fa-check-circle", "text-success");
			break;
		}
		return classes.join(" ");
	}
        */

	public close() {
		this._ref.hide();
	}
}