function call(){  
        introJs().setOptions({
        showProgress: true,
        steps: [
        {
            title : 'Dashboard',
            element : document.querySelector('#dashboard'),
            intro : 'Click here to view the Dashbaord.'
        },
        {
            title : 'This is the Page button',
            element : document.querySelector('#page'),
            intro : 'You can view all the available pages by clicking on this.'
        },
        {
            title : 'This is the Chart',
            element : document.querySelector('#chart'),
            intro : 'To view the chart click here.'
        },
        {
            title : 'This is table',
            element : document.querySelector('#table'),
            intro : 'For viewing the table you can click here.'
        },
        {
            title : 'This is a Search Bar',
            element : document.querySelector('#search-bar'),
            intro : 'You can search the data from here.'
        },
        {
            title : 'Alert',
            element : document.querySelector('#alertsDropdown'),
            intro : 'Any alert (if any) will be pop here.'
        },
        {
            title : 'Messages',
            element : document.querySelector('#messagesDropdown'),
            intro : 'All the latest notification/messages will be updated here.'
        },
        {
            title : 'User Profile',
            element : document.querySelector('#av'),
            intro : 'Click here for viewing user profile.'
        }

    ]
      }, true).start();
}
//hide-show df icon
var dfchatbot = document.querySelector('.dfchatbot');
var dffloatbutton = document.querySelector('.dffloatbutton');
dfchatbot.hidden = true;

dffloatbutton.addEventListener('click',()=>{
    dfchatbot.hidden = false;
});
