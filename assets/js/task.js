function TaskModel() {
    vm = this;
    this.number = ko.observable(10);
    this.events = ko.observableArray();
    this.optionsForm = ko.observableArray([{
        name: ko.observable('賺'),
        className: 'win',
        key: ko.observable('win'),
        numberValue: ko.observable(0),
        updateValue: function(input, event) {
            vm.currentSelectOption({
                type: input.name(),
                key: input.key(),
                number: input.numberValue()
            });
        },
        toggle: function(input, event) {
            var container = event.currentTarget.parentNode,
                childPart = container.querySelector('.child_class');
            vm.choseAndRemoveClass(container);
            vm.currentSelectOption({
                type: input.name(),
                key: input.key(),
                number: input.numberValue()
            });
        },
        children: ko.observableArray([{
            name: ko.observable('電子遊戲'),
            key: ko.observable('win_game'),
            numberValue: ko.observable(0),
            updateValue: function(input, event) {
                vm.currentSelectOption({
                    type: input.name(),
                    key: input.key(),
                    number: input.numberValue()
                });
            },
            toggle: function(input, event) {
                var container = event.currentTarget.parentNode,
                    childPart = container.querySelector('.child_class');
                vm.choseAndRemoveClass(container);
                vm.currentSelectOption({
                    type: input.name(),
                    key: input.key(),
                    number: input.numberValue()
                });
            },
            children: ko.observableArray([{
                name: ko.observable('fish'),
                key: ko.observable('win_game_fish'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
            }, {
                name: ko.observable('鋼鐵人'),
                key: ko.observable('win_game_鋼鐵人'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                }
            }, {
                name: ko.observable('其他1'),
                key: ko.observable('win_game_其他1'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                }
            }])
        }, {
            name: ko.observable('彩票系統'),
            key: ko.observable('win_lottery'),
            numberValue: ko.observable(0),
            updateValue: function(input, event) {
                vm.currentSelectOption({
                    type: input.name(),
                    key: input.key(),
                    number: input.numberValue()
                });
            },
            toggle: function(input, event) {
                var container = event.currentTarget.parentNode,
                    childPart = container.querySelector('.child_class');
                vm.choseAndRemoveClass(container);
                vm.currentSelectOption({
                    type: input.name(),
                    key: input.key(),
                    number: input.numberValue()
                });
            },
            children: ko.observableArray([{
                name: ko.observable('六合彩'),
                key: ko.observable('win_lottery_六合彩'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
            }, {
                name: ko.observable('11選11'),
                key: ko.observable('win_lottery_11選11'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                }
            }])
        }])
    }, {
        name: ko.observable('賠'),
        className: 'lose',
        key: ko.observable('lose'),
        numberValue: ko.observable(0),
        updateValue: function(input, event) {
            vm.currentSelectOption({
                type: input.name(),
                key: input.key(),
                number: input.numberValue()
            });
        },
        toggle: function(input, event) {
            var container = event.currentTarget.parentNode,
                childPart = container.querySelector('.child_class');
            vm.choseAndRemoveClass(container);
            vm.currentSelectOption({
                type: input.name(),
                key: input.key(),
                number: input.numberValue()
            });
        },
        children: ko.observableArray([{
            name: ko.observable('電子遊戲'),
            key: ko.observable('lose_game'),
            numberValue: ko.observable(0),
            updateValue: function(input, event) {
                vm.currentSelectOption({
                    type: input.name(),
                    key: input.key(),
                    number: input.numberValue()
                });
            },
            toggle: function(input, event) {
                var container = event.currentTarget.parentNode,
                    childPart = container.querySelector('.child_class');
                vm.choseAndRemoveClass(container);
                vm.currentSelectOption({
                    type: input.name(),
                    key: input.key(),
                    number: input.numberValue()
                });
            },
            children: ko.observableArray([{
                name: ko.observable('fish'),
                key: ko.observable('lose_game_fish'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
            }, {
                name: ko.observable('鋼鐵人'),
                key: ko.observable('lose_game_鋼鐵人'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                }
            }, {
                name: ko.observable('其他1'),
                key: ko.observable('lose_game_其他1'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                }
            }])
        }, {
            name: ko.observable('彩票系統'),
            key: ko.observable('lose_lottery'),
            numberValue: ko.observable(0),
            updateValue: function(input, event) {
                vm.currentSelectOption({
                    type: input.name(),
                    key: input.key(),
                    number: input.numberValue()
                });
            },
            toggle: function(input, event) {
                var container = event.currentTarget.parentNode,
                    childPart = container.querySelector('.child_class');
                vm.choseAndRemoveClass(container);
                vm.currentSelectOption({
                    type: input.name(),
                    key: input.key(),
                    number: input.numberValue()
                });
            },
            children: ko.observableArray([{
                name: ko.observable('六合彩'),
                key: ko.observable('lose_lottery_六合彩'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
            }, {
                name: ko.observable('11選11'),
                key: ko.observable('lose_lottery_11選11'),
                numberValue: ko.observable(0),
                updateValue: function(input, event) {
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                },
                toggle: function(input, event) {
                    var container = event.currentTarget.parentNode,
                        childPart = container.querySelector('.child_class');
                    vm.choseAndRemoveClass(container);
                    vm.currentSelectOption({
                        type: input.name(),
                        key: input.key(),
                        number: input.numberValue()
                    });
                }
            }])
        }])
    }]);

    this.fullMaskShow = ko.observable(false);

    this.currentEventId = ko.observable();
    this.currentLevelId = ko.observable();
    this.currentOptionId = ko.observable();
    this.currentWinId = ko.observable();

    this.currentSelectOption = ko.observable();
    this.currentSelectWin = ko.observable();

    this.createEvent = function(index) {
        vm.events.push({
            theadOptions: ko.observableArray([1]),
            theadWins: ko.observableArray([1]),
            levels: ko.observableArray([{
                options: ko.observableArray([ko.observable({
                    number: ko.observable(),
                    type: '?'
                })]),
                wins: ko.observableArray([ko.observable({
                    number: ko.observable(),
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
                number: ko.observable(),
                type: '?'
            }));
        }
        for (i = 0; i < currentObj.theadWins().length; i++) {
            tempOptionArray.push(ko.observable({
                number: ko.observable(),
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
                number: ko.observable(),
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
                number: ko.observable(),
                type: '?',
                value: 123
            }));
        }
    };

    this.choseNewOption = function(eventId, levelId, optionsId) {
        vm.currentEventId(eventId());
        vm.currentLevelId(levelId());
        vm.currentOptionId(optionsId());

        vm.fullMaskShow(true);
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
        vm.currentSelectOption({
            type: input.name(),
            key: input.key(),
            number: input.numberValue()
        });
    };

    this.choseAndRemoveClass = function(container) {
        var containers = document.querySelectorAll('.child_container');
        [].forEach.call(containers, function(item, index) {
            item.classList.remove('chosed');
        });
        container.classList.add('chosed');
    };

    this.choseOption = function() {
        var eventId = vm.currentEventId(),
            levelId = vm.currentLevelId(),
            optionId = vm.currentOptionId();

        var currentOption = vm.events()[eventId].levels()[levelId].options()[optionId];
        currentOption(vm.currentSelectOption());

        vm.fullMaskShow(false);
        vm.resetCurrentIDsAndSelected();
    };

    this.cancelChoseOption = function() {
        this.fullMaskShow(false);
    };

    this.resetCurrentIDsAndSelected  = function() {
        return;
        this.currentEventId(null);
        this.currentLevelId(null);
        this.currentOptionId(null);
        this.currentWinId(null);

        this.currentSelectOption(null);
        this.currentSelectWin(null);
    };

    this.createEvent();
}

var _task = document.querySelector('#taskId'),
    task = ko.applyBindings(new TaskModel(), _task);