import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-comment-popover',
    templateUrl: './comment-popover.component.html',
    styleUrls: ['./comment-popover.component.scss'],
})
export class CommentPopoverComponent implements OnInit {

    constructor(private popoverController: PopoverController) { }

    ngOnInit() { }

    async dismiss(editDelete: string){
        await this.popoverController.dismiss({
            editDelete:editDelete,
        });
    }

}
