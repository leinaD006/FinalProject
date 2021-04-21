<template>
<div>
  <div id="app">
    <header id="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/"><i class="nav-link"></i>Book Reads</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/"><i class="nav-link"></i>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/userpage"><i class="nav-link"></i>Post</router-link>
                </li>
            </ul>
        </div>
    </nav>
      <!-- <nav>
        
        <router-link to="/"><i class=""></i>Home</router-link>
        <router-link to="/userpage"><i class=""></i>Post</router-link>
      </nav> -->
    </header>
    <router-view />
  </div>
  <div class="footer">
    <a href="https://github.com/leinaD006/FinalProject">github</a>
    <p>5 hours</p>
  </div>
</div>
  
</template>

<style>
.navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
}

#header a {
  font-size: 25px;
  color: #000;
}

.nav-link {
    color: white !important;
}
.nav-item {
    font-size: 20px;
    padding-left: 20px;
}

.navbar-brand {
    font-size: 30px !important;
    padding-left: 20px;
}

.bg-dark {
    background-color: #2eb96d !important;
  }

@media only screen and (min-width: 961px) {
    .navbar-expand-lg .navbar-collapse {
        justify-content: flex-end;
    }
    .nav-link {
        font-size: 30px;
        font-family: 'Caveat', cursive;
    }
    .nav-item {
        padding-left: 20px;
    }
    .navbar-brand {
        font-size: 40px !important;
        font-family: 'Caveat', cursive;
        padding-left: 40px;
    }
}

/* Footer */
.footer {
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20px;
  background: #e3e3e3;
  font-size: 12px;
  margin-top: 50px;
  bottom: 0px;
  left: 0px;
}

.footer a {
  color: #000;
}
</style>
