$(document).ready(function(){
  function newExercise() {
    const a = Math.floor(Math.random() * (100 - 2 + 1)) + 2; // 2 bis 100 inkl.
    const b = Math.floor(Math.random() * (a - 1)) + 1; // 1 <= b < a

    // Insert to DOM
    $('#numA').text(a);
    $('#numB').text(b);

    // Empty answer field
    $('#answer').val('');
  }

  // Generate first exercise
  newExercise();

  // Click handlers

  $('#nextExercise').click(function() {
    newExercise();
  });

  $('#checkAnswer').click(function() {
    const answer = Number($('#answer').val());
    const a = Number($('#numA').text());
    const b = Number($('#numB').text());
    
    if(answer === a - b) {
      // Show confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 }
      });
      console.log('Richtig!');
    } else {
      console.log('Versuche es nochmal.');
    }
  });
});