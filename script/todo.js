const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("highp-lane");
const modal = document.getElementById("myModal");
const tasks = document.querySelectorAll(".task");
const span = document.getElementsByClassName("close")[0];
const taskName = document.getElementById("taskName");
const modalTextArea = document.getElementById("info");
const modalCalendar = document.getElementById("calendar");
const textArea = document.querySelector(".info1");
const calendar = document.querySelector("#calendar1");
const highpDiv = document.querySelector(".highp-div");
const lowpDiv = document.querySelector(".lowp-div");

$(document).ready(function () {
    $(".lowp-div").sortable({ connectWith: ".highp-div" });
});

var tasksArray = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = input.value;
    const infoVal = textArea.value;
    const dateVal = calendar.value;


    if (!taskTitle) return;


    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.innerText = taskTitle;

    highpDiv.appendChild(newTask);

    var tasksObj = {
        _id: tasksArray.length + 1,
    }

    tasksArray.push(tasksObj);
    console.log(tasksArray);

    input.value = "";
    textArea.value = "";

    function showModal() {
        modal.style.display = "block";
        taskName.innerHTML = newTask.innerHTML
        modalTextArea.value = infoVal
        modalCalendar.value = dateVal
    };

    newTask.addEventListener("click", showModal);

    $(function () {
        $(".highp-div").sortable({ connectWith: ".lowp-div" });
    });

});

//////////////////////////////////////////////////////////////////////////////

span.onclick = function () {
    modal.style.display = "none";
    textArea.value = "";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/////////////////////////////////////////////////////////////////////////////

const CalendarInput = document.querySelector('#calendar')

$(document).ready(function () {
    const datepickerDOM = $(CalendarInput);
    const dateObject = datepickerDOM.persianDatepicker(
        {
            "inline": false,
            "format": "LLLL",
            "viewMode": "day",
            "initialValue": true,
            "minDate": false,
            "maxDate": false,
            "autoClose": false,
            "position": "auto",
            "altFormat": "lll",
            "altField": "#altfieldExample",
            "onlyTimePicker": false,
            "onlySelectOnDate": false,
            "calendarType": "persian",
            "inputDelay": 800,
            "observer": false,
            "calendar": {
                "persian": {
                    "locale": "fa",
                    "showHint": true,
                    "leapYearMode": "algorithmic"
                },
                "gregorian": {
                    "locale": "en",
                    "showHint": true
                }
            },
            "navigator": {
                "enabled": true,
                "scroll": {
                    "enabled": true
                },
                "text": {
                    "btnNextText": "<",
                    "btnPrevText": ">"
                }
            },
            "toolbox": {
                "enabled": true,
                "calendarSwitch": {
                    "enabled": true,
                    "format": "MMMM"
                },
                "todayButton": {
                    "enabled": true,
                    "text": {
                        "fa": "امروز",
                        "en": "Today"
                    }
                },
                "submitButton": {
                    "enabled": true,
                    "text": {
                        "fa": "تایید",
                        "en": "Submit"
                    }
                },
                "text": {
                    "btnToday": "امروز"
                }
            },
            "timePicker": {
                "enabled": true,
                "step": 1,
                "hour": {
                    "enabled": true,
                    "step": null
                },
                "minute": {
                    "enabled": true,
                    "step": null
                },
                "second": {
                    "enabled": true,
                    "step": null
                },
                "meridian": {
                    "enabled": false
                }
            },
            "dayPicker": {
                "enabled": true,
                "titleFormat": "YYYY MMMM"
            },
            "monthPicker": {
                "enabled": true,
                "titleFormat": "YYYY"
            },
            "yearPicker": {
                "enabled": true,
                "titleFormat": "YYYY"
            },
            "responsive": true,
        });

    const date = dateObject.getState().view;
});

const CalendarInput1 = document.querySelector('#calendar1')

$(document).ready(function () {
    const datepickerDOM = $(CalendarInput1);
    const dateObject = datepickerDOM.persianDatepicker(
        {
            "inline": false,
            "format": "LLLL",
            "viewMode": "day",
            "initialValue": true,
            "minDate": false,
            "maxDate": false,
            "autoClose": false,
            "position": "auto",
            "altFormat": "lll",
            "altField": "#altfieldExample",
            "onlyTimePicker": false,
            "onlySelectOnDate": false,
            "calendarType": "persian",
            "inputDelay": 800,
            "observer": false,
            "calendar": {
                "persian": {
                    "locale": "fa",
                    "showHint": true,
                    "leapYearMode": "algorithmic"
                },
                "gregorian": {
                    "locale": "en",
                    "showHint": true
                }
            },
            "navigator": {
                "enabled": true,
                "scroll": {
                    "enabled": true
                },
                "text": {
                    "btnNextText": "<",
                    "btnPrevText": ">"
                }
            },
            "toolbox": {
                "enabled": true,
                "calendarSwitch": {
                    "enabled": true,
                    "format": "MMMM"
                },
                "todayButton": {
                    "enabled": true,
                    "text": {
                        "fa": "امروز",
                        "en": "Today"
                    }
                },
                "submitButton": {
                    "enabled": true,
                    "text": {
                        "fa": "تایید",
                        "en": "Submit"
                    }
                },
                "text": {
                    "btnToday": "امروز"
                }
            },
            "timePicker": {
                "enabled": true,
                "step": 1,
                "hour": {
                    "enabled": true,
                    "step": null
                },
                "minute": {
                    "enabled": true,
                    "step": null
                },
                "second": {
                    "enabled": true,
                    "step": null
                },
                "meridian": {
                    "enabled": false
                }
            },
            "dayPicker": {
                "enabled": true,
                "titleFormat": "YYYY MMMM"
            },
            "monthPicker": {
                "enabled": true,
                "titleFormat": "YYYY"
            },
            "yearPicker": {
                "enabled": true,
                "titleFormat": "YYYY"
            },
            "responsive": true,
        });

    const date = dateObject.getState().view;
});