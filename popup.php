<div class="popup-for-login popup">
  <img src="images/icon-close-white.png" class="close" alt="" onClick="SiteMain.closePopup('.popup-for-login')">
  <div class="inner">
    <div class="inner-header">
      <img src="images/logo.png" alt="">
      <div class="fRight">
        <ul>
          <li><a href="#" page="signup">Đăng ký</a></li>
          <li><a href="#" page="signin">Đăng nhập</a></li>
        </ul>
      </div>
    </div>
    <div class="inner-content">
      <?php
        include_once('signup.php');
        include_once('signin.php');
      ?>
    </div>
  </div>
</div>
