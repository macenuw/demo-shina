<template>
    <router-link :to="{name: 'ProductPage', params: { id: card.id }}" class="product-card">
        <div class="product-card__img-inner" v-if="card">
            <img :src="imageUrl"
            :alt="imageAlt" class="product-card__img">
            <span class="product-card__brand">{{card.brand}}</span>
        </div>
        <div class="product-card__info">
            <h3 class="product-card__name">{{card.brand}} {{card.model}}</h3>
            <div class="product-card__top-info">
                <span class="product-card__reit">Состояние {{card.condition}}</span>
                <span class="product-card__number">Код товара: {{card.id}}</span>
            </div>
            <ul class="product-card__info-list">
                <li class="product-card__info-item product-card__info-item--radius">
                    <span class="product-card__category">Радиус</span>
                    <span class="product-card__category-info">R{{card.radius}}</span>
                </li>
                <li class="product-card__info-item product-card__info-item--width">
                    <span class="product-card__category">Ширина</span>
                    <span class="product-card__category-info">{{card.width}}</span>
                </li>
                <li class="product-card__info-item product-card__info-item--amount">
                    <span class="product-card__category">Колличество</span>
                    <span class="product-card__category-info">{{card.amount}}шт</span>
                </li>
                <li class="product-card__info-item product-card__info-item--bolt-pattern">
                    <span class="product-card__category">Разболтовка</span>
                    <span class="product-card__category-info">{{card.bolt}}</span>
                </li>
            </ul>
            <div class="product-card__price-inner">
                <span class="product-card__price-text">Цена за шт.</span>
                <span class="product-card__price">{{card.price}}грн.</span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
  name: 'ProductCardWheel',
  props: ['card'],
  computed: {
    imageUrl () {
      const {
        brand, radius, width, id
      } = this.card
      return `/images/wheels/${brand}-${radius}-${width}-${id}-1.jpg`
    },
    imageAlt () {
      const {
        brand, model, radius, width
      } = this.card
      return `Диски ${brand} ${model} R${radius}/${width}`
    }
  }
}
</script>

<style lang="scss">
.product-card {
    border: 1px solid black;
    background-color: white;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    max-width: 650px;
    color: black;
    box-shadow: 20px 15px 100px rgba(0, 0, 0, 0.25);
    @media(max-width: 1160px) {
        margin: 0 auto;
        max-width: 70%;
        width: 100%;
    }
    @media(max-width:850px) {
        max-width: 100%;
    }
    @media(max-width:600px) {
        flex-direction: column;
    }
    &__img-inner {
        position: relative;
        max-width: 300px;
        width: 100%;
        height: 400px;
        @media(max-width: 600px) {
            max-width: 100%;
        }
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
    &__brand {
        position: absolute;
        top: 10px;
        left: 16px;
        color: white;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 4px 12px;
        border-radius: 4px;
        font-size: 16px;
    }
    &__info {
        display: flex;
        flex-direction: column;
        padding: 8px 8px 8px 16px;
        width: 100%;
        @media(max-width: 600px) {
           padding: 16px 0 8px;
        }
    }
    &__name {
        font-size: 22px;
        text-align: center;
        margin-bottom: 8px;
    }
    &__top-info {
        display: flex;
        justify-content: space-between;
        @media(max-width: 600px) {
            margin-bottom: 30px;
        }
    }
    &__reit {
        font-size: 14px;
        position: relative;
        &::after {
            position: absolute;
            content: '';
            top: -6px;
            right: -26px;
            width: 25px;
            height: 25px;
            background-image: url('../assets/images/star.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    &__number {
        font-size: 14px;
    }
    &__info-list {
        display: flex;
        flex-direction: column;
        margin-top: auto;
        margin-bottom: 32px;
        padding: 0 32px;
        @media(max-width: 768px) {
            padding: 0 10px;
        }
    }
    &__info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        border-bottom: 1px dashed black;
    }
    &__category {
        font-size: 14px;
    }
    &__category-info {
        font-size: 16px;
        font-weight: bold;
    }
    &__price-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__price-text {
        font-weight: bold;
        font-size: 18px;
    }
    &__price {
        padding: 8px 16px;
        background-color: red;
        font-weight: bold;
        color: white;
        border-radius: 8px;
    }
}
</style>
