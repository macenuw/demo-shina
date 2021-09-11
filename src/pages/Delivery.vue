<template>
    <main class="delivery">
        <Brands class="brands--bg"/>
        <div class="delivery__inner container">
        <h2 class="delivery__title title">
            Доставка и оплата
        </h2>
        <div class="delivery__content">
            <h3 class="delivery__subtitle">В Одессе</h3>
            <p class="delivery__text">
              Шины можно выбрать, проверить и забрать в магазине по адресу:
               Жевахова гора 1, Объездная дорога, Авторынок Куяльник
               (Яма) контейнер № 90 № 91 № 92, Одеса, Одеська область
            </p>
            <div class="delivery__payment">
                <span class="delivery__payment-subtitle">Способы оплаты:</span>
                <ul class="delivery__list">
                    <li class="delivery__item">Наличный расчет;</li>
                    <li class="delivery__item">Оплата картой Visa или MasterCard;</li>
                    <li class="delivery__item">Оплата через Приват24;</li>
                    <li class="delivery__item">
                      Покупка в кредит по программе «мгновенная рассрочка».
                      </li>
                </ul>
            </div>
            <h3 class="delivery__subtitle">Доставка по Украине</h3>
            <p class="delivery__text">
                В другие города отправляем перевозчиками Новая Почта или Интайм.
                Стоимость доставки оплачивает получатель.
                Срок доставки определяет компания перевозчик,
                в среднем это занимает 1-3 рабочих дня.
            </p>
        </div>
        </div>
    </main>
</template>

<script>
import Brands from '../components/Brands.vue'

export default {
  name: 'Delivery',
  components: {
    Brands
  }
}
</script>

<style lang="scss" scoped>
.delivery {
    &__subtitle {
        margin-bottom: 30px;
    }
    &__text {
        margin-bottom: 30px;
        max-width: 800px;
    }
    &__payment {
        margin-bottom: 30px;
    }
    &__payment-subtitle {
        display: block;
        font-weight: bold;
        margin-bottom: 30px;
    }
    &__list {
        list-style: disc !important;
        padding-left: 30px;
    }
}
</style>
