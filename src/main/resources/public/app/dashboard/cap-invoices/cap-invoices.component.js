"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var CapInvoicesComponent = (function () {
    function CapInvoicesComponent(http) {
        this.http = http;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
    }
    CapInvoicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("app/dashboard/cap-invoices/data.json")
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
            }, 1000);
        });
    };
    CapInvoicesComponent.prototype.toInt = function (num) {
        return +num;
    };
    CapInvoicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cap-invoices',
            templateUrl: './cap-invoices.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CapInvoicesComponent);
    return CapInvoicesComponent;
}());
exports.CapInvoicesComponent = CapInvoicesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvY2FwLWludm9pY2VzL2NhcC1pbnZvaWNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFPckM7SUFPSSw4QkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFMdEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFtQmxCLHFCQUFnQixHQUFHLFVBQUMsQ0FBTTtZQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsQ0FBQyxDQUFBO0lBakJELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNoRCxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ1osVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLG9DQUFLLEdBQVosVUFBYSxHQUFXO1FBQ3BCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNoQixDQUFDO0lBM0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7OzRCQUFBO0lBNkJGLDJCQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSw0QkFBb0IsdUJBNEJoQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvY2FwLWludm9pY2VzL2NhcC1pbnZvaWNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2NhcC1pbnZvaWNlcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2FwLWludm9pY2VzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FwSW52b2ljZXNDb21wb25lbnQge1xyXG4gICAgcHVibGljIGRhdGE6IGFueTtcclxuICAgIHB1YmxpYyBmaWx0ZXJRdWVyeSA9IFwiXCI7XHJcbiAgICBwdWJsaWMgcm93c09uUGFnZSA9IDEwO1xyXG4gICAgcHVibGljIHNvcnRCeSA9IFwiZW1haWxcIjtcclxuICAgIHB1YmxpYyBzb3J0T3JkZXIgPSBcImFzY1wiO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoXCJhcHAvZGFzaGJvYXJkL2NhcC1pbnZvaWNlcy9kYXRhLmpzb25cIilcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0ludChudW06IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiArbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzb3J0QnlXb3JkTGVuZ3RoID0gKGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhLmNpdHkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
