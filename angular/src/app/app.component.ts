import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "src/app/services/Message/Message.service";

@Component({
        selector: 'app-root',
	templateUrl: "./app.component.html",
	styles: [
		`input:read-only {
			color: grey;
			background-color: #eee;
		}`,
		`input:-moz-read-only {
			color: grey;
			background-color: #eee;
		}`
	]
})
export class AppComponent {

	public sendEmailForm: FormGroup;

	constructor(formBuilder: FormBuilder, private _http: HttpClient, private _messageService: MessageService) {
		this.sendEmailForm = formBuilder.group({
			email: ["", [
				Validators.required,
				Validators.maxLength(200)
				]],
			subject: ["", [
				Validators.required,
				Validators.maxLength(200)
				]],
			text: ["", [
				Validators.minLength(10),
				Validators.maxLength(4000)]]
		});
	}

	public optionalClasses(name: string) {
		const control: AbstractControl = this.sendEmailForm.get(name);
		return {
			"has-error": control.invalid && control.dirty
		};
	}

	public send() {
		if (this.sendEmailForm.valid) {
			const url: string = "sendEmail";
			this._http.post(url, {
				email: this.sendEmailForm.value.email as string,
				subject: this.sendEmailForm.value.targy as string,
				text: this.sendEmailForm.value.szoveg as string,
			}).subscribe(result => {
				this.sendEmailForm.reset({
				});
				this._messageService.showMessage("SUCCESS!");
			});
		}
	}


}
