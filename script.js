document.getElementById('submit_button').addEventListener('click', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title_input').value;
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    
    if (!title || !noun || !verb || !adjective) {
        alert('Please fill in all fields.');
        return;
      }

    const story = `Last night I ate a ${noun}, and today I just had to ${verb} what a ${adjective} day .`;
    
    document.getElementById('main_title').textContent = title;
    document.getElementById('story_result').textContent = story;
  });