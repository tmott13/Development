<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Wedding Planner</title>
    <link href="css/wedding.css" rel="stylesheet" type="text/css" /> 
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <h1 align="center">
            The
            Wedding Planner</h1>
        <p align="center">
            <img alt="Wedding DJ" title="Wedding DJ" src="images/logo.gif" /></p>
        <p align="center">
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="Default.aspx">Home</asp:HyperLink>
&nbsp;|
            <asp:HyperLink ID="Hyperlink2" runat="server" NavigateUrl="Cake.aspx">Cake</asp:HyperLink>
&nbsp;|
            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="Flowers.aspx">Flowers</asp:HyperLink>
&nbsp;|
            <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="Music.aspx">First Dance</asp:HyperLink>
        </p>
        <p align="center">
            <img alt="chapel" title="chapel" src="images/alto-vista-chapel.jpg" /></p>
    
    </div>
    </form>
</body>
</html>
