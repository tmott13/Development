<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>KSU 401k Futures</title>
    <link href="css/futures.css" rel="stylesheet" type="text/css" />

    <style type="text/css">
        .style1 {
            width: 44%;
            background-color: #FDCA00;
            height: 200px;
        }
        .style2
        {
            height: 24px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:ImageButton ID="ImageButton1" runat="server" 
            ImageUrl="~/images/ksu401k.gif" />
        <br />
        <table cellspacing="1" class="style1">
            <tr>
                <td colspan="2" class="style2">
                    <h1 align="center">401k Future Value Calculator</h1></td>
              
            </tr>
            <tr>
                <td>
                    Monthly Investment:</td>
                <td>
                    <asp:DropDownList ID="ddlInvestment" runat="server">
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td>
                    Annual Interest Rate:</td>
                <td>
                    <asp:TextBox ID="txtAnnualRate" runat="server">6.0</asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    Number of years:</td>
                <td>
                    <asp:TextBox ID="txtYears" runat="server">10</asp:TextBox>
                </td>
            </tr>
            <tr>
                <td>
                    Future Value:</td>
                <td>
                    <asp:Label ID="lblValue" runat="server"></asp:Label>
                </td>
            </tr>
            <tr>
                <td>
                    &nbsp;</td>
                <td>
                    Monthly Amount:
                    <asp:Label ID="lblMonths" runat="server"></asp:Label>
                    <br />
                    for
                    <asp:Label ID="lblYears" runat="server"></asp:Label>
&nbsp;years<br />
                    at a
                    <asp:Label ID="lblRate" runat="server"></asp:Label>
                    % rate<br />
                    Total:
                    <asp:Label ID="lblTotal" runat="server"></asp:Label>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <asp:Button ID="btnCalculate" runat="server" Text="Calculate" />
&nbsp;
                    <asp:Button ID="btnClear" runat="server" Text="Clear" />
                </td>
             
            </tr>
        </table>
    
    </div>
    <p>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
            ControlToValidate="txtAnnualRate" Display="Dynamic" 
            ErrorMessage="* Annual Interest Rate is required." ForeColor="Red"></asp:RequiredFieldValidator>
        <asp:RangeValidator ID="RangeValidator1" runat="server" 
            ControlToValidate="txtAnnualRate" Display="Dynamic" 
            ErrorMessage="* Check range for interest rate. (1-20)" ForeColor="Red" 
            MaximumValue="20" MinimumValue="1" Type="Double"></asp:RangeValidator>
        <br />
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
            ControlToValidate="txtYears" Display="Dynamic" 
            ErrorMessage="* Number of years is required." ForeColor="Red"></asp:RequiredFieldValidator>
        <asp:RangeValidator ID="RangeValidator2" runat="server" 
            ControlToValidate="txtYears" Display="Dynamic" 
            ErrorMessage="* Year must be between 1 and 45" ForeColor="Red" 
            MaximumValue="45" MinimumValue="1" Type="Integer"></asp:RangeValidator>
        <br />
    </p>
    <p>
        &nbsp;</p>
    </form>
</body>
</html>
