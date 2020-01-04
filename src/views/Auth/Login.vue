<template>
     <div class="container mt-50">
     
        <div class="columns">
            <div class="column is-6 is-offset-3">
            <h3 class="title is-3">Start Session</h3><hr>
                <form action="#" @submit.prevent="login">
                
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input" type="email" placeholder="e.g. soyFulanito@gmail.com" v-model='email'>
                  </div>
                </div>
               
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input class="input" type="password" v-model='password'>
                  </div>
                </div>

                <button type="submit" class="button is-primary">Start Session</button>
                </form>

                  <div class="notification is-danger mt-10" v-if="error" >
                    {{ error }}
                  </div>
                
            </div>
        </div>
     </div>


</template>

<script>
import db from '@/firebase/init.js'// eslint-disable-line
import firebase from  'firebase'// eslint-disable-line

export default {
  data(){
    return{
        email: '',
        password: '',
        error: ''
    }
  },
    name: 'Login',
    
    methods: {
      login(){
        
        this.error = ''
        if(this.email && this.password){
          //se envía el formulario
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .them(user =>{// eslint-disable-line
            this.$router.push({name:'dashboard' })
          }).catch(err =>  {// eslint-disable-line
           this.error = errr.message// eslint-disable-line
          })

        }else{                                                //Module Error (from ./node_modules/eslint-loader/index.js):
         this.error = 'todos los campos son requeridos'       //error: 'email' is not defined (no-undef) at src\views
            
        }
        
      }
    }
}
</script>