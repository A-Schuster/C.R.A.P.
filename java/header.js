const header = (page) => {
document.write(`<header>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <div class="row">
      <div class="col mx-auto" id="tagline">
      <h1>C.R.A.P</h1>
      <h2>Certified Repair and Plumbing</h2>
      </div>
    </div>
  </div>
</div>
  <script>${navBar(page)}</script>
<div container>
  <div row>
    <div col>
      <img class="d-none d-md-block" src="pictures/pipe5.png" id="pipe" />
    </div>
  </div>
</div>
</header>`)
}

const navBar = (page) => {
  document.write(`<nav class="navbar navbar-expand-lg navbar-light sticky-top">
  <div class="container">
      <a class="navbar-brand" href="#">  <img src="pictures/Icon.png" width="30" height="30" class="d-inline-block align-top" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li id="home" class="nav-item">
            <a id="homeLink" class="nav-link" href="index.html">Home</a>
          </li>
          <li id="about" class="nav-item">
            <a id="aboutLink" class="nav-link" href="about.html">About Us</a>
          </li>
          <li id="contact" class="nav-item">
            <a id="contactLink" class="nav-link" href="contact.html">Contact Us</a>
          </li>
          <li id="howto" class="nav-item">
            <a id="howtoLink" class="nav-link" href="howto.html">How-To's</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`)
  addActive(page)
}

const addActive = (page) => {
  document.getElementById(page).classList.add('active')
  document.getElementById(page + "Link").setAttribute('href', "#")
}
