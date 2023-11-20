<template>
    <div>



      
        <!-- Begin page -->
    
        <div id="wrapper">
            <!-- ========== Left Sidebar Start ========== -->
    
    
            <!-- Left Sidebar End -->
            <!-- Start right Content here -->
    
            <div class="content-page" style="margin-left: -0%;">
                <!-- Start content -->
    
                <div class="content">
                    <!-- Top Bar Start -->
    
                    <div class="topbar">
                        <nav class="navbar-custom">
                            <ul class="list-inline float-right mb-0">
                                <!-- language-->
                                <li class="list-inline-item hide-phone app-search">
    
                                    <form role="search" class="">
                                        <input type="date" placeholder="Search..." class="form-control"> <a href="#"><i class="fa fa-search"></i></a>
                                    </form>
                                </li>
                                <li class="list-inline-item dropdown notification-list">
                                    <a class="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"><img src="assets/images/pointag.jpg" alt="user" class="rounded-circle"></a>
    
                                    <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                                        <!-- item-->
    
                                        <div class="dropdown-item noti-title">
                                            <h5>Bienvenue</h5>
                                        </div><a class="dropdown-item" href="#"><i class="mdi mdi-account-circle m-r-5 text-muted"></i> Profil</a>
    
                                        <a class="dropdown-item" href="#">
    
                                            <span class="badge badge-success float-right">5
                                            </span><i class="mdi mdi-settings m-r-5 text-muted"></i> Parametres</a> <a class="dropdown-item" href="#"><i class="mdi mdi-lock-open-outline m-r-5 text-muted"></i> Lock screen</a>
    
                                        <div class="dropdown-divider">
                                        </div><a class="dropdown-item" href="pages-login.html"><i class="mdi mdi-logout m-r-5 text-muted"></i> Deconnexion</a>
                                    </div>
                                </li>
                            </ul>
                            <ul class="list-inline menu-left mb-0">
                                <li class="float-left"><button class="button-menu-mobile open-left waves-light waves-effect"><i class="mdi mdi-menu"></i></button></li>
                            </ul>
    
                            <div class="clearfix">
                            </div>
                        </nav>
                    </div>
                    <!-- Top Bar End -->
    
                    <div class="page-content-wrapper">
    
                        <div class="container-fluid">
    
                            <div class="row">
    
                                <div class="col-sm-12">
    
                                    <div class="page-title-box">
    
                                        <div class="btn-group float-right">
                                            <ol class="breadcrumb hide-phone p-0 m-0">
    
                                                <li class="breadcrumb-item">
                                                    <a href="#">
                                                        <div class="modal-header">
                                                        </div>
                                                    </a>
                                                </li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Dashboard</h4>
                                    </div>
                                </div>
    
                            </div>
                            <!-- end page title end breadcrumb -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="mt-0 header-title">PATROUILLES <input type="button" class="btn btn-success" name="" value="Export excel" placeholder="exporter" id=""></h4>
                                            <p class="text-muted mb-4 font-14">Dashboard pour voir les patrouilles effectuées.</p>
                                            <div class="table-rep-plugin">
                                                <div class="table-responsive b-0" data-pattern="priority-columns">
                                                    <table id="tech-companies-1" class="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>Agent</th>
    
                                                                <th data-priority="3">SITE</th>
                                                                <th data-priority="1">POINT DE SURVEILLANCE</th>
                                                                <th data-priority="3">HEURE POINTER</th>
    
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(patrouilleData, index) in patrouilleDatas" :key="patrouilleData.agent_id" :class="{ 'last-row': index === patrouilleDatas.length - 1 }">
                                                                <th> {{ patrouilleData.nom_agent }}</th>
                                                                <th> {{ patrouilleData.nomsite }}</th>
                                                                <th> {{ patrouilleData.nompointag }}</th>
                                                                <th> {{ patrouilleData.heure_point }}</th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end col -->
                            </div>
    
                            <!--end col-->
    
    
                            <!--end col-->
                        </div>
    
                        <!--end row-->
    
    
                        <!-- end row -->
    
    
                        <!--end row-->
                    </div>
                    <!-- container -->
                </div>
                <!-- Page content Wrapper -->
            </div>
            <!-- content -->
            <footer class="footer">© 2023 PATROLTAG -</footer>
        </div>

    <!--

  
        <button class="btn btn-primary" @click="$router.push({name:'dash'})">Dashboard</button>
        <button class="btn btn-dark" @click="$router.push({name:'create-user'})">Create user</button>
  -->

        <router-view></router-view>
    </div>
</template>
<style>
.last-row {
  background-color: #f8f9fa; /* ou toute autre couleur souhaitée */
  color: #606265; /* couleur du texte pour une meilleure lisibilité */
}
/* Ajoutez du style si nécessaire */
</style>
<script>
export default {
    
    data() {
    return {
      patrouilleDatas: []
    };
  },
  mounted() {
    // Appel à l'API pour récupérer les données des utilisateurs
    this.fetchUserData();
    // Actualiser les données toutes les 3 secondes
    setInterval(() => {
      this.fetchUserData();
    }, 3000);
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await fetch('https://backend.chezyo.net/all/view/viewAllsPatrouilles/');
        const data = await response.json();
        this.patrouilleDatas = data.reponse.patrouille;
        this.patrouilleDatas.reverse();
        //console.error("actualisé");
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }
}
}
</script>

