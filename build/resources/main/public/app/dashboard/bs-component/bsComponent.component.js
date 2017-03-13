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
var modal_component_1 = require('ng2-bootstrap/components/modal/modal.component');
var BSComponentComponent = (function () {
    function BSComponentComponent() {
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        this.max = 200;
        this.stacked = [];
        this.x = 5;
        this.y = 2;
        this.maxRating = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.ratingStates = [
            { stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle' },
            { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
            { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
            { stateOn: 'fa fa-heart' },
            { stateOff: 'fa fa-power-off' }
        ];
        this.tabs = [
            { title: 'Title 1', content: 'Dynamic content 1' },
            { title: 'Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Title 3', content: 'Dynamic content 3', removable: true }
        ];
        this.selected = '';
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }];
        this.random();
        this.randomStacked();
    }
    BSComponentComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    BSComponentComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    BSComponentComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    BSComponentComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    BSComponentComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    BSComponentComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    BSComponentComponent.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ;
    BSComponentComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
    ;
    BSComponentComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    BSComponentComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    BSComponentComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    BSComponentComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    BSComponentComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    BSComponentComponent.prototype.getContext = function () {
        return this;
    };
    BSComponentComponent.prototype.getAsyncData = function (context) {
        if (this._prevContext === context) {
            return this._cache;
        }
        this._prevContext = context;
        var f = function () {
            var p = new Promise(function (resolve) {
                setTimeout(function () {
                    var query = new RegExp(context.asyncSelected, 'ig');
                    return resolve(context.states.filter(function (state) {
                        return query.test(state);
                    }));
                }, 200);
            });
            return p;
        };
        this._cache = f;
        return this._cache;
    };
    BSComponentComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    BSComponentComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    BSComponentComponent.prototype.typeaheadOnSelect = function (e) {
        console.log("Selected value: " + e.item);
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', modal_component_1.ModalDirective)
    ], BSComponentComponent.prototype, "childModal", void 0);
    BSComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-component',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: './bs-component.component.html',
            styles: ["\n    \t.tooltip.customClass .tooltip-inner {\n    \t\tcolor: #880000;\n    \t\tbackground-color: #ffff66;\n    \t\tbox-shadow: 0 6px 12px rgba(0,0,0,.175);\n    \t}\n    \t.tooltip.customClass .tooltip-arrow {\n    \t\tdisplay: none;\n    \t}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], BSComponentComponent);
    return BSComponentComponent;
}());
exports.BSComponentComponent = BSComponentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBRTlFLGdDQUErQixnREFBZ0QsQ0FBQyxDQUFBO0FBbUJoRjtJQWtIQztRQTdHTyxnQkFBVyxHQUFVLEdBQUcsQ0FBQztRQUN6QixlQUFVLEdBQVUsUUFBUSxDQUFDO1FBQzdCLGVBQVUsR0FBTyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFHM0QsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQW9CLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzFDLFVBQUssR0FBa0IsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBR2xHLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsZ0JBQVcsR0FBVSxDQUFDLENBQUM7UUFFdkIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixrQkFBYSxHQUFVLEdBQUcsQ0FBQztRQUMzQixtQkFBYyxHQUFVLENBQUMsQ0FBQztRQUcxQixXQUFNLEdBQWtCLENBQUM7Z0JBQy9CLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSwyREFBMkQ7YUFDL0Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsU0FBUztnQkFDZixHQUFHLEVBQUUsZ0VBQWdFO2dCQUNyRSxRQUFRLEVBQUUsSUFBSTthQUNkO1NBQ0QsQ0FBQztRQUdLLFFBQUcsR0FBVSxHQUFHLENBQUM7UUFJakIsWUFBTyxHQUFTLEVBQUUsQ0FBQztRQUduQixNQUFDLEdBQVUsQ0FBQyxDQUFDO1FBQ2IsTUFBQyxHQUFVLENBQUMsQ0FBQztRQUNiLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsU0FBSSxHQUFVLENBQUMsQ0FB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QUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDbkQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUNqRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDcEQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQztZQUMzRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ3ZELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDekQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUNyRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ3pELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVB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LENBQUM7SUFFTSxnREFBaUIsR0FBeEIsVUFBeUIsQ0FBSztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixDQUFDLENBQUMsSUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWxQRDtRQUFDLGdCQUFTLENBQUMsWUFBWSxDQUFDOzs0REFBQTtJQW5CekI7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsTUFBTSxFQUFFLENBQUMsMlBBU1IsQ0FBQztTQUNMLENBQUM7OzRCQUFBO0lBdVBGLDJCQUFDO0FBQUQsQ0FyUEEsQUFxUEMsSUFBQTtBQXJQWSw0QkFBb0IsdUJBcVBoQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZzItYm9vdHN0cmFwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2JzLWNvbXBvbmVudCcsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9icy1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgXHQudG9vbHRpcC5jdXN0b21DbGFzcyAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBcdFx0Y29sb3I6ICM4ODAwMDA7XHJcbiAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmY2NjtcclxuICAgIFx0XHRib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICBcdH1cclxuICAgIFx0LnRvb2x0aXAuY3VzdG9tQ2xhc3MgLnRvb2x0aXAtYXJyb3cge1xyXG4gICAgXHRcdGRpc3BsYXk6IG5vbmU7XHJcbiAgICBcdH1cclxuICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQlNDb21wb25lbnRDb21wb25lbnQge1xyXG5cclxuXHRAVmlld0NoaWxkKCdjaGlsZE1vZGFsJykgcHVibGljIGNoaWxkTW9kYWw6TW9kYWxEaXJlY3RpdmU7XHJcblxyXG5cdC8vIEJ1dHRvblxyXG5cdHB1YmxpYyBzaW5nbGVNb2RlbDpzdHJpbmcgPSAnMSc7XHJcblx0cHVibGljIHJhZGlvTW9kZWw6c3RyaW5nID0gJ01pZGRsZSc7XHJcblx0cHVibGljIGNoZWNrTW9kZWw6YW55ID0ge2xlZnQ6IGZhbHNlLCBtaWRkbGU6IHRydWUsIHJpZ2h0OiBmYWxzZX07XHJcblxyXG5cdC8vIERyb3Bkb3duIFxyXG5cdHB1YmxpYyBkaXNhYmxlZDpib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHN0YXR1czp7aXNvcGVuOmJvb2xlYW59ID0ge2lzb3BlbjogZmFsc2V9O1xyXG5cdHB1YmxpYyBpdGVtczogQXJyYXk8c3RyaW5nPiA9IFsnVGhlIGZpcnN0IGNob2ljZSEnLCAnQW5kIGFub3RoZXIgY2hvaWNlIGZvciB5b3UuJywgJ2J1dCB3YWl0ISBBIHRoaXJkISddO1xyXG5cclxuXHQvLyBQYWdpbmF0aW9uXHJcblx0cHVibGljIHRvdGFsSXRlbXM6bnVtYmVyID0gNjQ7XHJcblx0cHVibGljIGN1cnJlbnRQYWdlOm51bWJlciA9IDQ7XHJcblxyXG5cdHB1YmxpYyBtYXhTaXplOm51bWJlciA9IDU7XHJcblx0cHVibGljIGJpZ1RvdGFsSXRlbXM6bnVtYmVyID0gMTc1O1xyXG5cdHB1YmxpYyBiaWdDdXJyZW50UGFnZTpudW1iZXIgPSAxO1xyXG5cclxuXHQvLyBBbGVydFxyXG5cdHB1YmxpYyBhbGVydHM6IEFycmF5PE9iamVjdD4gPSBbe1xyXG5cdFx0dHlwZTogJ2RhbmdlcicsXHJcblx0XHRtc2c6ICdPaCBzbmFwISBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi4nXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdG1zZzogJ1dlbGwgZG9uZSEgWW91IHN1Y2Nlc3NmdWxseSByZWFkIHRoaXMgaW1wb3J0YW50IGFsZXJ0IG1lc3NhZ2UuJyxcclxuXHRcdFx0Y2xvc2FibGU6IHRydWVcclxuXHRcdH1cclxuXHRdO1xyXG5cclxuXHQvLyBQcm9ncmVzc2JhclxyXG5cdHB1YmxpYyBtYXg6bnVtYmVyID0gMjAwO1xyXG5cdHB1YmxpYyBzaG93V2FybmluZzpib29sZWFuO1xyXG5cdHB1YmxpYyBkeW5hbWljOm51bWJlcjtcclxuXHRwdWJsaWMgdHlwZTpzdHJpbmc7XHJcblx0cHVibGljIHN0YWNrZWQ6YW55W10gPSBbXTtcclxuXHJcblx0Ly8gUmF0aW5nXHJcblx0cHVibGljIHg6bnVtYmVyID0gNTtcclxuXHRwdWJsaWMgeTpudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBtYXhSYXRpbmc6bnVtYmVyID0gMTA7XHJcblx0cHVibGljIHJhdGU6bnVtYmVyID0gNztcclxuXHRwdWJsaWMgaXNSZWFkb25seTpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdHB1YmxpYyBvdmVyU3RhcjpudW1iZXI7XHJcblx0cHVibGljIHBlcmNlbnQ6bnVtYmVyO1xyXG5cclxuXHRwdWJsaWMgcmF0aW5nU3RhdGVzOmFueSA9IFtcclxuXHRcdHtzdGF0ZU9uOiAnZmEgZmEtY2hlY2snLCBzdGF0ZU9mZjogJ2ZhIGZhLWNoZWNrLWNpcmNsZSd9LFxyXG5cdFx0e3N0YXRlT246ICdmYSBmYS1zdGFyJywgc3RhdGVPZmY6ICdmYSBmYS1zdGFyLW8nfSxcclxuXHRcdHtzdGF0ZU9uOiAnZmEgZmEtaGVhcnQnLCBzdGF0ZU9mZjogJ2ZhIGZhLWJhbid9LFxyXG5cdFx0e3N0YXRlT246ICdmYSBmYS1oZWFydCcgfSxcclxuXHRcdHtzdGF0ZU9mZjogJ2ZhIGZhLXBvd2VyLW9mZid9XHJcblx0XTtcclxuXHJcblx0Ly8gVGFic1xyXG5cdHB1YmxpYyB0YWJzOkFycmF5PGFueT4gPSBbXHJcblx0ICAgIHt0aXRsZTogJ1RpdGxlIDEnLCBjb250ZW50OiAnRHluYW1pYyBjb250ZW50IDEnfSxcclxuXHQgICAge3RpdGxlOiAnVGl0bGUgMicsIGNvbnRlbnQ6ICdEeW5hbWljIGNvbnRlbnQgMicsIGRpc2FibGVkOiB0cnVlfSxcclxuXHQgICAge3RpdGxlOiAnVGl0bGUgMycsIGNvbnRlbnQ6ICdEeW5hbWljIGNvbnRlbnQgMycsIHJlbW92YWJsZTogdHJ1ZX1cclxuXHRdO1xyXG5cclxuXHQvLyBUeXBlaGVhZFxyXG5cdHB1YmxpYyBzZWxlY3RlZDpzdHJpbmcgPSAnJztcclxuXHRwdWJsaWMgYXN5bmNTZWxlY3RlZDpzdHJpbmcgPSAnJztcclxuXHRwdWJsaWMgdHlwZWFoZWFkTG9hZGluZzpib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHR5cGVhaGVhZE5vUmVzdWx0czpib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHN0YXRlczpBcnJheTxzdHJpbmc+ID0gWydBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJyxcclxuXHQnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsXHJcblx0J0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLFxyXG5cdCdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxyXG5cdCdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLFxyXG5cdCdNaWNoaWdhbicsICdNaW5uZXNvdGEnLFxyXG5cdCdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJyxcclxuXHQnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJyxcclxuXHQnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJyxcclxuXHQnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsXHJcblx0J1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLCAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JyxcclxuXHQnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXHJcblx0J1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcclxuXHRwdWJsaWMgc3RhdGVzQ29tcGxleDpBcnJheTxhbnk+ID0gW1xyXG5cdHtpZDogMSwgbmFtZTogJ0FsYWJhbWEnfSwge2lkOiAyLCBuYW1lOiAnQWxhc2thJ30sIHtpZDogMywgbmFtZTogJ0FyaXpvbmEnfSxcclxuXHR7aWQ6IDQsIG5hbWU6ICdBcmthbnNhcyd9LCB7aWQ6IDUsIG5hbWU6ICdDYWxpZm9ybmlhJ30sXHJcblx0e2lkOiA2LCBuYW1lOiAnQ29sb3JhZG8nfSwge2lkOiA3LCBuYW1lOiAnQ29ubmVjdGljdXQnfSxcclxuXHR7aWQ6IDgsIG5hbWU6ICdEZWxhd2FyZSd9LCB7aWQ6IDksIG5hbWU6ICdGbG9yaWRhJ30sXHJcblx0e2lkOiAxMCwgbmFtZTogJ0dlb3JnaWEnfSwge2lkOiAxMSwgbmFtZTogJ0hhd2FpaSd9LFxyXG5cdHtpZDogMTIsIG5hbWU6ICdJZGFobyd9LCB7aWQ6IDEzLCBuYW1lOiAnSWxsaW5vaXMnfSxcclxuXHR7aWQ6IDE0LCBuYW1lOiAnSW5kaWFuYSd9LCB7aWQ6IDE1LCBuYW1lOiAnSW93YSd9LFxyXG5cdHtpZDogMTYsIG5hbWU6ICdLYW5zYXMnfSwge2lkOiAxNywgbmFtZTogJ0tlbnR1Y2t5J30sXHJcblx0e2lkOiAxOCwgbmFtZTogJ0xvdWlzaWFuYSd9LCB7aWQ6IDE5LCBuYW1lOiAnTWFpbmUnfSxcclxuXHR7aWQ6IDIxLCBuYW1lOiAnTWFyeWxhbmQnfSwge2lkOiAyMiwgbmFtZTogJ01hc3NhY2h1c2V0dHMnfSxcclxuXHR7aWQ6IDIzLCBuYW1lOiAnTWljaGlnYW4nfSwge2lkOiAyNCwgbmFtZTogJ01pbm5lc290YSd9LFxyXG5cdHtpZDogMjUsIG5hbWU6ICdNaXNzaXNzaXBwaSd9LCB7aWQ6IDI2LCBuYW1lOiAnTWlzc291cmknfSxcclxuXHR7aWQ6IDI3LCBuYW1lOiAnTW9udGFuYSd9LCB7aWQ6IDI4LCBuYW1lOiAnTmVicmFza2EnfSxcclxuXHR7aWQ6IDI5LCBuYW1lOiAnTmV2YWRhJ30sIHtpZDogMzAsIG5hbWU6ICdOZXcgSGFtcHNoaXJlJ30sXHJcblx0e2lkOiAzMSwgbmFtZTogJ05ldyBKZXJzZXknfSwge2lkOiAzMiwgbmFtZTogJ05ldyBNZXhpY28nfSxcclxuXHR7aWQ6IDMzLCBuYW1lOiAnTmV3IFlvcmsnfSwge2lkOiAzNCwgbmFtZTogJ05vcnRoIERha290YSd9LFxyXG5cdHtpZDogMzUsIG5hbWU6ICdOb3J0aCBDYXJvbGluYSd9LCB7aWQ6IDM2LCBuYW1lOiAnT2hpbyd9LFxyXG5cdHtpZDogMzcsIG5hbWU6ICdPa2xhaG9tYSd9LCB7aWQ6IDM4LCBuYW1lOiAnT3JlZ29uJ30sXHJcblx0e2lkOiAzOSwgbmFtZTogJ1Blbm5zeWx2YW5pYSd9LCB7aWQ6IDQwLCBuYW1lOiAnUmhvZGUgSXNsYW5kJ30sXHJcblx0e2lkOiA0MSwgbmFtZTogJ1NvdXRoIENhcm9saW5hJ30sIHtpZDogNDIsIG5hbWU6ICdTb3V0aCBEYWtvdGEnfSxcclxuXHR7aWQ6IDQzLCBuYW1lOiAnVGVubmVzc2VlJ30sIHtpZDogNDQsIG5hbWU6ICdUZXhhcyd9LFxyXG5cdHtpZDogNDUsIG5hbWU6ICdVdGFoJ30sIHtpZDogNDYsIG5hbWU6ICdWZXJtb250J30sXHJcblx0e2lkOiA0NywgbmFtZTogJ1ZpcmdpbmlhJ30sIHtpZDogNDgsIG5hbWU6ICdXYXNoaW5ndG9uJ30sXHJcblx0e2lkOiA0OSwgbmFtZTogJ1dlc3QgVmlyZ2luaWEnfSwge2lkOiA1MCwgbmFtZTogJ1dpc2NvbnNpbid9LFxyXG5cdHtpZDogNTEsIG5hbWU6ICdXeW9taW5nJ31dO1xyXG5cclxuXHRwcml2YXRlIF9jYWNoZTphbnk7XHJcblx0cHJpdmF0ZSBfcHJldkNvbnRleHQ6YW55O1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy5yYW5kb21TdGFja2VkKCk7XHJcblx0fVxyXG5cclxuXHQvLyBBbGVydFxyXG5cdHB1YmxpYyBjbG9zZUFsZXJ0KGk6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMuYWxlcnRzLnNwbGljZShpLCAxKTtcclxuXHR9XHJcblx0cHVibGljIGFkZEFsZXJ0KCk6dm9pZCB7XHJcblx0XHR0aGlzLmFsZXJ0cy5wdXNoKHttc2c6ICdBbm90aGVyIGFsZXJ0IScsIHR5cGU6ICd3YXJuaW5nJywgY2xvc2FibGU6IHRydWV9KTtcclxuXHR9XHJcblxyXG5cdC8vIERyb3Bkb3duXHJcblx0cHVibGljIHRvZ2dsZWQob3Blbjpib29sZWFuKTp2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKCdEcm9wZG93biBpcyBub3c6ICcsIG9wZW4pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcclxuXHRcdCRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5zdGF0dXMuaXNvcGVuID0gIXRoaXMuc3RhdHVzLmlzb3BlbjtcclxuXHR9XHJcblxyXG5cdC8vIFBhZ2luYXRpb25cclxuXHRwdWJsaWMgc2V0UGFnZShwYWdlTm86bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlTm87XHJcblx0fTtcclxuXHJcblx0cHVibGljIHBhZ2VDaGFuZ2VkKGV2ZW50OmFueSk6dm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZygnUGFnZSBjaGFuZ2VkIHRvOiAnICsgZXZlbnQucGFnZSk7XHJcblx0XHRjb25zb2xlLmxvZygnTnVtYmVyIGl0ZW1zIHBlciBwYWdlOiAnICsgZXZlbnQuaXRlbXNQZXJQYWdlKTtcclxuXHR9O1xyXG5cdC8vIFByb2dyZXNzYmFyXHJcblx0cHVibGljIHJhbmRvbSgpOnZvaWQge1xyXG5cdFx0bGV0IHZhbHVlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxKTtcclxuXHRcdGxldCB0eXBlOnN0cmluZztcclxuXHJcblx0XHRpZiAodmFsdWUgPCAyNSkge1xyXG5cdFx0XHR0eXBlID0gJ3N1Y2Nlc3MnO1xyXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDUwKSB7XHJcblx0XHRcdHR5cGUgPSAnaW5mbyc7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgNzUpIHtcclxuXHRcdFx0dHlwZSA9ICd3YXJuaW5nJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHR5cGUgPSAnZGFuZ2VyJztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNob3dXYXJuaW5nID0gKHR5cGUgPT09ICdkYW5nZXInIHx8IHR5cGUgPT09ICd3YXJuaW5nJyk7XHJcblx0XHR0aGlzLmR5bmFtaWMgPSB2YWx1ZTtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHJhbmRvbVN0YWNrZWQoKTp2b2lkIHtcclxuXHRcdGxldCB0eXBlcyA9IFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ107XHJcblxyXG5cdFx0dGhpcy5zdGFja2VkID0gW107XHJcblx0XHRsZXQgdG90YWwgPSAwO1xyXG5cdFx0bGV0IG4gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcblx0XHRcdGxldCBpbmRleCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSk7XHJcblx0XHRcdGxldCB2YWx1ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzMCkgKyAxKTtcclxuXHRcdFx0dG90YWwgKz0gdmFsdWU7XHJcblx0XHRcdHRoaXMuc3RhY2tlZC5wdXNoKHtcclxuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXHJcblx0ICAgICAgICBtYXg6IHZhbHVlLCAvLyBpICE9PSAobiAtIDEpID8gdmFsdWUgOiAxMDAsXHJcblx0ICAgICAgICB0eXBlOiB0eXBlc1tpbmRleF1cclxuXHQgICAgfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHQvLyBSYXRpbmdcclxuXHRwdWJsaWMgaG92ZXJpbmdPdmVyKHZhbHVlOm51bWJlcik6dm9pZCB7XHJcblx0XHR0aGlzLm92ZXJTdGFyID0gdmFsdWU7XHJcblx0XHR0aGlzLnBlcmNlbnQgPSAxMDAgKiAodmFsdWUgLyB0aGlzLm1heCk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHJlc2V0U3RhcigpOnZvaWQge1xyXG5cdFx0dGhpcy5vdmVyU3RhciA9IHZvaWQgMDtcclxuXHR9XHJcblx0Ly8gVGFic1xyXG5cdHB1YmxpYyBhbGVydE1lKCk6dm9pZCB7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpOnZvaWQge1xyXG5cdFx0XHRhbGVydCgnWW91XFwndmUgc2VsZWN0ZWQgdGhlIGFsZXJ0IHRhYiEnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBzZXRBY3RpdmVUYWIoaW5kZXg6bnVtYmVyKTp2b2lkIHtcclxuXHRcdHRoaXMudGFic1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgcmVtb3ZlVGFiSGFuZGxlcigvKnRhYjphbnkqLyk6dm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZygnUmVtb3ZlIFRhYiBoYW5kbGVyJyk7XHJcblx0fTtcclxuXHJcblx0Ly8gVHlwZWhlYWRcclxuXHRwdWJsaWMgZ2V0Q29udGV4dCgpOmFueSB7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRBc3luY0RhdGEoY29udGV4dDphbnkpOkZ1bmN0aW9uIHtcclxuXHRcdGlmICh0aGlzLl9wcmV2Q29udGV4dCA9PT0gY29udGV4dCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fY2FjaGU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcHJldkNvbnRleHQgPSBjb250ZXh0O1xyXG5cdFx0bGV0IGY6RnVuY3Rpb24gPSBmdW5jdGlvbiAoKTpQcm9taXNlPHN0cmluZ1tdPiB7XHJcblx0XHRcdGxldCBwOlByb21pc2U8c3RyaW5nW10+ID0gbmV3IFByb21pc2UoKHJlc29sdmU6RnVuY3Rpb24pID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBxdWVyeSA9IG5ldyBSZWdFeHAoY29udGV4dC5hc3luY1NlbGVjdGVkLCAnaWcnKTtcclxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKGNvbnRleHQuc3RhdGVzLmZpbHRlcigoc3RhdGU6YW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBxdWVyeS50ZXN0KHN0YXRlKTtcclxuXHRcdFx0XHRcdH0pKTtcclxuXHRcdFx0XHR9LCAyMDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHA7XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5fY2FjaGUgPSBmO1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoYW5nZVR5cGVhaGVhZExvYWRpbmcoZTpib29sZWFuKTp2b2lkIHtcclxuXHRcdHRoaXMudHlwZWFoZWFkTG9hZGluZyA9IGU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlVHlwZWFoZWFkTm9SZXN1bHRzKGU6Ym9vbGVhbik6dm9pZCB7XHJcblx0XHR0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cyA9IGU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdHlwZWFoZWFkT25TZWxlY3QoZTphbnkpOnZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coYFNlbGVjdGVkIHZhbHVlOiAke2UuaXRlbX1gKTtcclxuXHR9XHJcbn1cclxuIl19
