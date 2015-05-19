<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Home | Queries </title>
    <style type="text/css">
        .style1
        {
            font-family: Batang;
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
            Author and Book Information 
            (Queries)</h1>
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
        <p>
            <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
                AllowSorting="True" AutoGenerateColumns="False" 
                DataSourceID="ObjectDataSource1" BackColor="White" BorderColor="#3366CC" 
                BorderStyle="None" BorderWidth="1px" CellPadding="4">
                <Columns>
                    <asp:BoundField DataField="BookTitle" HeaderText="BookTitle" 
                        SortExpression="BookTitle" />
                    <asp:BoundField DataField="PublishedYear" HeaderText="PublishedYear" 
                        SortExpression="PublishedYear" />
                    <asp:BoundField DataField="BookSummary" HeaderText="BookSummary" 
                        SortExpression="BookSummary" />
                    <asp:BoundField DataField="LastName" HeaderText="LastName" 
                        SortExpression="LastName" />
                    <asp:BoundField DataField="FirstName" HeaderText="FirstName" 
                        SortExpression="FirstName" />
                </Columns>
                <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
                <PagerStyle BackColor="#99CCCC" ForeColor="#003399" HorizontalAlign="Left" />
                <RowStyle BackColor="White" ForeColor="#003399" />
                <SelectedRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                <SortedAscendingCellStyle BackColor="#EDF6F6" />
                <SortedAscendingHeaderStyle BackColor="#0D4AC4" />
                <SortedDescendingCellStyle BackColor="#D6DFDF" />
                <SortedDescendingHeaderStyle BackColor="#002876" />
            </asp:GridView>
            <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" 
                OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" 
                TypeName="DataSet1TableAdapters.DataTable1TableAdapter">
            </asp:ObjectDataSource>
        </p>
        <p>
            &nbsp;</p>
        <p>
            <asp:GridView ID="GridView2" runat="server" AllowSorting="True" 
                AutoGenerateColumns="False" DataSourceID="ObjectDataSource2" 
                BackColor="White" BorderColor="#3366CC" BorderStyle="None" BorderWidth="1px" 
                CellPadding="4">
                <Columns>
                    <asp:BoundField DataField="State" HeaderText="State" SortExpression="State" />
                </Columns>
                <FooterStyle BackColor="#99CCCC" ForeColor="#003399" />
                <HeaderStyle BackColor="#003399" Font-Bold="True" ForeColor="#CCCCFF" />
                <PagerStyle BackColor="#99CCCC" ForeColor="#003399" HorizontalAlign="Left" />
                <RowStyle BackColor="White" ForeColor="#003399" />
                <SelectedRowStyle BackColor="#009999" Font-Bold="True" ForeColor="#CCFF99" />
                <SortedAscendingCellStyle BackColor="#EDF6F6" />
                <SortedAscendingHeaderStyle BackColor="#0D4AC4" />
                <SortedDescendingCellStyle BackColor="#D6DFDF" />
                <SortedDescendingHeaderStyle BackColor="#002876" />
            </asp:GridView>
            <asp:ObjectDataSource ID="ObjectDataSource2" runat="server" 
                OldValuesParameterFormatString="original_{0}" SelectMethod="GetStates" 
                TypeName="DataSet1TableAdapters.State_ListTableAdapter">
            </asp:ObjectDataSource>
        </p>
        <p>
            &nbsp;</p>
        <p>
            &nbsp;</p>
    
    </div>
    </form>
</body>
</html>
