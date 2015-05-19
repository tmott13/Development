<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>KSU Tours 2013</title>

    <link href="CSS/ksutours.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .style1
        {
            text-align: left;
        }
        .style2
        {
            text-align: center;
        }
        .style4
        {
            width: 258px;
        }
        .style5
        {
            width: 221px;
        }
        .style6
        {
            width: 176px;
        }
        .style7
        {
            width: 176px;
            height: 28px;
        }
        .style8
        {
            width: 221px;
            height: 28px;
        }
        .style9
        {
            width: 258px;
            height: 28px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <h1 align="center" class="style2">
            KSU Tours 2013</h1>
        <p class="style1">
            <table style="width:700px;" align="center">
                <tr>
                    <td class="style7">
                        Select Tour:<br />
                    </td>
                    <td class="style8">
                        <asp:DropDownList ID="ddlTours" runat="server">
                            <asp:ListItem>(Select)</asp:ListItem>
                            <asp:ListItem>Key Largo</asp:ListItem>
                            <asp:ListItem>John Pennekamp</asp:ListItem>
                            <asp:ListItem>Flamingo Park</asp:ListItem>
                            <asp:ListItem>Shoot the Hooch</asp:ListItem>
                            <asp:ListItem>Ducktown</asp:ListItem>
                        </asp:DropDownList>
                    </td>
                    <td class="style9">
                        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Reservations.aspx">Reservations</asp:HyperLink>
                    </td>
                </tr>
                <tr>
                    <td class="style6">
                        Optional Equipment:</td>
                    <td class="style5">
                        Select Kayak:</td>
                    <td class="style4">
                        Customer Summary:</td>
                </tr>
                <tr>
                    <td class="style6">
                        <asp:CheckBoxList ID="chkEquipment" runat="server">
                            <asp:ListItem>Expert Paddle</asp:ListItem>
                            <asp:ListItem>Mask&amp;Snorkel</asp:ListItem>
                            <asp:ListItem>Compass</asp:ListItem>
                        </asp:CheckBoxList>
                    </td>
                    <td class="style5">
                        <asp:ListBox ID="lstKayak" runat="server" Width="185px" Height="96px">
                            <asp:ListItem>Owner Supply</asp:ListItem>
                            <asp:ListItem>Solo Touring</asp:ListItem>
                            <asp:ListItem>Tandem Touring</asp:ListItem>
                            <asp:ListItem>Solo Recreational</asp:ListItem>
                            <asp:ListItem>Tandem Recreational</asp:ListItem>
                        </asp:ListBox>
                    </td>
                    <td class="style4">
                        <asp:ListBox ID="lstSummary" runat="server" Height="110px" Width="256px">
                        </asp:ListBox>
                    </td>
                </tr>
                <tr>
                <td colspan="3">
    <asp:Button ID="btnConfirm" runat="server" Text="Confirm" Height="25px" />
    &nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="btnCancel" runat="server" Text="Cancel" />
    &nbsp;&nbsp; </td></tr>
            </table>
        </p>
    
    </div>
    <p>
        &nbsp;</p>
    </form>
</body>
</html>
