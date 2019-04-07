<template>
  <div id="app">
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <a-card>
          <a-row type="flex" justify="center">
            <router-link to="/sign-in" class="link">Sign in</router-link>
            <router-link to="/sign-up" class="link">Register</router-link>
          </a-row>
        </a-card>
      </a-col>
      <transition name="slide-fade" mode="out-in">
        <router-view class="content"/>
      </transition>
    </a-row>
  </div>
</template>

<style>
.link {
  margin: 0 1rem 0 1rem;
  font-size: 18px;
}

.content {
  margin: 2rem;
  min-width: 100%;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
