<%@ Page Title="" Language="VB" MasterPageFile="Main.master" AutoEventWireup="false" CodeFile="Snorkeling.aspx.vb" Inherits="Snorkeling" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style1
        {
            width: 100%;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h2>
        Snorkeling Gone Wild</h2>
    <p>
        All snorkeling expeditions must have two names - these are partner tours.</p>
    <table cellpadding="0" cellspacing="0" align="center">
        <tr>
            <td>
                Reservation Names:</td>
            <td>
                <asp:TextBox ID="txtName1" runat="server"></asp:TextBox>
            </td>
            <td align="right">
                <asp:TextBox ID="txtName2" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                Select an expedition:
            </td>
            <td>
                <asp:DropDownList ID="ddlExpedition" runat="server">
                    <asp:ListItem>(Select)</asp:ListItem>
                    <asp:ListItem>Reef Hunting</asp:ListItem>
                    <asp:ListItem>Schooner Snorkel</asp:ListItem>
                    <asp:ListItem>Blindmans Snorkel</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td valign="top">
                Optional Equipment:<asp:CheckBoxList ID="chkEquipment" runat="server">
                    <asp:ListItem>Wet Suit</asp:ListItem>
                    <asp:ListItem>Oxygen Tank</asp:ListItem>
                    <asp:ListItem>Mask &amp; Snorkel</asp:ListItem>
                </asp:CheckBoxList>
            </td>
            <td valign="top">
                Daily Tour Times:<br />
                <asp:RadioButtonList ID="rblTime" runat="server">
                    <asp:ListItem>Full Day</asp:ListItem>
                    <asp:ListItem>Half Day</asp:ListItem>
                </asp:RadioButtonList>
            </td>
            <td>
                Summary:<br />
                <asp:ListBox ID="lstSummary" runat="server" Height="110px" Width="159px">
                </asp:ListBox>
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Button ID="btnConfirm" runat="server" Text="Confirm" />
            &nbsp;&nbsp;&nbsp;
                <asp:Button ID="btnCancel" runat="server" Text="Cancel" />
            </td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="lblMessage" runat="server"></asp:Label>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <br />
                <br />
            </td>
        </tr>
    </table>
</asp:Content>

