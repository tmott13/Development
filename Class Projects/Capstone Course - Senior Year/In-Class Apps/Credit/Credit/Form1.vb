Public Class Form1

    Private Sub btnClose_Click(sender As System.Object, e As System.EventArgs) Handles btnClose.Click
        Me.Close()

    End Sub

    Private Sub btnCalculate_Click(sender As System.Object, e As System.EventArgs) Handles btnCalculate.Click
        Dim dblMaxCredit As Double
        Dim dblCreditUsed As Double
        Dim dblAvailableCredit As Double

        dblMaxCredit = txtMaxCredit.Text
        dblCreditUsed = txtUseCredit.Text
        dblAvailableCredit = txtMaxCredit.Text - txtUseCredit.Text
        lblAvailCredit.Text = FormatCurrency(dblAvailableCredit)

    End Sub

    Private Sub Form1_Load(sender As System.Object, e As System.EventArgs) Handles MyBase.Load
        txtMaxCredit.Focus()
        MessageBox.Show("Hi, welcome to Credit World!")

    End Sub
End Class
