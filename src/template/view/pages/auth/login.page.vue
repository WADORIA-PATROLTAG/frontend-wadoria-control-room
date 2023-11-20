<template>

    
    <div class="wrapper-page">

        <div class="card">

            <div class="card-body">

                <div class="text-center">
                    <a href="index.html" class="logo logo-admin"><img src="assets/images/e-logo.png" height="50" alt="logo"></a>
                </div>

                <div class="px-3 pb-3">

                    <form class="form-horizontal m-t-20" action="#">

                        <div class="form-group row">

                            <div class="col-12">
                                <input class="form-control" type="text" required="" placeholder="Username">
                            </div>
                        </div>

                        <div class="form-group row">

                            <div class="col-12">
                                <input class="form-control" type="password" required="" placeholder="Password">
                            </div>
                        </div>



                        <div class="form-group text-center row m-t-20">

                           <div class="col-12"> <router-link to="/home" ><button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Me connecter</button></router-link>
                            </div>
                        </div>

                        <div class="form-group m-t-10 mb-0 row">



                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--
   <button class="btn btn-primary" @click="$router.push('/dashboard')">login</button>
   <a href="#/dashboard" class="btn btn-primary">naviguer</a>
   <router-link :to="{name:'dash', params:{id:200}}" class="btn btn-success">Link</router-link>
   <router-link to="/home" class="btn btn-dark">Login</router-link>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, neque, cum officia non aliquam rem tempore possimus dolorem quae sit sunt animi exercitationem beatae quaerat eos blanditiis. Neque, doloremque quam.</p>
-->


</template>

<script>
export default {
    name: 'AuthLogin',
    data() {
        return {
            loginLoading: false,
            form: {
                username: '',
                pwd: ''
            }
        }
    },
    /* unmounted() {
        this.$router.go();
    }, */

}
</script>