<div class="popup-for-login popup" id="signInUpPopup">
  <img src="images/icon-close-white.png" class="close" alt="" onClick="SiteMain.closePopup('.popup-for-login')">
  <div class="inner">
    <div class="inner-header">
      <img src="images/logo.png" alt="">
      <div class="fRight">
        <ul class="links">
            <li><a href="javascript:void(0)" onClick="SiteMain.openPopup('#signInUpPopup','signInContent')" class="navLink signInLink">Đăng nhập</a></li>
            <li><a href="javascript:void(0)" onClick="SiteMain.openPopup('#signInUpPopup','signUpContent')" class="navLink signUpLink">Đăng ký</a></li>
        </ul>
      </div>
    </div>
    <div class="inner-content">
        <div class="signin commonContent" id="signInContent">
          <h5>Đăng nhập</h5>
          <div class="socials">
            <a href="#"><img src="images/icon-fb.png" alt="" /></a>
            <a href="#"><img src="images/icon-gg.png" alt="" /></a>
          </div>
          <div class="or">
            <span>hoặc</span>
          </div>
          <form class="" action="" method="">
            <div class="inputIcon iconEmail">
              <input type="text" name="" value="" placeholder="Email">
            </div>
            <div class="inputIcon iconUser">
              <input type="text" name="" value="" placeholder="Username">
            </div>
            <div class="checkboxx">
              <input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" />
              <label for="checkboxG1" class="css-label">Remember Me</label>
            </div>
             <input type="submit" class="btn" value="Đăng nhập"/>
          </form>
          <p class="text">Bạn quên mật khẩu? <a href="#">Gởi lại mật khẩu qua email</a></p>
          <p class="text">Bạn chưa có tài khoản? <a <a href="javascript:void(0)" onClick="SiteMain.openPopup('#signInUpPopup','signUpContent')">Đăng ký</a></p>
        </div>

        <div class="signup commonContent" id="signUpContent">
            <h5>Tạo tài khoản</h5>
            <div class="socials">
              <a href="#"><img src="images/icon-fb.png" alt="" /></a>
              <a href="#"><img src="images/icon-gg.png" alt="" /></a>
            </div>
            <div class="or">
              <span>hoặc</span>
            </div>
            <form class="">
              <div class="inputIcon iconEmail">
                <input type="text" name="" value="" placeholder="Email">
              </div>
              <div class="inputIcon iconUser">
                <input type="text" name="" value="" placeholder="Username">
              </div>
              <div class="inputIcon iconPwd">
                <input type="text" name="" value="" placeholder="Password">
              </div>
              <div class="inputIcon iconPwd">
                <input type="text" name="" value="" placeholder="Comfirm Password">
              </div>
              <div class="checkboxx">
                <input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" />
                <label for="checkboxG1" class="css-label">Tôi đồng ý với <a href="#">Điều khoản & Điều kiện</a></label>
              </div>
              <input type="submit" class="btn" value="Đăng ký"/>
            </form>
            <p class="text">Bạn đã có tài khoản? <a href="javascript:void(0)" onClick="SiteMain.openPopup('#signInUpPopup','signInContent')">Đăng nhập</a></p>
        </div>
    </div>
  </div>
</div>
