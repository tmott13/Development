
Partial Class Contactus
    Inherits System.Web.UI.Page
    Dim newContact_UsTableAdapter As New DataSet1TableAdapters.ContactUsTableAdapter

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim contactUs As DataSet1.ContactUsDataTable
        contactUs = newContact_UsTableAdapter.GetData()

    End Sub


    Protected Sub btnClear_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnClear.Click
        txtFirstName.Text = ""
        txtLastName.Text = ""
        txtMember.Text = ""
        txtMessage.Text = ""

        txtFirstName.Focus()

    End Sub

    Protected Sub btnSubmit_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnSubmit.Click
        newContact_UsTableAdapter.Insert(CStr(txtFirstName.Text), CStr(txtLastName.Text), CStr(txtMember.Text), CStr(txtMessage.Text))

        lblMessage.Text = "Thank you for contacting us!"

        txtFirstName.Text = ""
        txtLastName.Text = ""
        txtMember.Text = ""
        txtMessage.Text = ""

    End Sub


End Class
