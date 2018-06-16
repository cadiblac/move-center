<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" ref="loginForm"
                 label-position="left">
            <div class="title-container">
                <h3 class="title">登录</h3>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.id" autoComplete="on"
                          placeholder="id"/>
            </el-form-item>

            <el-form-item prop="password">
                <el-input name="password" type="password" @keyup.enter.native="handleLogin"
                          v-model="loginForm.password" autoComplete="on" placeholder="password"/>
            </el-form-item>

            <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading"
                       @click.native.prevent="handleLogin">登录
            </el-button>

        </el-form>


    </div>
</template>

<script>
    import {login} from "../../API";

    export default {
        name: 'index',

        data() {
            return {
                loginForm: {
                    id: '',
                    password: ''
                },
                loading: false,
            }
        },
        methods: {
            handleLogin() {
                this.loading = true
                login(this.loginForm).then(() => {
                    this.loading = false
                    let url = this.$route.query.redirect
                    url = url || '/'
                    this.$router.push({path: url})
                }).catch(e => {
                    this.loading = false
                    this.$message.error(e.message);
                })
            },

        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    $bg: #2d3a4b;
    $light_gray: #eee;

    /* reset element-ui css */
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                &:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                    -webkit-text-fill-color: #fff !important;
                }
            }
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    $bg: #2d3a4b;
    $dark_gray: #889aa4;
    $light_gray: #eee;

    .login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        background-color: $bg;
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;
        }
        .title-container {
            position: relative;
            .title {
                font-size: 26px;
                font-weight: 400;
                color: $light_gray;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
        }
    }
</style>
