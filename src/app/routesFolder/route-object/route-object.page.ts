import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { OrderComponent } from '../order/order.component';
// declare var google:any;
import { PopoverController } from '@ionic/angular';
import { CommentPopoverComponent } from '../comment-popover/comment-popover.component';

@Component({
    selector: 'app-route-object',
    templateUrl: './route-object.page.html',
    styleUrls: ['./route-object.page.scss'],
})

export class RouteObjectPage implements OnInit {
    // map: any;
    num: number = 5;
    origin = { lat: 48.654763, lng: 22.284592 };
    destination = { lat: 48.607798, lng: 22.329911 };
    id: any;
    imgUrl: any;

    // @ViewChild('map',{read: ElementRef, static: false}) mapRef: ElementRef;
    // directionsService = new google.maps.DirectionsService;
    // directionsDisplay = new google.maps.DirectionsRenderer;
    // origin = { lat: 48.654763, lng: 22.284592  };
    // destination = { lat: 48.607798, lng: 22.329911};

    counter = 0;
    author_id = localStorage.getItem('user_id');
    data: any = [];
    somedata: any;
    constructor(private activateRoute: ActivatedRoute,
        private dataService: DatabaseService,
        private modalCtrl: ModalController,
        private popoverController: PopoverController) {
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.getPostById();
        // this.getPointsById();
        this.getComment();
        this.getRouteObjects();
        this.getgids();
    }

    // ionViewDidEnter(){
    //   this.showMap();
    // }

    route: any = {};
    routePoints: any = [];
    comments: any = [];
    commentAuthor: any = [];
    dataObjects: any = [];
    excursions: any = [];
    getPostById() {
        this.dataService.getPostById(this.id).subscribe(res => {
            // console.log(res);
            this.route = res[0];
            this.imgUrl = res[1];
            this.route = this.route[0];
        })
    }

    latitude: any = [];
    longitude: any = [];
    mapLink = 'https://www.google.com/maps/dir/';
    getRouteObjects() {
        this.dataService.getRouteObjects(this.id).subscribe(res => {
            this.excursions = res;
            for (let i = 0; i < this.excursions.length; i++) {
                this.latitude[i] = +this.excursions[i].latitude;
                this.longitude[i] = +this.excursions[i].longitude;
                this.mapLink += this.latitude[i] + ',' + this.longitude[i] + '/';
            }
        });
    }
    getComment() {
        this.dataService.getComment(this.id).subscribe(res => {
            this.comments = res;
        });
    }
    user_id = localStorage.getItem('user_id');
    gids: any = [];
    getgids() {
        this.dataService.getPostGids(this.id).subscribe(res => {
            this.gids = res;
        },
            error => console.log(error),
        );
    }
    addComment(form: NgForm) {
        if (!this.user_id) {
            alert('Ви не увійшли в аккаунт');
        } else {
            this.dataService.addComment(this.author_id, this.id, form.value.content)
                .subscribe(
                    response => {
                        this.getComment()
                    },
                    error => console.log(error)
                )
        }
    }
    info: any;
    async showOrderBuilder() {
        const modal = await this.modalCtrl.create({
            component: OrderComponent,
            componentProps: {
                post_id: this.id,
                gids: this.gids
            }
        })
        await modal.present();
    }

    // showMap(){

    //   const location = new google.maps.LatLng(48.61300,22.302859);
    //   const options = {
    //     center: location,
    //     zoom: 14,
    //     disableDefaultUI: true,
    //   }
    //   this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    //   this.directionsDisplay.setMap(this.map);
    //   this.calculateAndDisplayRoute();
    // } 
    // calculateAndDisplayRoute() {  
    //   for(let i = 0; i < this.latitude.length-1;i++){
    //     this.directionsService.route({
    //       origin: {lat: this.latitude[i], lng: this.longitude[i]},
    //       destination: {lat: this.latitude[i+1], lng: this.longitude[i+1]},
    //       travelMode: 'DRIVING'
    //     }, (response, status) => {
    //       if (status === 'OK') {
    //         // this.directionsDisplay.setDirections(response);
    //       } else {
    //         window.alert('Directions request failed due to ' + status);
    //       }
    //     });
    //   }
    // }
    comment_id:number;
    commentInObject_id:number;

    editMode:number = -1;

    editComment(content:string, content_id:number){
        this.dataService.editComment(content, content_id).subscribe(
            response => {}
        )
        this.editMode = -1;
    }
    deleteComment(comment_id, id){
        this.comments.splice(id, 1);
        console.log(this.comments);
        this.dataService.deleteComment(comment_id).subscribe(
            response => {
                console.log(response);
            },
        );
    }
    async showPopover(ev: any, comment_id, commentInObject_id) {
        this.comment_id = comment_id; 
        this.commentInObject_id = commentInObject_id;
        const popover = await this.popoverController.create({
            component: CommentPopoverComponent,
            event: ev,
            cssClass: 'popover_setting',
            componentProps: {
            },
            translucent: true
        });
        popover.onDidDismiss().then((result) => {
            if(result.data.editDelete == 'delete'){
                this.deleteComment(this.comment_id,this.commentInObject_id);
            }
            if(result.data.editDelete == 'edit'){
                this.editMode = commentInObject_id;
            }
        });
        return await popover.present();
    }

}
