# Call To Action

HTML:
```html
<button onClick="onClickBuyTickets()" id="buy-tickets-button" class="buy-tickets-button cta">Buy Tickets</button>
```
CSS:
```css
/* Call To Action */
.buy-tickets-button {
    border-radius: 10px;
    color: #ffffff;
    display: block;
    font-size: 30px;
    font-weight: bold;
    margin: 0 auto;
    padding: 10px 20px;
    width: 400px;
}
.buy-tickets-button.cta {
    background: #ff0000;
}
.buy-tickets-button.cta:hover {
    background: #dd0000;
    cursor: pointer;
}
.buy-tickets-button.purchased {
    background: #00ff00;
}
```
JavaScript:
```javascript
function onClickBuyTickets () {
    var buttonElement = document.getElementById('buy-tickets-button');

    buttonElement.innerHTML = 'Purchased!';
    buttonElement.className = "purchased buy-tickets-button";
    buttonElement.disabled = true;
}
```
