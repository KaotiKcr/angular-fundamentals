import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared/index';

@Component({
templateUrl: './create-session.component.html',
styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    level: FormControl;
    duration: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name =  new FormControl('', Validators.required);
        this.presenter =  new FormControl('', Validators.required);
        this.level =  new FormControl('', Validators.required);
        this.duration =  new FormControl('', Validators.required);
        this.abstract =  new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            level: this.level,
            duration: this.duration,
            abstract: this.abstract
        });
    }

    saveSession(formValues) {
        const session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            level: formValues.level,
            duration: +formValues.duration,
            abstract: formValues.abstract,
            voters: []
        };
        console.log(session);
    }
}
