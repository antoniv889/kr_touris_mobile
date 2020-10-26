import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RoutesListPage } from '../routesFolder/routes-list/routes-list.page';




@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    constructor(private plt: Platform, private httpCLient: HttpClient) { }

    getCategories(post_type_id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/categories/' + post_type_id);
    }
    getPostByCategory(type, category_id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getposts/' + type + '/' + category_id);
    }
    getPostByCategoryAsc(type, category_id, filter) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getposts_asc/' + type + '/' + category_id + '/' + filter);
    }
    getPostByCategoryDsc(type, category_id, filter) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getposts_dsc/' + type + '/' + category_id + '/' + filter);
    }
    getPostList(type_id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getpostlist/' + type_id);
    }
    getPostById(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getpostbyid/' + id);
    }
    getMediaUrl(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getmediaurl/' + id);
    }
    getPointsById(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getpoints/' + id);
    }
    getComment(post_id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/comment/' + post_id);
    }
    getRouteObjects(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/get_objects_by_route_id/' + id);
    }
    userlikes(user_id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getuserlikes/' + user_id);
    }
    postlikes(post_id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getpostlikes/' + post_id);
    }
    deleteuserlikes(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/destroyserlike/' + id);
    }
    getCommentAuthor(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getusername/' + id);
    }

    addComment(author_id: string, post_id: string, content: string) {
        return this.httpCLient.post('http://kryvyirih.travel/api/addcomment',
            { author_id: author_id, post_id: post_id, content: content },
            { headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' }) }
        );
    }
    userlikespost(post_id: number, count: number, user_id: string) {
        return this.httpCLient.post('http://kryvyirih.travel/api/userlikepost',
            { post_id: post_id, count: count, user_id: user_id },
            {
                headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
            });
    }
    getGids() {
        return this.httpCLient.get('http://kryvyirih.travel/api/getgids');
    }
    getGid(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getgid/' + id)
    }
    getLikes() {
        return this.httpCLient.get('http://kryvyirih.travel/api/getlikes');

    }
    addorder(post_id: number, gid_id: number, user_id: string, name: string, phone: string, email: string) {
        return this.httpCLient.post('http://kryvyirih.travel/api/addorder',
            { post_id: post_id, gid_id: gid_id, user_id: user_id, name: name, phone: phone, email: email },
            {
                headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
            });
    }
    getUserRole(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getuserrole/' + id);
    }
    getGidOrders(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getorders/' + id);
    }
    getUserOrders(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/getuserorders/' + id);
    }
    getPostGids(id) {
        return this.httpCLient.get('http://kryvyirih.travel/api/gidposts/' + id);
    }
    deleteComment(id: number) {
        return this.httpCLient.post('http://kryvyirih.travel/api/deletecomment',
            { id: id },
            {
                headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
            });
    }
    editComment(content: string, id: number) {
        return this.httpCLient.post('http://kryvyirih.travel/api/editcomment',
            { content: content, id: id },
            {
                headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
            });
    }
    add_googlefbuser(name: string, email: string) {
        return this.httpCLient.post('http://kryvyirih.travel/api/add_googlefbuser',
            { name: name, email: email },
            {
                headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest' })
            });
    }
    
}