<template>
  <v-container class="container" fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12 login-card">
          <v-spacer></v-spacer>
          <v-card-text>
            <v-text-field box flat name="login" label="Login" type="text"></v-text-field>

            <v-text-field box flat id="password" name="password" label="Password" type="password"></v-text-field>
            <v-btn block class="round" color="secondary" dark>Sign in</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
@import '../../stylus/main.styl';

.container {
  background: $rait-red;
}

.login-card {
  border-radius: 10px;
  width: 100%;
  padding: 100px;
}
.round {
    border-radius: 5px;
    padding: 20px 0;
}
</style>

