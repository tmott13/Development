<%@ Page Language="VB" AutoEventWireup="false" CodeFile="picnic.aspx.vb" Inherits="picnic" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .style1
        {
            width: 960px;
        }
    </style>
       <style type="text/css">
        .content 
        {
            padding:10px;
        }
        .style1 
        {
            width:960px;
        }
        #wrapper 
        {
            background-image:url(images/gradient.gif);
        }
        #containter 
        {
            margin-top:10px;
            padding:20px;
            margin-left:auto;
            margin-right:auto;
            width:1080px;
            background-color:blue;
        }
        #footer 
        {
            padding:10px;
            font-size:.75em;
            text-align:center;
            font-style:italic;
        }
        
            
        </style>
    <link rel="stylesheet" type="text/css" href="css/jqueryslidemenu.css" />

<!--[if lte IE 7]>
<style type="text/css">
html .jqueryslidemenu{height: 1%;} /*Holly Hack for IE7 and below*/
    .style6
    {
        width: 1163px;
        height: 300px;
    }
    .style7
    {
        width: 324px;
    }
    .style8
    {
        width: 324px;
        height: 22px;
    }
    .style9
    {
        height: 22px;
    }
    .style10
    {
        width: 324px;
        height: 30px;
    }
    .style11
    {
        height: 30px;
    }
</style>
<![endif]-->

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script type="text/javascript" src="jqueryslidemenu.js"></script>
</head>

<body bgcolor="#cccccc" background="images/gradient.gif">
    <div id="wrapper">
        <div id="container">
    <form id="form1" runat="server">
    <div>
    
        <img alt="logo" class="style6" src="Images/soccerlogo1.gif" /><table align="center" class="style1">
            <tr>
                <td colspan="2">
                    <h1>
                        Soccer Club Spring Fling</h1>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    Sign up for the event of the year:</td>
            </tr>
            <tr>
                <td class="style7">
                    First Name:</td>
                <td>
                    <asp:TextBox ID="txtFirst" runat="server"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                        ControlToValidate="txtFirst" Display="Dynamic" 
                        ErrorMessage="Please enter your first name." ForeColor="Red"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style7">
                    Last Name:</td>
                <td>
                    <asp:TextBox ID="txtLast" runat="server"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                        ControlToValidate="txtLast" Display="Dynamic" 
                        ErrorMessage="Please enter your last name." ForeColor="Red"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style10">
                    Number in Party:</td>
                <td class="style11">
                    <asp:TextBox ID="txtParty" runat="server"></asp:TextBox>
                    <asp:RangeValidator ID="RangeValidator1" runat="server" 
                        ControlToValidate="txtParty" Display="Dynamic" 
                        ErrorMessage="Please enter number from 1-6" ForeColor="Red" MaximumValue="6" 
                        MinimumValue="1"></asp:RangeValidator>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                        ControlToValidate="txtParty" Display="Dynamic" 
                        ErrorMessage="Please enter number in party" ForeColor="Red"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="style7">
                    I am a Vegetarian:</td>
                <td>
                    <asp:CheckBox ID="chkVeggie" runat="server" />
                </td>
            </tr>
            <tr>
                <td class="style7">
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style7">
                    <asp:ValidationSummary ID="ValidationSummary1" runat="server" ForeColor="Red" />
                </td>
                <td>
                    <asp:Button ID="Button1" runat="server" Text="Confirm" />
                </td>
            </tr>
            <tr>
                <td class="style8">
                    </td>
                <td class="style9">
                    </td>
            </tr>
            <tr>
                <td class="style7">
                    &nbsp;</td>
                <td>
                    <asp:Label ID="lblMessage" runat="server"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style7">
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style7">
                    &nbsp;</td>
                <td>
                    &nbsp;</td>
            </tr>
        </table>
        <div id="footer">
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Default.aspx">Home</asp:HyperLink>
&nbsp;<br />
            <br />
        Soccer Club 2012 | 1000 Chastian Rd, Kennesaw GA 30144 | All Rights Reserved 
        </div>
    
    </div>
    </form>
    </div>
    </div>
</body>
</html>
