<template>
    <!-- sidebar -->
    <aside class="aside aside-fixed">
        <div class="aside-header">
            <a href="index-2.html" class="aside-logo">Millenium<span>payroll</span></a>
            <a href="javascript:void(0)" class="aside-menu-link">
                <i data-feather="menu"></i>
                <i data-feather="x"></i>
            </a>
        </div>
        <div class="aside-body">
            <div class="aside-loggedin">
                <div class="d-flex align-items-center justify-content-start">
                    <a href="javascript:void(0)" class="avatar"><img src="assets/img/placehold.jpg" class="rounded-circle"
                            alt=""></a>
                    <div class="aside-alert-link">
                        <a href="javascript:void(0)" data-bs-toggle="tooltip" title="Déconnexion"><i
                                data-feather="log-out"></i></a>
                    </div>
                </div>
                <div class="aside-loggedin-user">
                    <a href="#loggedinMenu" class="d-flex align-items-center justify-content-between mg-b-2"
                        data-bs-toggle="collapse">
                        <h6 class="tx-semibold mg-b-0">Gaston delimond</h6>
                        <i data-feather="chevron-down"></i>
                    </a>
                    <p class="tx-color-03 tx-12 mg-b-0">Administrateur</p>
                </div>
                <div class="collapse" id="loggedinMenu">
                    <ul class="nav nav-aside mg-b-0">
                        <li class="nav-item"><a href="javascript:void(0)" class="nav-link"><i data-feather="edit"></i>
                                <span>Modifier
                                    Profil</span></a>
                        </li>
                        <li class="nav-item"><a href="javascript:void(0)" class="nav-link"><i data-feather="user"></i>
                                <span>Voir
                                    Profil</span></a>
                        </li>
                        <li class="nav-item"><a href="javascript:void(0)" class="nav-link"><i data-feather="settings"></i>
                                <span>Paramètres
                                    du compte</span></a></li>
                        <li class="nav-item"><a href="javascript:void(0)" class="nav-link"><i
                                    data-feather="help-circle"></i>
                                <span>Assistance technique</span></a></li>
                        <li class="nav-item"><a href="javascript:void(0)" class="nav-link"><i data-feather="log-out"></i>
                                <span>Déconnexion</span></a>
                        </li>
                    </ul>
                </div>
            </div><!-- aside-loggedin -->
            <ul class="nav nav-aside">
                <li class="nav-label">Menu</li>
                <li class="nav-item with-sub" :class="currentRoute.includes('admin.') ? 'active' : ''">
                    <a href="javascript:void(0)" class="nav-link"><i data-feather="settings"></i>
                        <span>Administration</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'admin.dashboard' }">Tableau de bord</router-link></li>
                        <li><router-link :to="{ name: 'admin.agences' }">Gestion agences</router-link></li>
                        <li><router-link :to="{ name: 'admin.services' }">Configuration services</router-link></li>
                        <li><router-link :to="{ name: 'admin.postes' }">Configuration fonctions</router-link></li>
                        <li><router-link :to="{ name: 'admin.access' }">Configuration accès utilis...</router-link></li>
                        <li><router-link :to="{ name: 'admin.employes' }">Gestion employés</router-link></li>
                        <li><router-link :to="{ name: 'admin.users' }">Comptes utilisateurs</router-link></li>
                        <li><router-link :to="{ name: 'admin.baremes' }">Configuration barèmes</router-link></li>
                        <li><router-link :to="{ name: 'admin.primes' }">Configuration primes</router-link></li>
                        <li><router-link :to="{ name: 'admin.heuresups' }">Configuration heures sup.</router-link></li>
                        <li><router-link :to="{ name: 'admin.heurepoints' }">Configuration heures point.</router-link>
                        </li>
                        <li><a href="javascript:void(0)">Planning des congés</a></li>

                        <li><router-link :to="{ name: 'admin.visiteurs' }">Visiteurs</router-link></li>
                        <li><router-link :to="{ name: 'admin.enroll' }">Enrollement agents</router-link></li>
                        <li><router-link :to="{ name: 'admin.presences' }">Rapport des présences</router-link></li>
                    </ul>
                </li>
                <li class="nav-item with-sub" :class="currentRoute.includes('maj.') ? 'active' : ''">
                    <a href="javascript:void(0)" class="nav-link"><i data-feather="clipboard"></i>
                        <span>Mises à jour</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'maj.pointages' }">Pointage</router-link></li>
                    </ul>
                </li>
                <li class="nav-item with-sub" :class="currentRoute.includes('editions') ? 'active' : ''">
                    <a href="javascript:void(0)" class="nav-link"><i data-feather="printer"></i>
                        <span>Editions</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Feuille de paie' } }" active-class=""
                                exact-active-class="" :class="q.includes('Feuille de paie') ? 'active' : ''">Feuille de
                                paie</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Bulletin de paie' } }" active-class=""
                                exact-active-class="" :class="q.includes('Bulletin de paie') ? 'active' : ''">Bulletin de
                                paie</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'CNSS' } }" active-class=""
                                exact-active-class="" :class="q.includes('CNSS') ? 'active' : ''">CNSS</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'IPR' } }" active-class=""
                                exact-active-class="" :class="q.includes('IPR') ? 'active' : ''">IPR</router-link></li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'INPP & ONEM' } }" active-class=""
                                exact-active-class="" :class="q.includes('INPP & ONEM') ? 'active' : ''">INPP &
                                ONEM</router-link>
                        </li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Intercalaire' } }" active-class=""
                                exact-active-class=""
                                :class="q.includes('Intercalaire') ? 'active' : ''">Intercalaire</router-link>
                        </li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Net à payer' } }" active-class=""
                                exact-active-class="" :class="q.includes('Net à payer') ? 'active' : ''">Net à
                                payer</router-link>
                        </li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Quinzaine' } }" active-class=""
                                exact-active-class=""
                                :class="q.includes('Quinzaine') ? 'active' : ''">Quinzaine</router-link>
                        </li>
                        <li><router-link :to="{ name: 'editions', query: { q: 'Avance sur salaire' } }" active-class=""
                                exact-active-class="" :class="q.includes('Avance sur salaire') ? 'active' : ''">Avance sur
                                salaire</router-link></li>
                    </ul>
                </li>
                <li class="nav-item with-sub" :class="currentRoute.includes('tab.') ? 'active' : ''">
                    <a href="javascript:void(0)" class="nav-link"><i data-feather="layout"></i>
                        <span>Décompte</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'tab.decomptes', params: { tab: 'calcul' } }" exact>Calcul
                                décompte</router-link>
                        </li>
                        <li><router-link :to="{ name: 'tab.decomptes', params: { tab: 'bulletin' } }" exact>Bulletin
                                décompte</router-link></li>
                    </ul>
                </li>

                <li class="nav-item with-sub" :class="currentRoute.includes('affectations') ? 'active' : ''">
                    <a href="javascript:void(0)" class="nav-link"><i data-feather="link"></i>
                        <span>Affectations</span>
                    </a>
                    <ul>
                        <li><router-link :to="{ name: 'affectations', params: { affect: 'agents' } }" exact>
                                Agents</router-link>
                        </li>
                        <li><router-link :to="{ name: 'affectations', params: { affect: 'conges' } }" exact>
                                Congés</router-link></li>
                        <li><router-link :to="{ name: 'affectations', params: { affect: 'primes' } }" exact>
                                Primes</router-link></li>
                        <li><router-link :to="{ name: 'affectations', params: { affect: 'avances' } }" exact>Avances sur
                                salaire</router-link></li>
                    </ul>
                </li>
                <!-- <li class="nav-item with-sub">
                    <a href="javascript:void(0)" class="nav-link"><i data-feather="user"></i>
                        <span>Contrôle d'accès</span>
                    </a>
                    <ul>
                        <li><a href="javascript:void(0)">Enrollement empreinte</a>
                        </li>
                        <li><a href="#modalScannig" data-bs-toggle="modal" data-animation="effect-scale">Scannage
                                empreinte</a>
                        </li>
                        <li><a href="javascript:void(0)">Accès visiteur</a>
                        </li>
                    </ul>
                </li> -->
            </ul>
        </div>
    </aside>
    <!-- sidebar -->

    <!-- scanning modal -->
    <scanning-modal></scanning-modal>
    <!-- scanning modal -->
