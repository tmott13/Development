<%@ Page Title="" Language="VB" MasterPageFile="Main.master" AutoEventWireup="false" CodeFile="Kayak.aspx.vb" Inherits="Kayak" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style1
        {
            width: 124px;
            height: 100px;
        }
        .style2
        {
            height: 130px;
        }
        .style3
        {
            text-align: left;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    
    <div>
    
        <h2 class="style3">
            Sign up for a Kayak Tour</h2>
        <p>
            <table align="center">
                <tr>
                                <td class="style2">
                
                                    Reservation Name:</td>

                <td class="style2">
                
                    <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                
                </td>
                <td width="100px" class="style2">
                
                    <img alt="Kayak" class="style1" src="images/kayak.png" /></td>
                </tr>
                <tr>
                    <td>
                        Select Tour:<br />
                    </td>
                    <td>
                        <asp:DropDownList ID="ddlTour" runat="server">
                            <asp:ListItem>(Select)</asp:ListItem>
                            <asp:ListItem>Key Largo</asp:ListItem>
                            <asp:ListItem>John Pennekamp</asp:ListItem>
                            <asp:ListItem>Flamingo Park</asp:ListItem>
                            <asp:ListItem>Shoot the Hooch</asp:ListItem>
                            <asp:ListItem>Ducktown</asp:ListItem>
                        </asp:DropDownList>
                    </td>
                    <td align="left">
                        Time of Day:<br />
                        <asp:RadioButtonList ID="rblTourTime" runat="server">
                            <asp:ListItem>Full Day</asp:ListItem>
                            <asp:ListItem>Half Day</asp:ListItem>
                            <asp:ListItem>9-11</asp:ListItem>
                            <asp:ListItem>12-2</asp:ListItem>
                        </asp:RadioButtonList>
                    </td>
                </tr>
                <tr>
                    <td>
                        Optional Equipment:</td>
                    <td>
                        Select Kayak:</td>
                    <td>
                        Customer Summary:</td>
                </tr>
                <tr>
                    <td align="left">
                        <asp:CheckBoxList ID="chkEquipment" runat="server">
                            <asp:ListItem>Expert Paddle</asp:ListItem>
                            <asp:ListItem>Mask&amp;Snorkel</asp:ListItem>
                            <asp:ListItem>Compass</asp:ListItem>
                        </asp:CheckBoxList>
                    </td>
                    <td>
                        <asp:ListBox ID="lstKayak" runat="server" Width="185px" Height="96px">
                            <asp:ListItem>Owner Supply</asp:ListItem>
                            <asp:ListItem>Solo Touring</asp:ListItem>
                            <asp:ListItem>Tandem Touring</asp:ListItem>
                            <asp:ListItem>Solo Recreational</asp:ListItem>
                            <asp:ListItem>Tandem Recreational</asp:ListItem>
                        </asp:ListBox>
                    </td>
                    <td>
                        <asp:ListBox ID="lstSummary" runat="server" Height="110px" Width="166px">
                        </asp:ListBox>
                    </td>
                </tr>
                <tr>
                <td colspan="3">
    <asp:Button ID="btnConfirm" runat="server" Text="Confirm" Height="25px" />
    &nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="btnCancel" runat="server" Text="Cancel" />
    &nbsp;&nbsp; 
                    <br />
                    <br />
                    <asp:Label ID="lblMessage" runat="server"></asp:Label>
                    </td></tr>
            </table>
        </p>
    
    </div>
    
    
</asp:Content>

