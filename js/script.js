jQuery(document).ready(function($){
    $('form').on('submit', function(event){
        //If user doesn't enter a task, event wont occur as normal.
        event.preventDefault();
        
        const task = $('#taskSubmit').val();
        const error = [];
        //Check if user entered any text
        //If user did not enter text, invalid[0] = 'Task'
        if(!task){
            error.push('Task');
        }
        //if invalid[0] = true, set alert to warning alert bar
        if(error.length > 0) {
            const alerts = error.map(function(errorTask){
                return `<div class="alert alert-danger" role="alert">
                ${errorTask} is empty!
              </div>`;
              
            });
            //prepend alert bar
            $('#tasks').prepend(alerts);
            
            return;
        } 
        //if invalid is null, or if the task was succesfully added, prepend the task top the screen
        $('#tasks').prepend(`<p id="tasks"> Your task: <b>"${task}"</b> has been added </p>`);
        
        console.log(task);

    });
});
