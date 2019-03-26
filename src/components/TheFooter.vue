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
            <div class="right wechat">
                <h1>微信公众号</h1>
                <div><img src="../assets/qrcode.png" style="width: 200px;height: 200px"></div>
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
    @import "../variables";

    footer {
        background: {
            image: url("../assets/bg_footer.jpg");
            size: cover;
        }
        color: #787878;
        font-size: .9em;

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
    }

    .footer__content {
        width: $index-content-width;
        margin: auto;
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