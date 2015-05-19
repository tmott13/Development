
Partial Class picnic
    Inherits System.Web.UI.Page

    Protected Sub Button1_Click(sender As Object, e As System.EventArgs) Handles Button1.Click
        lblMessage.Text = "Thank you for signing up for the " & "picnic, " & txtFirst.Text & "" & txtLast.Text & ". " & txtParty.Text & " people are confirmed for your party."
        If chkVeggie.Checked = True Then
            lblMessage.Text &= " You will be receving a Vegetarian meal."

        End If
    End Sub
End Class
