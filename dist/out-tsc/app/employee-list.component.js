var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { SharedService } from './shared/shared.service';
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.term = null;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
    };
    return EmployeeListComponent;
}());
__decorate([
    Input('search-term'),
    __metadata("design:type", String)
], EmployeeListComponent.prototype, "term", void 0);
EmployeeListComponent = __decorate([
    Component({
        selector: 'app-employee',
        templateUrl: './employee-list.component.html',
        styles: ['./employee-list.component.css'],
    }),
    __metadata("design:paramtypes", [SharedService])
], EmployeeListComponent);
export { EmployeeListComponent };
//# sourceMappingURL=../../../src/app/employee-list.component.js.map