<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Soccer Club 2013</title>
    <style type="text/css">
        .content 
        {
            padding:10px;
        }
        .style1 
        {
            width:960px;
        }
        #wrapper 
        {
            background-image:url(images/gradient.gif);
        }
        #containter 
        {
            margin-top:10px;
            padding:20px;
            margin-left:auto;
            margin-right:auto;
            width:1080px;
            background-color:blue;
        }
        #footer 
        {
            padding:10px;
            font-size:.75em;
            text-align:center;
            font-style:italic;
        }
        
            
        .style2
        {
            width: 1166px;
            height: 300px;
        }
        
            
    </style>
    <link rel="stylesheet" type="text/css" href="css/jqueryslidemenu.css" />

<!--[if lte IE 7]>
<style type="text/css">
html .jqueryslidemenu{height: 1%;} /*Holly Hack for IE7 and below*/
    .style3
    {
        width: 183px;
        height: 155px;
    }
    .style4
    {
        width: 197px;
        height: 154px;
    }
    .style5
    {
        width: 191px;
        height: 109px;
    }
</style>
<![endif]-->

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script type="text/javascript" src="jqueryslidemenu.js"></script>
</head>
<body bgcolor="#cccccc" background="images/gradient.gif">
    <div id="wrapper">
        <div id="container">
            <form id="form1" runat="server">
   
            <img alt="logo" class="style2" src="Images/soccerlogo1.gif" align="middle" /><table border="0" 
                class="style1" align="center">
                <tr>
                    <td colspan="2" align="left">
                    <div id="myslidemenu" class="jqueryslidemenu">
<ul>
<li><a href="http://www.dynamicdrive.com">Home </a></li>
<li><a href="#">Members</a></li>
<li><a href="#">Teams</a>
  <ul>
  <li><a href="#">Sub Item 1.1</a></li>
  <li><a href="#">Sub Item 1.2</a></li>
  <li><a href="#">Sub Item 1.3</a></li>
  <li><a href="#">Sub Item 1.4</a></li>
  </ul>
</li>
<li><a href="#">Games</a></li>
<li><a href="#">Volunteers</a>
  <ul>
  <li><a href="#">Sub Item 2.1</a></li>
  <li><a href="#">Folded</a>
    <ul>
    <li><a href="#">Sub Item 2.1.1</a></li>
    <li><a href="#">Sub Item 2.1.2</a></li>
    <li><a href="#">Folder 3.1.1</a>
		<ul>
    		<li><a href="#">Sub Item 3.1.1.1</a></li>
    		<li><a href="#">Sub Item 3.1.1.2</a></li>
    		<li><a href="#">Sub Item 3.1.1.3</a></li>
    		<li><a href="#">Sub Item 3.1.1.4</a></li>
    		<li><a href="#">Sub Item 3.1.1.5</a></li>
		</ul>
    </li>
    <li><a href="#">Sub Item 2.1.4</a></li>
    </ul>
  </li>
  </ul>
