<%@ Page Title="Events - NatureCare" Language="VB" MasterPageFile="MasterPage.master" AutoEventWireup="false" CodeFile="Events.aspx.vb" Inherits="Events" %>

<%-- Add content controls here --%>
<asp:Content ID="Content1" runat="server" contentplaceholderid="head">
    <p>
        <img alt="Events" title="Events" src="images/events.png" 
            style="width: 280px; height: 58px" /></p>
</asp:Content>
<asp:Content ID="Content2" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">
    <h1>
        Check out our upcoming events:</h1>
    <p>
        <strong>Everglades Cleanup Mission Trip: Section 1</strong><br />
        May 25, 2013<br />
        9:00am - 4:00pm<br />
        Come join us as we clean up a section one of the everglades!<br />
        Event ID: 1</p>
    <p>
        <strong>Everglades Cleanup Mission Trip: Section 2</strong><br />
        June 8, 2013<br />
        9:00am - 4:00pm<br />
        Come join us as we clean up a section two of the everglades!<br />
        Event ID: 2</p>
    <p>
        <strong>Everglades Bake Sale Fundraiser </strong>
        <br />
        June 15, 2013<br />
        2:00pm - 5:00pm<br />
        Come join us for a bake sale to raise money for Everglades awareness and 
        clean-up missions.<br />
        Event ID: 3</p>
    <p>
        <strong>Everglades Cleanup Mission Trip: Section 3</strong><br />
        June 29, 2013<br />
        9:00am - 4:00pm<br />
        Come join us as we clean up a section three of the everglades!<br />
        Event ID: 4</p>
    <p>
        <strong>Everglades Cleanup Mission Trip: Section 4</strong><br />
        July 
        6, 2013<br />
        9:00am - 4:00pm<br />
        Come join us as we clean up a section four of the everglades!<br />
        Event ID: 5</p>
    <p>
        <strong>Everglades Bake Sale Fundraiser </strong>
        <br />
        July 13, 2013<br />
        2:00pm - 5:00pm<br />
        Come join us for a bake sale to raise money for Everglades awareness and 
        clean-up missions.<br />
        Event ID: 6</p>
    <p>
        <strong>Everglades Cleanup Mission Trip: Section 5</strong><br />
        July 20, 2013<br />
        9:00am - 4:00pm<br />
        Come join us as we clean up a section 
        five of the everglades!<br />
        Event ID: 7</p>
    <p>
        <strong>Everglades Cleanup Mission Trip: Section 6</strong><br />
        July 
        27, 2013<br />
        9:00am - 4:00pm<br />
        Come join us as we clean up a section six of the everglades!<br />
        Event ID: 8</p>
    <p>
        <strong>Everglades Bake Sale Fundraiser </strong>
        <br />
        August 3, 2013<br />
        2:00pm - 5:00pm<br />
        Come join us for a bake sale to raise money for Everglades awareness and 
        clean-up missions.<br />
        Event ID: 9</p>
    <p>
        <strong>Everglades Cleanup Mission Trip: Section 7</strong><br />
        August 10, 2013<br />
        9:00am - 4:00pm<br />
        Come join us as we clean up a section seven of the everglades!<br />
        Event ID: 10</p>
    <p>
        &nbsp;</p>
    <h1>
        Sign up for an event!</h1>
    <p>
        <em>Must be a member to sign up.</em></p>
    <p>
        <asp:FormView ID="FormView1" runat="server" DataKeyNames="RSVPID" 
            DataSourceID="ObjectDataSource1" BackColor="White" BorderColor="#3366CC" 
            BorderStyle="None" BorderWidth="1px" CellPadding="4" GridLines="Both">
            <EditItemTemplate>
                RSVPID:
                <asp:Label ID="RSVPIDLabel1" runat="server" Text='<%# Eval("RSVPID") %>' />
                <br />
                FirstName:
                <asp:TextBox ID="FirstNameTextBox" runat="server" 
                    Text='<%# Bind("FirstName") %>' />
                <br />
                LastName:
                <asp:TextBox ID="LastNameTextBox" runat="server" 
                    Text='<%# Bind("LastName") %>' />
                <br />
                EventID:
                <asp:TextBox ID="EventIDTextBox" runat="server" Text='<%# Bind("EventID") %>' />
                <br />
                MemberID:
                <asp:TextBox ID="MemberIDTextBox" runat="server" 
                    Text='<%# Bind("MemberID") %>' />
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
                EventID:
                <asp:TextBox ID="EventIDTextBox" runat="server" Text='<%# Bind("EventID") %>' />
                <br />
                MemberID:
                <asp:TextBox ID="MemberIDTextBox" runat="server" 
                    Text='<%# Bind("MemberID") %>' />
                <br />
                <asp:LinkButton ID="InsertButton" runat="server" CausesValidation="True" 
                    CommandName="Insert" Text="Insert" />
                &nbsp;<asp:LinkButton ID="InsertCancelButton" runat="server" 
                    CausesValidation="False" CommandName="Cancel" Text="Cancel" />
            </InsertItemTemplate>
            <ItemTemplate>
                RSVPID:
                <asp:Label ID="RSVPIDLabel" runat="server" Text='<%# Eval("RSVPID") %>' />
                <br />
                FirstName:
                <asp:Label ID="FirstNameLabel" runat="server" Text='<%# Bind("FirstName") %>' />
                <br />
                LastName:
                <asp:Label ID="LastNameLabel" runat="server" Text='<%# Bind("LastName") %>' />
                <br />
                EventID:
                <asp:Label ID="EventIDLabel" runat="server" Text='<%# Bind("EventID") %>' />
                <br />
                MemberID:
                <asp:Label ID="MemberIDLabel" runat="server" Text='<%# Bind("MemberID") %>' />
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
            TypeName="DataSet1TableAdapters.RSVPEventsTableAdapter" UpdateMethod="Update">
            <DeleteParameters>
                <asp:Parameter Name="Original_RSVPID" Type="Int32" />
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="FirstName" Type="String" />
                <asp:Parameter Name="LastName" Type="String" />
                <asp:Parameter Name="EventID" Type="Int32" />
                <asp:Parameter Name="MemberID" Type="Int32" />
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="FirstName" Type="String" />
                <asp:Parameter Name="LastName" Type="String" />
                <asp:Parameter Name="EventID" Type="Int32" />
                <asp:Parameter Name="MemberID" Type="Int32" />
                <asp:Parameter Name="Original_RSVPID" Type="Int32" />
            </UpdateParameters>
        </asp:ObjectDataSource>
    </p>
    <p>
        &nbsp;</p>
    <p>
        &nbsp;</p>
&nbsp;
</asp:Content>

