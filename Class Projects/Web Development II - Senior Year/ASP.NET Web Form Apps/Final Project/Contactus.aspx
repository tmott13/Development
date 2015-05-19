<%@ Page Title="Contact Us - NatureCare" Language="VB" MasterPageFile="MasterPage.master" AutoEventWireup="false" CodeFile="Contactus.aspx.vb" Inherits="Contactus" %>

<%-- Add content controls here --%>
<asp:Content ID="Content1" runat="server" contentplaceholderid="head">
    <p>
        <img alt="Contact Us" title="Contact Us" src="images/contact.png" 
            style="width: 411px; height: 58px" /></p>
</asp:Content>
<asp:Content ID="Content2" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">
    <h2>
        Our office is located in Weston, FL:<br />
        3498 Glades Parkway<br />
        Weston, FL 33327<br />
        <br />
        Please fill out the form below to contact us or you can email us at
        <a href="mailto:naturecare@gmail.com">naturecare@gmail.com</a>.</h2>
    <br />
    <table cellpadding="0" cellspacing="0" style="width: 100%">
        <tr>
            <td style="width: 216px">
                First Name:</td>
            <td>
                <asp:TextBox ID="txtFirstName" runat="server" MaxLength="50" 
                    style="margin-left: 0px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                    ControlToValidate="txtFirstName" Display="Dynamic" 
                    ErrorMessage="Please enter your first name." ForeColor="Red" 
                    SetFocusOnError="True">*</asp:RequiredFieldValidator>
&nbsp;<asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                    ControlToValidate="txtFirstName" Display="Dynamic" 
                    ErrorMessage="Enter a valid first name please." ForeColor="Red" 
                    SetFocusOnError="True" ValidationExpression="^[a-zA-Z'.\s]{1,50}$"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="height: 15px; width: 216px">
                Last Name:</td>
            <td style="height: 15px">
                <asp:TextBox ID="txtLastName" runat="server" MaxLength="50"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                    ControlToValidate="txtLastName" Display="Dynamic" 
                    ErrorMessage="Please enter your last name." ForeColor="Red" 
                    SetFocusOnError="True">*</asp:RequiredFieldValidator>
&nbsp;<asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" 
                    ControlToValidate="txtLastName" Display="Dynamic" 
                    ErrorMessage="Enter a valid last name please." ForeColor="Red" 
                    SetFocusOnError="True" ValidationExpression="^[a-zA-Z'.\s]{1,50}$"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 216px">
                Are you currently a member? (Y or N)</td>
            <td>
                <asp:TextBox ID="txtMember" runat="server" MaxLength="1"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                    ControlToValidate="txtMember" Display="Dynamic" 
                    ErrorMessage="Are you a member?" ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
&nbsp;<asp:RegularExpressionValidator ID="RegularExpressionValidator3" runat="server" 
                    ControlToValidate="txtMember" Display="Dynamic" 
                    ErrorMessage="Enter Y or N please." ForeColor="Red" SetFocusOnError="True" 
                    ValidationExpression="^[a-zA-Z'.\s]{1,2}$"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="height: 84px; width: 216px">
                Message (Maximum 150 characters):</td>
            <td style="height: 84px" valign="top">
                <asp:TextBox ID="txtMessage" runat="server" MaxLength="150" Rows="5" 
                    TextMode="MultiLine"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" 
                    ControlToValidate="txtMessage" Display="Dynamic" 
                    ErrorMessage="Please enter a message." ForeColor="Red" SetFocusOnError="True">*</asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator4" runat="server" 
                    ControlToValidate="txtMessage" Display="Dynamic" 
                    ErrorMessage="Enter a valid message please." ForeColor="Red" 
                    SetFocusOnError="True" ValidationExpression="^[a-zA-Z'.\s]{1,150}$"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="height: 22px; width: 216px">
                </td>
            <td style="height: 22px" valign="top">
            </td>
        </tr>
        <tr>
            <td style="width: 216px">
                <asp:Button ID="btnSubmit" runat="server" Text="Submit" />
            </td>
            <td>
                <asp:Button ID="btnClear" runat="server" Text="Clear" />
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 216px">
                <asp:Label ID="lblMessage" runat="server"></asp:Label>
            </td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
    &nbsp; 
    <h2>
        Important Links:</h2>
    <asp:HyperLink ID="HyperLink8" runat="server" 
        NavigateUrl="http://www.nps.gov/ever/index.htm">Everglades National Park</asp:HyperLink>
    <br />
    <asp:HyperLink ID="HyperLink9" runat="server" 
        NavigateUrl="http://www.evergladesplan.org/">The Comprehensive Everglades Restoration Plan</asp:HyperLink>
    <br />
    <asp:HyperLink ID="HyperLink10" runat="server" 
        NavigateUrl="http://www.nwf.org/wildlife/wild-places/everglades.aspx">National Wildlife Federation</asp:HyperLink>
</asp:Content>

