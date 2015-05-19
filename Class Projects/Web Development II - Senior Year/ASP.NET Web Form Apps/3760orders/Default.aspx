<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>KSU Orders</title>
    <style type="text/css">
        .style1
        {
            font-family: Arial;
        }
        .style2
        {
            text-align: left;
            color: #FF9933;
        }
        .style3
        {
            width: 53%;
            height: 313px;
            color: #FF9933;
        }
        .style4
        {
            height: 18px;
        }
        .style5
        {
            height: 73px;
        }
        .style6
        {
            height: 22px;
        }
        .style7
        {
            text-align: center;
            color: #FF9933;
        }
    </style>
</head>
<body bgcolor="#ff3300">
    <form id="form1" runat="server">
    <div class="style1">
    
        <h1 class="style7">
            KSU Orders</h1>
        <p class="style2">
            <table align="center" cellpadding="0" cellspacing="0" class="style3">
                <tr>
                    <td>
                        Name:</td>
                    <td>
                        <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                            ControlToValidate="txtName" ErrorMessage="Name is required." ForeColor="Yellow">*</asp:RequiredFieldValidator>
                        <asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" 
                            ControlToValidate="txtName" ErrorMessage="Please enter a valid name." 
                            ForeColor="Yellow" ValidationExpression="^[a-zA-Z'.\s]{1,40}$"></asp:RegularExpressionValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                        Address:</td>
                    <td>
                        <asp:TextBox ID="txtAddress" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        City:</td>
                    <td>
                        <asp:TextBox ID="txtCity" runat="server"></asp:TextBox>
                        <asp:RegularExpressionValidator ID="RegularExpressionValidator4" runat="server" 
                            ControlToValidate="txtCity" Display="Dynamic" 
                            ErrorMessage="Please enter a valid city." ForeColor="Yellow" 
                            ValidationExpression="^[a-zA-Z'.\s]{1,40}$"></asp:RegularExpressionValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                        State:</td>
                    <td>
                        <asp:TextBox ID="txtState" runat="server" MaxLength="2" Width="36px"></asp:TextBox>
                        <asp:RegularExpressionValidator ID="RegularExpressionValidator5" runat="server" 
                            ControlToValidate="txtState" Display="Dynamic" 
                            ErrorMessage="Please enter a valid state." ForeColor="Yellow" 
                            ValidationExpression="^[a-zA-Z'.\s]{1,40}$"></asp:RegularExpressionValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                        Zip Code:</td>
                    <td>
                        <asp:TextBox ID="txtZip" runat="server" MaxLength="5" Width="80px"></asp:TextBox>
                        <asp:RegularExpressionValidator ID="RegularExpressionValidator6" runat="server" 
                            ControlToValidate="txtZip" Display="Dynamic" 
                            ErrorMessage="Please enter a valid zip code." ForeColor="Yellow" 
                            ValidationExpression="\d{5}(-\d{4})?"></asp:RegularExpressionValidator>
                    </td>
                </tr>
                <tr>
                    <td class="style6">
                        Phone Number:<br />
                        (xxx)xxx-xxxx or xxx-xxx-xxxx</td>
                    <td class="style6">
                        <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                            ControlToValidate="txtPhone" ErrorMessage="Phone number is required." 
                            ForeColor="Yellow">*</asp:RequiredFieldValidator>
                        <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                            ControlToValidate="txtPhone" Display="Dynamic" 
                            ErrorMessage="Please enter a valid phone number." ForeColor="Yellow" 
                            ValidationExpression="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"></asp:RegularExpressionValidator>
                    </td>
                </tr>
                <tr>
                    <td>
                        Product:</td>
                    <td>
                        <asp:DropDownList ID="ddlProduct" runat="server" AutoPostBack="True">
                            <asp:ListItem>[Select]</asp:ListItem>
                            <asp:ListItem>Pencils</asp:ListItem>
                            <asp:ListItem>Pens</asp:ListItem>
                            <asp:ListItem>Highlighters</asp:ListItem>
                            <asp:ListItem>Binder</asp:ListItem>
                            <asp:ListItem>Car decal</asp:ListItem>
                            <asp:ListItem>KSU Mug</asp:ListItem>
                            <asp:ListItem>KSU Frame</asp:ListItem>
                        </asp:DropDownList>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                            ControlToValidate="ddlProduct" ErrorMessage="Please select a product." 
                            ForeColor="Yellow">*</asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="style4">
                        Price:</td>
                    <td class="style4">
                        <asp:Label ID="lblPrice" runat="server"></asp:Label>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:</td>
                    <td>
                        <asp:TextBox ID="txtQuant" runat="server" MaxLength="2" Width="36px"></asp:TextBox>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" 
                            ControlToValidate="txtQuant" ErrorMessage="Please enter the quantity." 
                            ForeColor="Yellow">*</asp:RequiredFieldValidator>
                    </td>
                </tr>
                <tr>
                    <td class="style5">
                    </td>
                    <td class="style5">
                        <asp:ListBox ID="lbSummary" runat="server" Height="174px" Width="197px">
                        </asp:ListBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Button ID="btnCalculate" runat="server" Text="Calculate Order" 
                            ToolTip="Calculate Order" />
                    </td>
                    <td align="center">
                        <asp:Button ID="btnConfirm" runat="server" Text="Confirm" ToolTip="Confirm" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:Label ID="lblConfirm" runat="server"></asp:Label>
                    </td>
                    <td align="center" colspan="2">
                        &nbsp;</td>
                </tr>
            </table>
        </p>
        <asp:ValidationSummary ID="ValidationSummary1" runat="server" 
            ForeColor="Yellow" style="margin-left: 165px" Width="244px" />
        <p>
            <br />
        </p>
    
    </div>
    </form>
</body>
</html>
