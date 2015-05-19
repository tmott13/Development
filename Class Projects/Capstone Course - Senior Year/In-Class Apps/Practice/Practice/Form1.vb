Public Class Form1

    Private Sub btnClose_Click(sender As System.Object, e As System.EventArgs) Handles btnClose.Click
        Me.Close()
    End Sub

    Private Sub txtFirstName_TextChanged(sender As System.Object, e As System.EventArgs) Handles txtFirstName.TextChanged

    End Sub

    Private Sub btnMessage_Click(sender As System.Object, e As System.EventArgs) Handles btnMessage.Click
        lblMessage.Text = txtLastName.Text & ", " & txtFirstName.Text & " is " & txtAge.Text & " years old."
        MessageBox.Show("YES!")

    End Sub

    Private Sub btnClear_Click(sender As System.Object, e As System.EventArgs) Handles btnClear.Click
        txtAge.Clear()
        txtFirstName.Clear()
        txtLastName.Clear()
        lblMessage.Text = String.Empty
        txtFirstName.Focus()

    End Sub
End Class
