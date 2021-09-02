<template>
    <section class="question container">
        <h2 class="question__title title">Ответы на популярные вопросы</h2>
        <h3 class="question__subtitle">Откуда берут б/у шины?</h3>
        <ul class="question__list">
            <li class="question__item">Страховые случаи: если водитель повреждает колесо,
              то страховые компании заменяют пару или целый комплект.
            </li>
            <li class="question__item">Собирают из запасок:
              когда комплекты шин собирают из запасных колес автомобилей.
                Это чаще всего вообще не езженные покрышки, которые продают как Б/У.
            </li>
            <li class="question__item">Компоновка из распаровок: если
              вы пробили одно колесо, то обычно вам придется
                купить новую пару и у вас останется одна целая шина.
                В Европе есть специализированные центры, которые
                собирают одиночные такие колеса по всей стране и компонуют из них комплекты.
            </li>
            <li class="question__item">Программа обмена: при сезонной переобувке водители
              сдают старые колеса (например, отходившие лишь один сезон) в обмен на новые.
            </li>
            <li class="question__item">Некоторые водители при некритичных повреждениях шины
              (например, прокол) покупают новые колеса. И множество других источников.</li>
        </ul>
    </section>
</template>
<script>

</script>
<style lang="scss" scoped>
.question {
  margin-bottom: 140px;

  &__subtitle {
    margin-bottom: 40px;
  }

  &__list {
    list-style: disc !important;
    list-style-position: inside;
    padding: 0 30px;
  }

  &__item {
    margin-bottom: 30px;
  }
}
</style>
