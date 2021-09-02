<template>
    <footer class="footer">
        <div class="footer__content container">
            <ul class="menu" id="menu">
                <li class="menu__item">
                    <router-link :to="{name:'CatalogTires'}"
                    class="menu__link" onclick="openMenu()">
                        Каталог Шин
                    </router-link>
                </li>
                <li class="menu__item">
                    <router-link :to="{name:'CatalogWheels'}"
                    class="menu__link" onclick="openMenu()">
                        Каталог Дисков
                    </router-link>
                </li>
                <li class="menu__item">
                    <router-link :to="{name:'Delivery'}" class="menu__link" onclick="openMenu()">
                        Доставка и оплата
                    </router-link>
                </li>
                <li class="menu__item">
                    <router-link :to="{name:'Contacts'}" class="menu__link" onclick="openMenu()">
                        Контакты
                    </router-link>
                </li>
            </ul>
            <div class="footer__contact">
                <a href="tel+380935417781" class="contact__tel">Тел: 0935417781 Сергей</a>
                <ul class="contact__social">
                    <li class="contact__item">
                        <a href="#" class="contact__link">
                                        <img src="../assets/images/viber.svg"
                                        alt="" class="contact__img">
                                    </a>
                    </li>
                    <li class="contact__item">
                        <a href="#" class="contact__link">
                                        <img src="../assets/images/telegram.svg"
                                        alt="" class="contact__img">
                                    </a>
                    </li>
                    <li class="contact__item">
                        <a href="#" class="contact__link">
                                        <img src="../assets/images/facebook.svg"
                                        alt="" class="contact__img">
                                    </a>
                    </li>
                    <li class="contact__item">
                        <a href="#" class="contact__link">
                                        <img src="../assets/images/instagram.svg"
                                        alt="" class="contact__img">
                                    </a>
                    </li>
                </ul>
            </div>
            <div class="footer__address">
                Жевахова гора 1, Об'їзна дорога, Авторынок Куяльник
                (Яма) контейнер № 90 № 91 № 92, Одеса, Одеська область
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style lang="scss" scoped>
.footer {
    background-color: black;
    &__content {
        background-image: url('../assets/images/header-bg.jpg');
        background-repeat: no-repeat;
        background-position: right bottom;
        background-size: contain;
        padding: 30px 15px;
        @media(max-width: 850px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: flex-start;
        }
    }
      .menu {
        display: flex;
        margin-bottom: 30px;
        @media(max-width: 850px) {
            flex-direction: column;
            max-width: 50%;
        }
        @media(max-width:600px) {
            max-width: 100%;
            width: 100%;
            text-align: center;
        }
        .menu__item {
            &:not(:last-child) {
                margin-right: 45px;
                @media(max-width: 850px) {
                    margin-right: 0;
                }
            }
            @media(max-width:850px) {
                margin-right: 0;
                margin-bottom: 30px;
            }
            @media(max-width:600px) {
                margin: 0 0 30px 0;
            }
        }
        .menu__link {
            color: white;
            font-weight: bold;
            border-bottom: 2px solid transparent;
            transition: .3s;
            padding: 0 8px 4px;
            letter-spacing: 1.2px;
            &:hover {
                border-color: white;
            }
            @media(max-width:600px) {
                display: block;
                text-align: center;
                max-width: 100%;
                padding: 10px 0;
            }
        }
    }
    &__contact {
        display: flex;
        justify-content: center;
        max-width: 800px;
        @media(max-width: 850px) {
            flex-direction: column;
        }
        .contact__tel {
            color: white;
            margin-right: 150px;
            @media(max-width: 850px) {
                margin-right: 0;
                text-align: center;
                margin-bottom: 30px;
            }
        }
    }
    &__address {
        color: white;
        max-width: 800px;
        text-align: center;
    }
}

.contact {
    &__social {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
    }
    &__item:not(:last-child) {
        margin-right: 30px;
    }
    &__link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    &__link img {
        width: 30px;
        height: 30px;
    }
}
</style>
