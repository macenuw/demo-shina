<template>
    <section class="info">
        <div class="info__inner container">
            <h2 class="info__title title">Почему люди выбирают нас</h2>
            <div class="info__content">
                <div class="info__item">
                    <h3 class="info__subtitle">100% гарантия на отсутствие брака</h3>
                    <p class="info__text">
                      Каждое колесо перед продажей проверяем на отстутствие гуль,
                      порезов и прочих дефектов.
                    </p>
                </div>
                <div class="info__item">
                    <h3 class="info__subtitle">Магазин-склад в Одессе</h3>
                    <p class="info__text">
                      Посмотреть и купить шины можно Авторынок
                      Куяльник (Яма) магазины №90, №91, №92.
                    </p>
                </div>
                <div class="info__item">
                    <h3 class="info__subtitle">Отправка по Украине</h3>
                    <p class="info__text">
                      Отправляем наложенным платежом перевозчиками Новая Почта или Интайм.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.info {
  background-color: black;

  &__inner {
    padding: 80px 15px;
  }

  &__title {
    color: white;
    margin-bottom: 50px;

  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;

    @media(max-width:1160px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width:850px) {
      margin-bottom: 30px;
    }

  }

  &__subtitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    color: white;
    margin-bottom: 30px;
    text-align: center;
    letter-spacing: 1.5px;
  }

  &__text {
    color: white;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    padding: 0 16px;
    margin-top: auto;
    height: 120px;
    text-align: center;

    @media(max-width:850px) {
      height: auto;
    }
  }
}
</style>
