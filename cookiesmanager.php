<?php
/*
Plugin Name:  Cookies Manager
Plugin URI: http://cookiesmanager.fasterthemes.com/
Description:  The Cookies Manager plugin allows you to set or get cookies used in a website. This plugin also allows users to set cookies as 'permanent'.
Version: 1.0
Author: Faster Themes
Author URI: http://fasterthemes.com/
*/



$siteurl = get_option('siteurl');
define('COOKIES_FOLDER', dirname(plugin_basename(__FILE__)));
define('COOKIES_URL', plugin_dir_url( __FILE__ ) );
define('COOKIES_FILE_PATH', dirname(__FILE__));
define('COOKIES_DIR_NAME', basename(COOKIES_FILE_PATH));

function cookiesmanager_scripts_load()
{

	/*  - - - - - - - CSS - - - - - - - - */
	wp_enqueue_style( 'style',COOKIES_URL."/css/cookiesmanager.css");
	
	/* - - - - - - - Js - - - - - - - -*/
	wp_enqueue_script('bootstrap',COOKIES_URL."/js/bootstrap-modal.js",array('jquery'));
	wp_enqueue_script('cookiesmanager',COOKIES_URL."/js/cookiesmanager.js" ,array('jquery'));
}
add_action('wp_enqueue_scripts', 'cookiesmanager_scripts_load');
?>
<?php function Cookies_Manager(){ ?>

<div class="cookies-container">
  <div id="example" class="modal hide fade" style="display: none;">
    <div class="cookies-modal-header"> <a class="cookies-close" data-dismiss="modal">×</a>
      <h3>Request to use Cookies!</h3>
    </div>
    <div class="cookies-modal-body">
    <form id="mycookisfrm" name="mycookisfrm" action="<?php echo $siteurl;?>" method="post">
      <table class="cookies-table cookies-table-bordered cookies-table-striped" style="width:100%;">
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th class="consert">Consent</th>
            <th>Permanent?</th>
          </tr>
        </thead>
        <tbody id="cookiesData">
        </tbody>
      </table>
      <div id="message"> </div>
      </div>
      <div class="modal-footer">
        
        <input type="submit" value="Save" class="cookies-btn">
        <input type="submit" value="Cancel" class="cookies-btn" data-dismiss="modal">
        <input type="text" name="customer"/>
        <input type="button" value="Set Cookie" onClick="permanentCookie('nama','aaa',30);"/>
        <input type="button" id="get_cookies_id" value="Get Cookie" onClick="ReadCookie()"/>
      </div>
    </form>
  </div>
  <div class="cookiesmanager">
    <div class="cookiesmanagerfloatingbox">
      <ul id="cookies-tips">
        <li><a data-toggle="modal" id="openModel" href="#example" data-backdrop="static">Cookie Settings</a></li>
      </ul>
    </div>
  </div>
</div>

<?php
}

add_action('wp_footer', 'Cookies_Manager');?>