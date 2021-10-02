<template>
    <main class="contact">
      <Brands class="brands--bg"/>
      <div class="contact__inner container">
        <h2 class="contact__title title">Контакты</h2>
        <div class="contact__content">
            <address class="contact__info">
                <p class="contact__work-time">Режим Работы: ежедневно с 8 до 16</p>
                <a href="tel+380935417781" class="contact__tel">Тел: 0935417781 Сергей</a>
                <ul class="contact__social">
                    <li class="contact__item">
                        <a href="#" class="contact__link">
                            <img src="../assets/images/viber.svg" alt="" class="contact__img" />
                        </a>
                    </li>
                    <li class="contact__item">
                        <a href="#" class="contact__link">
                            <img src="../assets/images/telegram.svg" alt="" class="contact__img" />
                        </a>
                    </li>
                    <li class="contact__item">
                        <a href="#" class="contact__link">
                            <img src="../assets/images/facebook.svg" alt="" class="contact__img" />
                        </a>
                    </li>
                    <li class="contact__item">
                        <a href="#" class="contact__link">
                            <img src="../assets/images/instagram.svg" alt="" class="contact__img" />
                        </a>
                    </li>
                </ul>
                <p class="contact__address">Жевахова гора 1, Об'їзна дорога, Авторынок Куяльник
                    (Яма) контейнер № 90 № 91 № 92, Одеса, Одеська
                    область</p>
            </address>
            <div class="contact__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.775511851866!2d30.71812958369148!3d46.55656769739113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c62562db241d43%3A0x7ea6f12c360468e9!2z0JDQstGC0L7RgNGL0L3QvtC6ICLQr9C80LAi!5e0!3m2!1sru!2sua!4v1629637112171!5m2!1sru!2sua"
                    width="100%" height="400"
                    style="border: 2px solid black; border-radius: 8px;" allowfullscreen=""
                    loading="lazy"></iframe>
            </div>
        </div>
      </div>
    </main>
</template>

<script>
import Brands from '../components/Brands.vue'
export default {
  name: 'ContactsPage',
  components: {
    Brands
  }
}
</script>

<style lang="scss" scoped>
.contact {
  margin-bottom: 70px;
  width: 100%;
  &__title {
    margin-bottom: 30px;
  }
  &__content {
    display: flex;
    @media(max-width:850px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-right: 24px;
    @media(max-width:850px) {
      align-items: center;
      margin-right:0;
      margin-bottom: 30px;
    }
  }
  &__work-time {
    font-style: normal;
    font-weight: bold;
    margin-bottom: 24px;
  }
  &__tel {
    font-style: normal;
    color: black;
    letter-spacing: 1.2px;
    margin-bottom: 24px;
  }
  &__social {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media(max-width: 850px) {
         width: 100%;
         justify-content: space-around;
        }
  }
  &__item {
   &:not(:last-child) {
      margin-right: 30px;
      @media(max-width: 850px) {
        margin-right: 0;
        }
     }
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
  &__address {
    font-style: normal;
    font-weight: bold;
    max-width: 460px;
  }
  &__map {
    max-width: 50%;
    width: 100%;
    @media(max-width:850px) {
      max-width: 100%;
    }
  }
}
</style>
