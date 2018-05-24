function onClickBuyTickets () {
    var buttonElement = document.getElementById('buy-tickets-button');

    buttonElement.innerHTML = 'Purchased!';
    buttonElement.className = "purchased buy-tickets-button";
    buttonElement.disabled = true;
}
