var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
var SharedService = (function () {
    function SharedService(_http) {
        this._http = _http;
    }
    SharedService.prototype.searchTerm = function (searchString, type) {
        if (type === void 0) { type = "artist"; }
        this.url = "https://api.spotify.com/v1/search?query=" + searchString + "&offset=0&limit=20&type=" + type + "&market=US";
        return this._http.get(this.url)
            .map(function (resp) { return resp.json(); });
    };
    SharedService.prototype.getArtist = function (id) {
        this.artistUrl = "https://api.spotify.com/v1/artists/" + id;
        return this._http.get(this.url)
            .map(function (resp) { return resp.json(); });
    };
    return SharedService;
}());
SharedService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], SharedService);
export { SharedService };
//# sourceMappingURL=../../../../src/app/shared/shared.service.js.map