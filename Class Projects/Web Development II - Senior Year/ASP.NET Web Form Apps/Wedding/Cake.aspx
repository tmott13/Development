<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Cake.aspx.vb" Inherits="Cake" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Wedding Cakes</title>
    <link href="css/wedding.css" rel="stylesheet" type="text/css" />

</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <h1 align="center">
            The Wedding Planner</h1>
        <p align="center">
            <img alt="logo" title="logo" src="images/logo.gif" /></p>
       <p align="center">
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="Default.aspx">Home</asp:HyperLink>
&nbsp;|
            <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="Cake.aspx">Cake</asp:HyperLink>
&nbsp;|
            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="Flowers.aspx">Flowers</asp:HyperLink>
&nbsp;|
            <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="Music.aspx">First Dance</asp:HyperLink>
        </p>
        <p align="center">
            Select your wedding cake from the options below:</p>
        <table cellpadding="0" cellspacing="0" class="cake">
            <tr>
                <td>
                    <asp:RadioButtonList ID="rblCake" runat="server" AutoPostBack="True">
                        <asp:ListItem>Cake1</asp:ListItem>
                        <asp:ListItem>Cake2</asp:ListItem>
                        <asp:ListItem>Cake3</asp:ListItem>
                        <asp:ListItem>Cake4</asp:ListItem>
                    </asp:RadioButtonList>
                </td>
                <td>
                    <asp:Image ID="imgCake" runat="server" Height="200px" Width="200px" />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    Additional Instructions:<br />
&nbsp;<asp:TextBox ID="txtComments" runat="server" Rows="3" TextMode="MultiLine" Width="242px"></asp:TextBox>
                </td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td colspan="2">
                    <asp:Button ID="btnConfirm" runat="server" Text="Confirm" />
                </td>
                <td colspan="2">
                    &nbsp;</td>
            </tr>
            <tr>
                <td colspan="2">
                    <asp:Label ID="lblMessage" runat="server"></asp:Label>
                </td>
                <td colspan="2">
                    &nbsp;</td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
