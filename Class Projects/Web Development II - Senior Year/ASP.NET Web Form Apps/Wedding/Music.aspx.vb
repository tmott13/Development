
Partial Class Music
    Inherits System.Web.UI.Page

    Protected Sub btnConfirm_Click(sender As Object, e As System.EventArgs) Handles btnConfirm.Click
        Dim strBride As String
        Dim strGroom As String
        Dim strWedDate As String
        Dim strEmail As String
        Dim strSong As String

        strBride = txtBride.Text.Trim
        strGroom = txtGroom.Text.Trim
        strWedDate = Calendar1.SelectedDate.ToShortDateString
        strEmail = txtEmail.Text.Trim
        strSong = ddlSong.SelectedItem.ToString

        lblMessage.Text = "Thank you " & strBride & " and " & strGroom _
            & " for visiting out site! " _
            & " The wedding date: " & strWedDate _
            & " Your email address: " & strEmail _
            & " Song you picked: " & strSong & "."
    End Sub
End Class