</li>
<li><a href="picnic.aspx">Event</a></li>
<li><a href="#">Concessions</a></li>
<li><a href="#">Committees</a></li>
<li><a href="#">Boosters</a></li>
<li><a href="#">Contact Us</a></li>
</ul>
<br style="clear: left" />
</div>

                        </td>
                </tr>
                <tr>
                    <td align="left">
                        <h1>
                            Member Welcome</h1>
                    </td>
                    <td>
                        <asp:Label ID="lblCurrentDate" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui risus, 
                            vehicula nec condimentum ac, rutrum laoreet neque. Nullam ut purus id mauris 
                            tempus accumsan elementum a neque. Fusce sapien lacus, sollicitudin eget 
                            facilisis sed, vestibulum nec nisi. Cum sociis natoque penatibus et magnis dis 
                            parturient montes, nascetur ridiculus mus. Quisque mollis, ligula a tristique 
                            mollis, lectus mauris semper dui, at sagittis leo enim vel mauris. Quisque 
                            tempor urna vitae nisl posuere quis sodales neque ultricies. Vivamus tempor 
                            convallis massa, non tempor est aliquam eget. Praesent ante nisi, auctor vel 
                            porta a, tincidunt vel nulla.
                        </p>
                        <p>
                            Maecenas imperdiet porttitor tortor, ac eleifend sem egestas eget. Vestibulum a 
                            nulla in elit laoreet posuere. Donec ullamcorper, urna eget viverra congue, 
                            ligula nisi pretium elit, molestie tincidunt turpis sapien vitae sapien. Donec 
                            eu mauris mi, sed posuere leo. Donec hendrerit porta massa a cursus. Vestibulum 
                            risus metus, consectetur vel sagittis vel, lacinia ac metus. Integer 
                            sollicitudin, diam ut dapibus porta, risus augue euismod dui, scelerisque 
                            facilisis sapien enim vitae nisl. Phasellus tincidunt sagittis tellus, quis 
                            adipiscing nisl cursus id.
                        </p>
                    </td>
                    <td>
                        <img alt="image" class="style3" src="Images/IMG_0134.JPG" height="150" 
                            width="150" /></td>
                </tr>
                <tr>
                    <td align="left">
                        <p>
                            Donec velit sem, ultrices sed luctus id, scelerisque sit amet dolor. Nunc purus 
                            tortor, ornare non aliquet a, dapibus a nisl. Aliquam sem libero, semper sed 
                            auctor non, fringilla ut dui. Mauris interdum erat eu risus commodo in ornare 
                            dolor semper. Integer volutpat, est nec faucibus egestas, nunc orci tincidunt 
                            tortor, a condimentum est dui quis enim. Sed commodo quam vel mi fermentum vel 
                            bibendum felis gravida. Praesent ultrices augue sit amet enim lobortis varius. 
                            In sit amet enim enim. Vestibulum vel purus eu sapien interdum adipiscing quis 
                            eu enim.
                        </p>
                        <p>
                            Vestibulum luctus est consectetur massa luctus convallis dictum libero 
                            hendrerit. Vivamus vulputate pretium malesuada. Nullam id lacus lectus, nec 
                            malesuada lacus. Morbi ipsum neque, accumsan ut sagittis sit amet, vestibulum 
                            eget metus. Integer congue ante eget purus bibendum ut eleifend felis 
                            scelerisque. Vivamus convallis imperdiet purus, id fringilla massa euismod a. 
                            Praesent convallis interdum facilisis. Vivamus eget pharetra odio. Praesent at 
                            viverra justo. Curabitur tincidunt rhoncus elit quis auctor. Nullam at nibh 
                            urna, fringilla sagittis nulla. Integer in mi augue, at imperdiet enim. Vivamus 
                            sed sapien arcu. Suspendisse a risus ut mauris commodo pellentesque.
                        </p>
                    </td>
                    <td>
                        <img alt="image2" class="style4" src="Images/IMG_8960.JPG" height="150" 
                            width="150" /></td>
                </tr>
                <tr>
                    <td align="left">
                        Nam congue libero ac ligula porttitor ac malesuada arcu ultricies. Duis id diam 
                        pharetra magna gravida sollicitudin. Vestibulum ante ipsum primis in faucibus 
                        orci luctus et ultrices posuere cubilia Curae; Suspendisse magna enim, eleifend 
                        quis fermentum eu, malesuada in leo. Integer at suscipit lectus. Phasellus a 
                        metus non nulla ultrices aliquam. In non tellus dictum lectus tincidunt 
                        molestie. Sed commodo ultrices suscipit. Donec ac rutrum elit. Nam rhoncus 
                        congue tortor ac tristique. Phasellus quam nibh, suscipit vel semper quis, 
                        facilisis ac quam. Quisque dolor ipsum, ultricies hendrerit aliquet ut, faucibus 
                        ut libero.
                    </td>
                    <td>
                        <img alt="image3" class="style5" src="Images/IMG_8975.JPG" height="150" 
                            width="150" /></td>
                </tr>
                <tr>
                    <td colspan="2" align="left">
                        &nbsp;</td>
                </tr>
            </table>
            <div id="footer">
            Soccer Club 2012 | 1000 Chastian Rd, Kennesaw GA 30144 | All Rights Reserved
            
            </div>
            </form>
        </div>
    </div>
</body>
</html>
