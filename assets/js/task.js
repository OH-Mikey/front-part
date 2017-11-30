function TaskModel() {
    var vm = this;
    this.number = ko.observable(10);
    this.events = ko.observableArray([{
        theadOptions: ko.observableArray(),
        theadWins: ko.observableArray(),
        levels: ko.observableArray([{
            options: ko.observableArray(),
            wins: ko.observableArray()
        }]),
    }]);

    this.createEvent = function(index) {
        vm.events.push({
            theadOptions: ko.observableArray([1]),
            theadWins: ko.observableArray([1]),
            levels: ko.observableArray([{
                options: ko.observableArray([1]),
                wins: ko.observableArray([1])
            }])
        });
    };

    this.createLevel = function(index) {
        var currentObj = vm.events()[index()],
            tempWinArray = [],
            tempOptionArray = [];

        for (var i = 0; i < currentObj.theadOptions().length; i++) {
            tempOptionArray.push(currentObj.theadOptions()[i]);
        }
        for (i = 0; i < currentObj.theadWins().length; i++) {
            tempWinArray.push(currentObj.theadWins()[i]);
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
            currentObj.levels()[i].options.push(1);
        }
    };

    this.createWin = function(index) {
        var currentObj = vm.events()[index()];
        currentObj.theadWins.push(1);
        for (var i = 0; i < currentObj.levels().length; i++) {
            currentObj.levels()[i].wins.push(1);
        }
    };

    this.choseNewOption = function(eventId, levelId, optionsId) {
        console.log(eventId(), levelId(), optionsId());
    };

    this.choseNewWin = function(eventId, levelId, winId) {
        console.log(eventId(), levelId(), winId());
    }

}

var _task = document.querySelector('#taskId'),
    task = ko.applyBindings(new TaskModel(), _task);