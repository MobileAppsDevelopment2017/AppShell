<br />
<?
$iPod    = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
$iPhone  = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$iPad    = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");

if($iPod||$iPhone||$iPad)
{

	echo '<div class="row center"><a href="LibQuest://"><img src="../img/applink.png"></a><div class="launchTxt">Click the tree to launch the LibQuest Scanning App</div></div><br>';

}
else
{

	echo '<div class="row center"><a href="intent://libquest.tees.ac.uk/get/#Intent;scheme=https;end"><img src="../img/applink.png"></a><div class="launchTxt">Click the tree to launch the LibQuest Scanning App </div></div><br>'; 
}
?>