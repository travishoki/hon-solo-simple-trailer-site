# Header

HTML:
```html
<div class="header">
    <img class="logo" src="../assets/images/logo.jpg" width="100" height="100" />

    <div class="titles">
        <h1>Solo Trailer</h1>
        <h2>A Star Wars Story (2018)</h2>
    </div>
</div>
```
CSS:
```css
/* Header */
.header {
    padding: 20px;
    font-family: 'starwars';
    overflow: hidden;
}
.header img {
    float: left;
    border: solid 3px #f9de03;
}
.header .titles {
    margin-left: 130px;
}
.header h1,
.header h2 {
    color: #f9de03;
    margin: 0;
}
.header h1 {
    font-size: 30px;
}
.header h2 {
    font-size: 24px;
    margin: 0;
}
```
