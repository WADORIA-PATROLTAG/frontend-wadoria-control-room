<template>
    <div v-if="processing" style="height: 50vh !important;"
        class="w-100 d-flex justify-content-center align-content-center align-items-center">
        <!-- <div class="df-example">
            <svg fill="#103BBE" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g class="spinner_OSmW">
                    <rect x="11" y="1" width="2" height="5" opacity=".14" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86" />
                    <rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
                </g>
            </svg>
        </div> -->
        <div>
            <svg width="30" fill="#9FB3EF" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect class="spinner_jCIR" x="1" y="6" width="2.8" height="12" />
                <rect class="spinner_jCIR spinner_upm8" x="5.8" y="6" width="2.8" height="12" />
                <rect class="spinner_jCIR spinner_2eL5" x="10.6" y="6" width="2.8" height="12" />
                <rect class="spinner_jCIR spinner_Rp9l" x="15.4" y="6" width="2.8" height="12" />
                <rect class="spinner_jCIR spinner_dy3W" x="20.2" y="6" width="2.8" height="12" />
            </svg>
        </div>
    </div>
    <div v-show="processing === false" class="m-0 p-0">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'DataLoading',
    props: {
        processing: {
            type: Boolean,
            default: false,
        }
    }

}
</script>

<style>
.spinner_OSmW {
    transform-origin: center;
    animation: spinner_T6mA .75s step-end infinite
}

@keyframes spinner_T6mA {
    8.3% {
        transform: rotate(30deg)
    }

    16.6% {
        transform: rotate(60deg)
    }

    25% {
        transform: rotate(90deg)
    }

    33.3% {
        transform: rotate(120deg)
    }

    41.6% {
        transform: rotate(150deg)
    }

    50% {
        transform: rotate(180deg)
    }

    58.3% {
        transform: rotate(210deg)
    }

    66.6% {
        transform: rotate(240deg)
    }

    75% {
        transform: rotate(270deg)
    }

    83.3% {
        transform: rotate(300deg)
    }

    91.6% {
        transform: rotate(330deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>


<style>
.spinner_jCIR {
    animation: spinner_B8Vq .9s linear infinite;
    animation-delay: -.9s
}

.spinner_upm8 {
    animation-delay: -.8s
}

.spinner_2eL5 {
    animation-delay: -.7s
}

.spinner_Rp9l {
    animation-delay: -.6s
}

.spinner_dy3W {
    animation-delay: -.5s
}

@keyframes spinner_B8Vq {

    0%,
    66.66% {
        animation-timing-function: cubic-bezier(0.36, .61, .3, .98);
        y: 6px;
        height: 12px
    }

    33.33% {
        animation-timing-function: cubic-bezier(0.36, .61, .3, .98);
        y: 1px;
        height: 22px
    }
}
</style>