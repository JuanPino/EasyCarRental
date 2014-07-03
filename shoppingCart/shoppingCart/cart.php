
<!DOCTYPE html>
<html>
    
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title> EasyCar Rental</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>

<div id="wrapper">
<div id="topbar" class="ui-corner-all">
Phone No: 0430218238 | Email: <a href="service@easycar.com">service@easycar.com</a>
</div>
<div id="header" class="ui-corner-all">
<div id="logo">
<img src="Images/logo_desing.jpg" width="120" height="80">
<strong>EasyCar Rental</strong>

</div>
 </div>
<ul id="navigation"> 
<li><span><a href="index.html">Home</a></span></li>
<li><a href="vehicles.html">Vehicles</a></li>
<li><a href="location.html">Location</a></li>
<li><a href="help.html">Help/FAQs</a></li>
<li><a href="contact.html">Contact</a></li>
</ul>
</div>
    <p> Chandan </p>
    <p>
    <?php

session_start();

$page = 'index.php';
$total=0;

//connect to your database here
mysql_connect('localhost', 'admin', '1234567') or die(mysql_error());
mysql_select_db("easycarrental") or die(mysql_error());

//add data to the database 
if (isset($_GET['add'])) {
$_quantity = mysql_query('SELECT id, quantity FROM products WHERE id='.mysql_real_escape_string((int)$_GET['add']));
while ($_quantity_row= mysql_fetch_assoc($_quantity)) {
if ($_quantity_row ['quantity']!=$_SESSION['cart_'.(int)$_GET['add']]) {
$_SESSION['cart_'.(int)$_GET['add']]+= '1'; 


}

} 
header('Location:'.$page);

}  
// function that remove the quantity from the shopping cart
if (isset($_GET['remove'])) {
$_SESSION['cart_'.(int)$_GET['remove']]--;
header('Location:'.$page);

}

if (isset($_GET['delete'])) {
$_SESSION['cart_'.(int)$_GET['delete']]= '0';
header('Location:'.$page);

}

//retrieve data from the database and display it on index.php
function products() {

$get = mysql_query('SELECT id, name, description, price FROM products WHERE quantity > 0 ORDER BY id DESC');
if (mysql_num_rows($get)==0) {
echo "There are no products to display!";  
}
else {
    echo "<table  border=\"2\" width=\"100%\" bgcolor=\"white\" >"; //format the cart using a HTML table
    echo "<tr align=\"center\">";
    echo "<td width=\"50%\">";
    
    echo "<table align=\"center\" border=\"2\" width=\"400\" bgcolor=\"white\" >"; //format the cart using a HTML table
    echo "<tr align=\"center\">";
    echo "<td width=\"100\"> <font size='4' color='red'> Car:</font> </td>";
    echo "<td width=\"150\"> <font size='4' color='red'> Features:</font> </td>";
    echo "<td width=\"75\"> <font size='4' color='red'> Price:</font> </td>";
    echo "<td width=\"75\"> <font size='4' color='red'> </font> </td>";
    echo "</tr>";
    echo "</table>";



while ($get_row = mysql_fetch_assoc($get)) {
//echo '<p>'.$get_row['name'].'<br />'.$get_row['description'].'<br />$Dollar'.number_format($get_row['price'], 2).'<a href="cart.php?add='.$get_row['id'].'"> <input type="Button" value="Add To Cart"></a></p>';
        echo "<table align=\"center\" border=\"2\" width=\"400\" bgcolor=\"white\" >"; //format the cart using a HTML table
        echo "<tr align=\"center\" width=\"400\">";
	echo "<td width=\"100\"><b> ${get_row['name']}</b></td>";
        echo "<td width=\"150\">${get_row['description']}</td>";
        echo "<td width=\"75\">$${get_row['price']} </td>";
        echo "<td width=\"75\"><a href=cart.php?add=${get_row['id']}> <input type='Button' value='Add To Cart'></a></td>";
	
        
        echo"</tr>";
        echo"</table>";
        echo"</td>";    


}


} 

}
// shopping cart display name, quantity and total also remove and add items  
function cart() {
foreach ($_SESSION as $name => $value){
if ($value>0) {
if (substr($name, 0, 5)=='cart_'){
$id = substr($name, 5, (strlen($name)-5));
$get = mysql_query('SELECT id, name, price FROM products WHERE id='.mysql_real_escape_string((int)$id));
while ($get_row = mysql_fetch_assoc($get)) {
$sub = $get_row['price']* $value;
//echo $get_row['name'].'.'.$value.'- &dollar;'.number_format($get_row['price'], 2).' = &dollar; '.number_format($sub, 2).'<a href="cart.php?remove='.$id.'"> <input type="Button" value="Delete"></a> <a href="cart.php?add='.$id.'"><input type="Button" value="Add"></a> <a href="cart.php?delete='.$id.'"> <input type="Button" value="Empty Cart"></a><br />';  

//echo"<td width=\"50%\">";
echo "<td>";
echo "<table align=\"center\" border=\"1\ padding=\"3\" width=\"400\" bgcolor=\"white\" >"; //format the cart using a HTML table
echo "<tr>";
echo "<td width=\"75\">${get_row['name']}</td>";
echo "<td width=\"75\"> $${get_row['price']}X${value} =  $${sub}<a href=cart.php?remove=${get_row['id']}> </td>";
echo "<td width=\"75\"> <input type='Button' value='Delete'></a> <a href=cart.php?add=${get_row['id']}><input type='Button' value='Add'></a> <a href=cart.php?delete=${get_row['id']}> <input type='Button' value='Empty Cart'></a><br /> </td>";
echo "</tr>";
echo "</table>";
//echo "</table>";
//echo"</td>";
//echo "</tr>";
 
echo "</td>";
echo "</tr>";
echo "</table>";
}



}

global $total;
$total = $total + $sub;

}

}
global $total;
if ($total==0){
echo "Your cart is empty";
}
else {
echo 'Total: &dollar; '.  number_format($total, 2);
}

}    

?>
    </p>

<div class="clear"></div>
<div id="footer" class="ui-corner-all">
<span><a href="index.html">Home</a></span> |
<a href="vehicles.html">Vehicles</a> |
<a href="location.html">Location</a> |
<a href="help.hhtml">Help/FAQs</a> |
<a href="contact.html">Contact</a>


<p>	Copyright &copy; 2012 created by EasyCar Rental Owned by EasyCar Rental </p>


</div>


</body>
</html>
