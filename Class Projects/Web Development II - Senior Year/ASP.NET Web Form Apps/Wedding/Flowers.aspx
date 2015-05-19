<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Flowers.aspx.vb" Inherits="Flowers" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Wedding Bouqets</title>
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
            <asp:HyperLink ID="Hyperlink2" runat="server" NavigateUrl="Cake.aspx">Cake</asp:HyperLink>
&nbsp;|
            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="Flowers.aspx">Flowers</asp:HyperLink>
&nbsp;|
            <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="Music.aspx">First Dance</asp:HyperLink>
        </p>
        <p align="center">
            Select your flowers for the wedding:</p>
        <table cellpadding="0" cellspacing="0" class="flowers">
            <tr>
                <td>
                    Select two styles for your Groom &amp; Groomsman:</td>
                <td>
                    Select two styles for your Bride &amp; Bridesmaids:</td>
            </tr>
            <tr>
                <td>
                    <asp:CheckBoxList ID="chkGroom" runat="server" AutoPostBack="True">
                        <asp:ListItem>Groom Flowers 1</asp:ListItem>
                        <asp:ListItem>Groom Flowers 2</asp:ListItem>
                        <asp:ListItem>Groom Flowers 3</asp:ListItem>
                        <asp:ListItem>Groom Flowers 4</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
                <td>
                    <asp:CheckBoxList ID="chkBride" runat="server" AutoPostBack="True">
                        <asp:ListItem>Bride Flowers 1</asp:ListItem>
                        <asp:ListItem>Bride Flowers 2</asp:ListItem>
                        <asp:ListItem>Bride Flowers 3</asp:ListItem>
                        <asp:ListItem>Bride Flowers 4</asp:ListItem>
                    </asp:CheckBoxList>
                </td>
            </tr>
            <tr>
                <td>
                    <asp:Image ID="imgGroom1" runat="server" Height="200px" Width="200px" />
                    <asp:Image ID="imgGroom2" runat="server" Height="200px" Width="200px" />
                </td>
                <td>
                    <asp:Image ID="imgBride1" runat="server" Height="200px" Width="200px" />
                    <asp:Image ID="imgBride2" runat="server" Height="200px" Width="200px" />
                </td>
            </tr>
            <tr>
                <td>
                    Additional Instructions:<br />
                    <asp:TextBox ID="txtGroomComments" runat="server" Rows="3" TextMode="MultiLine" 
                        Width="253px"></asp:TextBox>
                </td>
                <td>
                    Additional Instructions:<br />
                    <asp:TextBox ID="txtBrideComments" runat="server" Rows="3" TextMode="MultiLine" 
                        Width="253px"></asp:TextBox>
                </td>
            </tr>

            <tr>
            <td>
            
                Please select your delivery date:<br />
                Delivery Date:
                <asp:TextBox ID="txtDelivery" runat="server"></asp:TextBox>
&nbsp;<asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="images/Calendar.bmp" />
                <br />
                <asp:Calendar ID="Calendar1" runat="server" Visible="False"></asp:Calendar>
            
            </td>
            <td>
            
            </td>
            </tr>
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
