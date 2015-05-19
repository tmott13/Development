<%@ Page Title="" Language="VB" MasterPageFile="Main.master" AutoEventWireup="false" CodeFile="Reservation.aspx.vb" Inherits="Reservation" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    </asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h1>
        Royal Inn &amp; Suites</h1>
    <h2>
        Where you&#39;re always treated like royalty.</h2>
    <table cellpadding="0" cellspacing="0" width="60%">
        <tr>
            <td valign="top">
                Arrival Date:
                <asp:TextBox ID="txtDate" runat="server"></asp:TextBox>
                <asp:ImageButton ID="ImageButton1" runat="server" 
                    ImageUrl="images/Calendar.bmp" />
            </td>
            <td>
                <asp:Calendar ID="Calendar1" runat="server" BackColor="White" 
                    BorderColor="#3366CC" BorderWidth="1px" CellPadding="1" 
                    DayNameFormat="Shortest" Font-Names="Verdana" Font-Size="8pt" 
                    ForeColor="#003399" Height="200px" Width="220px" Visible="False">
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
                Number of Nights: 
                <asp:TextBox ID="txtNights" runat="server" Width="38px"></asp:TextBox>
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                Number of Adults:
                <asp:DropDownList ID="ddlAdult" runat="server">
                    <asp:ListItem>1</asp:ListItem>
                    <asp:ListItem>2</asp:ListItem>
                    <asp:ListItem>3</asp:ListItem>
                    <asp:ListItem>4</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                Number of Children:
                <asp:DropDownList ID="ddlChild" runat="server">
                    <asp:ListItem>0</asp:ListItem>
                    <asp:ListItem>1</asp:ListItem>
                    <asp:ListItem>2</asp:ListItem>
                    <asp:ListItem>3</asp:ListItem>
                    <asp:ListItem>4</asp:ListItem>
                </asp:DropDownList>
            </td>
        </tr>
    </table>
    <h3>
&nbsp;Preferences</h3>
    <p>
        Room type: 
        <asp:RadioButtonList ID="rblRoomType" runat="server" RepeatColumns="3">
            <asp:ListItem>Business</asp:ListItem>
            <asp:ListItem>Suite</asp:ListItem>
            <asp:ListItem Selected="True">Standard</asp:ListItem>
        </asp:RadioButtonList>
    </p>
    <p>
        Bed type:
        <asp:RadioButtonList ID="rblBedType" runat="server" RepeatColumns="2">
            <asp:ListItem Selected="True">King</asp:ListItem>
            <asp:ListItem>Double</asp:ListItem>
        </asp:RadioButtonList>
    </p>
    <p>
        <asp:CheckBox ID="chkSmoking" runat="server" Text="Smoking" />
    </p>
    <p>
        Special Requests:<br />
&nbsp;<asp:TextBox ID="txtRequests" runat="server" Rows="3" TextMode="MultiLine"></asp:TextBox>
    </p>
    <h3>
        Contact Information</h3>
    <p>
        Name:
        <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
    </p>
    <p>
        Email:
        <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:Button ID="btnSubmit" runat="server" Text="Submit" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="btnClear" runat="server" Text="Clear" />
    </p>
    <p>
        <asp:Label ID="lblMessage" runat="server"></asp:Label>
    </p>
</asp:Content>

