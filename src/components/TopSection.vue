<template>
    <div class="top-section">
        <div class="top-section__inner container">
            <h1 class="top-section__title">
                Шины и Диски из Германии на складе в Одессе
            </h1>
            <a href="#content" class="top-section__link-down">
                <img src="../assets/images/koleso.png" alt="" class="top-section__img-down">
             </a>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.top-section {
    box-shadow: inset 0px 300px 150px rgba(0, 0, 0, 0.7);
    height: 100vh;
    max-height: 100vh;
    background-image: url('../assets/images/header-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -94px;
    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding-bottom: 120px;
        height: 100%;
        @media(max-width: 1160px) {
            align-items: center;
        }
        @media(max-width:600px) {
            padding-bottom: 0;
        }
    }
    &__title {
        color: white;
        max-width: 900px;
        font-weight: bold;
        font-size: 64px;
        line-height: 85px;
        margin-bottom: 80px;
        text-shadow: 10px 8px 4px rgba(0, 0, 0, 0.25);
        @media(max-width: 1160px) {
            text-align: center;
            font-size: 48px;
        }
        @media(max-width:850px) {
            font-size: 48px;
            line-height: 1.2;
        }
        @media(max-width:600px) {
            font-size: 36px;
        }
    }
    &__link {
        max-width: 300px;
        color: white;
        padding: 24px 12px;
        font-size: 24px;
        text-align: center;
        background-image: url('../assets/images/top-section-link-bg.png');
        background-position: center;
        background-repeat: no-repeat;
        border: 1px solid white;
        border-radius: 8px;
        @media(max-width: 1160px) {
            background-image: none;
            background-color: rgba(255, 255, 255, 0.6);
            color: black;
            font-weight: bold;
            border: 2px solid black;
            padding: 24px;
        }
    }
    &__link-down {
        padding: 8px 0;
        border-radius: 30px;
        border: 1px solid white;
        background-color: rgba(255, 255, 255, 0.3);
        width: 60px;
        height: 140px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 30px;
        left: calc(50% - 30px);
        @media(max-width: 768px) {
            display: none;
        }
    }
    &__img-down {
        position: absolute;
        width: 60px;
        height: 60px;
        animation: bounceIn 3s infinite 2s;
    }
    @keyframes bounceIn {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
            opacity: 1;
        }
        40% {
            transform: translateY(70px);
        }
        60% {
            transform: translateY(35px);
        }
    }
}
</style>
