var Script = function () {


    /* initialize the external events
     -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function() {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /* initialize the calendar
     -----------------------------------------------------------------*/

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        },
        events: [
            {
                title: 'Entrainement',
                start: new Date(y, m, 1),
                end: new Date(y, m, 2)
            },
            {
                id: 999,
                title: 'Preparation',
                start: new Date(y, m, 3)
            },
            {
                title: 'Match',
                start: new Date(y, m, 4)
            },
            {
                title: 'RDV',
                start: new Date(y, m, 5)
            },
            {
                id: 999,
                title: 'Trève Internationnal',
                start: new Date(y, m, 6),
                end: new Date(y, m, 13)
            },
            {
                title: 'Ranking',
                start: new Date(y, m, 14)
            },
            {
                title: 'Perf',
                start: new Date(y, m, 15)
            },
            {
                id: 999,
                title: 'Preparation',
                start: new Date(y, m, 18)
            },
            {
                title: 'Match',
                start: new Date(y, m, 19)
            },
            {
                title: 'Perf',
                start: new Date(y, m, 21)
            },
            {
                title: 'RDV',
                start: new Date(y, m, 27)
            },
            {
                title: 'Entrainement',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
            },
            {
                id: 999,
                title: 'Preparation',
                start: new Date(y, m, 30)
            },
            {
                title: 'Match',
                start: new Date(y, m, 31)
            }
        ]
    });


}();