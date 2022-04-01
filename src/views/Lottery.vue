<template>
     <div class="sidebar">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div id="dismiss">
                <i class="fa fa-close"></i>
            </div>

            <div class="top-left">
                <div class="logo">
                    <a href=""><img src="/game/h5/images/home/logo.png" alt=""></a>
                </div>
                <div class="lang">
                    <ul>
                        <li><img src="/game/h5/icon/three/seven.png" alt=""></li>
                        <li><img src="/game/h5/icon/three/night.png" alt=""></li>
                        <li><img src="/game/h5/icon/three/nine.png" alt=""></li>
                        <li><img src="/game/h5/icon/three/ten.png" alt=""></li>
                    </ul>
                </div>
            </div>
            <div class="line_1">
                <span></span>
            </div>
            <div class="regislog">
                <a href="#"><img src="/game/h5/icon/two/right.png" alt=""></a>
                <a href="#"><img src="/game/h5/icon/two/left.png" alt=""></a>
            </div>
            <div class="left-sidebar">
                <ul class="list-unstyled components">
                    <li>
                        <a href="#">
                            <router-link to="/" class="router">
                            <img src="/game/h5/icon/two/football.png" alt="">
                            <span>Sports</span>
                            </router-link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <router-link to="/casino" class="router">
                            <img src="/game/h5/icon/two/poker.png" alt="">
                            <span>Live Casino</span>
                            </router-link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <router-link to="/slots" class="router">
                            <img src="/game/h5/icon/two/777.png" alt="">
                            <span>Slots</span>
                            </router-link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <router-link to="/lottery" class="router">
                            <img src="/game/h5/icon/two/red.png" alt="">
                            <span>Lottery</span>
                            </router-link>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <router-link to="/number" class="router">
                            <img src="/game/h5/icon/two/yellow.png" alt="">
                            <span>Number</span>
                            </router-link>
                        </a>
                    </li>
                    <div class="line_2">
                        <span></span>
                    </div>
                    <li>
                        <a href="#promotion">
                            <router-link to="/" class="router">
                            <img src="/game/h5/icon/two/liwu.png" alt="">
                            <span>Promotion</span>
                            </router-link>
                        </a>
                    </li>
                    <li>
                        <a href="#customerservice">
                            <router-link to="/" class="router">
                            <img src="/game/h5/icon/two/kf.png" alt="">
                            <span>Customer Service</span>
                            </router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
   </div>
        <div id="content">
            <!-- header -->
            <header>
                <!-- header inner -->
                <div class="head_top">
                    <div class="header">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="left_header_info">
                                   <ul>
                                      <li>
                                         <button type="button" id="sidebarCollapse">
                                            <img src="game/h5/icon/three/tb12.png" alt="#" />
                                         </button>
                                      </li>
                                   </ul>
                                </div>
                                <div class="mid_header_info">
                                   <ul>
                                      <li>
                                         <a href=""><img src="/game/h5/images/home/logo.png" alt=""></a>
                                      </li>
                                   </ul>
                                </div>
                                <!-- <div class="col-md-9">
                                   <div class="right_header_info">

                                   </div>
                                </div> -->
                             </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- end header inner -->
            <!-- end header -->
            <section class="slider_section">
                <div class="banner_main">
                    <img src="game/h5/images/home/hdy.png" alt="#" />
                    
                </div>
            </section>
            <div class="padding3">
                <div class="row">
                   <div class="row_2">
                      <div class="slide-text">
                        <img src="/game/h5/images/home/tz3.png" alt="">
                      </div>
                      <div class="text-bg">
                         <a href="Javascript:void(0)"><img src="/game/h5/icon/three/tb5.png" alt=""></a>
                         <a href="Javascript:void(0)"><img src="/game/h5/icon/three/tb6.png" alt=""></a>
                      </div>
                   </div>
                </div>
            </div>
            <!-- Categories -->
            <!-- casino -->
            <div id="game" class="casino">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div class="row_3">
                        <div class="left-btn">
                            <div class="menu">
                                <a href="#">
                                    <router-link to="/">
                                   <div class="sports"></div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/casino">
                                   <div class="live-casino"></div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/slots">
                                   <div class="slots"></div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/lottery">
                                   <div class="lottery active"></div>
                                    </router-link>
                                </a>
                                <a href="#">
                                    <router-link to="/number">
                                   <div class="number"></div>
                                    </router-link>
                                </a>
                            </div>
                        </div>
                        <div class="game-box">
                            <div class="img-b">
                                <a href=""><img src="/game/h5/images/home/VIETNAME2.png" alt="#" /></a>
                            </div>
                             <div class="img-b">
                                <a href=""><img src="/game/h5/images/home/VIETNAME2.png" alt="#" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="web-list">
                <img src="/game/h5/images/home/logoweb.png" alt="">
             </div>
            <!-- end casino -->
            <!--  footer -->
            <footer>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="row">
                                <ul class="Menu_footer">
                                    <li class="active">
                                        <a href="#">
                                            <img src="/game/h5/icon/three/tb1.png" alt="">
                                            <span>Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/game/h5/icon/three/tb2.png" alt="">
                                            <span>Promotions</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/game/h5/icon/three/tb3.png" alt="">
                                            <span>Viber</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/game/h5/icon/three/tb4.png" alt="">
                                            <span>Facebook</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- end footer -->
        </div>
        <div class="overlay"></div>
    <router-view/>
</template>

<script>
export default {
    name: 'Lottery'
}
</script>

<style scoped>

</style>