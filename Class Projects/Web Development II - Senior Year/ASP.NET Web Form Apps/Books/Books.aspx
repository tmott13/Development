<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Books.aspx.vb" Inherits="Books" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Book Details</title>
    <style type="text/css">
        .style1
        {
            font-family: BatangChe;
            color: #660066;
        }
        .style2
        {
            font-family: "Century Gothic";
        }
    </style>
</head>
<body bgcolor="#cc99ff">
    <form id="form1" runat="server">
    <div>
    
        <h1 class="style1">
            Book Details</h1>
        <p>
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="Default.aspx" 
                CssClass="style2" ForeColor="#3366CC">Home</asp:HyperLink>
            <span class="style2">&nbsp;|
            </span>
            <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="Details.aspx" 
                CssClass="style2" ForeColor="#3366CC">Author Details</asp:HyperLink>
            <span class="style2">&nbsp;|
            </span>
            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="Books.aspx" 
                CssClass="style2" ForeColor="#3366CC">Book Information</asp:HyperLink>
        </p>
    
    </div>
    <asp:DetailsView ID="DetailsView1" runat="server" AutoGenerateRows="False" 
        DataSourceID="ObjectDataSource1" Height="50px" Width="125px" 
        AllowPaging="True" DataKeyNames="BookID" BackColor="White" 
        BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" CellPadding="4">
        <EditRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
        <Fields>
            <asp:BoundField DataField="BookID" HeaderText="BookID" 
                SortExpression="BookID" InsertVisible="False" ReadOnly="True" />
            <asp:BoundField DataField="BookTitle" HeaderText="BookTitle" 
                SortExpression="BookTitle" />
            <asp:BoundField DataField="BookSummary" HeaderText="BookSummary" 
                SortExpression="BookSummary" />
            <asp:BoundField DataField="PublishedYear" HeaderText="PublishedYear" 
                SortExpression="PublishedYear" />
            <asp:BoundField DataField="AuthorID" HeaderText="AuthorID" 
                SortExpression="AuthorID" />
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
        TypeName="DataSet1TableAdapters.BooksTableAdapter" UpdateMethod="Update">
        <DeleteParameters>
            <asp:Parameter Name="Original_BookID" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="BookTitle" Type="String" />
            <asp:Parameter Name="BookSummary" Type="String" />
            <asp:Parameter Name="PublishedYear" Type="String" />
            <asp:Parameter Name="AuthorID" Type="Int32" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="BookTitle" Type="String" />
            <asp:Parameter Name="BookSummary" Type="String" />
            <asp:Parameter Name="PublishedYear" Type="String" />
            <asp:Parameter Name="AuthorID" Type="Int32" />
            <asp:Parameter Name="Original_BookID" Type="Int32" />
        </UpdateParameters>
    </asp:ObjectDataSource>
    </form>
</body>
</html>
