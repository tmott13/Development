<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Music.aspx.vb" Inherits="Music" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Wedding Music</title>
    <link href="css/wedding.css" rel="stylesheet" type="text/css" />

</head>
<body>
    <form id="form1" runat="server">
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
            Choose your First Dance song from the selections below:</p>
    <table cellpadding="0" cellspacing="0" class="music">
        <tr>
            <td>
                Bride:</td>
            <td>
                <asp:TextBox ID="txtBride" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                Groom:</td>
            <td>
                <asp:TextBox ID="txtGroom" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                Wedding Date:</td>
            <td>
                <asp:Calendar ID="Calendar1" runat="server" BackColor="White" 
                    BorderColor="#3366CC" BorderWidth="1px" CellPadding="1" 
                    DayNameFormat="Shortest" Font-Names="Verdana" Font-Size="8pt" 
                    ForeColor="#003399" Height="200px" Width="220px">
                    <DayHeaderStyle BackColor="#99CCCC" ForeColor="#336666" Height="1px" />
                    <NextPrevStyle Font-Size="8pt" ForeColor="#CCCCFF" />
                    <OtherMonthDayStyle ForeColor="#999999" />
                    <SelectedDayStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                    <SelectorStyle BackColor="#99CCCC" ForeColor="#336666" />
                    <TitleStyle BackColor="#003399" BorderColor="#3366CC" BorderWidth="1px" 
                        Font-Bold="True" Font-Size="10pt" ForeColor="#CCCCFF" Height="25px" />
                    <TodayDayStyle BackColor="#99CCCC" ForeColor="White" />
                    <WeekendDayStyle BackColor="#CCCCFF" />
                </asp:Calendar>
            </td>
        </tr>
        <tr>
            <td>
                Select Your Song:</td>
            <td>
                <asp:DropDownList ID="ddlSong" runat="server">
                    <asp:ListItem>The Way We Were</asp:ListItem>
                    <asp:ListItem>Love is in the Air</asp:ListItem>
                    <asp:ListItem>Let&#39;s Get Married</asp:ListItem>
                </asp:DropDownList>
            </td>
        </tr>
        <tr>
            <td>
                Email Address:</td>
            <td>
                <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
            </td>
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
                <asp:Label ID="lblMessage" runat="server" ForeColor="#9900CC"></asp:Label>
            </td>
            <td colspan="2">
                &nbsp;</td>
        </tr>
    </table>
    </form>
</body>
</html>
