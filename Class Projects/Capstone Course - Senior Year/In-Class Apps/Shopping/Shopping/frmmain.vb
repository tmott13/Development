Public Class frmmain

    Private Sub btnModal_Click(sender As System.Object, e As System.EventArgs) Handles btnModal.Click
        Dim frmmenusnacks As New frmsnacks

        frmmenusnacks.lblMessage.Text = "Hello Programmers!"
        frmmenusnacks.ShowDialog()

    End Sub

    Private Sub btnModeless_Click(sender As System.Object, e As System.EventArgs) Handles btnModeless.Click
        Dim frmmenusnacks2 As New frmsnacks

        frmmenusnacks2.lblMessage.Text = "Hello"
        frmmenusnacks2.Show()

    End Sub

    Private Sub btnExit_Click(sender As System.Object, e As System.EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub

    Private Sub frmmain_FormClosing(sender As Object, e As System.Windows.Forms.FormClosingEventArgs) Handles Me.FormClosing

    End Sub
End Class