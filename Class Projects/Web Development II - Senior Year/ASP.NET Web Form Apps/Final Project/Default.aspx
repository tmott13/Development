<%@ Page Title="NatureCare" Language="VB" MasterPageFile="MasterPage.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<%-- Add content controls here --%>
<asp:Content ID="Content1" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">
    <p>
        &nbsp;</p>
    <p>
        Welcome to the NatureCare website, your ultimate organization resource for 
        volunteer involment and preservation of the Everglades!</p>
    <p>
        &nbsp;</p>
    <p>
        The Everglades consist of wetland that covers nearly <strong>1.5 million acres
        </strong>of Florida! Above and underneath the wetland lies a diverse ecosystem 
        of habitats, mammals, reptiles, plants, trees, insects, and water (of course). 
        Unfortunately, human impacts steming from the 1800s has caused the Everglades 
        resources to deplete from water draining, colonization, farming, hunting, 
        loitering, and gathering. To learn more on the history of the Everglades, visit 
        &quot;<a href="http://www.nwf.org/wildlife/wild-places/everglades.aspx">Everglades - 
        National Wildlife Federation.</a>&quot;</p>
    <p>
        &nbsp;</p>
    <p>
        NatureCare wants to rectify the damages caused by our species, and our dedicated 
        team of 12,000 members and volunteers have made great progress over the years! 
        For more information about Naturecare, visit &quot;<asp:HyperLink ID="HyperLink8" 
            runat="server" NavigateUrl="Aboutus.aspx">About us - NatureCare</asp:HyperLink>
        .&quot;</p>
    <p>
        &nbsp;</p>
    <p>
        Feel free to explore our website and grow to love NatureCare for what we do and 
        stand for - respecting, protecting, and celebrating Mother Nature.</p>
    <p>
        &nbsp;</p>
</asp:Content>


<asp:Content ID="Content2" runat="server" contentplaceholderid="head">
    <h1>
        <img alt="NatureCare" title="NatureCare" src="images/welcome.png" 
            style="width: 358px; height: 59px" /></h1>
</asp:Content>


