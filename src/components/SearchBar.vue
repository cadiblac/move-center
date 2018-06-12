<template>
    <div style="display: inline-block">
        <el-form @submit.native="submit" ref="form" :model="form">
            <el-form-item
                    prop="text">
                <el-input
                        style="width: 200px"
                        v-model="form.text"
                        placeholder="搜索相关信息"><i @click="submit" slot="suffix"
                                                class="el-input__icon el-icon-search"></i></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        data() {
            return {
                form: {
                    text:''
                }
            }
        },
        methods: {
            submit(){
                if (this.form.text.trim().length === 0) return
                this.$emit('search',this.form.text.trim())
                this.search(this.form.text.trim())
            },
            search(key){
                this.$router.push('/search/'+key)
            }
        }
    }
</script>

<style scoped>

</style>