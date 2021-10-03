<template>
<header class="header">
    <div class="header__inner container">
      <router-link :to="{name:'MainPage'}" class="logo">
        <img src="@/assets/images/demo-shina-logo.png" alt="Логотип сайта" class="logo__img">
      </router-link>
      <nav class="haeder__menu">
        <button class="header__menu-btn" @click="menuOpened=!menuOpened">
          <span class="header__btn-span"></span>
        </button>
        <ul :class="['menu', {active:menuOpened}]" >
          <li class="menu__item">
            <router-link :to="{name:'CatalogTires'}" class="menu__link" @click.native="menuOpened=false">
              Каталог Шин
              </router-link>
          </li>
          <li class="menu__item">
            <router-link :to="{name:'CatalogWheels'}" class="menu__link" @click.native="menuOpened=false">
              Каталог Дисков
              </router-link>
          </li>
          <li class="menu__item">
            <router-link :to="{name:'Delivery'}" class="menu__link" @click.native="menuOpened=false">
              Доставка и оплата
              </router-link>
          </li>
          <li class="menu__item">
            <router-link :to="{name:'Contacts'}" class="menu__link" @click.native="menuOpened=false">
              Контакты
              </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: 'TheHeader',
  data: () => ({
    menuOpened: false
  })
}

</script>

<style scoped lang="scss">
.header {
  padding: 8px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: black;
  height: 95px;

  &--bg {
    background-color: black;
    padding-bottom: 150px;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
      display: flex;
    @media(max-width:1160px) {
      position: absolute;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: 0;
      top: 90px;
      right: 0;
      padding: 20px 0;
      background-color: rgba(255, 255, 255, 0.9);
      z-index: -5;
      opacity: 0;
      transform: translateY(-500px);
      transition: .3s;
    }

    &.active {
      z-index: 999;
      opacity: 1;
      transform: translateY(0);
    }

    &__item {

      &:not(:last-child) {
         margin-right: 45px;
        @media(max-width:1160px) {
          margin: 10px 0;
        }
      }

      @media(max-width:1160px) {
        margin: 10px 0;
      }
    }

    &__link {
      color: white;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: .3s;
    padding: 0 8px 4px;
    letter-spacing: 1.2px;

      @media(max-width:1160px) {
        color: black;
        display: block;
        padding: 15px 0;
        text-align: center;
      }

      &:hover {
      border-color: white;
    }
    }
  }

  &__menu-btn {
    border: none;
    background: none;
    display: none;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 50px;
    height: 40px;
    padding: 0;

    @media(max-width:1160px) {
      display: flex;
    }
  }

  &__btn-span {
    height: 4px;
    width: 100%;
    background-color: white;

    &::after,
    &::before {
      position: absolute;
      content: '';
      width: 50px;
      height: 4px;
      left: 0;
      background-color: white;
    }

    &::after {
      top: 0;
    }

    &::before {
      bottom: 0;
    }
  }
}
.logo {
  &__img {
    max-width: 200px;
  }
}
</style>
