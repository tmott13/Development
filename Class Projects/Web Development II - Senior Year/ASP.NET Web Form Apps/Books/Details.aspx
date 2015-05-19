<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Details.aspx.vb" Inherits="Details" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Author Details</title>
    <style type="text/css">
        .style1
        {
            font-family: Batang;
            color: #660066;
        }
        .style2
        {
            font-family: "Century Gothic";
            color: #3366CC;
        }
    </style>
</head>
<body bgcolor="#cc99ff">
    <form id="form1" runat="server">
    <div>
    
        <h1 class="style1">
            Author Details</h1>
        <p>
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="Default.aspx" 
                CssClass="style2">Home</asp:HyperLink>
            <span class="style2">&nbsp;|
            </span>
            <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="Details.aspx" 
                CssClass="style2">Author Details</asp:HyperLink>
            <span class="style2">&nbsp;|
            </span>
            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="Books.aspx" 
                CssClass="style2">Book Information</asp:HyperLink>
        </p>
        <p>
            <asp:DetailsView ID="DetailsView1" runat="server" AllowPaging="True" 
                AutoGenerateRows="False" DataKeyNames="AuthorID" 
                DataSourceID="ObjectDataSource1" Height="50px" Width="125px" 
                BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" 
                CellPadding="4">
                <EditRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                <Fields>
                    <asp:BoundField DataField="AuthorID" HeaderText="AuthorID" 
                        InsertVisible="False" ReadOnly="True" SortExpression="AuthorID" />
                    <asp:BoundField DataField="FirstName" HeaderText="FirstName" 
                        SortExpression="FirstName" />
                    <asp:BoundField DataField="LastName" HeaderText="LastName" 
                        SortExpression="LastName" />
                    <asp:BoundField DataField="City" HeaderText="City" SortExpression="City" />
                    <asp:BoundField DataField="State" HeaderText="State" SortExpression="State" />
                    <asp:BoundField DataField="Zip" HeaderText="Zip" SortExpression="Zip" />
                    <asp:BoundField DataField="PhoneNumber" HeaderText="PhoneNumber" 
                        SortExpression="PhoneNumber" />
                    <asp:CommandField ShowDeleteButton="True" ShowEditButton="True" 
                        ShowInsertButton="True" />
                </Fields>
                <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
                <PagerStyle BackColor="#99CCCC" ForeColor="#003399" HorizontalAlign="Left" />
                <RowStyle BackColor="White" ForeColor="#003399" />
            </asp:DetailsView>
            <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" 
                DeleteMethod="Delete" InsertMethod="Insert" 
                OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" 
                TypeName="DataSet1TableAdapters.AuthorsTableAdapter" UpdateMethod="Update">
                <DeleteParameters>
                    <asp:Parameter Name="Original_AuthorID" Type="Int32" />
                </DeleteParameters>
                <InsertParameters>
                    <asp:Parameter Name="FirstName" Type="String" />
                    <asp:Parameter Name="LastName" Type="String" />
                    <asp:Parameter Name="City" Type="String" />
                    <asp:Parameter Name="State" Type="String" />
                    <asp:Parameter Name="Zip" Type="String" />
                    <asp:Parameter Name="PhoneNumber" Type="String" />
                </InsertParameters>
                <UpdateParameters>
                    <asp:Parameter Name="FirstName" Type="String" />
                    <asp:Parameter Name="LastName" Type="String" />
                    <asp:Parameter Name="City" Type="String" />
                    <asp:Parameter Name="State" Type="String" />
                    <asp:Parameter Name="Zip" Type="String" />
                    <asp:Parameter Name="PhoneNumber" Type="String" />
                    <asp:Parameter Name="Original_AuthorID" Type="Int32" />
                </UpdateParameters>
            </asp:ObjectDataSource>
        </p>
    
    </div>
    </form>
</body>
</html>
