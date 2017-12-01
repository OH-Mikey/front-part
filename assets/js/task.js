function TaskModel() {
    var vm = this;
    this.number = ko.observable(10);
    this.events = ko.observableArray();

    this.createEvent = function(index) {
        vm.events.push({
            theadOptions: ko.observableArray([1]),
            theadWins: ko.observableArray([1]),
            levels: ko.observableArray([{
                options: ko.observableArray([ko.observable({
                    type: '?'
                })]),
                wins: ko.observableArray([ko.observable({
                    type: '?'
                })])
            }])
        });
    };

    this.createLevel = function(index) {
        var currentObj = vm.events()[index()],
            tempWinArray = [],
            tempOptionArray = [];

        for (var i = 0; i < currentObj.theadOptions().length; i++) {
            tempOptionArray.push(ko.observable({
                type: '?'
            }));
        }
        for (i = 0; i < currentObj.theadWins().length; i++) {
            tempOptionArray.push(ko.observable({
                type: '?'
            }));
        }

        currentObj.levels.push({
            options: ko.observableArray(tempOptionArray),
            wins: ko.observableArray(tempWinArray)
        });
    };

    this.createOption = function(index) {
        var currentObj = vm.events()[index()];
        currentObj.theadOptions.push(1);
        for (var i = 0; i < currentObj.levels().length; i++) {
            currentObj.levels()[i].options.push(ko.observable({
                type: '?',
                value: '300'
            }));
        }
    };

    this.createWin = function(index) {
        var currentObj = vm.events()[index()];
        currentObj.theadWins.push(1);
        for (var i = 0; i < currentObj.levels().length; i++) {
            currentObj.levels()[i].wins.push(ko.observable({
                type: '?',
                value: 123
            }));
        }
    };

    this.choseNewOption = function(eventId, levelId, optionsId) {
        var currentOption = vm.events()[eventId()].levels()[levelId()].options()[optionsId()];
        console.log(currentOption());
        currentOption({
            type: 'changed! Option'
        });
        console.log(currentOption());
        $('.ui.basic.modal')
            .modal('show');
    };

    this.choseNewWin = function(eventId, levelId, winId) {
        var currentWin = vm.events()[eventId()].levels()[levelId()].wins()[winId()];
        console.log(currentWin());
        currentWin({
            type: 'changed! Win'
        });
        console.log(currentWin());
        $('.ui.basic.modal')
            .modal('show');
    };

    this.createEvent();

}

var _task = document.querySelector('#taskId'),
    task = ko.applyBindings(new TaskModel(), _task);

document.addEventListener("DOMContentLoaded", function() {
    $('.ui.styled.accordion').accordion({
        selector: {
            trigger: '.title'
        }
    });
});