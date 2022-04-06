<template>
    
    <div class="container-fluid2 bg-black">
        <div class="container form pt-1 pb-1 flex-end">
        <form action="#" id="form" method="post">
            <input type="hidden" name="_token" value="id">
            <input type="hidden" name="real_ip" id="real_ip" value="">
        <input class="username bg-black" type="text" name="username" placeholder="Username" id="username">
        <input class="password bg-black" type="password" name="password" placeholder="Password" id="password">
        <a href="#"><input class="login bg-black klavika" type="submit" value="MASUK"></a>
        <a href="#"><input class="register bg-black klavika" type="button" value="DAFTAR"></a>
        </form>
    </div>
    </div>

<div class="container-fluid2 bg-gray main-menu">
    <div class="header2 container2 grid">
        <div class="logo">
            <img src="img/assets/img/logo/logo.png" alt="">
        </div>
        <div class="navigation">
            <ul class="menus flex space-between2">              
                <li class="menu2" data-id="home" @mouseover="hover = true" @mouseleave="hover = false">
                    <a href="#">
                        <img v-if="hover" src="../../public/img/assets/img/icons/home-hover.png" alt="">
                        <img v-else src="../../public/img/assets/img/icons/home.png" alt="">
                    </a>
                </li>
                <li class="menu2" data-id="1" @mouseover="casino_HO = true" @mouseleave="casino_HO=false">
                    <a href="#">
                        <img v-if="casino_HO" src="../../public/img/assets/img/icons/casino-hover.png" alt="">
                        <img v-else src="../../public/img/assets/img/icons/casino.png" alt="">
                    </a>
                </li>
                <li class="menu2" data-id="2"  @mouseover="slot_Ho = true" @mouseleave="slot_Ho=false">
                    <a href="#">
                        <img v-if="slot_Ho" src="../../public/img/assets/img/icons/slot-hover.png" alt="">
                        <img v-else src="../../public/img/assets/img/icons/slot.png" alt="">
                    </a>
                </li>
                <li class="menu2" data-id="3"  @mouseover="sport_Ho = true" @mouseleave="sport_Ho=false">
                    <a href="#">
                        <img v-if="sport_Ho" src="../../public/img/assets/img/icons/sports-hover.png" alt="">
                        <img v-else src="../../public/img/assets/img/icons/sports.png" alt="">
                    </a>
                </li>
               <li class="menu2" @mouseover="sa_Ho = true" @mouseleave="sa_Ho=false">
                    <a href="#">
                        <img v-if="sa_Ho" src="../../public/img/assets/img/icons/sa-hover.png" alt="">
                        <img v-else src="../../public/img/assets/img/icons/sa.png" alt="">
                    </a>
                </li>
               <li class="menu2" @mouseover="poker_Ho = true" @mouseleave="poker_Ho=false">
                    <a href="#">
                        <img v-if="poker_Ho" src="../../public/img/assets/img/icons/poker-hover.png" alt="">
                        <img v-else src="../../public/img/assets/img/icons/poker.png" alt="">
                    </a>
                </li>
                <li class="menu2" @mouseover="bonus_Ho = true" @mouseleave="bonus_Ho=false">
                    <a href="#">
                        <img v-if="bonus_Ho" src="../../public/img/assets/img/icons/bonus-hover.png" alt="">
                        <img v-else src="../../public/img/assets/img/icons/bonus.png" alt="">
                    </a>
                </li>              
            </ul>
        </div>
        
    </div>
</div>

<div class="container-fluid2 dropdown tc bg-black">
    <div class="container">

        <div class="games grid col-6 klavika" data-id="1" style="display: none;">
            <div class="game"><a href="#"><img src="img/assets/img/logo/lg-casino.png" alt=""></a><p>LG88</p>
            </div>

        </div>

        <div class="games grid col-6 klavika" data-id="2" style="display: none;">
            <div class="game" id="showpp" ><a href="#"><img src="img/assets/img/logo/pragmatic.png" alt=""><p>Pragmatic Play</p></a>
            </div>
            <div class="game" id="showhb"><a href="#"><img src="img/assets/img/logo/habanero.png" alt=""><p>Habanero Play</p></a>
            </div>
            <div class="game" id="showpg"><a href="#"><img src="img/assets/img/logo/pg-logo.png" alt=""><p>PG SLOTS</p></a>
            </div>
        </div>

        <div class="games grid col-6 klavika" data-id="3" style="display: none;">
           <div class="game"><a><img src="img/assets/img/logo/afb-1.png" alt=""><p>AFB1188</p></a>
            </div>
        </div>
        <div class="games grid col-6 klavika" data-id="4" style="display: none;">
            <div class="game"><a href="#"><img src="img/assets/img/logo/sv388.png" alt=""><p>SV388</p></a>
            </div>
        </div>
        <div class="games grid col-6 klavika" data-id="5" style="display: none;">
            <div class="game"><a href="#"><img src="img/assets/img/logo/pkv.png" alt=""><p>SV388</p></a>
            </div>
        </div>

    </div>
