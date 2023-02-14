<template>
    <div class="pageNotFound">
        <div class="error dashedBorder">
            <strong>404</strong>
            <h1>Lo sentimos :(</h1>
            <p>Página no encontrada</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style scoped>
    .pageNotFound{
        height: 100vh;
        justify-content: center;
    }

    .pageNotFound, .error, .error > strong {
        display: flex;
        align-items: center;
    }

    p, strong{
        color: var(--TXTColor);
    }

    .error {
        padding: 50px;
        box-shadow: 0 0 15px #000;

        flex-direction: column;
        gap: 5%;
    }

    .error > h1 {
        font-size: 38pt;
    }

    .error > strong {
        font-size: 48pt;
    }

    .error > p {
        font-size: 28pt;
    }
</style>