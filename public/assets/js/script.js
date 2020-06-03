$(document).ready(function () {
  let billName = $('#billName');
  let dueDate = $('#dueDate');
  let amount = $('#amount');

  $('#addBill').on('click', (event) => {
    event.preventDefault();

    // object for new games setting key values equal to user input
    let newBill = {
      title: $('#bill').val().trim(),
      dueDate: $('#due').val().trim(),
      amount: $('#amount').val().trim(),
    //   paid: $('#category-input').val().trim(),
    };

    // post call to add new game(s) to database

    $.post('/api/expenses', newBill)
      .then(function (data) {
        console.log(data);
        // window.location.replace('/all');
      });
  });
});