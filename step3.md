# Navigation

HTML:
```html
<div class="navigation">
    <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="https://www.imdb.com/title/tt3778644/fullcredits">Full Cast &amp; Crew</a>
        </li>
        <li>
            <a href="https://www.imdb.com/videoplayer/vi1926805529">Teaser</a>
        </li>
        <li>
            <a href="https://www.imdb.com/title/tt3778644/trivia/">Trivia</a>
        </li>
        <li>
            <a href="https://www.imdb.com/title/tt3778644/characters/nm2403277">Alden Ehrenreich as Honsolo</a>
        </li>
        <li>
            <a href="https://www.imdb.com/title/tt3778644/releaseinfo">Release Date</a>
        </li>
    </ul>
</div>
```
CSS:
```css
/* Navigation */
.navigation {
    overflow: hidden;
    background: #111111;
}
.navigation ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.navigation ul li {
    border-right: solid 2px #000000;
    float: left;
    padding: 10px 20px;
}
.navigation ul li:hover {
    background: #000000;
}
.navigation ul li a {
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
}
```
