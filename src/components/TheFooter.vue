<template>
    <footer class="section-footer">
        <div class="footer__content">
            <div class="left">
                <div class="row row-1">
                    <div class="left">
                        <img src="../assets/logo2.png" class="logo">
                        <div class="info">
                            <p>地 址：山东济南山大南路27号明德楼B410房间 B435房间</p>
                            <p>邮 编：250100</p>
                            <p>传 真：0531-88362065 </p>
                            <p>Email：jszy@sdu.edu.cn </p>
                        </div>
                    </div>
                    <div class="right friendly-link">
                        <h1>友情链接</h1>
                        <P>
                            教育部科技发展中心<br/>
                            山东省科技厅<br/>
                            山东省经济和信息化委员会<br/>
                            山东省科技成果转化服务平台<br/>
                            山东政产学研合作联盟<br/>
                            山东省科学院<br/>
                            山东大学国家大学科技园<br/>
                            海尔集团<br>
                            山东大学科学技术研究院
                        </p>
                    </div>
                </div>
                <div class="row row-2 copyright">
                    CopyRight © 2014-2016 All Rights Reserved By The Technology Transfer Center of Shandong University
                </div>
            </div>
            <div class="right contact">
                <h1>中心工作事务联系方式</h1>
                <div class="contact__content">
                    <div class="left">
                        <h2>知识产权运营</h2>
                        <p>联系人：丁茹<br/>
                            办公地址：中心校区明德楼B区410房间<br/>
                            办公电话：0531-88362680
                        </p>
                        <h2>中心综合事务管理</h2>
                        <p>联系人：孙岩<br/>
                            办公地址：中心校区明德楼B区410房间<br/>
                            办公电话：0531-88362680
                        </p>
                        <h2>对外合作</h2>
                        <p>联系人：徐阳<br/>
                            办公地址：中心校区明德楼B区410房间<br/>
                            办公电话：0531-88362686
                        </p>
                    </div>
                    <div class="right">
                        <p>
                            联系人：刘灿刚<br/>
                            办公地址：中心校区明德楼B区410房间<br/>
                            办公电话：0531-88392972</p>
                        <p>联系人：孙海磊<br/>
                            办公地址：中心校区明德楼B区410房间<br/>
                            办公电话：0531-88392972</p>
                        <p>联系人：朱西民<br/>
                            办公地址：中心校区明德楼B区435房间<br/>
                            办公电话：0531-88369600</p>
                        <p>联系人：柳瞳瞳<br/>
                            办公地址：中心校区明德楼B区435房间<br/>
                            办公电话：0531-88369600
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style scoped lang="scss">
    @import "../style/variables";

    footer {
        background: {
            image: url("../assets/bg_footer.jpg");
            size: cover;
        }
        color: #787878;
        font-size: .9em;
        padding: $index-section-paddding;

        .logo {
            width: 290px;
        }
        .info {
            width: 50%;
            margin: auto;
        }
        p {
            margin: 0;
        }
        .copyright {
            font-size: .9em;
        }
        .contact__content {
             display: flex;
         }
    }

    .footer__content {
        display: flex;
        align-items: stretch;
        flex-wrap: nowrap;
        padding: 4em 0;
        > .left {
            border-right: 1px solid #787878;
            padding-right: 3em;
            > .row-1 {
                display: flex;
                justify-content: space-between;
                margin-bottom: 5em;
            }
        }
        > .right {
            padding: 0 2em 0 3em;
        }
    }

    h1 {
        font: {
            size: 1.2em;
            weight: normal;
        }
        color: #3e3e3e;
    }

    h2 {
        font: {
            size: 1.1em;
            weight: normal;
        }
        color: #3e3e3e;
    }

</style>