</div>

    <div class=" promotion bg-black">
        <div class="promo grid klavika">
            <div class="banner-dx bg-gray-1"><a href="#"><img src="https://wap.dewalg.com/banner/bs1.png" alt=""></a></div>
            <div class="text-1 tc bg-gray-1"><span>SLOT GAMES</span><p>Promo Rollingan</p></div>
  <div class="detail tc bg-gray-1"></div>
        </div>

        <div class="detail-1 bg-gray-1">
            <h3>Bonus Rollingan Slot Games 0.5% (No Limit): </h3>
            <p> - Minimal Turnover 3.000.000</p>
            <p>- Komisi dibagikan setiap hari Rabu jam 13:00-18:00 wib</p>
            <p>- Syarat dan ketentuan DewaLG Berlaku</p>
            <p> - KEPUTUSAN ADMIN DEWALG ADALAH MUTLAK DAN TIDAK DAPAT DIGANGGU GUGAT</p>
        </div>

        <div class="promo grid klavika">
            <div class="banner-dx bg-gray-1"><a href="#"><img src="https://wap.dewalg.com/banner/bs2.png" alt=""></a></div>
            <div class="text-1 tc bg-gray-1"><span>ALL GAMES</span><p>BONUS DEPOSIT </p></div>
              <div class="detail tc bg-gray-1"></div>
        </div>
        <div class="detail-1 bg-gray-1">
            <h3>BONUS DEPOSIT 10% ( ALL GAMES )</h3>
            <p>1. Minimal Deposit Rp 100.000</p>
            <p>2. Maksimal Bonus Yang Di dapatkan Rp 300.000</p>
            <p>3. Untuk Withdraw, Turnover harus mencapai 12x dari total bonus deposit + bonus yang di dapatkan Contoh: Deposit 100.000 Bonus yang di dapatkan 10.000 ( 110.000 x 12 = Rp 1.320.000 ) Maka Turnover Harus Mencapai Rp 1.320.000 Jika ingin melakukan withdraw</p>
            <p>4. Jika turnover tidak mencapai target saat melakukan withdraw, maka bonus akan ditarik kembali</p>
            <p>5. Bonus hanya bisa di klaim 1 hari 1x</p>
            <p>6. Bonus ini berlaku untuk semua permainan.</p>
            <p>7. Bonus hanya bisa diclaim melalui Telegram Ataupun Livechat DewaLG</p>
        </div>
        <div class="promo grid klavika">
            <div class="banner-dx bg-gray-1"><a href="#"><img src="https://wap.dewalg.com/banner/bs3.png" alt=""></a></div>
            <div class="text-1 tc bg-gray-1"><span>CASINO</span><p>BONUS ROLLINGAN CASINO</p></div>
              <div class="detail tc bg-gray-1"></div>
        </div>
        <div class="detail-1 bg-gray-1">
            <h3>BONUS ROLLINGAN CASINO 0.8%</h3>
            <p>1. Minimal Bonus yang diberikan Rp.5.000.</p>
            <p>2. Bonus diberikan kepada member yang mengalami kekalahan.</p>
            <p>3. Apabila ditemukan bermain dengan Safety Bet / Bet Kiri Kanan antar ID dengan IP, No HP, atau Email yang sama, maka Rollingan tidak akan diberikan.
            </p>
            <p>4. Tidak ada syarat untuk Penarikan Withdraw.</p>
        </div>
    </div>

    <div class="container contacts br bg-black mt-3">
        <ul class="flex space-around">
            <p class="ct"><a href="#">KONTAK KAMI</a></p>
            <li><a href="#"><img src="img/assets/img/icons/line.png" alt=""><p>DewaLG</p></a></li>
            <li><a href="#"><img src="img/assets/img/icons/telegram.png" alt=""><p>DewaLG</p></a></li>
            <li><a href="#"><img src="img/assets/img/icons/whatsapp.png" alt=""><p>+081269200299</p></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Index_bonus",
     data () {
    return {
         hover: false, 
         casino_HO :false,  
         slot_Ho:false, 
         sport_Ho:false,
         sa_Ho:false,
         poker_Ho:false,
         bonus_Ho:false,     
         
   
    }    
  },
  
}
</script>

<style scoped>

</style>