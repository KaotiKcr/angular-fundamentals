import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-upvote',
    styleUrls: ['./upvote.component.css'],
    templateUrl: './upvote.component.html'
})
export class UpvoteComponent {
    iconColor: string;
    @Input() count: number;
    @Input('voted') set voted(value: boolean) {
        this.iconColor = value ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}
