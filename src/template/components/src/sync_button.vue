<template>
    <button :disabled="loading" type="button" class="btn btn-sm btn-primary"
        @click="$showBsModal('modalDevices', 'effect-scale')">
        <span class="mx-4" v-if="loading">
            <svg width="40" fill="#FFFFFF" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle class="spinner_S1WN" cx="4" cy="12" r="3" />
                <circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3" />
                <circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" />
            </svg>
        </span>
        <span v-else>
            <i data-feather="cloud-lightning" style="width:12px"></i>
            Synchroniser
        </span>
    </button>

    <teleport to="body">
        <div class="modal fade" id="modalDevices" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered wd-sm-700" role="document"
                id="modalDevicesBody">
                <div class="modal-content">
                    <div class="modal-header pd-y-20 pd-x-20 pd-sm-x-30">
                        <a href="#" role="button" class="close pos-absolute t-15 r-15" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
                        <div class="media align-items-center">
                            <span class="tx-color-03 d-none d-sm-block"><i data-feather="cloud-lightning"
                                    class="wd-60 ht-60"></i></span>
                            <div class="media-body mg-sm-l-20">
                                <h4 class="tx-18 tx-sm-20 mg-b-2">Synchronisation des données</h4>
                                <p class="tx-13 tx-color-03 mg-b-0">Veuillez sélectionner les dipositifs pour synchroniser !
                                </p>
                            </div>
                        </div><!-- media -->
                    </div><!-- modal-header -->
                    <div class="modal-body">
                        <div class="row row-xs">
                            <label class="col-sm-6 col-lg-4 col-xl-4 mb-2 mx-0" style="cursor: pointer"
                                :for="`customCheck${i}`" v-for="(device, i) in devices" :key="i">
                                <div class="media media-folder m-0">
                                    <img src="assets/img/device_image.png" style="height: 50px; object-fit: cover"
                                        alt="device">
                                    <div class="media-body">
                                        <h6><a href="javascript:void(0)" class="link-02">{{ device.alias }}</a></h6>
                                        <div class="d-flex">
                                            <i data-feather="map-pin"
                                                style="width:10px; margin-top: -4px; margin-right: 2px;"></i>
                                            <span>{{ device.area_name
                                            }}</span>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span>{{ device.ip_address }}</span>
                                            <div style="height: 8px; width: 8px;"
                                                :class="(device.state === '3') ? 'bg-danger' : (device.state !== 2) ? 'bg-warning' : 'bg-success'"
                                                class="rounded-circle pos-relative"></div>
                                        </div>
                                    </div>
                                    <!-- media-body -->
                                    <div class="dropdown-file">
                                        <input @change.prevent="onSelectDevice($event, device)" type="checkbox"
                                            class="custom-control-input" :id="`customCheck${i}`" :checked="device.checked">
                                    </div>


                                    <!-- dropdown -->
                                </div>
                                <!-- media -->
                            </label>
                        </div>
                    </div><!-- modal-body -->
                    <div class="modal-footer pd-x-20 pd-y-15">
                        <button type="button" class="btn btn-white" data-bs-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-primary" @click.prevent="triggerSubmitData"> <i
                                data-feather="check"></i> Valider &
                            synchroniser</button>
                    </div>
                </div><!-- modal-content -->
            </div><!-- modal-dialog -->
        </div>
    </teleport>
</template>

<script>
export default {
    name: 'SyncButton',
    data() {
        return {
            loading: false,
            selectedIds: [],
        }
    },

    async mounted() {
        await this.$store.dispatch('biotime/allDevices');

        /**
         * Uncheck all checkbox device when modal hidden trigger
        */
        $('#modalDevices').on("hidden.bs.modal", function (e) {
            $('input:checkbox').each(function () {
                $(`#${$(this).attr('id')}`).prop("checked", false);
            });
        });
    },

    methods: {
        onSelectDevice(event, data) {
            let checked = event.target.checked;
            if (checked) {
                this.selectedIds.push(data.id);
            }
            else {
                let id = this.selectedIds.indexOf(data.id);
                this.selectedIds.splice(id, 1);
            }
        },

        triggerSubmitData() {
            if (this.selectedIds.length === 0) {
                Swal({
                    icon: 'warning',
                    text: 'Vous devez sélectionner un ou plusieurs dispositifs pour effectuer une synchronisation !',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 4000
                });
                return;
            }
            else {
                this.$closeBsModal('modalDevices');

                this.loading = true;
                $('input:checkbox').each(function () {
                    $(`#${$(this).attr('id')}`).prop("checked", false);
                });
                this.$store.dispatch('biotime/uploadAll', this.selectedIds).then((res) => {
                    this.loading = false;
                    if (res.response !== undefined) {
                        if (res.response.status === 'success') {
                            Swal({
                                icon: 'success',
                                title: "Succès".toUpperCase(),
                                text: 'Synchronisation effectuée !',
                                showConfirmButton: false,
                                showCancelButton: false,
                                timer: 4000
                            });
                        }
                    }
                }).catch((_) => this.loading = false);
            }
        }
    },

    computed: {
        devices() {
            return this.$store.getters['biotime/GET_DEVICES'];
        }
    },
}
</script>
<style scoped src="@/assets/css/dashforge.filemgr.css"></style>