</template>

<script>
import ScanningModal from '../../view/pages/public/modals/scannig.modal'
export default {
    name: "SidebarLayout",

    components: {
        ScanningModal,
    },

    data() {
        return {
            currentRoute: '',
            q: ''
        }
    },

    mounted() {
        this.init();
        $('#modalScannig').on('show.bs.modal', function (event) {
            var animation = $(event.relatedTarget).data('animation');
            $(this).addClass(animation);
        })

        // hide modal with effect
        $('#modalScannig').on('hidden.bs.modal', function (e) {
            $(this).removeClass(function (index, className) {
                return (className.match(/(^|\s)effect-\S+/g) || []).join(' ');
            });
        });
        setInterval(() => {
            this.currentRoute = this.$route.name;
            if (this.$route.query.q !== undefined) {
                this.q = this.$route.query.q;
            }
        }, 50);
    },

    methods: {
        init() {
            const tooltipTriggerList = document.querySelectorAll(
                '[data-bs-toggle="tooltip"]'
            );
            const tooltipList = [...tooltipTriggerList].map(
                (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
            );

            const asideBody = new PerfectScrollbar(".aside-body", {
                suppressScrollX: true,
            });

            if ($(".aside-backdrop").length === 0) {
                $("body").append('<div class="aside-backdrop"></div>');
            }

            var mql = window.matchMedia("(min-width:992px) and (max-width: 1199px)");

            function doMinimize(e) {
                if (e.matches) {
                    $(".aside").addClass("minimize");
                } else {
                    $(".aside").removeClass("minimize");
                }

                asideBody.update();
            }

            mql.addListener(doMinimize);
            doMinimize(mql);

            $(".aside-menu-link").on("click", function (e) {
                e.preventDefault();

                if (window.matchMedia("(min-width: 992px)").matches) {
                    $(this).closest(".aside").toggleClass("minimize");
                } else {
                    $("body").toggleClass("show-aside");
                }

                asideBody.update();
            });

            $(".nav-aside .with-sub").on("click", ".nav-link", function (e) {
                e.preventDefault();

                $(this).parent().siblings().removeClass("show");
                $(this).parent().toggleClass("show");

                asideBody.update();
            });

            $("body").on("mouseenter", ".minimize .aside-body", function (e) {
                console.log("e");
                $(this).parent().addClass("maximize");
            });

            $("body").on("mouseleave", ".minimize .aside-body", function (e) {
                $(this).parent().removeClass("maximize");

                asideBody.update();
            });

            $("body").on("click", ".aside-backdrop", function (e) {
                $("body").removeClass("show-aside");
            });
        }
    },
}
</script>