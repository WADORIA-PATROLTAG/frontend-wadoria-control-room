<template>
    <button v-if="btnType == 'button'" @click.prevent="$emit('click', $event)" :type="btnType" :disabled="loading"
        class="btn" :class="className">
        <svg width="40" fill="#FFFFFF" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle class="spinner_S1WN" cx="4" cy="12" r="3" />
            <circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3" />
            <circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" />
        </svg>
        <span v-show="!loading">
            <slot></slot>
        </span>
    </button>
    <button v-else :type="btnType" :disabled="loading" class="btn" :class="className">
        <svg v-show="loading" width="40" fill="#FFFFFF" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle class="spinner_S1WN" cx="4" cy="12" r="3" />
            <circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3" />
            <circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" />
        </svg>
        <span v-show="!loading">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
    name: 'BBtn',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        className: {
            type: String,
            default: ''
        },

        btnType: {
            type: String,
            default: 'button',
            validator: (val) => ['button', 'submit', 'reset'].includes(val.toLocaleLowerCase()),
        }
    }
}
</script>


<style>
.spinner_S1WN {
    animation: spinner_MGfb .8s linear infinite;
    animation-delay: -.8s
}

.spinner_Km9P {
    animation-delay: -.65s
}

.spinner_JApP {
    animation-delay: -.5s
}

@keyframes spinner_MGfb {

    93.75%,
    100% {
        opacity: .2
    }
}
</style>