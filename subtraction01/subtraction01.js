$(document).ready(function(){
  function newExercise() {
    const a = Math.floor(Math.random() * (100 - 2 + 1)) + 2; // 2 bis 100 inkl.
    const b = Math.floor(Math.random() * (a - 1)) + 1; // 1 <= b < a

    $('#numA').text(a);
    $('#numB').text(b);
    $('#answer').val('');
    $('#feedback').removeClass('show success error').text('');
  }

  // Generate first exercise
  newExercise();

  // Click handlers

  $('#nextExercise').click(function() {
    newExercise();
  });

  $('#checkAnswer').click(function() {
    const answerStr = $('#answer').val().trim();

    if(answerStr === "") {
      $('#feedback').removeClass('show success error').text('');
      return;
    }

    const answer = Number(answerStr);
    const a = Number($('#numA').text());
    const b = Number($('#numB').text());
    
    if(answer === a - b) {
      // Show confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 }
      });

      const message = getRandomSuccessMessage();
      $('#feedback').removeClass('error').addClass('success show').text(message);
    } else {
      $('#feedback').removeClass('success').addClass('error show').text("Versuche es nochmal!");
    }
  });
});