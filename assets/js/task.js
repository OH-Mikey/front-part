function TaskModel() {
    var vm = this;
    this.number = ko.observable(10);
    this.events = ko.observableArray();
    this.optionsForm = ko.observableArray([{
        name: ko.observable('賺'),
        className: 'win',
        key: ko.observable('win'),
        toggle: function(input, event) {
            var container = event.currentTarget.parentNode,
                childPart = container.querySelector('.child_class');
            vm.choseAndRemoveClass(container);
        },
        children: ko.observableArray([{
            name: ko.observable('電子遊戲'),
            key: ko.observable('win_game'),
            toggle: function(input, event) {
                var container = event.currentTarget.parentNode,
                    childPart = container.querySelector('.child_class');
                vm.choseAndRemoveClass(container);
            },
            children: ko.observableArray([{
                name: ko.observable('fish'),
                key: ko.observable('win_game_fish'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                },
            }, {
                name: ko.observable('鋼鐵人'),
                key: ko.observable('win_game_鋼鐵人'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                }
            }, {
                name: ko.observable('其他1'),
                key: ko.observable('win_game_其他1'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                }
            }])
        }, {
            name: ko.observable('彩票系統'),
            key: ko.observable('win_lottery'),
            toggle: function(input, event) {
                var container = event.currentTarget.parentNode,
                    childPart = container.querySelector('.child_class');
                vm.choseAndRemoveClass(container);
            },
            children: ko.observableArray([{
                name: ko.observable('六合彩'),
                key: ko.observable('win_lottery_六合彩'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                },
            }, {
                name: ko.observable('11選11'),
                key: ko.observable('win_lottery_11選11'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                }
            }])
        }])
    }, {
        name: ko.observable('賠'),
        className: 'lose',
        key: ko.observable('lose'),
        toggle: function(input, event) {
            var container = event.currentTarget.parentNode,
                childPart = container.querySelector('.child_class');
            vm.choseAndRemoveClass(container);
        },
        children: ko.observableArray([{
            name: ko.observable('電子遊戲'),
            key: ko.observable('lose_game'),
            toggle: function(input, event) {
                var container = event.currentTarget.parentNode,
                    childPart = container.querySelector('.child_class');
                vm.choseAndRemoveClass(container);
            },
            children: ko.observableArray([{
                name: ko.observable('fish'),
                key: ko.observable('lose_game_fish'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                },
            }, {
                name: ko.observable('鋼鐵人'),
                key: ko.observable('lose_game_鋼鐵人'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                }
            }, {
                name: ko.observable('其他1'),
                key: ko.observable('lose_game_其他1'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                }
            }])
        }, {
            name: ko.observable('彩票系統'),
            key: ko.observable('lose_lottery'),
            toggle: function(input, event) {
                var container = event.currentTarget.parentNode,
                    childPart = container.querySelector('.child_class');
                vm.choseAndRemoveClass(container);
            },
            children: ko.observableArray([{
                name: ko.observable('六合彩'),
                key: ko.observable('lose_lottery_六合彩'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                },
            }, {
                name: ko.observable('11選11'),
                key: ko.observable('lose_lottery_11選11'),
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                }
            }])
        }])
    }]);

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
        var currentOption = vm.events()[eventId()].levels()[levelId()].options()[optionsId()],
            container,
            childPart = container.querySelector('.child_class');
        vm.choseAndRemoveClass(container);
        currentOption({
            type: 'changed! Option'
        });
    };

    this.choseNewWin = function(eventId, levelId, winId) {
        var currentWin = vm.events()[eventId()].levels()[levelId()].wins()[winId()],
            container,
            childPart = container.querySelector('.child_class');
        vm.choseAndRemoveClass(container);
        currentWin({
            type: 'changed! Win'
        });
    };

    this.toggleGreatLevel = function(input, event) {
        var container,
            childPart = container.querySelector('.child_class');
        vm.choseAndRemoveClass(container);
    };

    this.choseAndRemoveClass = function(container) {
        var containers = document.querySelectorAll('.child_container');
        [].forEach.call(containers, function(item, index) {
            item.classList.remove('chosed');
        });
        container.classList.add('chosed');
    };

    this.createEvent();
}

var _task = document.querySelector('#taskId'),
    task = ko.applyBindings(new TaskModel(), _task);