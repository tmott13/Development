
Partial Class Join
    Inherits System.Web.UI.Page
    Dim newMemberTableAdapter As New DataSet1TableAdapters.MembersTableAdapter

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim members As DataSet1.MembersDataTable
        members = newMemberTableAdapter.GetData()

    End Sub

    Protected Sub btnSubmit_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnSubmit.Click
        newMemberTableAdapter.Insert(CStr(txtFirstName.Text), CStr(txtLastName.Text), CStr(txtAddress.Text), CStr(txtCity.Text), CStr(txtState.Text), CStr(txtZip.Text), CStr(txtPhone.Text), CStr(txtEmail.Text))
        lblMessage.Text = "Thank you " & txtFirstName.Text & " for becoming a member!"

        txtAddress.Text = ""
        txtCity.Text = ""
        txtEmail.Text = ""
        txtFirstName.Text = ""
        txtLastName.Text = ""
        txtPhone.Text = ""
        txtState.Text = ""
        txtZip.Text = ""

    End Sub

    Protected Sub btnClear_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnClear.Click
        txtAddress.Text = ""
        txtCity.Text = ""
        txtEmail.Text = ""
        txtFirstName.Text = ""
        txtLastName.Text = ""
        txtPhone.Text = ""
        txtState.Text = ""
        txtZip.Text = ""

        txtFirstName.Focus()

    End Sub

End Class
