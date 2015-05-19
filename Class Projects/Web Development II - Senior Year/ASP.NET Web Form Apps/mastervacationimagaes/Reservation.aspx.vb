
Partial Class Reservation
    Inherits System.Web.UI.Page


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        txtDate.Text = Date.Today()

    End Sub

    Protected Sub ImageButton1_Click(ByVal sender As Object, ByVal e As System.Web.UI.ImageClickEventArgs) Handles ImageButton1.Click
        ImageButton1.Visible = False
        Calendar1.Visible = True

    End Sub

    Protected Sub Calendar1_SelectionChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles Calendar1.SelectionChanged
        txtDate.Text = Calendar1.SelectedDate.Month.ToString & "/" & Calendar1.SelectedDate.Day.ToString & "/" & Calendar1.SelectedDate.Year.ToString
        Calendar1.Visible = False
        ImageButton1.Visible = True

    End Sub

    Protected Sub btnSubmit_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnSubmit.Click
        lblMessage.Text = "Thank you. We will get back to you within 24 hours."

    End Sub

    Protected Sub btnClear_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnClear.Click
        txtName.Text = ""
        txtEmail.Text = ""
        txtNights.Text = ""
        txtRequests.Text = ""
        rblBedType.SelectedIndex = 0
        rblRoomType.SelectedIndex = 2
        chkSmoking.Checked = False
        lblMessage.Text = String.Empty
        ddlAdult.SelectedIndex = 0
        ddlChild.SelectedIndex = 0


    End Sub
End Class
