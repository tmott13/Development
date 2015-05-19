<%@ Page Title="Join - NatureCare" Language="VB" MasterPageFile="MasterPage.master" AutoEventWireup="false" CodeFile="Join.aspx.vb" Inherits="Join" %>

<%-- Add content controls here --%>
<asp:Content ID="Content1" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">
    <table cellpadding="0" cellspacing="0" style="width: 100%" border="0">
        <tr>
            <td style="width: 166px">
                First Name:</td>
            <td>
                <asp:TextBox ID="txtFirstName" runat="server" MaxLength="50"></asp:TextBox>
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
            <td style="width: 166px">
                Last Name:</td>
            <td>
                <asp:TextBox ID="txtLastName" runat="server" MaxLength="50"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                    ControlToValidate="txtLastName" Display="Dynamic" 
                    ErrorMessage="Please enter your last name." ForeColor="Red" 
                    SetFocusOnError="True">*</asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" 
                    ControlToValidate="txtLastName" Display="Dynamic" 
                    ErrorMessage="Enter a valid last name please." ForeColor="Red" 
                    SetFocusOnError="True" ValidationExpression="^[a-zA-Z'.\s]{1,50}$"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 166px">
                Address:</td>
            <td>
                <asp:TextBox ID="txtAddress" runat="server" MaxLength="50"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td style="width: 166px">
                City:</td>
            <td>
                <asp:TextBox ID="txtCity" runat="server" MaxLength="50"></asp:TextBox>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator3" runat="server" 
                    ControlToValidate="txtCity" Display="Dynamic" 
                    ErrorMessage="Enter a valid city please." ForeColor="Red" 
                    SetFocusOnError="True" ValidationExpression="^[a-zA-Z'.\s]{1,50}$"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 166px">
                State:</td>
            <td>
                <asp:TextBox ID="txtState" runat="server" MaxLength="2"></asp:TextBox>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator4" runat="server" 
                    ControlToValidate="txtState" Display="Dynamic" 
                    ErrorMessage="Enter a valid state please." ForeColor="Red" 
                    SetFocusOnError="True" ValidationExpression="^[a-zA-Z'.\s]{1,50}$"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 166px">
                Zip Code:</td>
            <td>
                <asp:TextBox ID="txtZip" runat="server" MaxLength="5"></asp:TextBox>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator5" runat="server" 
                    ControlToValidate="txtZip" Display="Dynamic" 
                    ErrorMessage="Enter a valid zip code please." ForeColor="Red" 
                    SetFocusOnError="True" ValidationExpression="\d{5}(-\d{4})?"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 166px">
                Phone Number (only numbers):</td>
            <td>
                <asp:TextBox ID="txtPhone" runat="server" MaxLength="10"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td style="width: 166px">
                Email Address:</td>
            <td>
                <asp:TextBox ID="txtEmail" runat="server" MaxLength="50"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" 
                    ControlToValidate="txtEmail" Display="Dynamic" 
                    ErrorMessage="Please enter your email address." ForeColor="Red" 
                    SetFocusOnError="True">*</asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator6" runat="server" 
                    ControlToValidate="txtEmail" Display="Dynamic" 
                    ErrorMessage="Enter a valid email address please." ForeColor="Red" 
                    SetFocusOnError="True" 
                    ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td style="width: 166px">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td style="width: 166px">
                <asp:Button ID="btnSubmit" runat="server" Text="Submit" />
            </td>
            <td>
                <asp:Button ID="btnClear" runat="server" Text="Clear" />
            </td>
        </tr>
        <tr>
            <td style="width: 166px">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:Label ID="lblMessage" runat="server"></asp:Label>
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td colspan="2">
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
    <h1>
        To update your information, please click on your Member ID (same as page number) 
        below and click &quot;update&quot;. Thank you for your continued support!</h1>
    <p>
        <asp:FormView ID="FormView1" runat="server" AllowPaging="True" 
            DataKeyNames="MemberID" DataSourceID="ObjectDataSource1" BackColor="White" 
            BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4" 
            GridLines="Both">
            <EditItemTemplate>
                MemberID:
                <asp:Label ID="MemberIDLabel1" runat="server" Text='<%# Eval("MemberID") %>' />
                <br />
                FirstName:
                <asp:TextBox ID="FirstNameTextBox" runat="server" 
                    Text='<%# Bind("FirstName") %>' />
                <br />
                LastName:
                <asp:TextBox ID="LastNameTextBox" runat="server" 
                    Text='<%# Bind("LastName") %>' />
                <br />
                Address:
                <asp:TextBox ID="AddressTextBox" runat="server" Text='<%# Bind("Address") %>' />
                <br />
                City:
                <asp:TextBox ID="CityTextBox" runat="server" Text='<%# Bind("City") %>' />
                <br />
                State:
                <asp:TextBox ID="StateTextBox" runat="server" Text='<%# Bind("State") %>' />
                <br />
                ZipCode:
                <asp:TextBox ID="ZipCodeTextBox" runat="server" Text='<%# Bind("ZipCode") %>' />
                <br />
                PhoneNumber:
                <asp:TextBox ID="PhoneNumberTextBox" runat="server" 
                    Text='<%# Bind("PhoneNumber") %>' />
                <br />
                EmailAddress:
                <asp:TextBox ID="EmailAddressTextBox" runat="server" 
                    Text='<%# Bind("EmailAddress") %>' />
                <br />
                <asp:LinkButton ID="UpdateButton" runat="server" CausesValidation="True" 
                    CommandName="Update" Text="Update" />
                &nbsp;<asp:LinkButton ID="UpdateCancelButton" runat="server" 
                    CausesValidation="False" CommandName="Cancel" Text="Cancel" />
            </EditItemTemplate>
            <EditRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
            <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
            <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
            <InsertItemTemplate>
                FirstName:
                <asp:TextBox ID="FirstNameTextBox" runat="server" 
                    Text='<%# Bind("FirstName") %>' />
                <br />
                LastName:
                <asp:TextBox ID="LastNameTextBox" runat="server" 
                    Text='<%# Bind("LastName") %>' />
                <br />
                Address:
                <asp:TextBox ID="AddressTextBox" runat="server" Text='<%# Bind("Address") %>' />
                <br />
                City:
                <asp:TextBox ID="CityTextBox" runat="server" Text='<%# Bind("City") %>' />
                <br />
                State:
                <asp:TextBox ID="StateTextBox" runat="server" Text='<%# Bind("State") %>' />
                <br />
                ZipCode:
                <asp:TextBox ID="ZipCodeTextBox" runat="server" Text='<%# Bind("ZipCode") %>' />
                <br />
                PhoneNumber:
                <asp:TextBox ID="PhoneNumberTextBox" runat="server" 
                    Text='<%# Bind("PhoneNumber") %>' />
                <br />
                EmailAddress:
                <asp:TextBox ID="EmailAddressTextBox" runat="server" 
                    Text='<%# Bind("EmailAddress") %>' />
                <br />
                <asp:LinkButton ID="InsertButton" runat="server" CausesValidation="True" 
                    CommandName="Insert" Text="Insert" />
                &nbsp;<asp:LinkButton ID="InsertCancelButton" runat="server" 
                    CausesValidation="False" CommandName="Cancel" Text="Cancel" />
            </InsertItemTemplate>
            <ItemTemplate>
                MemberID:
                <asp:Label ID="MemberIDLabel" runat="server" Text='<%# Eval("MemberID") %>' />
                <br />
                FirstName:
                <asp:Label ID="FirstNameLabel" runat="server" Text='<%# Bind("FirstName") %>' />
                <br />
                LastName:
                <asp:Label ID="LastNameLabel" runat="server" Text='<%# Bind("LastName") %>' />
                <br />
                Address:
                <asp:Label ID="AddressLabel" runat="server" Text='<%# Bind("Address") %>' />
                <br />
                City:
                <asp:Label ID="CityLabel" runat="server" Text='<%# Bind("City") %>' />
                <br />
                State:
                <asp:Label ID="StateLabel" runat="server" Text='<%# Bind("State") %>' />
                <br />
                ZipCode:
                <asp:Label ID="ZipCodeLabel" runat="server" Text='<%# Bind("ZipCode") %>' />
                <br />
                PhoneNumber:
                <asp:Label ID="PhoneNumberLabel" runat="server" 
                    Text='<%# Bind("PhoneNumber") %>' />
                <br />
                EmailAddress:
                <asp:Label ID="EmailAddressLabel" runat="server" 
                    Text='<%# Bind("EmailAddress") %>' />
                <br />
                <asp:LinkButton ID="EditButton" runat="server" CausesValidation="False" 
                    CommandName="Edit" Text="Edit" />
                &nbsp;<asp:LinkButton ID="DeleteButton" runat="server" CausesValidation="False" 
                    CommandName="Delete" Text="Delete" />
                &nbsp;<asp:LinkButton ID="NewButton" runat="server" CausesValidation="False" 
                    CommandName="New" Text="New" />
            </ItemTemplate>
            <PagerStyle BackColor="#99CCCC" ForeColor="#003399" HorizontalAlign="Left" />
            <RowStyle BackColor="White" ForeColor="#003399" />
        </asp:FormView>
        <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" 
            DeleteMethod="Delete" InsertMethod="Insert" 
            OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" 
            TypeName="DataSet1TableAdapters.MembersTableAdapter" UpdateMethod="Update">
            <DeleteParameters>
                <asp:Parameter Name="Original_MemberID" Type="Int32" />
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="FirstName" Type="String" />
                <asp:Parameter Name="LastName" Type="String" />
                <asp:Parameter Name="Address" Type="String" />
                <asp:Parameter Name="City" Type="String" />
                <asp:Parameter Name="State" Type="String" />
                <asp:Parameter Name="ZipCode" Type="String" />
                <asp:Parameter Name="PhoneNumber" Type="String" />
                <asp:Parameter Name="EmailAddress" Type="String" />
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="FirstName" Type="String" />
                <asp:Parameter Name="LastName" Type="String" />
                <asp:Parameter Name="Address" Type="String" />
                <asp:Parameter Name="City" Type="String" />
                <asp:Parameter Name="State" Type="String" />
                <asp:Parameter Name="ZipCode" Type="String" />
                <asp:Parameter Name="PhoneNumber" Type="String" />
                <asp:Parameter Name="EmailAddress" Type="String" />
                <asp:Parameter Name="Original_MemberID" Type="Int32" />
            </UpdateParameters>
        </asp:ObjectDataSource>
    </p>
</asp:Content>
<asp:Content ID="Content2" runat="server" contentplaceholderid="head">
    <p>
    <img alt="Join Nature Care" title="Join NatureCare" src="images/join.png" 
        style="width: 204px; height: 73px" /></p>
    <h1>
        <strong>Please fill out the form below to become a member.</strong></h1>
</asp:Content>

